# La purge des cartes expirées — plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal :** effacer pour de bon, images comprises, les cartes expirées sans choix, et faire emporter ses images à une carte supprimée à la main.

**Architecture :** `lib/purge.ts` porte la logique ; la base et le stockage lui sont passés par une interface `AccesPurge` (les vrais pour la route, des faux pour `npm run check`). `POST /api/purge`, protégée par `PURGE_SECRET`, l'appelle ; une tâche planifiée de l'hébergeur appelle la route chaque nuit. `DELETE /api/admin/[token]` réutilise l'effacement d'images.

**Tech stack :** Next.js 15 (route handlers), `pg` via le gabarit `sql` de `lib/db.ts`, `@vercel/blob` (`del`), `node:fs/promises` (`unlink`), `node:crypto` (`timingSafeEqual`), harnais `scripts/check.ts` (tsx).

**Spec :** `docs/superpowers/specs/2026-09-13-purge-cartes-expirees-design.md`.

---

## Fichiers

| fichier | rôle |
|---|---|
| `lib/purge.ts` (nouveau) | `clesImages`, `purgerCartesExpirees`, `effacerImagesDeCarte`, `resumeRapport`, `secretValide`, `accesReel` |
| `lib/env.ts` | `secretDePurge()` — pas de `node:crypto` ici : `env.ts` part dans le bundle navigateur (via `printTexts.ts`) |
| `lib/blob.ts` | exporter `BLOB_HOST_SUFFIX` |
| `lib/rateLimit.ts` | `QUOTAS.purge` |
| `app/api/purge/route.ts` (nouveau) | la route |
| `app/api/admin/[token]/route.ts` | `DELETE` efface les images |
| `scripts/check.ts` | tests et garde-fous |
| `app/confidentialite/page.tsx`, `README.md`, `.env.example` | textes |

---

### Task 1 : les tests d'abord

**Files :** Modify `scripts/check.ts` (imports, et la fin du fichier à partir de `// --- Rapport`).

- [ ] **Step 1 : imports.** Remplacer la ligne `import { adsensePublisherId, freePageTtlDays } from "../lib/env";` par :

```ts
import { adsensePublisherId, freePageTtlDays, secretDePurge } from "../lib/env";
import {
  clesImages,
  effacerImagesDeCarte,
  purgerCartesExpirees,
  secretValide,
  type AccesPurge,
  type PageImages,
} from "../lib/purge";
```

- [ ] **Step 2 : tests synchrones et bloc asynchrone.** Remplacer, en fin de fichier, tout le bloc qui va de `// --- Rapport ---…` jusqu'à la fin par le code de la section « Code de la Task 1 » ci-dessous.

- [ ] **Step 3 : constater l'échec.** `npm run check` → échoue au chargement : `Cannot find module '../lib/purge'`.

### Task 2 : la logique

**Files :** Create `lib/purge.ts` ; Modify `lib/env.ts`, `lib/blob.ts:7`.

- [ ] **Step 1 :** `lib/blob.ts` — `const BLOB_HOST_SUFFIX` devient `export const BLOB_HOST_SUFFIX`.
- [ ] **Step 2 :** `lib/env.ts` — ajouter `secretDePurge()` après `adsensePublisherId()` (code ci-dessous).
- [ ] **Step 3 :** créer `lib/purge.ts` (code ci-dessous).
- [ ] **Step 4 :** `npm run check` → échoue encore sur un seul test : `la route de purge ne repond qu'a POST` (fichier absent).

### Task 3 : la route

**Files :** Create `app/api/purge/route.ts` ; Modify `lib/rateLimit.ts` (`QUOTAS`).

- [ ] **Step 1 :** ajouter `purge: { limite: 10, fenetreMs: 10 * MINUTE },` à `QUOTAS`, avec son commentaire.
- [ ] **Step 2 :** créer la route (code ci-dessous).
- [ ] **Step 3 :** `npm run check` → toutes les vérifications passent ; `npx tsc --noEmit` silencieux.

