import type { Metadata, Viewport } from "next";
import { DictionnaireProvider } from "@/components/i18n/Dictionnaire";
import { lireCarteAdmin } from "@/lib/carte";
import { dictionnaire } from "@/lib/i18n";
import { langueOuDefaut } from "@/lib/i18n/langues";
import { CLASSES_POLICES, METADONNEES_COMMUNES, VIEWPORT } from "../../commun";

export const viewport: Viewport = VIEWPORT;
export const metadata: Metadata = METADONNEES_COMMUNES;

/*
 * L'administration parle la langue de la carte : c'est l'offreur qui la lit,
 * et il l'a composee dans cette langue. Lue une seule fois, comme pour la carte.
 */
export default async function LayoutAdmin({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const carte = await lireCarteAdmin(token).catch(() => null);
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
