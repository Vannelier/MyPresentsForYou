import type { PageLegale } from "@/lib/i18n/chemins";
import type { Langue } from "@/lib/i18n/langues";
import conditionsDe from "./conditions/de";
import conditionsEn from "./conditions/en";
import conditionsEs from "./conditions/es";
import conditionsFr from "./conditions/fr";
import conditionsIt from "./conditions/it";
import conditionsNl from "./conditions/nl";
import confidentialiteDe from "./confidentialite/de";
import confidentialiteEn from "./confidentialite/en";
import confidentialiteEs from "./confidentialite/es";
import confidentialiteFr from "./confidentialite/fr";
import confidentialiteIt from "./confidentialite/it";
import confidentialiteNl from "./confidentialite/nl";
import mentionsDe from "./mentions-legales/de";
import mentionsEn from "./mentions-legales/en";
import mentionsEs from "./mentions-legales/es";
import mentionsFr from "./mentions-legales/fr";
import mentionsIt from "./mentions-legales/it";
import mentionsNl from "./mentions-legales/nl";
import type { ContenuLegal } from "./types";

/*
 * Un `Record` complet par page : une langue ajoutee sans sa traduction
 * juridique ne compile pas. Le francais fait foi ; les autres le disent au
 * visiteur (components/TextPage.tsx).
 */
export const TEXTES_LEGAUX: Record<PageLegale, Record<Langue, ContenuLegal>> = {
  conditions: {
    fr: conditionsFr,
    en: conditionsEn,
    it: conditionsIt,
    es: conditionsEs,
    de: conditionsDe,
    nl: conditionsNl,
  },
  confidentialite: {
    fr: confidentialiteFr,
    en: confidentialiteEn,
    it: confidentialiteIt,
    es: confidentialiteEs,
    de: confidentialiteDe,
    nl: confidentialiteNl,
  },
  "mentions-legales": {
    fr: mentionsFr,
    en: mentionsEn,
    it: mentionsIt,
    es: mentionsEs,
    de: mentionsDe,
    nl: mentionsNl,
  },
};
