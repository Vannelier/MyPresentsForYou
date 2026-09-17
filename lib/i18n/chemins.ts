import type { OccasionId } from "../occasions";
import { LANGUES, estLangue, type Langue } from "./langues";

/*
 * Les pages du site et leur adresse dans chaque langue.
 *
 * Le code ne garde qu'un dossier par page, qui porte son nom francais
 * (`app/[langue]/creer`). Le middleware reecrit l'adresse traduite vers lui :
 * `/de/erstellen` est servi par `app/[langue]/creer`, sans que l'adresse
 * visible change. Des mots propres a chaque langue dans l'adresse, c'est ce que
 * lisent les moteurs et ce que retient un visiteur.
 */
export const PAGES = [
  "accueil",
  "creer",
  "exemple",
  "questions",
  "idees",
  "contact",
  "conditions",
  "confidentialite",
  "mentions-legales",
] as const;
export type Page = (typeof PAGES)[number];

/*
 * Les pages legales. Traduites comme les autres, mais c'est la version
 * francaise qui engage : les traductions le disent en tete, avec un lien vers
 * elle (components/TextPage.tsx). Leur texte vit dans components/legal, une
 * prose par langue plutot que des cles de dictionnaire.
 */
export const PAGES_LEGALES = ["conditions", "confidentialite", "mentions-legales"] as const satisfies readonly Page[];
export type PageLegale = (typeof PAGES_LEGALES)[number];

export const CHEMINS: Record<Page, Record<Langue, string>> = {
  accueil: { fr: "", en: "", it: "", es: "", de: "", nl: "" },
  creer: { fr: "creer", en: "create", it: "crea", es: "crear", de: "erstellen", nl: "maken" },
  exemple: { fr: "exemple", en: "example", it: "esempio", es: "ejemplo", de: "beispiel", nl: "voorbeeld" },
  questions: { fr: "questions", en: "faq", it: "domande", es: "preguntas", de: "fragen", nl: "vragen" },
  idees: {
    fr: "idees-cadeaux",
    en: "gift-ideas",
    it: "idee-regalo",
    es: "ideas-regalo",
    de: "geschenkideen",
    nl: "cadeau-ideeen",
  },
  contact: { fr: "contact", en: "contact", it: "contatti", es: "contacto", de: "kontakt", nl: "contact" },
  conditions: {
    fr: "conditions",
    en: "terms",
    it: "termini",
    es: "condiciones",
    de: "nutzungsbedingungen",
    nl: "voorwaarden",
  },
  confidentialite: {
    fr: "confidentialite",
    en: "privacy",
    it: "privacy",
    es: "privacidad",
    de: "datenschutz",
    nl: "privacy",
  },
  "mentions-legales": {
    fr: "mentions-legales",
    en: "legal-notice",
    it: "note-legali",
    es: "aviso-legal",
    de: "impressum",
    nl: "colofon",
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

/** La page que designe un segment non vide dans n'importe quelle langue, ou `null`. */
export function pageDansUneLangue(segment: string): Page | null {
  if (!segment) return null;
  for (const langue of LANGUES) {
    const page = pageDuSegment(langue, segment);
    if (page) return page;
  }
  return null;
}

/*
 * Les guides par occasion, sous la page des idees cadeaux : un segment de plus,
 * traduit comme les pages. `/de/geschenkideen/geburtstag` est servi par
 * `app/[langue]/idees-cadeaux/[occasion]`, avec l'identifiant francais de
 * l'occasion.
 *
 * Six occasions, choisies d'apres les suggestions de recherche de chaque langue
 * (docs/superpowers/specs/2026-09-17-referencement-occasions-design.md).
 * L'identifiant est celui du catalogue : le bouton du guide ouvre l'editeur sur
 * cette occasion.
 */
export const GUIDES = [
  "anniversaire",
  "noel",
  "mariage",
  "naissance",
  "cremaillere",
  "fete-des-meres",
] as const satisfies readonly OccasionId[];
export type Guide = (typeof GUIDES)[number];

export const SEGMENTS_GUIDES: Record<Guide, Record<Langue, string>> = {
  anniversaire: { fr: "anniversaire", en: "birthday", it: "compleanno", es: "cumpleanos", de: "geburtstag", nl: "verjaardag" },
  noel: { fr: "noel", en: "christmas", it: "natale", es: "navidad", de: "weihnachten", nl: "kerst" },
  mariage: { fr: "mariage", en: "wedding", it: "matrimonio", es: "boda", de: "hochzeit", nl: "huwelijk" },
  naissance: { fr: "naissance", en: "new-baby", it: "nascita", es: "nacimiento", de: "geburt", nl: "geboorte" },
  cremaillere: {
    fr: "cremaillere",
    en: "housewarming",
    it: "casa-nuova",
    es: "casa-nueva",
    de: "einzug",
    nl: "housewarming",
  },
  "fete-des-meres": {
    fr: "fete-des-meres",
    en: "mothers-day",
    it: "festa-della-mamma",
    es: "dia-de-la-madre",
    de: "muttertag",
    nl: "moederdag",
  },
};

/** L'adresse publique d'un guide : `/en/gift-ideas/birthday`. */
export function cheminGuide(langue: Langue, guide: Guide): string {
  return `${cheminVers(langue, "idees")}/${SEGMENTS_GUIDES[guide][langue]}`;
}

/** Le guide que designe un segment dans une langue, ou `null`. */
export function guideDuSegment(langue: Langue, segment: string): Guide | null {
  return GUIDES.find((g) => SEGMENTS_GUIDES[g][langue] === segment) ?? null;
}

/** Le guide que designe un segment dans n'importe quelle langue, ou `null`. */
export function guideDansUneLangue(segment: string): Guide | null {
  for (const langue of LANGUES) {
    const guide = guideDuSegment(langue, segment);
    if (guide) return guide;
  }
  return null;
}

/**
 * La meme page dans chaque langue, d'apres l'adresse visible : ce que propose le
 * selecteur de langue. `null` hors des pages du site — une carte,
 * l'administration — ou pour une adresse qu'on ne reconnait pas.
 */
export function equivalents(chemin: string): Record<Langue, string> | null {
  const [langue, segment = "", sous, ...reste] = chemin.split("/").filter(Boolean);
  if (!estLangue(langue) || reste.length > 0) return null;
  const page = segment === "" ? "accueil" : pageDuSegment(langue, segment);
  if (!page) return null;
  if (sous === undefined) {
    return Object.fromEntries(LANGUES.map((l) => [l, cheminVers(l, page)])) as Record<Langue, string>;
  }
  const guide = page === "idees" ? guideDuSegment(langue, sous) : null;
  if (!guide) return null;
  return Object.fromEntries(LANGUES.map((l) => [l, cheminGuide(l, guide)])) as Record<Langue, string>;
}
