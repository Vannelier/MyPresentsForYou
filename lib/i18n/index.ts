import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import type { Langue } from "./langues";
import { nl } from "./nl";

export { remplir } from "./remplir";

/*
 * Le type de tout dictionnaire, derive du francais qui fait foi. Une autre
 * langue declare `satisfies Dictionnaire` : une cle manquante ou en trop est
 * une erreur de compilation, et une traduction oubliee ne part jamais en ligne.
 *
 * Ce module importe les dictionnaires : il sert au serveur. Un composant cote
 * navigateur lit le sien par `useDictionnaire()`, et `remplir` dans
 * `./remplir`.
 */
export type Dictionnaire = typeof fr;

// Un `Record` complet, et non partiel : une langue ajoutee a LANGUES sans son
// dictionnaire ne compile plus, au lieu de servir du francais en silence.
const DICTIONNAIRES: Record<Langue, Dictionnaire> = { fr, en, it, es, de, nl };

export function dictionnaire(langue: Langue): Dictionnaire {
  return DICTIONNAIRES[langue];
}
