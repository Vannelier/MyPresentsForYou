/**
 * Remplit les `{nom}` d'un texte. Une variable absente laisse sa marque,
 * visible a l'ecran : un trou silencieux passerait inapercu.
 *
 * Dans son propre module, et non dans `lib/i18n/index.ts` : celui-ci importe
 * les dictionnaires, et un composant cote navigateur qui l'importerait les
 * embarquerait tous dans le bundle, au lieu de recevoir le sien par le contexte.
 */
export function remplir(texte: string, variables: Record<string, string | number>): string {
  return texte.replace(/\{(\w+)\}/g, (marque, nom: string) =>
    nom in variables ? String(variables[nom]) : marque,
  );
}
