import type { Metadata } from "next";
import TextPage from "@/components/TextPage";
import { TEXTES_LEGAUX } from "@/components/legal";
import { alternatesDe } from "@/lib/i18n/alternates";
import { langueOuDefaut } from "@/lib/i18n/langues";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const t = TEXTES_LEGAUX["mentions-legales"][langue];
  return {
    title: t.titreMeta,
    description: t.descriptionMeta,
    alternates: alternatesDe(langue, "mentions-legales"),
    // Une page de mentions n'apporte rien dans un index de recherche, mais elle
    // doit rester atteignable : `follow` laisse passer le lien vers le reste.
    robots: { index: false, follow: true },
  };
}

export default async function MentionsLegales({ params }: Params) {
  const langue = langueOuDefaut((await params).langue);
  const t = TEXTES_LEGAUX["mentions-legales"][langue];
  return (
    <TextPage langue={langue} page="mentions-legales" titre={t.titre} chapo={t.chapo}>
      <t.Corps langue={langue} />
    </TextPage>
  );
}
