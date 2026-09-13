import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { dictionnaire } from "@/lib/i18n";
import { cheminVers } from "@/lib/i18n/chemins";
import { langueOuDefaut, type Langue } from "@/lib/i18n/langues";

type Params = { params: Promise<{ langue: string }> };

/*
 * Le titre porte ce qu'on cherche, pas ce qu'on est.
 *
 * « MyPresentsForYou — offre le choix » ne se trouve qu'en tapant « MyPresentsForYou », c'est-à-dire
 * en connaissant déjà le site. Le titre décrit donc d'abord l'action — offrir en
 * laissant choisir — et garde la marque en fin de ligne, là où elle ne prend pas
 * la place des mots utiles. Environ 60 signes : au-delà, Google coupe.
 */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).accueil;
  return {
    title: d.titreMeta,
    description: d.descriptionMeta,
    alternates: { canonical: cheminVers(langue, "accueil") },
    keywords: d.motsCles,
  };
}

/*
 * Décrit le site pour les moteurs : de quoi il s'agit, et que c'est gratuit.
 * `WebApplication` plutôt que `WebSite` — c'est un outil qu'on utilise, pas un
 * contenu qu'on lit — et un `offers` à zéro, qui est la façon normalisée de dire
 * « gratuit » plutôt que de l'espérer compris depuis la description.
 */
function donneesStructurees(langue: Langue) {
  const d = dictionnaire(langue).accueil.donnees;
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MyPresentsForYou",
    applicationCategory: "LifestyleApplication",
    operatingSystem: d.systeme,
    inLanguage: langue,
    description: d.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: d.fonctions,
  };
}

export default async function LandingPage({ params }: Params) {
  const langue = langueOuDefaut((await params).langue);
  const tout = dictionnaire(langue);
  const d = tout.accueil;
  const creer = cheminVers(langue, "creer");

  return (
    <main className="landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees(langue)) }}
      />
      {/* --- Accroche : la promesse, la preuve, l'action, en un seul écran. --- */}
      <section className="lp-hero">
        <div className="lp-hero__text">
          <p className="eyebrow">{tout.commun.marque}</p>
          <h1>{d.titre}</h1>
          <p className="lp-sub">{d.sousTitre}</p>
          <div className="lp-cta">
            <Link className="btn btn--auto" href={creer}>
              {d.composer}
            </Link>
            <Link className="btn btn--ghost btn--auto" href={cheminVers(langue, "exemple")}>
              {d.voirExemple}
            </Link>
            <span className="lp-cta__note">{d.note}</span>
          </div>
        </div>

        {/* Maquette figée, purement décorative : la vraie page est rendue par GiftView. */}
        <div className="lp-phone" aria-hidden="true">
          <div className="lp-phone__screen">
            <p className="eyebrow">{d.telephone.surtitre}</p>
            <p className="lp-phone__title">{d.telephone.titre}</p>
            <div className="lp-phone__cards">
              <div className="lp-phone__card">
                <span className="lp-phone__thumb lp-phone__thumb--a" />
                <span className="lp-phone__label">{d.telephone.cadeaux[0]}</span>
              </div>
              <div className="lp-phone__card is-picked">
                <span className="lp-phone__thumb lp-phone__thumb--b" />
                <span className="lp-phone__label">{d.telephone.cadeaux[1]}</span>
                <span className="lp-phone__check">✓</span>
              </div>
              <div className="lp-phone__card">
                <span className="lp-phone__thumb lp-phone__thumb--c" />
                <span className="lp-phone__label">{d.telephone.cadeaux[2]}</span>
              </div>
            </div>
            <span className="lp-phone__button">{d.telephone.confirmer}</span>
          </div>
        </div>
      </section>

      {/* --- Le mécanisme. Une phrase par étape, pas plus. --- */}
      <section className="lp-steps">
        <ol>
          {d.etapes.map((etape, i) => (
            <li key={etape.titre}>
              <span className="lp-step__num">{i + 1}</span>
              <h2>{etape.titre}</h2>
              <p>{etape.texte}</p>
            </li>
          ))}
        </ol>
      </section>

      {/*
        Ce que le donneur y gagne, pas ce que l'outil sait faire. Une liste de
        reglages — palettes, polices, occasions — decrivait le produit sans
        jamais dire pourquoi on s'en servirait.

        Titres en <p> et non en titres de niveau : la section n'a pas de titre
        propre, et un h3 ici se rattacherait a la derniere etape ci-dessus.
      */}
      <section className="lp-craft">
        <ul className="lp-craft__grid">
          {d.avantages.map((avantage) => (
            <li key={avantage.titre}>
              <p className="lp-craft__title">{avantage.titre}</p>
              <p>{avantage.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* --- Objections, une ligne chacune. --- */}
      <section className="lp-notes">
        {d.objections.map((objection) => (
          <div key={objection.titre}>
            <p className="lp-notes__title">{objection.titre}</p>
            <p>{objection.texte}</p>
          </div>
        ))}
      </section>

      <section className="lp-final">
        <h2>{d.finTitre}</h2>
        <p>{d.finTexte}</p>
        <Link className="btn btn--auto" href={creer}>
          {d.composer}
        </Link>
      </section>

      <SiteFooter langue={langue} note={d.piedNote} />
    </main>
  );
}
