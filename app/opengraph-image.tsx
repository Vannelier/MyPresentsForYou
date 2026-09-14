import { TAILLE_BANNIERE, banniere } from "./banniere";

/*
 * La banniere neutre : celle des cartes sans image choisie. Une carte a sa
 * propre langue, que ce fichier ne connait pas ; la marque seule ne se traduit
 * pas. Les pages du site ont la leur, traduite, dans app/[langue].
 */
export const alt = "MyPresentsForYou";
export const size = TAILLE_BANNIERE;
export const contentType = "image/png";

export default function Image() {
  return banniere(null);
}
