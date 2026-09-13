import { createHash, timingSafeEqual } from "node:crypto";
import { unlink } from "node:fs/promises";
import path from "node:path";
import { BlobNotFoundError, del } from "@vercel/blob";
import { BLOB_HOST_SUFFIX } from "./blob";
import { sql } from "./db";
import { MEDIA_DIR, MEDIA_NAME, blobConfigured } from "./mediaStore";

/**
 * La purge des cartes expirees sans choix, images comprises.
 *
 * Les textes legaux promettent qu'une telle carte est supprimee a son
 * expiration ; rien ne le faisait, et la ligne comme ses images restaient
 * indefiniment. La purge tourne dans le serveur web, par `POST /api/purge` : un
 * volume Railway n'appartient qu'a un service, et seul le serveur web voit a la
 * fois la base et le dossier d'images.
 *
 * La base et le stockage passent par `AccesPurge` : la route donne les vrais
 * (`accesReel`), `npm run check` des faux — ce qui teste l'orchestration sans
 * base.
 */

/** Ce que la purge lit d'une carte : son identifiant et ses images. */
export type PageImages = {
  id: string;
  cover_image_url: string | null;
  header_image_url: string | null;
  items: { image_url: string | null }[];
};

/** Nos images : adresses Vercel Blob, et noms de fichier du dossier d'images. */
export type Cles = { blob: string[]; fichiers: string[] };

export type AccesPurge = {
  lireExpirees(lot: number): Promise<PageImages[]>;
  /** Les cles qu'une carte hors de `exclure` reference encore. */
  encoreUtilisees(cles: Cles, exclure: string[]): Promise<Cles>;
  /** Une image deja absente ne doit pas lever : la purge est rejouable. */
  effacerBlob(url: string): Promise<void>;
  effacerFichier(nom: string): Promise<void>;
  effacerCartes(ids: string[]): Promise<number>;
};

export type Rapport = {
  aBlanc: boolean;
  cartes: number;
  images: { blob: number; fichiers: number; partagees: number; echecs: number };
  reste: boolean;
};

/*
 * Cinquante cartes par appel. Les images s'effacent une a une, pour savoir
 * laquelle resiste : a deux cents cartes d'environ cinq images et une centaine
 * de millisecondes par effacement, un appel depassait la minute qu'une route
 * peut durer. L'appel suivant reprend ou celui-ci s'est arrete.
 */
export const LOT = 50;

const CHEMIN_MEDIA = /^\/api\/media\/([^/]+)$/;

export function clesImages(pages: PageImages[]): Cles {
  const blob = new Set<string>();
  const fichiers = new Set<string>();
  for (const page of pages) {
    const adresses = [page.cover_image_url, page.header_image_url, ...page.items.map((i) => i.image_url)];
    for (const adresse of adresses) {
      if (!adresse) continue;
      let url: URL;
      try {
        url = new URL(adresse);
      } catch {
        continue;
      }
      if (url.hostname.endsWith(BLOB_HOST_SUFFIX)) {
        blob.add(adresse);
        continue;
      }
      /*
       * Un fichier se reconnait a son nom, quel que soit l'hote : l'adresse
       * absolue porte `baseUrl()`, qui peut changer de domaine sans que le
       * fichier bouge. Le motif est celui de la route de service — rien ne sort
       * du dossier.
       */
      const nom = CHEMIN_MEDIA.exec(url.pathname)?.[1];
      if (nom && MEDIA_NAME.test(nom)) fichiers.add(nom);
    }
  }
  return { blob: [...blob], fichiers: [...fichiers] };
}

type Bilan = { blob: number; fichiers: number; partagees: number; echouees: Set<string> };

async function effacerImages(acces: AccesPurge, pages: PageImages[], aBlanc: boolean): Promise<Bilan> {
  const cles = clesImages(pages);
  /*
   * Une adresse deja chez nous est reprise telle quelle (`isOwnBlobUrl`) : deux
   * cartes peuvent pointer vers la meme image. Celle qu'une carte hors du lot
   * reference encore reste.
   */
  const gardees = await acces.encoreUtilisees(
    cles,
    pages.map((p) => p.id),
  );
  const bilan: Bilan = {
    blob: 0,
    fichiers: 0,
    partagees: gardees.blob.length + gardees.fichiers.length,
    echouees: new Set(),
  };

  for (const url of cles.blob) {
    if (gardees.blob.includes(url)) continue;
    if (!aBlanc) {
      try {
        await acces.effacerBlob(url);
      } catch {
        bilan.echouees.add(url);
        continue;
      }
    }
    bilan.blob++;
  }
  for (const nom of cles.fichiers) {
    if (gardees.fichiers.includes(nom)) continue;
    if (!aBlanc) {
      try {
        await acces.effacerFichier(nom);
      } catch {
        bilan.echouees.add(nom);
        continue;
      }
    }
    bilan.fichiers++;
  }
  return bilan;
}

function resiste(page: PageImages, echouees: Set<string>): boolean {
  const { blob, fichiers } = clesImages([page]);
  return [...blob, ...fichiers].some((cle) => echouees.has(cle));
}

