import Link from "next/link";
import { dictionnaire } from "@/lib/i18n";
import { cheminVers, type Page } from "@/lib/i18n/chemins";
import { LANGUES_ACTIVES, NOMS_DES_LANGUES, type Langue } from "@/lib/i18n/langues";

/**
 * Le pied de page du site public.
 *
 * Il porte les liens légaux — c'est là qu'on les cherche, et c'est aussi ce qui
 * les rend explorables : sans lien depuis une page indexée, une page légale
 * n'existe pour aucun moteur, même déclarée dans le sitemap.
 *
 * Absent des pages-cadeau et de la vue d'administration : la personne qui reçoit
 * une carte n'a pas à voir les conditions d'utilisation d'un outil qu'elle
 * n'utilise pas, et la page doit rester celle du donneur, pas celle de MyPresentsForYou.
 *
 * Le selecteur de langue mene a la meme page dans l'autre langue, pas a son
 * accueil : qui lit les conditions et change de langue veut les conditions. Il
 * n'est pas rendu tant qu'une seule langue est active — un choix sans
 * alternative n'en est pas un.
 */
export default function SiteFooter({ langue, page, note }: { langue: Langue; page: Page; note?: string }) {
  const d = dictionnaire(langue);
  return (
    <footer className="lp-foot">
      {note && <p>{note}</p>}

      <nav className="lp-foot__nav" aria-label={d.pied.navigation}>
        <Link href={cheminVers(langue, "questions")}>{d.pied.questions}</Link>
        <Link href={cheminVers(langue, "contact")}>{d.pied.contact}</Link>
        <Link href={cheminVers(langue, "confidentialite")}>{d.pied.confidentialite}</Link>
        <Link href={cheminVers(langue, "conditions")}>{d.pied.conditions}</Link>
        <Link href={cheminVers(langue, "mentions-legales")}>{d.pied.mentionsLegales}</Link>
      </nav>

      {LANGUES_ACTIVES.length > 1 && (
        <nav className="lp-foot__nav" aria-label={d.pied.langues}>
          {LANGUES_ACTIVES.map((l) =>
            l === langue ? (
              <span key={l} lang={l} aria-current="true">
                {NOMS_DES_LANGUES[l]}
              </span>
            ) : (
              <Link key={l} href={cheminVers(l, page)} hrefLang={l} lang={l}>
                {NOMS_DES_LANGUES[l]}
              </Link>
            ),
          )}
        </nav>
      )}

      <p className="lp-foot__mark">{d.commun.marque}</p>
    </footer>
  );
}
