"use client";

import Link from "next/link";
import SelecteurLangue from "@/components/i18n/SelecteurLangue";
import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import { cheminVers } from "@/lib/i18n/chemins";

/**
 * La tete des pages du site : le nom du site a gauche, qui ramene a l'accueil,
 * et le selecteur de langue a droite, la ou on les cherche.
 *
 * Une vraie ligne d'en-tete, et non plus le selecteur seul : au telephone, il
 * flottait au-dessus d'un en-tete centre, et le poser sur la ligne du nom
 * centre le faisait chevaucher — mesure a 375 px, le nom espace allait jusqu'a
 * 287 px et le bouton commencait a 267. Le nom a gauche remplace aussi les
 * liens « ← MyPresentsForYou » que chaque page repetait sous lui.
 *
 * Jamais sur une carte ni sur l'administration — une carte a sa langue, et la
 * personne qui la recoit n'a pas a la changer ; un garde-fou de
 * `scripts/check.ts` y veille.
 */
export default function EnTeteSite() {
  const { langue, d } = useDictionnaire();
  return (
    <div className="site-tete">
      <Link className="site-tete__marque" href={cheminVers(langue, "accueil")}>
        {d.commun.marque}
      </Link>
      <SelecteurLangue />
    </div>
  );
}
