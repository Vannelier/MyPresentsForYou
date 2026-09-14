import { LANGUES, type Langue } from "./langues";

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
  "contact",
  "conditions",
  "confidentialite",
  "mentions-legales",
] as const;
export type Page = (typeof PAGES)[number];

/*
 * Les pages dont le texte n'existe encore qu'en francais : les pages legales,
 * dont la traduction engage et vient a part. Elles restent servies sous chaque
 * langue — le pied de page y mene — mais le disent au visiteur, et designent la
 * version francaise comme canonique (lib/i18n/alternates.ts).
 */
export const PAGES_EN_FRANCAIS: readonly Page[] = ["conditions", "confidentialite", "mentions-legales"];

export const CHEMINS: Record<Page, Record<Langue, string>> = {
  accueil: { fr: "", en: "", it: "", es: "", de: "", nl: "" },
  creer: { fr: "creer", en: "create", it: "crea", es: "crear", de: "erstellen", nl: "maken" },
  exemple: { fr: "exemple", en: "example", it: "esempio", es: "ejemplo", de: "beispiel", nl: "voorbeeld" },
  questions: { fr: "questions", en: "faq", it: "domande", es: "preguntas", de: "fragen", nl: "vragen" },
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
