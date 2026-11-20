import type { Metadata } from "next";
import { TAILLE_BANNIERE } from "@/app/banniere";
import { dictionnaire } from "@/lib/i18n";
import { LOCALES, type Langue } from "@/lib/i18n/langues";

/*
 * L'apercu de partage d'une page qui a son propre titre.
 *
 * Un `openGraph` de page remplace celui du layout en entier, sans fusion :
 * type, nom du site et langue y sont repetes. Sans lui, la page herite du
 * titre generique du site — c'etait le cas des guides, partages sous
 * « MyPresentsForYou, create an animated gift page. » quel que soit le guide
 * (mesure dans le HTML servi, novembre 2026).
 *
 * L'image est citee a la main : des que la page declare son propre openGraph,
 * celle du fichier app/[langue]/opengraph-image.tsx ne sort plus — mesure dans
 * le HTML servi, aucune og:image. Ses dimensions et son texte alternatif
 * viennent de ce fichier, pour suivre la banniere si elle change.
 */
export function apercuPartage(
  langue: Langue,
  url: string,
  titre: string,
  description: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const image = `/${langue}/opengraph-image`;
  return {
    openGraph: {
      type: "website",
      siteName: "MyPresentsForYou",
      locale: LOCALES[langue].og,
      url,
      title: titre,
      description,
      images: [
        {
          url: image,
          width: TAILLE_BANNIERE.width,
          height: TAILLE_BANNIERE.height,
          alt: dictionnaire(langue).site.titrePartage,
        },
      ],
    },
    twitter: { card: "summary_large_image", title: titre, description, images: [image] },
  };
}
