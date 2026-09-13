import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { dictionnaire } from "@/lib/i18n";
import { cheminVers } from "@/lib/i18n/chemins";
import { LOCALES, type Langue } from "@/lib/i18n/langues";

/**
 * La coquille commune aux pages de texte : questions, contact, confidentialité,
 * conditions, mentions légales.
 *
 * Un seul `h1` par page, le reste en `h2` : c'est ce que lit un moteur pour
 * comprendre la hiérarchie, et ce que suit un lecteur d'écran pour naviguer.
 * La date de mise à jour est affichée quand elle existe — sur une page qui
 * engage, un texte sans date ne dit pas s'il est encore valable.
 */
export default function TextPage({
  langue,
  titre,
  chapo,
  miseAJour,
  children,
}: {
  langue: Langue;
  titre: string;
  chapo?: string;
  miseAJour?: string;
  children: React.ReactNode;
}) {
  const d = dictionnaire(langue);
  return (
    <main className="landing">
      <article className="prose">
        <Link className="back-link" href={cheminVers(langue, "accueil")}>
          {d.commun.retourAccueil}
        </Link>

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
