import type { Metadata } from "next";
import { PAGES_EN_FRANCAIS, cheminVers, type Page } from "./chemins";
import { LANGUES_ACTIVES, type Langue } from "./langues";

/*
 * Les versions d'une page dans chaque langue active, pour `hreflang` : sans
 * elles, un moteur voit des pages presque identiques et en garde une au hasard,
 * au lieu de servir a chacun la sienne. Seules les langues actives y figurent :
 * annoncer une version que le middleware refuse enverrait les robots sur une 404.
 */
export function variantes(page: Page, base = ""): Record<string, string> {
  const liens: Record<string, string> = Object.fromEntries(
    LANGUES_ACTIVES.map((l) => [l, `${base}${cheminVers(l, page)}`]),
  );
  // `/` choisit la langue du navigateur : c'est exactement ce que `x-default`
  // designe. Seul l'accueil a une telle adresse.
  if (page === "accueil") liens["x-default"] = `${base}/`;
  return liens;
}

/**
 * Canonique dans la langue de la page, et ses versions dans les autres.
 *
 * Une page dont le texte n'existe qu'en francais n'a qu'une version : sa
 * canonique est la francaise, quelle que soit l'adresse, et elle n'annonce
 * aucune autre langue — une page « anglaise » qui dit la meme chose en
 * francais serait un doublon, pas une traduction.
 */
export function alternatesDe(langue: Langue, page: Page): Metadata["alternates"] {
  if (PAGES_EN_FRANCAIS.includes(page)) return { canonical: cheminVers("fr", page) };
  return { canonical: cheminVers(langue, page), languages: variantes(page) };
}