export async function purgerCartesExpirees(
  acces: AccesPurge,
  { aBlanc = false, lot = LOT }: { aBlanc?: boolean; lot?: number } = {},
): Promise<Rapport> {
  const pages = await acces.lireExpirees(lot);
  const bilan = await effacerImages(acces, pages, aBlanc);

  /*
   * Une carte ne part qu'une fois toutes ses images parties. Dans l'ordre
   * inverse, une image qui resiste deviendrait orpheline : plus rien ne
   * permettrait de la retrouver. Gardee, la carte sera retentee au passage
   * suivant.
   */
  const ids = pages.filter((p) => !resiste(p, bilan.echouees)).map((p) => p.id);
  const cartes = aBlanc || ids.length === 0 ? ids.length : await acces.effacerCartes(ids);

  return {
    aBlanc,
    cartes,
    images: {
      blob: bilan.blob,
      fichiers: bilan.fichiers,
      partagees: bilan.partagees,
      echecs: bilan.echouees.size,
    },
    reste: pages.length === lot,
  };
}

/**
 * Pour la suppression manuelle : efface les images d'une carte et rend celles
 * qui ont resiste. La carte part quand meme — c'est le donneur qui l'a demande.
 */
export async function effacerImagesDeCarte(acces: AccesPurge, page: PageImages): Promise<string[]> {
  const { echouees } = await effacerImages(acces, [page], false);
  return [...echouees];
}

export function resumeRapport(r: Rapport): string {
  const { blob, fichiers, partagees, echecs } = r.images;
  return [
    `purge${r.aBlanc ? " à blanc" : ""} : ${r.cartes} carte(s)`,
    `${blob + fichiers} image(s) (${blob} blob, ${fichiers} fichier(s))`,
    `${partagees} partagée(s) gardée(s)`,
    `${echecs} échec(s)${r.reste ? " — il en reste, l'appel suivant continue" : ""}`,
  ].join(", ");
}

/**
 * Compare l'en-tete `Authorization` au secret, en temps constant. Les deux cotes
 * passent par SHA-256 : `timingSafeEqual` exige deux longueurs egales, et une
 * comparaison qui s'arreterait des la longueur trahirait celle du secret.
 */
export function secretValide(entete: string | null, secret: string): boolean {
  const recu = /^Bearer (.+)$/.exec(entete ?? "")?.[1];
  if (!recu) return false;
  const a = createHash("sha256").update(recu).digest();
  const b = createHash("sha256").update(secret).digest();
  return timingSafeEqual(a, b);
}

function versPageImages(row: Record<string, unknown>): PageImages {
  const items = Array.isArray(row.items) ? (row.items as Record<string, unknown>[]) : [];
  return {
    id: String(row.id),
    cover_image_url: typeof row.cover_image_url === "string" ? row.cover_image_url : null,
    header_image_url: typeof row.header_image_url === "string" ? row.header_image_url : null,
    items: items.map((it) => ({ image_url: typeof it?.image_url === "string" ? it.image_url : null })),
  };
}

export function accesReel(): AccesPurge {
  return {
    async lireExpirees(lot) {
      const { rows } = await sql`
        SELECT id, cover_image_url, header_image_url, items
        FROM gift_pages
        WHERE chosen_at IS NULL AND expires_at IS NOT NULL AND expires_at < now()
        ORDER BY expires_at
        LIMIT ${lot}`;
      return rows.map(versPageImages);
    },

    async encoreUtilisees(cles, exclure) {
      const gardees: Cles = { blob: [], fichiers: [] };
      for (const url of cles.blob) {
        const { rows } = await sql`
          SELECT 1 FROM gift_pages
          WHERE NOT (id = ANY(${exclure}::uuid[]))
            AND (cover_image_url = ${url}
              OR header_image_url = ${url}
              OR items @> ${JSON.stringify([{ image_url: url }])}::jsonb)
          LIMIT 1`;
        if (rows.length > 0) gardees.blob.push(url);
      }
      for (const nom of cles.fichiers) {
        // Par le nom, comme `clesImages` : la meme image a pu etre enregistree
        // sous deux domaines. Le motif de nom exclut `%` et `_`.
        const fin = `%/api/media/${nom}`;
        const dansLesCadeaux = `%/api/media/${nom}"%`;
        const { rows } = await sql`
          SELECT 1 FROM gift_pages
          WHERE NOT (id = ANY(${exclure}::uuid[]))
            AND (cover_image_url LIKE ${fin}
              OR header_image_url LIKE ${fin}
              OR items::text LIKE ${dansLesCadeaux})
          LIMIT 1`;
        if (rows.length > 0) gardees.fichiers.push(nom);
      }
      return gardees;
    },

    async effacerBlob(url) {
      // Sans jeton, rien ne peut etre efface : l'echec garde la carte et le
      // rapport le montre, plutot que de laisser l'image derriere elle.
      if (!blobConfigured()) throw new Error("BLOB_READ_WRITE_TOKEN absent");
      try {
        await del(url);
      } catch (err) {
        if (!(err instanceof BlobNotFoundError)) throw err;
      }
    },

    async effacerFichier(nom) {
      if (!MEDIA_NAME.test(nom)) throw new Error(`nom de fichier refuse : ${nom}`);
      try {
        await unlink(path.join(MEDIA_DIR, nom));
      } catch (err) {
        if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
      }
    },

    async effacerCartes(ids) {
      const { rowCount } = await sql`
        DELETE FROM gift_pages
        WHERE id = ANY(${ids}::uuid[]) AND chosen_at IS NULL AND expires_at < now()`;
      return rowCount;
    },
  };
}
