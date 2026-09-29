import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnTeteSite from "@/components/EnTeteSite";
import SiteFooter from "@/components/SiteFooter";
import ApercuOccasion from "@/components/guides/ApercuOccasion";
import { baseUrl } from "@/lib/env";
import { PALETTES_CATEGORIES, textesGuides } from "@/lib/guides";
import { rechercheMarchand } from "@/lib/marchand";
import { dictionnaire } from "@/lib/i18n";
import { alternatesGuide } from "@/lib/i18n/alternates";
import { CATEGORIES, GUIDES, SUJETS, cheminGuide, cheminVers, estCategorie, type Sujet } from "@/lib/i18n/chemins";
import { LOCALES, langueOuDefaut, type Langue } from "@/lib/i18n/langues";

// Une date par famille : les categories, ecrites plus tard, affichaient la date
// des occasions — une page qui ment sur son age des sa publication.
const MISE_A_JOUR = "2026-09-17";
const MISE_A_JOUR_CATEGORIES = "2026-09-29";

/*
 * Douze guides par langue — six occasions, six categories —, tous rendus a la
 * construction. Le middleware reecrit `/de/geschenkideen/geburtstag` vers
 * `/de/idees-cadeaux/anniversaire` : le parametre est toujours l'identifiant
 * francais. Un seul dossier pour les deux familles, parce que Next n'admet
 * qu'un segment dynamique par niveau ; le parametre garde son nom d'origine.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return SUJETS.map((occasion) => ({ occasion }));
}

type Params = { params: Promise<{ langue: string; occasion: string }> };

async function lire(params: Params["params"]): Promise<{ langue: Langue; guide: Sujet }> {
  const p = await params;
  const guide = SUJETS.find((g) => g === p.occasion);
  if (!guide) notFound();
  return { langue: langueOuDefaut(p.langue), guide };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { langue, guide } = await lire(params);
  const t = contenu(langue, guide);
  return { title: t.titreMeta, description: t.descriptionMeta, alternates: alternatesGuide(langue, guide) };
}

function contenu(langue: Langue, guide: Sujet) {
  const textes = textesGuides(langue);
  return estCategorie(guide) ? textes.categories[guide] : textes.guides[guide];
}

/**
 * Un guide d'occasion : pourquoi laisser choisir, des pistes par profil, un
 * apercu de carte aux couleurs de l'occasion, et l'editeur a un clic, l'occasion
 * deja choisie. Un guide de categorie suit le meme plan, mais n'impose aucune
 * occasion a l'editeur : on hesite sur un parfum pour un anniversaire comme
 * pour Noel.
 *
 * Les questions affichees et le balisage `FAQPage` sortent du meme tableau :
 * Google exige qu'ils coincident.
 */
export default async function GuideOccasion({ params }: Params) {
  const { langue, guide } = await lire(params);
  const d = dictionnaire(langue);
  const textes = textesGuides(langue);
  const t = contenu(langue, guide);
  const categorie = estCategorie(guide);
  const nom = estCategorie(guide) ? textes.categories[guide].nom : d.occasions[guide].nom;
  const miseAJour = categorie ? MISE_A_JOUR_CATEGORIES : MISE_A_JOUR;
  const base = baseUrl();
  const composer = categorie ? cheminVers(langue, "creer") : `${cheminVers(langue, "creer")}?occasion=${guide}`;
  const voisins = categorie
    ? CATEGORIES.filter((c) => c !== guide).map((c) => ({ id: c, nom: textes.categories[c].nom }))
    : GUIDES.filter((g) => g !== guide).map((g) => ({ id: g, nom: d.occasions[g].nom }));

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
        { "@type": "ListItem", position: 3, name: nom, item: `${base}${cheminGuide(langue, guide)}` },
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
          <span aria-current="page">{nom}</span>
        </nav>

        <h1>{t.titre}</h1>
        <p className="prose__chapo">{t.chapo}</p>

        <div className="guide__tete">
          {estCategorie(guide) ? (
            <ApercuOccasion langue={langue} occasion="aucune" palette={PALETTES_CATEGORIES[guide]} idees={t.apercu} />
          ) : (
            <ApercuOccasion langue={langue} occasion={guide} idees={t.apercu} />
          )}
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

        <h2>{categorie ? textes.libelles.autresCategories : textes.libelles.autres}</h2>
        <ul className="guide__autres">
          {voisins.map((v) => (
            <li key={v.id}>
              <Link href={cheminGuide(langue, v.id)}>{v.nom}</Link>
            </li>
          ))}
        </ul>

        <p className="prose__date">
          {textes.libelles.voirAussi} <Link href={cheminVers(langue, "exemple")}>{textes.libelles.exemple}</Link>
          {" · "}
          <Link href={cheminVers(langue, "questions")}>{textes.libelles.questions}</Link>
          <br />
          {textes.libelles.miseAJour}{" "}
          <time dateTime={miseAJour}>
            {new Date(miseAJour).toLocaleDateString(LOCALES[langue].intl, {
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
