import type { Metadata } from "next";
import Link from "next/link";
import GiftView from "@/components/GiftView";
import { exemple } from "@/lib/exemple";
import { dictionnaire } from "@/lib/i18n";
import { alternatesDe } from "@/lib/i18n/alternates";
import { cheminVers } from "@/lib/i18n/chemins";
import { LOCALES, langueOuDefaut } from "@/lib/i18n/langues";
import { TAILLE_BANNIERE } from "@/app/banniere";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).exemple;
  const url = cheminVers(langue, "exemple");
  return {
    title: d.titreMeta,
    description: d.descriptionMeta,
    alternates: alternatesDe(langue, "exemple"),
    /*
     * Un `openGraph` de page remplace celui du layout en entier, sans fusion :
     * type, nom du site et langue y sont repetes. L'exemple se partage — c'est
     * ce qui justifiait une page plutot qu'un apercu — et son titre doit le dire.
     *
     * L'image, en revanche, est citee a la main : des que la page declare son
     * propre openGraph, celle du fichier app/[langue]/opengraph-image.tsx ne sort plus —
     * mesure dans le HTML servi, aucune og:image. Ses dimensions et son texte
     * alternatif viennent de ce fichier, pour suivre la banniere si elle change.
     */
    openGraph: {
      type: "website",
      siteName: "MyPresentsForYou",
      locale: LOCALES[langue].og,
      url,
      title: d.titreMeta,
      description: d.descriptionMeta,
      images: [
        {
          url: `/${langue}/opengraph-image`,
          width: TAILLE_BANNIERE.width,
          height: TAILLE_BANNIERE.height,
          alt: dictionnaire(langue).site.titrePartage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: d.titreMeta,
      description: d.descriptionMeta,
      images: [`/${langue}/opengraph-image`],
    },
  };
}

/*
 * Une page-cadeau figee, jouee en mode apercu : on leve le voile, on choisit,
 * on confirme, on ecrit un mot, et rien ne part. `scripts/check.ts` refuse
 * qu'elle quitte ce mode.
 *
 * Le bandeau est celui de l'apercu de l'editeur. Le voile, en position fixe et
 * au-dessus, le recouvre pendant l'ouverture : on arrive ici par un bouton qui
 * dit deja « exemple ». Elle occupe la fenetre, comme une vraie page :
 * `pleineFenetre` lui rend le verrou du defilement sous le voile et la
 * remontee a l'ouverture, que l'editeur tient lui-meme autour de son apercu.
 */
export default async function ExemplePage({ params }: Params) {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).exemple;
  const creer = cheminVers(langue, "creer");
  return (
    <>
      <div className="preview-ribbon">
        {d.bandeau}
        <Link className="preview-ribbon__exit" href={creer}>
          {d.composerLaMienne}
        </Link>
      </div>
      <GiftView
        page={exemple(langue)}
        mode="preview"
        pleineFenetre
        lienSortie={{ libelle: d.composer, href: creer }}
      />
    </>
  );
}
