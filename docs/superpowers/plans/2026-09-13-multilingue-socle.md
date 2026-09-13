# Le multilingue, PR 1 : le socle — plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal :** poser le multilingue sans rien changer de ce qu'on lit en français — adresses par langue, langue de la carte, dictionnaire français, garde-fous. Seul le français est actif.

**Architecture :** `lib/i18n/` porte les langues, les chemins traduits, le routage (fonction pure) et les dictionnaires. `middleware.ts` applique le routage. Trois layouts racines (`app/[langue]`, `app/carte`, `app/admin`) posent `<html lang>` et un contexte React qui transmet le dictionnaire aux composants côté navigateur.

**Tech stack :** Next.js 15.5 (App Router, middleware Edge), TypeScript, harnais `scripts/check.ts`.

**Spec :** `docs/superpowers/specs/2026-09-13-multilingue-design.md`.

**Branche :** `claude/i18n-socle`, partie de `claude/textes-sobres` : le dictionnaire français doit contenir les nouveaux textes.

---

## Fichiers

| fichier | rôle |
|---|---|
| `lib/i18n/langues.ts` (nouveau) | `LANGUES`, `LANGUES_ACTIVES`, `Langue`, locales `Intl` et Open Graph, `langueOuDefaut`, `langueDuNavigateur` |
| `lib/i18n/chemins.ts` (nouveau) | table des chemins traduits, `cheminVers`, `pageDuSegment` |
| `lib/i18n/routage.ts` (nouveau) | la décision du middleware, en fonction pure |
| `lib/i18n/fr.ts` (nouveau) | le dictionnaire français, qui fait foi ; `Dictionnaire` en dérive |
| `lib/i18n/index.ts` (nouveau) | `dictionnaire(langue)`, `remplir(texte, variables)`, `pluriel(...)` |
| `components/i18n/Dictionnaire.tsx` (nouveau) | contexte React + `useDictionnaire()` |
| `middleware.ts` (nouveau) | applique `router()` |
| `app/[langue]/**` | les pages du site, déplacées depuis `app/*` |
| `app/carte/[slug]/**` | la page-cadeau, déplacée depuis `app/[slug]` |
| `app/{[langue],carte,admin}/layout.tsx` | trois layouts racines ; `app/layout.tsx` disparaît |
| `app/polices.ts` (nouveau) | polices et feuilles de style communes aux trois layouts |
| `lib/types.ts`, `lib/validation.ts`, `lib/db.ts` | `theme.langue` |
| composants, `lib/occasions.ts`, `lib/palettes.ts`, `lib/printTexts.ts` | textes vers le dictionnaire |
| `app/sitemap.ts`, `app/llms.txt/route.ts`, `app/robots.ts` | une entrée par langue active |
| `lib/slug.ts` | `carte` réservé |
| `scripts/check.ts` | garde-fous, et chemins des fichiers déplacés |

---

### Task 1 : les langues, les chemins, le routage (TDD)

- [ ] **Tests d'abord**, dans `scripts/check.ts` :
  - `langueDuNavigateur("de-DE,de;q=0.9,en;q=0.8", ["fr","en","de"])` → `"de"` ; `"pt-BR"` → `"en"` ; si l'anglais n'est pas actif (`["fr"]`) → `"fr"` ; `null` → même repli ;
  - `langueOuDefaut("xx")` → `"fr"` ;
  - chaque page a un chemin dans chaque langue ; les chemins sont uniques dans une langue, au format `^[a-z0-9-]*$` ;
  - `router()` :
    - `/` → redirection temporaire vers `/fr` (seul le français est actif) ;
    - `/fr/creer` → suite ;
    - `/creer` → redirection permanente vers `/fr/creer` ;
    - `/camille-anniversaire` → réécriture vers `/carte/camille-anniversaire` ;
    - `/fr` → suite, jamais vers une carte ;
    - `/en/create` → introuvable tant que l'anglais n'est pas actif ;
    - `/api/x`, `/admin/t`, `/robots.txt`, `/opengraph-image` → suite ;
    - `/a/b/c` → réécriture vers `/fr/introuvable`.
