import { TAILLE_BANNIERE, banniere } from "@/app/banniere";
import { dictionnaire } from "@/lib/i18n";
import { langueOuDefaut } from "@/lib/i18n/langues";

/*
 * La banniere des pages du site, dans leur langue. Le texte alternatif reste la
 * marque : il est declare une fois pour toutes les langues du segment, et ne
 * peut donc pas en porter une.
 */
export const alt = "MyPresentsForYou";
export const size = TAILLE_BANNIERE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ langue: string }> }) {
  const langue = langueOuDefaut((await params).langue);
  return banniere(dictionnaire(langue).banniere);
}
