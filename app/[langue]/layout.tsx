import type { Metadata, Viewport } from "next";
import { CLASSES_POLICES, METADONNEES_COMMUNES, VIEWPORT } from "../commun";
import { LANGUES_ACTIVES, LOCALES, langueOuDefaut } from "@/lib/i18n/langues";

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

const DESCRIPTION =
  "Compose une petite page-cadeau, envoie le lien, laisse la personne choisir.";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  return {
    ...METADONNEES_COMMUNES,
    title: "MyPresentsForYou — compose une page-cadeau",
    description: DESCRIPTION,
    openGraph: {
      type: "website",
      siteName: "MyPresentsForYou",
      locale: LOCALES[langue].og,
      title: "MyPresentsForYou — offre le choix",
      description: DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: "MyPresentsForYou — offre le choix",
      description: DESCRIPTION,
    },
  };
}

export default async function LayoutSite({ children, params }: Params & { children: React.ReactNode }) {
  const langue = langueOuDefaut((await params).langue);
  return (
    <html lang={langue} className={CLASSES_POLICES}>
      <body>{children}</body>
    </html>
  );
}