### Task 4 : la suppression manuelle

**Files :** Modify `app/api/admin/[token]/route.ts` (`DELETE`).

- [ ] **Step 1 :** remplacer le corps de `DELETE` (code ci-dessous) et importer `accesReel`, `effacerImagesDeCarte` depuis `@/lib/purge`.
- [ ] **Step 2 :** `npx tsc --noEmit`, `npm run check`.
- [ ] **Step 3 : commit** des Tasks 1 à 4 (`Purge les cartes expirees sans choix, images comprises`).

### Task 5 : mutations

Chaque mutation sur une copie, `npm run check`, constater l'échec du bon test, restaurer :

| mutation | test attendu en échec |
|---|---|
| retirer `AND chosen_at IS NULL` du `DELETE` de `lib/purge.ts` | la purge ne supprime jamais une carte choisie… |
| retirer `AND expires_at < now()` du même `DELETE` | idem |
| écrire la suppression en minuscules sans les conditions | idem |
| ajouter `export async function GET() {}` à la route | la route de purge ne repond qu'a POST |
| effacer la ligne avant les images (`purgerCartesExpirees`) | la purge efface les images… puis les cartes |
| ne plus filtrer les cartes dont une image résiste | une carte dont une image resiste reste en base |
| ne plus exclure les images partagées | la purge efface les images… |
| ignorer `aBlanc` | a blanc, la purge compte sans rien effacer |
| retirer `MEDIA_NAME.test(nom)` de `clesImages` | clesImages ne retient que nos images… |
| `secretDePurge` sans le seuil de 32 | le secret de purge… |

### Task 6 : textes et documentation

- [ ] `app/confidentialite/page.tsx` — section « Combien de temps » (code ci-dessous).
- [ ] `.env.example` — `PURGE_SECRET` commenté.
- [ ] `README.md` — table des API, deux tables de variables, carte du code, section « La purge des cartes expirées » après « Le stockage des images », « Limites connues ».
- [ ] Commit (`Documente la purge et la dit dans la politique de confidentialite`).

### Task 7 : vérification et livraison

- [ ] `npm run dev` : `POST /api/purge` sans `PURGE_SECRET` → 404 ; avec `PURGE_SECRET` de 32 caractères et un mauvais secret → 401 ; avec le bon → 503 « Base de données non configurée » (aucune base en local). `GET /api/purge` → 405.
- [ ] Arrêter le serveur ; `npm run check`, `npx tsc --noEmit`, `npm run build`.
- [ ] Pousser `claude/purge-cartes-expirees`, corps de PR (brouillon), lien `…/compare/claude/voile-etoiles-conservation...claude/purge-cartes-expirees`.

---

## Code de la Task 1 — fin de `scripts/check.ts`

```ts
// --- Purge des cartes expirees ---------------------------------------------

const BLOB_TEST = "https://abc.public.blob.vercel-storage.com/gift/1-x.jpg";

test("clesImages ne retient que nos images, une fois chacune", () => {
  const cles = clesImages([
    {
      id: "a",
      cover_image_url: BLOB_TEST,
      header_image_url: "https://mypresentsforyou.be/api/media/gift-1-ab.jpg",
      items: [
        // La meme image sous un autre domaine : `baseUrl()` a pu changer.
        { image_url: "http://localhost:3000/api/media/gift-1-ab.jpg" },
        { image_url: "https://marchand.example/produit.jpg" },
        { image_url: null },
        // Un nom piege ne sort pas du dossier : l'URL le normalise, ou le motif le refuse.
        { image_url: "https://x.example/api/media/../secret.jpg" },
        { image_url: "https://x.example/api/media/..%2Fsecret.jpg" },
        { image_url: "pas une adresse" },
      ],
    },
    { id: "b", cover_image_url: BLOB_TEST, header_image_url: null, items: [] },
  ]);
  assert.deepEqual(cles, { blob: [BLOB_TEST], fichiers: ["gift-1-ab.jpg"] });
});

test("la purge ne supprime jamais une carte choisie ni une carte encore valide", () => {
  /*
   * Retirer une condition « redondante » avec la lecture effacerait sans bruit
   * des cartes que les textes promettent de garder. Chaque suppression la porte
   * donc elle-meme, et la casse ne permet pas d'y echapper.
   */
  const suppressions = lire("lib/purge.ts").match(/delete\s+from\s+gift_pages[^`]*/gi) ?? [];
  assert.ok(suppressions.length > 0, "aucune suppression trouvee dans lib/purge.ts");
  for (const s of suppressions) {
    assert.match(s, /chosen_at IS NULL/, `suppression sans chosen_at IS NULL : ${s}`);
    assert.match(s, /expires_at < now\(\)/, `suppression sans expires_at < now() : ${s}`);
  }
});

