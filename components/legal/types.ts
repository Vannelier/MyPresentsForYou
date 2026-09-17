import type { Langue } from "@/lib/i18n/langues";

/*
 * Le texte d'une page legale dans une langue : sa prose, et ce qui l'annonce.
 *
 * Des composants plutot que des cles de dictionnaire : un texte juridique se
 * relit d'un seul tenant, paragraphe apres paragraphe, et des centaines de
 * cles l'auraient emiette. Chaque traduction est comparee au francais par
 * `npm run check` — memes intertitres, memes puces, memes pages citees.
 */
export type ContenuLegal = {
  titreMeta: string;
  descriptionMeta: string;
  titre: string;
  chapo: string;
  Corps: (props: { langue: Langue }) => React.ReactNode;
};
