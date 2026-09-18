import type { Metadata } from "next";
import Link from "next/link";
import EnTeteSite from "@/components/EnTeteSite";
import GiftMotif from "@/components/GiftMotif";
import SiteFooter from "@/components/SiteFooter";
import { baseUrl } from "@/lib/env";
import { textesGuides } from "@/lib/guides";
import { dictionnaire } from "@/lib/i18n";
import { alternatesDe } from "@/lib/i18n/alternates";
import { GUIDES, cheminGuide, cheminVers } from "@/lib/i18n/chemins";
import { langueOuDefaut } from "@/lib/i18n/langues";
import { occasionById } from "@/lib/occasions";
import { paletteStyle } from "@/lib/palettes";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const t = textesGuides(langue).page;
  return { title: t.titreMeta, description: t.descriptionMeta, alternates: alternatesDe(langue, "idees") };
}

/**
 * La page qui reunit les guides par occasion. Elle donne aux guides un parent
 * dans le fil d'Ariane et un point d'entree depuis le pied de page de tout le
 * site : sans lien depuis une page indexee, un guide n'existerait pour aucun
 * moteur, meme declare dans le sitemap.
 */
export default async function IdeesCadeaux({ params }: Params) {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue);
  const textes = textesGuides(langue);
  const base = baseUrl();

  const fil = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: textes.libelles.accueil, item: `${base}${cheminVers(langue, "accueil")}` },
      { "@type": "ListItem", position: 2, name: textes.page.titre, item: `${base}${cheminVers(langue, "idees")}` },
    ],
  };

  return (
    <main className="landing">
      <EnTeteSite />
      <article className="prose guides">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fil) }} />
        <h1>{textes.page.titre}</h1>
        <p className="prose__chapo">{textes.page.chapo}</p>

        <ul className="guides-grille">
          {GUIDES.map((guide) => {
            const occasion = occasionById(guide);
            return (
              <li key={guide} style={paletteStyle({ id: occasion.palette })}>
                <Link href={cheminGuide(langue, guide)}>
                  <GiftMotif kind={occasion.motif} echelle={0.6} />
                  <span className="guides-carte__nom">{d.occasions[guide].nom}</span>
                  <span className="guides-carte__texte">{textes.guides[guide].accroche}</span>
                  <span className="guides-carte__lire">{textes.libelles.lire} →</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
      <SiteFooter langue={langue} />
    </main>
  );
}
