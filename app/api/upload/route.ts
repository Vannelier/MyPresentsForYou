import { cleStockageIndisponible, storageAvailable, storeImage } from "@/lib/mediaStore";
import { erreursDe, fail, handleError, json, tropDeRequetes } from "@/lib/http";
import { remplir } from "@/lib/i18n/remplir";
import { QUOTAS } from "@/lib/rateLimit";
import { ALLOWED_IMAGE_TYPES, LIMITS } from "@/lib/limits";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

/**
 * Repli manuel : le donneur téléverse sa propre image.
 *
 * Le client réduit l'image avant l'envoi (voir components/editor/imageFile.ts),
 * ce qui garde le corps de requête bien sous la limite de payload serverless.
 * Les contrôles ci-dessous restent nécessaires : cette route est atteignable
 * directement.
 */
export async function POST(req: Request) {
  const e = erreursDe(req);
  try {
    // Avant tout le reste : refuser tot evite de lire un corps de 5 Mo pour rien.
    const trop = tropDeRequetes(req, QUOTAS.televersement, "televersement");
    if (trop) return trop;

    if (!storageAvailable()) {
      return fail(e[cleStockageIndisponible()], 503);
    }

    const form = await req.formData().catch(() => null);
    const file = form?.get("file");
    if (!(file instanceof File)) {
      return fail(e.aucunFichier, 400, "file");
    }

    const type = file.type === "image/jpg" ? "image/jpeg" : file.type;
    if (!(ALLOWED_IMAGE_TYPES as readonly string[]).includes(type)) {
      return fail(e.formatsAcceptes, 400, "file");
    }
    if (file.size === 0) return fail(e.fichierVide, 400, "file");
    if (file.size > LIMITS.imageBytes) {
      const mo = Math.round(LIMITS.imageBytes / (1024 * 1024));
      return fail(remplir(e.imageTropLourde, { mo }), 400, "file");
    }

    const url = await storeImage(await file.arrayBuffer(), type, "upload");
    return json({ url }, 201);
  } catch (err) {
    return handleError(err, req);
  }
}
