import type { Metadata } from "next";
import TextPage from "@/components/TextPage";
import { TEXTES_LEGAUX } from "@/components/legal";
import { alternatesDe } from "@/lib/i18n/alternates";
import { langueOuDefaut } from "@/lib/i18n/langues";

const MISE_A_JOUR = "2026-09-17";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const t = TEXTES_LEGAUX.conditions[langue];
  return {
    title: t.titreMeta,
    description: t.descriptionMeta,
    alternates: alternatesDe(langue, "conditions"),
  };
}

export default async function Conditions({ params }: Params) {
  const langue = langueOuDefaut((await params).langue);
  const t = TEXTES_LEGAUX.conditions[langue];
  return (
    <TextPage langue={langue} page="conditions" titre={t.titre} chapo={t.chapo} miseAJour={MISE_A_JOUR}>
      <t.Corps langue={langue} />
    </TextPage>
  );
}
