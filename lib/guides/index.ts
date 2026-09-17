import type { Langue } from "@/lib/i18n/langues";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nl } from "./nl";
import type { TextesGuides } from "./types";

/*
 * Un `Record` complet : une langue sans ses guides ne compile pas. Module
 * serveur — un composant navigateur qui l'importerait embarquerait les six
 * langues ; `scripts/check.ts` le refuse.
 */
export const TEXTES_GUIDES: Record<Langue, TextesGuides> = { fr, en, it, es, de, nl };

export function textesGuides(langue: Langue): TextesGuides {
  return TEXTES_GUIDES[langue];
}
