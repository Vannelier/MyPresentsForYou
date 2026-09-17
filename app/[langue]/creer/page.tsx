import type { Metadata } from "next";
import CreateFlow from "@/components/CreateFlow";
import EnTeteSite from "@/components/EnTeteSite";
import { baseUrl } from "@/lib/env";
import { dictionnaire } from "@/lib/i18n";
import { alternatesDe } from "@/lib/i18n/alternates";
import { langueOuDefaut } from "@/lib/i18n/langues";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).creation;
  return {
    title: d.titreMeta,
    description: d.descriptionMeta,
    alternates: alternatesDe(langue, "creer"),
  };
}

export default function CreatePage() {
  const label = baseUrl().replace(/^https?:\/\//, "");
  return (
    <>
      <EnTeteSite />
      <CreateFlow baseUrlLabel={label} />
    </>
  );
}
