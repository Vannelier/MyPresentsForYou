import { TAILLE_BANNIERE, banniere } from "@/app/banniere";
import { dictionnaire } from "@/lib/i18n";
import { LANGUES_ACTIVES, langueOuDefaut } from "@/lib/i18n/langues";

/*
 * Rendue une fois par langue a la construction, comme la banniere neutre. Sans
 * cette liste, le build la marquait dynamique : composee a chaque requete, avec
 * ses polices a telecharger, pendant qu'un apercu de lien attend.
 */
export function generateStaticParams() {
  return LANGUES_ACTIVES.map((langue) => ({ langue }));
}

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