- [ ] Constater l'échec (module absent).
- [ ] Écrire `langues.ts`, `chemins.ts`, `routage.ts` (voir « Code » ci-dessous).
- [ ] `npm run check` vert.

### Task 2 : le middleware et les trois layouts

- [ ] `middleware.ts` (voir « Code »).
- [ ] `app/polices.ts` : les sept polices de `app/layout.tsx` et la liste de leurs variables CSS ; les imports CSS vont dans chaque layout.
- [ ] `app/[langue]/layout.tsx` : `generateStaticParams` sur `LANGUES_ACTIVES`, `notFound()` pour une langue inactive, `<html lang={langue}>`, `DictionnaireProvider`. `metadata` de l'ancien layout, `openGraph.locale` selon la langue.
- [ ] Déplacer `app/page.tsx`, `creer`, `exemple`, `questions`, `contact`, `conditions`, `confidentialite`, `mentions-legales`, `not-found.tsx` sous `app/[langue]/` ; ajouter `app/[langue]/introuvable/page.tsx`, qui appelle `notFound()`.
- [ ] `app/carte/layout.tsx` et `app/carte/[slug]/page.tsx` (déplacé), `lang` lu dans la carte via une lecture mise en `cache()` ; `app/carte/not-found.tsx`.
- [ ] `app/admin/layout.tsx` : même principe.
- [ ] Supprimer `app/layout.tsx`.
- [ ] `lib/slug.ts` : ajouter `carte` à `RESERVED_SLUGS`.
- [ ] Mettre à jour les chemins que lit le harnais (`app/exemple/page.tsx` → `app/[langue]/exemple/page.tsx`, etc.).
- [ ] `npm run check`, `npx tsc --noEmit`, `npm run build` ; au navigateur : `/`, `/fr`, `/fr/creer`, `/creer` → `/fr/creer`, une carte à son adresse courte.
- [ ] **Commit** (« Sert le site sous un prefixe de langue, et les cartes a leur adresse courte »).

### Task 3 : la langue de la carte

