import Link from "next/link";
import { dictionnaire } from "@/lib/i18n";
import { cheminVers } from "@/lib/i18n/chemins";
import type { Langue } from "@/lib/i18n/langues";

/**
 * Le pied de page du site public.
 *
 * Il porte les liens légaux — c'est là qu'on les cherche, et c'est aussi ce qui
 * les rend explorables : sans lien depuis une page indexée, une page légale
 * n'existe pour aucun moteur, même déclarée dans le sitemap. Pour la même
 * raison, il mène aux idées cadeaux, que rien d'autre ne relie à toutes les pages.
 *
 * Absent des pages-cadeau et de la vue d'administration : la personne qui reçoit
 * une carte n'a pas à voir les conditions d'utilisation d'un outil qu'elle
 * n'utilise pas, et la page doit rester celle du donneur, pas celle de MyPresentsForYou.
 *
 * Le changement de langue a quitté le pied de page pour la tête
 * (`components/EnTeteSite.tsx`), là où on le cherche.
 */
export default function SiteFooter({ langue, note }: { langue: Langue; note?: string }) {
  const d = dictionnaire(langue);
  return (
    <footer className="lp-foot">
      {note && <p>{note}</p>}

      <nav className="lp-foot__nav" aria-label={d.pied.navigation}>
        <Link href={cheminVers(langue, "idees")}>{d.pied.idees}</Link>
        <Link href={cheminVers(langue, "questions")}>{d.pied.questions}</Link>
        <Link href={cheminVers(langue, "contact")}>{d.pied.contact}</Link>
        <Link href={cheminVers(langue, "confidentialite")}>{d.pied.confidentialite}</Link>
        <Link href={cheminVers(langue, "conditions")}>{d.pied.conditions}</Link>
        <Link href={cheminVers(langue, "mentions-legales")}>{d.pied.mentionsLegales}</Link>
      </nav>

      <p className="lp-foot__mark">{d.commun.marque}</p>
    </footer>
  );
}
