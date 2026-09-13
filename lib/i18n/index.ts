import { fr } from "./fr";
import type { Langue } from "./langues";

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

const DICTIONNAIRES: Partial<Record<Langue, Dictionnaire>> = { fr };

/** Le dictionnaire d'une langue ; le francais tant que la sienne n'existe pas. */
export function dictionnaire(langue: Langue): Dictionnaire {
  return DICTIONNAIRES[langue] ?? fr;
}