- [ ] Test : `validateTheme({ langue: "de" }).langue` = `"de"` ; `"xx"` → `"fr"` ; absente → `"fr"`.
- [ ] `lib/types.ts` : `langue?: string` dans `Theme`. `lib/validation.ts` : `langue: langueOuDefaut(o.langue)`, avec les langues *connues* (pas seulement actives : une carte créée en allemand reste allemande même si l'allemand était désactivé un jour). `lib/db.ts` : `langue: raw.langue` dans `normaliseTheme`.
- [ ] Éditeur, étape 1 : un sélecteur « Langue de la carte » (langues actives), par défaut la langue de la page ; enregistré dans le brouillon (`draft.ts`) et le `payload()`.
- [ ] `GiftView`, `AdminView`, la carte à imprimer lisent `theme.langue` pour choisir leur dictionnaire.
- [ ] **Commit.**

### Task 4 : le dictionnaire français et l'extraction

Règle : **tout texte affiché** sort du JSX vers `lib/i18n/fr.ts`. Les commentaires restent. Les textes à variable prennent la forme `{nom}` et passent par `remplir()`.

- [ ] `lib/i18n/fr.ts`, par zones : `site` (accueil, pied de page, page introuvable, exemple, questions), `editeur`, `carte` (page-cadeau, voile, compte à rebours), `admin`, `impression`, `occasions` (indexées par identifiant : `nom`, `intro`, `bienvenue`, `remerciement`, `ouvrir`, `attente`), `palettes`, `polices`, `effets`, `ouvertures`, `erreurs` (API), `dates` (rien : `Intl`).
- [ ] `lib/occasions.ts`, `lib/palettes.ts` : les mots sortent ; ne restent que identifiants, couleurs, décors, effets par défaut. Les fonctions qui rendaient `occasion.intro` prennent la langue.
- [ ] Composants, un par un, en lisant le dictionnaire (`useDictionnaire()` côté navigateur, `dictionnaire(langue)` côté serveur) : `SiteFooter`, `TextPage`, `CreateFlow`, `PageEditor`, `GiftView`, `GiftCover`, `AdminView`, `CardPreview`, `PrintableCard`, `PrintCarousel`, `PrintColorSlider`, `PrintSlider`, pages du site.
- [ ] Dates : `toLocaleString(LOCALES[langue].intl, …)` aux quatre endroits.
- [ ] API : le client envoie `x-langue` ; `fail()` et `ValidationError` portent une clé d'erreur ; le message est lu dans le dictionnaire de la requête.
- [ ] Les pages légales passent sous `app/[langue]/…` telles quelles (prose française).
- [ ] Liens internes : `cheminVers(langue, page)` partout (une vingtaine d'occurrences).
- [ ] **Vérifier « à l'identique »** : avant l'extraction, relever le texte visible de l'accueil, de `/exemple` (voile, cadeaux, écran de fin) et de l'éditeur (étapes 1 à 3) ; après, le même relevé doit être identique au caractère près.
- [ ] **Commit** par zone.

### Task 5 : sitemap, `hreflang`, `llms.txt`, sélecteur

- [ ] `app/sitemap.ts` : chaque page × chaque langue active, avec `alternates.languages`.
- [ ] `generateMetadata` des pages du site : `alternates.canonical` et `alternates.languages`.
- [ ] `app/llms.txt/route.ts` : les liens via `cheminVers("fr", …)`.
- [ ] Pied de page : sélecteur de langue (masqué tant qu'une seule langue est active).
- [ ] **Commit.**

### Task 6 : garde-fous restants, mutations, documentation, livraison

- [ ] Garde-fous : aucun `Set-Cookie`/`cookies()` dans `middleware.ts` et `lib/i18n/` ; formules d'occasion distinctes et dans les limites, par langue ; `carte` réservé.
- [ ] Mutations : casser chaque règle de `router()` et chaque garde-fou, constater l'échec, remettre.
- [ ] README : routes, carte du code, section « Le multilingue ».
- [ ] `npm run check`, `npx tsc --noEmit`, `npm run build`, relevé « à l'identique », PR en brouillon (base `claude/textes-sobres`).

---

## Code

### `lib/i18n/langues.ts`

```ts
/*
 * Les six langues du projet. Le socle n'en active qu'une : les autres
 * arrivent avec leurs dictionnaires, et une langue sans dictionnaire servirait
 * du francais sous une adresse etrangere.
 */
export const LANGUES = ["fr", "en", "it", "es", "de", "nl"] as const;
export type Langue = (typeof LANGUES)[number];

export const LANGUES_ACTIVES: readonly Langue[] = ["fr"];

/** La langue d'une carte creee avant le multilingue, ou dont l'identifiant est inconnu. */
export const LANGUE_PAR_DEFAUT: Langue = "fr";

export const LOCALES: Record<Langue, { intl: string; og: string }> = {
  fr: { intl: "fr-BE", og: "fr_BE" },
  en: { intl: "en-GB", og: "en_GB" },
  it: { intl: "it-IT", og: "it_IT" },
  es: { intl: "es-ES", og: "es_ES" },
  de: { intl: "de-DE", og: "de_DE" },
  nl: { intl: "nl-BE", og: "nl_BE" },
};

export function estLangue(x: unknown): x is Langue {
  return typeof x === "string" && (LANGUES as readonly string[]).includes(x);
}

export function langueOuDefaut(x: unknown): Langue {
  return estLangue(x) ? x : LANGUE_PAR_DEFAUT;
}

/**
 * La langue d'un visiteur, d'apres `Accept-Language`, parmi les langues
 * actives. A defaut, l'anglais — la langue la plus partagee — s'il est actif,
 * sinon la premiere active.
 */
export function langueDuNavigateur(
  entete: string | null,
  actives: readonly Langue[] = LANGUES_ACTIVES,
): Langue {
  const voeux = (entete ?? "")
    .split(",")
    .map((morceau) => {
      const [balise, ...params] = morceau.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { langue: balise.split("-")[0], poids: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((v) => v.langue && Number.isFinite(v.poids) && v.poids > 0)
    .sort((a, b) => b.poids - a.poids);
  for (const v of voeux) {
    if (estLangue(v.langue) && actives.includes(v.langue)) return v.langue;
  }
  return actives.includes("en") ? "en" : actives[0];
}
```

### `lib/i18n/chemins.ts`

```ts
import { LANGUES, type Langue } from "./langues";

/** Les pages du site. Le dossier de chacune porte son nom francais. */
export const PAGES = [
  "accueil",
  "creer",
  "exemple",
  "questions",
  "contact",
  "conditions",
  "confidentialite",
  "mentions-legales",
] as const;
export type Page = (typeof PAGES)[number];

export const CHEMINS: Record<Page, Record<Langue, string>> = {
  accueil: { fr: "", en: "", it: "", es: "", de: "", nl: "" },
  creer: { fr: "creer", en: "create", it: "crea", es: "crear", de: "erstellen", nl: "maken" },
  exemple: { fr: "exemple", en: "example", it: "esempio", es: "ejemplo", de: "beispiel", nl: "voorbeeld" },
  questions: { fr: "questions", en: "faq", it: "domande", es: "preguntas", de: "fragen", nl: "vragen" },
  contact: { fr: "contact", en: "contact", it: "contatti", es: "contacto", de: "kontakt", nl: "contact" },
  conditions: {
    fr: "conditions", en: "terms", it: "termini", es: "condiciones", de: "nutzungsbedingungen", nl: "voorwaarden",
  },
  confidentialite: {
    fr: "confidentialite", en: "privacy", it: "privacy", es: "privacidad", de: "datenschutz", nl: "privacy",
  },
  "mentions-legales": {
    fr: "mentions-legales", en: "legal-notice", it: "note-legali", es: "aviso-legal", de: "impressum", nl: "colofon",
  },
};

/** L'adresse publique d'une page : `/en/create`, `/fr`. */
export function cheminVers(langue: Langue, page: Page): string {
  const segment = CHEMINS[page][langue];
  return segment ? `/${langue}/${segment}` : `/${langue}`;
}

/** La page que designe un segment dans une langue, ou `null`. */
export function pageDuSegment(langue: Langue, segment: string): Page | null {
  return PAGES.find((p) => CHEMINS[p][langue] === segment) ?? null;
}

/** La page que designe un segment dans n'importe quelle langue. */
export function pageDansUneLangue(segment: string): Page | null {
  for (const langue of LANGUES) {
    const page = pageDuSegment(langue, segment);
    if (page && segment) return page;
  }
  return null;
}
```

### `lib/i18n/routage.ts`

```ts
import { CHEMINS, pageDansUneLangue, pageDuSegment, cheminVers } from "./chemins";
import { LANGUES_ACTIVES, estLangue, langueDuNavigateur, type Langue } from "./langues";

export type Decision =
  | { type: "suite" }
  | { type: "redirection"; vers: string; permanente: boolean }
  | { type: "reecriture"; vers: string };

const SLUG = /^[a-z0-9][a-z0-9-]{1,58}[a-z0-9]$/;

/*
 * Ce qui ne passe jamais par le routage des langues : l'API, l'administration,
 * les cartes deja reecrites, et les routes de metadonnees sans point dans leur
 * nom — les autres (robots.txt, favicon.ico...) sont ecartees par le matcher.
 */
const PASSANTS = new Set(["api", "admin", "carte", "_next", "opengraph-image", "twitter-image", "icon", "apple-icon"]);

export function router(
  chemin: string,
  acceptLanguage: string | null,
  actives: readonly Langue[] = LANGUES_ACTIVES,
): Decision {
  const segments = chemin.split("/").filter(Boolean);
  const premier = segments[0];

  if (!premier) {
    return { type: "redirection", vers: `/${langueDuNavigateur(acceptLanguage, actives)}`, permanente: false };
  }
  if (PASSANTS.has(premier) || premier.includes(".")) return { type: "suite" };

  if (estLangue(premier)) {
    if (!actives.includes(premier)) return { type: "reecriture", vers: `/${actives[0]}/introuvable` };
    const segment = segments[1];
    if (segments.length <= 1) return { type: "suite" };
    if (segments.length > 2) return { type: "suite" };
    const page = pageDuSegment(premier, segment);
    if (page) {
      const dossier = CHEMINS[page].fr;
      return dossier === segment ? { type: "suite" } : { type: "reecriture", vers: `/${premier}/${dossier}` };
    }
    const ailleurs = pageDansUneLangue(segment);
    if (ailleurs) return { type: "redirection", vers: cheminVers(premier, ailleurs), permanente: true };
    return { type: "suite" };
  }

  if (segments.length === 1) {
    const page = pageDuSegment("fr", premier);
    if (page) return { type: "redirection", vers: cheminVers("fr", page), permanente: true };
    if (SLUG.test(premier)) return { type: "reecriture", vers: `/carte/${premier}` };
  }
  return {
    type: "reecriture",
    vers: `/${langueDuNavigateur(acceptLanguage, actives)}/introuvable`,
  };
}
```

### `middleware.ts`

```ts
import { NextResponse, type NextRequest } from "next/server";
import { router } from "@/lib/i18n/routage";

/*
 * Applique les regles de lib/i18n/routage.ts. Aucun cookie : la langue vit
 * dans l'adresse, et la politique de confidentialite promet qu'il n'y en a pas.
 */
export function middleware(req: NextRequest) {
  const decision = router(req.nextUrl.pathname, req.headers.get("accept-language"));
  if (decision.type === "suite") return NextResponse.next();

  const cible = new URL(decision.vers + req.nextUrl.search, req.url);
  if (decision.type === "reecriture") return NextResponse.rewrite(cible);

  const reponse = NextResponse.redirect(cible, decision.permanente ? 308 : 307);
  // La redirection de « / » depend de la langue du navigateur : un cache
  // partage ne doit pas servir celle d'un autre visiteur.
  if (!decision.permanente) reponse.headers.set("Vary", "Accept-Language");
  return reponse;
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\.[a-z0-9]+$).*)"],
};
```

### `lib/i18n/index.ts`

```ts
import { fr } from "./fr";
import type { Langue } from "./langues";

export type Dictionnaire = typeof fr;

const DICTIONNAIRES: Partial<Record<Langue, Dictionnaire>> = { fr };

/** Le dictionnaire d'une langue ; le francais tant que la sienne n'existe pas. */
export function dictionnaire(langue: Langue): Dictionnaire {
  return DICTIONNAIRES[langue] ?? fr;
}

/** Remplit `{nom}` dans un texte. Une variable absente laisse la marque, visible. */
export function remplir(texte: string, variables: Record<string, string | number>): string {
  return texte.replace(/\{(\w+)\}/g, (marque, nom: string) =>
    nom in variables ? String(variables[nom]) : marque,
  );
}
```

### `components/i18n/Dictionnaire.tsx`

```tsx
"use client";

import { createContext, useContext } from "react";
import type { Dictionnaire } from "@/lib/i18n";
import type { Langue } from "@/lib/i18n/langues";

const Contexte = createContext<{ langue: Langue; d: Dictionnaire } | null>(null);

export function DictionnaireProvider({
  langue,
  d,
  children,
}: {
  langue: Langue;
  d: Dictionnaire;
  children: React.ReactNode;
}) {
  return <Contexte.Provider value={{ langue, d }}>{children}</Contexte.Provider>;
}

export function useDictionnaire() {
  const valeur = useContext(Contexte);
  if (!valeur) throw new Error("useDictionnaire hors d'un DictionnaireProvider");
  return valeur;
}
```
