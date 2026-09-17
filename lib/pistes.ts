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
 * vide, sinon dans une nouvelle ligne, sinon nulle part (liste pleine).
 *
 * La ligne vide d'abord : l'editeur en ouvre deux, et ajouter a la suite
 * laissait deux trous en tete de liste, que l'offreur devait supprimer a la main.
 * Renvoie `null` quand rien n'a change, pour que l'appelant ne re-rende pas.
 */
export function placerPiste<T extends Ligne>(lignes: T[], nom: string, max: number, nouvelle: () => T): T[] | null {
  if (lignes.some((l) => l.label.trim() === nom)) return null;
  const vide = lignes.findIndex((l) => !l.label.trim() && !l.image_url.trim() && !l.source_url.trim() && !l.note.trim());
  if (vide >= 0) return lignes.map((l, i) => (i === vide ? { ...l, label: nom } : l));
  if (lignes.length >= max) return null;
  return [...lignes, { ...nouvelle(), label: nom }];
}
