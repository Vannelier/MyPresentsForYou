import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GiftView from "@/components/GiftView";
import { lireCarte } from "@/lib/carte";
import { incrementViewCount } from "@/lib/db";
import { baseUrl, publicUrlFor } from "@/lib/env";
import { dictionnaire } from "@/lib/i18n";
import { LANGUE_PAR_DEFAUT, LOCALES, langueOuDefaut } from "@/lib/i18n/langues";
import { RESERVED_SLUGS } from "@/lib/slug";
import { isExpired, isLocked, toPublicPage } from "@/lib/types";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const introuvable = { title: dictionnaire(LANGUE_PAR_DEFAUT).carte.titreIntrouvable };
  if (RESERVED_SLUGS.has(slug)) return introuvable;
  const page = await lireCarte(slug).catch(() => null);
  if (!page) return introuvable;

  const langue = langueOuDefaut(page.theme.langue);
  const d = dictionnaire(langue).carte;
  // Le donneur peut choisir ce que WhatsApp affiche, sans toucher au titre de la page.
  const title = page.link_title.trim() || page.welcome_message || d.titreRepli;
  /*
   * Uniquement l'image choisie par le donneur, jamais celle d'un cadeau.
   *
   * Le repli sur le premier cadeau vendait la meche : l'apercu du lien, dans
   * WhatsApp, affichait l'un des cadeaux avant meme que la carte soit ouverte.
   * Sans image, l'apercu retombe sur la banniere du site (app/opengraph-image).
   */
  const image = page.cover_image_url;
  const url = publicUrlFor(page.slug);

  return {
    metadataBase: new URL(baseUrl()),
    title,
    description: d.ogDescription,
    openGraph: {
      type: "website",
      title,
      description: d.ogDescription,
      url,
      siteName: "MyPresentsForYou",
      locale: LOCALES[langue].og,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description: d.ogDescription,
      images: image ? [image] : undefined,
    },
    robots: { index: false, follow: false },
  };
}

export default async function GiftPageRoute({ params }: Props) {
  const { slug } = await params;
  // Une adresse reservee n'arrive ici que par /carte/<nom> : 404 sans toucher la base.
  if (RESERVED_SLUGS.has(slug)) notFound();

  const page = await lireCarte(slug);
  if (!page) notFound();

  if (isExpired(page)) {
    const d = dictionnaire(langueOuDefaut(page.theme.langue)).carte;
    return (
      <div className="shell shell--flush">
        <div className="state">
          <h1>{d.expireTitre}</h1>
          <p>{d.expireTexte}</p>
        </div>
      </div>
    );
  }

  // Analytics minimal : on ne compte que les consultations de pages actives,
  // pour que le compteur reflète les visites réellement en attente d'un choix.
  if (!isLocked(page)) {
    await incrementViewCount(page.id).catch(() => undefined);
  }

  return <GiftView page={toPublicPage(page)} />;
}