test("la route de purge ne repond qu'a POST", () => {
  // Un GET se declenche tout seul : un robot, un prechargement, un lien colle.
  const route = lire("app/api/purge/route.ts");
  assert.match(route, /export async function POST\b/);
  assert.doesNotMatch(route, /export\s+(async\s+)?(function|const)\s+(GET|HEAD)\b/);
});

test("le secret de purge : absent ou court, la route se tait ; faux, refuse", () => {
  const avant = process.env.PURGE_SECRET;
  const secret = "s".repeat(32);
  try {
    delete process.env.PURGE_SECRET;
    assert.equal(secretDePurge(), null);
    process.env.PURGE_SECRET = "trop-court";
    assert.equal(secretDePurge(), null);
    process.env.PURGE_SECRET = ` ${secret} `;
    assert.equal(secretDePurge(), secret);
  } finally {
    if (avant === undefined) delete process.env.PURGE_SECRET;
    else process.env.PURGE_SECRET = avant;
  }
  assert.equal(secretValide(`Bearer ${secret}`, secret), true);
  assert.equal(secretValide(`Bearer ${secret}x`, secret), false);
  assert.equal(secretValide(secret, secret), false);
  assert.equal(secretValide(null, secret), false);
  assert.equal(secretValide("Bearer ", secret), false);
});

/*
 * L'orchestration de la purge, sur une fausse base. Le journal note chaque
 * effacement dans l'ordre ou il a lieu : c'est l'ordre qui est en jeu.
 */
function fausseBase(pages: PageImages[], options: { partagees?: string[]; resistent?: string[] } = {}) {
  const journal: string[] = [];
  const partagees = options.partagees ?? [];
  const resistent = options.resistent ?? [];
  const acces: AccesPurge = {
    async lireExpirees(lot) {
      journal.push(`lire:${lot}`);
      return pages.slice(0, lot);
    },
    async encoreUtilisees(cles, exclure) {
      journal.push(`partage:${exclure.join(",")}`);
      return {
        blob: cles.blob.filter((u) => partagees.includes(u)),
        fichiers: cles.fichiers.filter((n) => partagees.includes(n)),
      };
    },
    async effacerBlob(url) {
      if (resistent.includes(url)) throw new Error("reseau");
      journal.push(`blob:${url}`);
    },
    async effacerFichier(nom) {
      if (resistent.includes(nom)) throw new Error("disque");
      journal.push(`fichier:${nom}`);
    },
    async effacerCartes(ids) {
      journal.push(`cartes:${ids.join(",")}`);
      return ids.length;
    },
  };
  return { acces, journal };
}

const blobDe = (n: string) => `https://abc.public.blob.vercel-storage.com/gift/${n}.jpg`;
const carteA: PageImages = {
  id: "A",
  cover_image_url: blobDe("a"),
  header_image_url: null,
  items: [{ image_url: "https://mypresentsforyou.be/api/media/a.jpg" }],
};
const carteB: PageImages = {
  id: "B",
  cover_image_url: null,
  header_image_url: null,
  items: [{ image_url: blobDe("commune") }],
};
const carteC: PageImages = { id: "C", cover_image_url: null, header_image_url: null, items: [] };

