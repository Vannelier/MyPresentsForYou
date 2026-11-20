import type { Metadata } from "next";
import Link from "next/link";
import GiftView from "@/components/GiftView";
import SelecteurLangue from "@/components/i18n/SelecteurLangue";
import { exemple } from "@/lib/exemple";
import { dictionnaire } from "@/lib/i18n";
import { alternatesDe } from "@/lib/i18n/alternates";
import { cheminVers } from "@/lib/i18n/chemins";
import { langueOuDefaut } from "@/lib/i18n/langues";
import { apercuPartage } from "@/lib/partage";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).exemple;
  const url = cheminVers(langue, "exemple");
  return {
    title: d.titreMeta,
    description: d.descriptionMeta,
    alternates: alternatesDe(langue, "exemple"),
    ...apercuPartage(langue, url, d.titreMeta, d.descriptionMeta),
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
 *
 * Le selecteur de langue loge dans le bandeau plutot que dans une tete a part :
 * la page occupe la fenetre, et une seconde barre la decalerait.
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
        <SelecteurLangue variante="ruban" />
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
