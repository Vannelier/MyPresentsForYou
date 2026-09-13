import type { Erreurs } from "./i18n/erreurs";
import { remplir } from "./i18n/remplir";
import { ALLOWED_IMAGE_TYPES, LIMITS } from "./limits";
import { storageAvailable, storeImage } from "./mediaStore";
import type { Item } from "./types";

export { storageAvailable, storeImage };

export const BLOB_HOST_SUFFIX = ".public.blob.vercel-storage.com";
const FETCH_TIMEOUT_MS = 8000;

export type ImageWarning = { scope: "cover" | "item"; itemId?: string; message: string };

/**
 * Image deja chez nous : inutile de la retelecharger a chaque enregistrement.
 * Couvre Vercel Blob et le stockage local de developpement.
 */
export function isOwnBlobUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.hostname.endsWith(BLOB_HOST_SUFFIX) || u.pathname.startsWith("/api/media/");
  } catch {
    return false;
  }
}

/**
 * Rapatrie une image externe dans Vercel Blob.
 *
 * Une page doit rester visuellement intacte pendant un an : hotlinker l'image
 * d'un marchand la casse des qu'il touche a son site. En cas d'echec (403, lien
 * mort, type refuse) on rend l'URL d'origine en dernier recours, avec un message
 * a afficher dans l'UI de creation — jamais une erreur bloquante.
 */
export async function mirrorImage(
  url: string,
  e: Erreurs,
): Promise<{ url: string; warning?: string }> {
  if (isOwnBlobUrl(url)) return { url };
  if (!storageAvailable()) {
    return { url, warning: e.copieStockageIndisponible };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
        Accept: "image/avif,image/webp,image/png,image/jpeg,*/*;q=0.8",
      },
    });
    if (!res.ok) {
      return { url, warning: remplir(e.copieNonRecuperable, { statut: res.status }) };
    }

    const rawType = (res.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
    const contentType = rawType === "image/jpg" ? "image/jpeg" : rawType;
    if (!(ALLOWED_IMAGE_TYPES as readonly string[]).includes(contentType)) {
      return { url, warning: e.copieFormat };
    }

    const buffer = await res.arrayBuffer();
    if (buffer.byteLength === 0 || buffer.byteLength > LIMITS.imageBytes) {
      return { url, warning: e.copieTropLourde };
    }

    return { url: await storeImage(buffer, contentType) };
  } catch {
    return { url, warning: e.copieImpossible };
  } finally {
    clearTimeout(timer);
  }
}

export async function mirrorItemImages(
  items: Item[],
  e: Erreurs,
): Promise<{ items: Item[]; warnings: ImageWarning[] }> {
  const warnings: ImageWarning[] = [];
  const mirrored = await Promise.all(
    items.map(async (item) => {
      if (!item.image_url) return item;
      const { url, warning } = await mirrorImage(item.image_url, e);
      if (warning) warnings.push({ scope: "item", itemId: item.id, message: `${item.label} — ${warning}` });
      return { ...item, image_url: url };
    }),
  );
  return { items: mirrored, warnings };
}

export async function mirrorCover(
  cover: string | null,
  e: Erreurs,
): Promise<{ cover_image_url: string | null; warnings: ImageWarning[] }> {
  if (!cover) return { cover_image_url: null, warnings: [] };
  const { url, warning } = await mirrorImage(cover, e);
  return {
    cover_image_url: url,
    warnings: warning ? [{ scope: "cover", message: `${e.imageApercu} — ${warning}` }] : [],
  };
}