async function checkPurge() {
  {
    const { acces, journal } = fausseBase([carteA, carteB], { partagees: [blobDe("commune")] });
    const r = await purgerCartesExpirees(acces);
    test("la purge efface les images, garde celles qu'une autre carte utilise, puis les cartes", () => {
      assert.deepEqual(r, {
        aBlanc: false,
        cartes: 2,
        images: { blob: 1, fichiers: 1, partagees: 1, echecs: 0 },
        reste: false,
      });
      assert.ok(!journal.includes(`blob:${blobDe("commune")}`), "image partagee effacee");
      assert.ok(journal.includes("partage:A,B"), "le partage doit exclure le lot lui-meme");
      // Une seule suppression de cartes, et apres la derniere image effacee.
      const cartes = journal.flatMap((l, i) => (l.startsWith("cartes:") ? [i] : []));
      const images = journal.flatMap((l, i) => (/^(blob|fichier):/.test(l) ? [i] : []));
      assert.deepEqual(
        cartes.map((i) => journal[i]),
        ["cartes:A,B"],
      );
      assert.ok(cartes[0] > Math.max(...images), "les cartes doivent partir apres leurs images");
    });
  }
  {
    const { acces, journal } = fausseBase([carteA, carteC], { resistent: ["a.jpg"] });
    const r = await purgerCartesExpirees(acces);
    test("une carte dont une image resiste reste en base, pour la passe suivante", () => {
      assert.equal(r.cartes, 1);
      assert.equal(r.images.echecs, 1);
      assert.equal(journal.at(-1), "cartes:C");
    });
  }
  {
    const { acces, journal } = fausseBase([carteA, carteB], { partagees: [blobDe("commune")] });
    const r = await purgerCartesExpirees(acces, { aBlanc: true });
    test("a blanc, la purge compte sans rien effacer", () => {
      assert.deepEqual(r, {
        aBlanc: true,
        cartes: 2,
        images: { blob: 1, fichiers: 1, partagees: 1, echecs: 0 },
        reste: false,
      });
      assert.ok(!journal.some((l) => /^(blob|fichier|cartes):/.test(l)), journal.join(" "));
    });
  }
  {
    const { acces, journal } = fausseBase([carteA, carteB, carteC]);
    const r = await purgerCartesExpirees(acces, { lot: 2 });
    test("un lot plein annonce qu'il en reste", () => {
      assert.equal(r.reste, true);
      assert.ok(journal.includes("lire:2"));
    });
  }
  {
    const { acces, journal } = fausseBase([], { resistent: [blobDe("a")] });
    const restees = await effacerImagesDeCarte(acces, carteA);
    test("la suppression manuelle efface les images et rend celles qui resistent", () => {
      assert.deepEqual(restees, [blobDe("a")]);
      assert.ok(journal.includes("fichier:a.jpg"));
      assert.ok(journal.includes("partage:A"));
    });
  }
}

// --- Rapport ---------------------------------------------------------------

function report() {
  if (failures.length > 0) {
    console.error(`\n${failures.length} échec(s) sur ${passed + failures.length} :\n`);
    for (const f of failures) console.error(`  ✗ ${f}`);
    process.exit(1);
  }
  console.log(`${passed} vérifications passées.`);
}

// Les parties asynchrones du harnais — les images, puis la purge — sont
// chainees plutot qu'attendues au niveau du module, ce qui rendrait tout le
// script asynchrone.
checkImages()
  .then(checkPurge)
  .then(report, (err: unknown) => {
    failures.push(`vérifications asynchrones\n    ${(err as Error).message}`);
    report();
  });
