import type { Metadata, Viewport } from "next";
import { DictionnaireProvider } from "@/components/i18n/Dictionnaire";
import { lireCarte } from "@/lib/carte";
import { dictionnaire } from "@/lib/i18n";
import { langueOuDefaut } from "@/lib/i18n/langues";
import { RESERVED_SLUGS } from "@/lib/slug";
import { CLASSES_POLICES, METADONNEES_COMMUNES, VIEWPORT } from "../../commun";

export const viewport: Viewport = VIEWPORT;
export const metadata: Metadata = METADONNEES_COMMUNES;

/*
 * `<html lang>` et le dictionnaire suivent la langue de la carte, choisie a sa
 * creation. La carte est lue ici puis dans la page, une seule fois grace a
 * `lireCarte`. Base injoignable ou carte absente : le francais, et la page
 * dira le reste.
 */
export default async function LayoutCarte({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carte = RESERVED_SLUGS.has(slug) ? null : await lireCarte(slug).catch(() => null);
  const langue = langueOuDefaut(carte?.theme.langue);
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
