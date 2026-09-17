import Link from "next/link";
import EnTeteSite from "@/components/EnTeteSite";
import SiteFooter from "@/components/SiteFooter";
import { dictionnaire } from "@/lib/i18n";
import { PAGES_LEGALES, cheminVers, type Page } from "@/lib/i18n/chemins";
import { LOCALES, type Langue } from "@/lib/i18n/langues";

/**
 * La coquille commune aux pages de texte : questions, contact, confidentialité,
 * conditions, mentions légales.
 *
 * Un seul `h1` par page, le reste en `h2` : c'est ce que lit un moteur pour
 * comprendre la hiérarchie, et ce que suit un lecteur d'écran pour naviguer.
 * La date de mise à jour est affichée quand elle existe — sur une page qui
 * engage, un texte sans date ne dit pas s'il est encore valable.
 *
 * Une page légale traduite le dit en tête, avec un lien vers la version
 * française : c'est elle qui engage, la traduction n'est donnée que pour
 * information.
 */
export default function TextPage({
  langue,
  page,
  titre,
  chapo,
  miseAJour,
  children,
}: {
  langue: Langue;
  page: Page;
  titre: string;
  chapo?: string;
  miseAJour?: string;
  children: React.ReactNode;
}) {
  const d = dictionnaire(langue);
  const traduite = langue !== "fr" && (PAGES_LEGALES as readonly Page[]).includes(page);
  return (
    <main className="landing">
      <EnTeteSite />
      <article className="prose">
        <Link className="back-link" href={cheminVers(langue, "accueil")}>
          {d.commun.retourAccueil}
        </Link>

        {traduite && (
          <p className="prose__note">
            {d.pageTexte.faitFoiDebut}
            <Link href={cheminVers("fr", page)} hrefLang="fr">
              {d.pageTexte.faitFoiLien}
            </Link>
            {d.pageTexte.faitFoiFin}
          </p>
        )}

        <h1>{titre}</h1>
        {chapo && <p className="prose__chapo">{chapo}</p>}
        {miseAJour && (
          <p className="prose__date">
            {d.pageTexte.miseAJour}{" "}
            <time dateTime={miseAJour}>{formatDate(miseAJour, LOCALES[langue].intl)}</time>
          </p>
        )}

        {children}
      </article>

      <SiteFooter langue={langue} />
    </main>
  );
}

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