```

## Code de la Task 2

### `lib/env.ts` — après `adsensePublisherId()`

```ts
/**
 * Le secret de la purge, s'il est pose et assez long ; `null` sinon, et la
 * route se tait alors en 404. Trente-deux caracteres au moins : c'est tout ce
 * qui la protege, et `openssl rand -hex 32` en donne soixante-quatre.
 *
 * La comparaison, elle, vit dans `lib/purge.ts` : elle a besoin de
 * `node:crypto`, et ce module-ci part aussi dans le bundle navigateur.
 */
export function secretDePurge(): string | null {
  const secret = process.env.PURGE_SECRET?.trim() ?? "";
  return secret.length >= 32 ? secret : null;
}
```

### `lib/purge.ts`

```ts
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
```

## Code de la Task 3

### `lib/rateLimit.ts` — dans `QUOTAS`, après `admin`

```ts
  /** `POST /api/purge` — protégée par secret ; le quota évite seulement le martèlement. */
  purge: { limite: 10, fenetreMs: 10 * MINUTE },
```

### `app/api/purge/route.ts`

```ts
import { secretDePurge } from "@/lib/env";
import { fail, handleError, json, notFoundJson, tropDeRequetes } from "@/lib/http";
import { accesReel, purgerCartesExpirees, resumeRapport, secretValide } from "@/lib/purge";
import { QUOTAS } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/*
 * La purge des cartes expirees sans choix, appelee chaque nuit par une tache
 * planifiee. Voir lib/purge.ts pour ce qui part et dans quel ordre.
 *
 * POST seulement : un GET se declenche tout seul — un robot, un prechargement.
 * Sans PURGE_SECRET, 404 : la route n'existe pas tant qu'on ne l'a pas voulue.
 * `?dry=1` rend le meme rapport sans rien effacer.
 */
export async function POST(req: Request) {
  try {
    const secret = secretDePurge();
    if (!secret) return notFoundJson();

    const trop = tropDeRequetes(req, QUOTAS.purge, "purge");
    if (trop) return trop;

    if (!secretValide(req.headers.get("authorization"), secret)) {
      return fail("Non autorisé.", 401);
    }

    const aBlanc = new URL(req.url).searchParams.get("dry") === "1";
    const rapport = await purgerCartesExpirees(accesReel(), { aBlanc });
    console.log(`[mypresentsforyou] ${resumeRapport(rapport)}`);
    return json(rapport);
  } catch (err) {
    return handleError(err);
  }
}
```

## Code de la Task 4 — `DELETE` de `app/api/admin/[token]/route.ts`

```ts
export async function DELETE(req: Request, { params }: Params) {
  try {
    const trop = tropDeRequetes(req, QUOTAS.admin, "admin");
    if (trop) return trop;

    const { token } = await params;
    const page = await findByAdminToken(token);
    if (!page) return notFoundJson();

    /*
     * Les images partent avec la carte, sauf celles qu'une autre carte utilise.
     * Une image qui resiste n'empeche pas la suppression — c'est le donneur qui
     * l'a demandee —, mais son adresse reste dans les journaux : une fois la
     * ligne effacee, plus rien ne permettrait de la retrouver.
     */
    const restees = await effacerImagesDeCarte(accesReel(), page);
    if (restees.length > 0) {
      console.error("[mypresentsforyou] suppression : images restees", restees.join(" "));
    }

    const { rowCount } = await sql`DELETE FROM gift_pages WHERE admin_token = ${token}`;
    if (rowCount === 0) return notFoundJson();
    return json({ ok: true });
  } catch (err) {
    return handleError(err);
  }
}
```

## Code de la Task 6 — `app/confidentialite/page.tsx`, « Combien de temps »

```tsx
      <h2>Combien de temps</h2>
      <p>
        Une carte sur laquelle personne n&apos;a choisi est supprimée, avec ses images,{" "}
        <strong>un an après sa création</strong>. Une carte dont le choix a été fait reste
        disponible pour que tu puisses le consulter, jusqu&apos;à ce que tu la supprimes toi-même
        depuis ton lien d&apos;administration — ses images partent alors avec elle.
      </p>
```
