import SelecteurLangue from "@/components/i18n/SelecteurLangue";

/**
 * La tete des pages du site : le selecteur de langue, en haut a droite, la ou on
 * le cherche. Jamais sur une carte ni sur l'administration — une carte a sa
 * langue, et la personne qui la recoit n'a pas a la changer ; un garde-fou de
 * `scripts/check.ts` y veille.
 */
export default function EnTeteSite() {
  return (
    <div className="site-tete">
      <SelecteurLangue />
    </div>
  );
}
