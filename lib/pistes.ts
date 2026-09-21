import type { OccasionId } from "./occasions";

/*
 * Les pistes d'idees que l'editeur propose dans « Besoin d'idees ? » : celles
 * des guides par occasion, reduites a leurs noms.
 *
 * Un module a part, sans rien importer des guides : l'editeur est un composant
 * navigateur, et `lib/guides` embarquerait les guides entiers des six langues.
 * La page serveur extrait les pistes de sa langue (`pistesPourEditeur`) et les
 * passe en propriete ; seules quelques centaines d'octets partent au navigateur.
 */
export type Pistes = Partial<Record<OccasionId, { profil: string; idees: string[] }[]>>;

type Ligne = { label: string; image_url: string; source_url: string; note: string };

/**
 * Place une piste dans la liste des cadeaux : dans la premiere ligne encore
 * vide, sinon dans une nouvelle ligne, sinon nulle part (liste pleine). Elle
 * pose le titre et un lien de recherche marchande (`url`), que l'offreur precise.
 *
 * La ligne vide d'abord : l'editeur en ouvre deux, et ajouter a la suite
 * laissait deux trous en tete de liste, que l'offreur devait supprimer a la main.
 * Renvoie `null` quand rien n'a change, pour que l'appelant ne re-rende pas.
 */
export function placerPiste<T extends Ligne>(lignes: T[], nom: string, url: string, max: number, nouvelle: () => T): T[] | null {
  if (lignes.some((l) => l.label.trim() === nom)) return null;
  const vide = lignes.findIndex((l) => !l.label.trim() && !l.image_url.trim() && !l.source_url.trim() && !l.note.trim());
  if (vide >= 0) return lignes.map((l, i) => (i === vide ? { ...l, label: nom, source_url: url } : l));
  if (lignes.length >= max) return null;
  return [...lignes, { ...nouvelle(), label: nom, source_url: url }];
}

/**
 * L'inverse de `placerPiste` : decoche une piste ajoutee, en effacant sur sa
 * ligne exactement ce que la pose y avait ecrit (titre, lien de recherche).
 * L'image et la note, elles, restent — l'offreur a pu les completer depuis, et
 * decocher une suggestion n'est pas un « vider cette ligne ». La ligne, vide ou
 * non, n'est jamais supprimee : seul le bouton × de la ligne le fait.
 */
export function retirerPiste<T extends Ligne>(lignes: T[], nom: string): T[] | null {
  const i = lignes.findIndex((l) => l.label.trim() === nom);
  if (i < 0) return null;
  return lignes.map((l, j) => (j === i ? { ...l, label: "", source_url: "" } : l));
}
