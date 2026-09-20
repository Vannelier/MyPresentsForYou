import type { Langue } from "@/lib/i18n/langues";

/*
 * Le domaine Amazon par langue. Amazon plutot qu'un autre marchand : c'est le
 * seul present dans les six marches du site, et un partenaire Skimlinks dans
 * chacun — donc le lien « Acheter » de l'offreur (le seul chemin affilie du
 * site) commissionnera une fois le compte actif, sans qu'on ait rien a detecter.
 *
 * Cle par langue et non par pays de la locale : `fr` et `nl` portent une locale
 * belge (fr-BE, nl-BE), mais amazon.com.be est recent et moins fourni ;
 * amazon.fr et amazon.nl, etablis et livrant la Belgique, servent mieux.
 */
const DOMAINE: Record<Langue, string> = {
  fr: "amazon.fr",
  en: "amazon.co.uk",
  it: "amazon.it",
  es: "amazon.es",
  de: "amazon.de",
  nl: "amazon.nl",
};

/**
 * Une URL de recherche marchande pour une idee de cadeau, dans la langue donnee.
 *
 * Lien nu, sans tag d'affiliation, et c'est structurel : sur une page publique —
 * un guide vu par le receveur — un lien affilie poserait le cookie chez qui
 * n'achete pas, ce que le modele economique exclut (« aucun lien affilie hors du
 * chemin d'achat de l'offreur »). L'affiliation ne s'ajoute qu'au clic
 * « Acheter » de l'offreur, cote serveur, par `lienSortant`.
 *
 * `URLSearchParams` encode la requete : sans lui, un « & » dans une idee
 * couperait le parametre `k` et la recherche partirait tronquee.
 */
export function rechercheMarchand(langue: Langue, requete: string): string {
  const params = new URLSearchParams({ k: requete });
  return `https://www.${DOMAINE[langue]}/s?${params}`;
}
