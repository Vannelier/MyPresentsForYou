import type { Dictionnaire } from "./index";
import { remplir } from "./remplir";

/*
 * Une erreur voyage par sa cle, jamais par son texte. Elle nait souvent loin de
 * la requete — la validation, le format d'adresse — et ne sait pas dans quelle
 * langue repondre ; seul le bout qui repond la traduit, avec les messages de la
 * requete cote serveur, ceux du contexte cote navigateur.
 *
 * Aucun import de valeur des dictionnaires : `lib/slug` passe par ici, et part
 * dans le bundle navigateur.
 */
export type Erreurs = Dictionnaire["erreurs"];
export type CleErreur = keyof Erreurs;
export type Erreur = { cle: CleErreur; valeurs?: Record<string, string | number> };

export function traduire(erreurs: Erreurs, erreur: Erreur): string {
  return remplir(erreurs[erreur.cle], erreur.valeurs ?? {});
}
