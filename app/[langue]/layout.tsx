import type { Metadata, Viewport } from "next";
import { DictionnaireProvider } from "@/components/i18n/Dictionnaire";
import { dictionnaire } from "@/lib/i18n";
import { LANGUES_ACTIVES, LOCALES, langueOuDefaut } from "@/lib/i18n/langues";
import { CLASSES_POLICES, METADONNEES_COMMUNES, VIEWPORT } from "../commun";

export const viewport: Viewport = VIEWPORT;

/*
 * Seules les langues actives existent : les autres n'ont pas encore de
 * dictionnaire. Sans `dynamicParams` a false, `/en` rendrait du francais sous
 * une adresse anglaise.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUES_ACTIVES.map((langue) => ({ langue }));
}

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).site;
  return {
    ...METADONNEES_COMMUNES,
    title: d.titreMeta,
    description: d.descriptionMeta,
    openGraph: {
      type: "website",
      siteName: "MyPresentsForYou",
      locale: LOCALES[langue].og,
      title: d.titrePartage,
      description: d.descriptionMeta,
    },
    twitter: {
      card: "summary_large_image",
      title: d.titrePartage,
      description: d.descriptionMeta,
    },
  };
}

export default async function LayoutSite({ children, params }: Params & { children: React.ReactNode }) {
  const langue = langueOuDefaut((await params).langue);
  return (
    <html lang={langue} className={CLASSES_POLICES}>
      <body>
        <DictionnaireProvider langue={langue} d={dictionnaire(langue)}>
          {children}
        </DictionnaireProvider>
      </body>
    </html>
  );
}
