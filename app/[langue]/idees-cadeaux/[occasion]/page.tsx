import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnTeteSite from "@/components/EnTeteSite";
import SiteFooter from "@/components/SiteFooter";
import ApercuOccasion from "@/components/guides/ApercuOccasion";
import { baseUrl } from "@/lib/env";
import { textesGuides } from "@/lib/guides";
import { rechercheMarchand } from "@/lib/marchand";
import { dictionnaire } from "@/lib/i18n";
import { alternatesGuide } from "@/lib/i18n/alternates";
import { GUIDES, cheminGuide, cheminVers, type Guide } from "@/lib/i18n/chemins";
import { LOCALES, langueOuDefaut, type Langue } from "@/lib/i18n/langues";

const MISE_A_JOUR = "2026-09-17";

/*
 * Six guides par langue, tous rendus a la construction. Le middleware reecrit
 * `/de/geschenkideen/geburtstag` vers `/de/idees-cadeaux/anniversaire` : le
 * parametre est toujours l'identifiant francais de l'occasion.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((occasion) => ({ occasion }));
}

type Params = { params: Promise<{ langue: string; occasion: string }> };

async function lire(params: Params["params"]): Promise<{ langue: Langue; guide: Guide }> {
  const p = await params;
  const guide = GUIDES.find((g) => g === p.occasion);
  if (!guide) notFound();
  return { langue: langueOuDefaut(p.langue), guide };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { langue, guide } = await lire(params);
  const t = textesGuides(langue).guides[guide];
  return { title: t.titreMeta, description: t.descriptionMeta, alternates: alternatesGuide(langue, guide) };
}

/**
 * Un guide d'occasion : pourquoi laisser choisir, des pistes par profil, un
 * apercu de carte aux couleurs de l'occasion, et l'editeur a un clic, l'occasion
 * deja choisie.
 *
 * Les questions affichees et le balisage `FAQPage` sortent du meme tableau :
 * Google exige qu'ils coincident.
 */
export default async function GuideOccasion({ params }: Params) {
  const { langue, guide } = await lire(params);
  const d = dictionnaire(langue);
  const textes = textesGuides(langue);
  const t = textes.guides[guide];
  const base = baseUrl();
  const composer = `${cheminVers(langue, "creer")}?occasion=${guide}`;

  const donnees = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: langue,
      mainEntity: t.questions.liste.map(({ q, r }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: r },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: textes.libelles.accueil, item: `${base}${cheminVers(langue, "accueil")}` },
        { "@type": "ListItem", position: 2, name: textes.page.titre, item: `${base}${cheminVers(langue, "idees")}` },
        { "@type": "ListItem", position: 3, name: d.occasions[guide].nom, item: `${base}${cheminGuide(langue, guide)}` },
      ],
    },
  ];

  return (
    <main className="landing">
      <EnTeteSite />
      <article className="prose guide">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }} />

        <nav className="guide__fil" aria-label={textes.libelles.fil}>
          <Link href={cheminVers(langue, "accueil")}>{textes.libelles.accueil}</Link>
          {" › "}
          <Link href={cheminVers(langue, "idees")}>{textes.page.titre}</Link>
          {" › "}
          <span aria-current="page">{d.occasions[guide].nom}</span>
        </nav>

        <h1>{t.titre}</h1>
        <p className="prose__chapo">{t.chapo}</p>

        <div className="guide__tete">
          <ApercuOccasion langue={langue} guide={guide} idees={t.apercu} />
          <Link className="btn btn--auto" href={composer}>
            {textes.libelles.composer}
          </Link>
        </div>

        <h2>{t.pourquoi.titre}</h2>
        {t.pourquoi.paragraphes.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>{t.idees.titre}</h2>
        <p>{t.idees.intro}</p>
        <div className="guide__profils">
          {t.idees.profils.map((profil) => (
            <section key={profil.nom} className="guide__profil">
              <h3>{profil.nom}</h3>
              <ul>
                {profil.idees.map((idee) => (
                  <li key={idee.nom}>
                    {/*
                      Un lien de recherche marchande, nu et non affilie : c'est le
                      contenu a liens sortants qu'un reseau d'affiliation attend d'un
                      editeur (le refus Skimlinks du 20/09/2026 tenait a son absence).
                      Nu, parce que la page est vue par le receveur : un tag affilie y
                      poserait le cookie chez qui n'achete pas — l'affiliation ne vit
                      que sur le clic « Acheter » de l'offreur. `nofollow` parce que ce
                      sont des liens commerciaux en masse, pas des choix editoriaux.
                    */}
                    <strong>
                      <a href={rechercheMarchand(langue, idee.nom)} target="_blank" rel="nofollow noopener">
                        {idee.nom}
                      </a>
                    </strong>{" "}
                    — {idee.pourquoi}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <h2>{t.etapes.titre}</h2>
        <ol>
          {t.etapes.liste.map((etape) => (
            <li key={etape}>{etape}</li>
          ))}
        </ol>
        <p className="guide__cta">
          <Link className="btn btn--auto" href={composer}>
            {textes.libelles.composer}
          </Link>
        </p>

        <h2>{t.questions.titre}</h2>
        {t.questions.liste.map(({ q, r }) => (
          <div key={q} className="guide__question">
            <h3>{q}</h3>
            <p>{r}</p>
          </div>
        ))}

        <h2>{textes.libelles.autres}</h2>
        <ul className="guide__autres">
          {GUIDES.filter((g) => g !== guide).map((g) => (
            <li key={g}>
              <Link href={cheminGuide(langue, g)}>{d.occasions[g].nom}</Link>
            </li>
          ))}
        </ul>

        <p className="prose__date">
          {textes.libelles.voirAussi} <Link href={cheminVers(langue, "exemple")}>{textes.libelles.exemple}</Link>
          {" · "}
          <Link href={cheminVers(langue, "questions")}>{textes.libelles.questions}</Link>
          <br />
          {textes.libelles.miseAJour}{" "}
          <time dateTime={MISE_A_JOUR}>
            {new Date(MISE_A_JOUR).toLocaleDateString(LOCALES[langue].intl, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </p>
      </article>
      <SiteFooter langue={langue} />
    </main>
  );
}
