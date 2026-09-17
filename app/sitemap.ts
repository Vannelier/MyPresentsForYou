import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/env";
import { variantes } from "@/lib/i18n/alternates";
import { GUIDES, cheminGuide, cheminVers, type Page } from "@/lib/i18n/chemins";
import { LANGUES_ACTIVES } from "@/lib/i18n/langues";

/**
 * Les pages publiques, et elles seules : les pages-cadeau sont privées et
 * marquées `noindex`, les inscrire ici reviendrait à publier la liste des liens
 * envoyés.
 *
 * Les mentions légales n'y figurent pas non plus — elles portent `noindex` : une
 * page d'identité de l'éditeur n'a rien à faire dans un index de recherche, mais
 * elle reste atteignable par le pied de page.
 *
 * Chaque page y figure une fois par langue active, avec ses versions dans les
 * autres. L'accueil y est sous `/fr`, et non `/` : la racine redirige selon le
 * navigateur, et une adresse qui redirige n'a rien a faire dans un sitemap.
 *
 * Les guides par occasion suivent, une entree par guide et par langue : ce sont
 * les pages ecrites pour etre trouvees, elles passent devant le contact.
 */
const PAGES_PUBLIQUES: [page: Page, priorite: number][] = [
  ["accueil", 1],
  ["creer", 0.9],
  ["questions", 0.8],
  ["exemple", 0.7],
  ["idees", 0.7],
  ["contact", 0.4],
  ["confidentialite", 0.3],
  ["conditions", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = baseUrl();
  return LANGUES_ACTIVES.flatMap((langue) => [
    ...PAGES_PUBLIQUES.map(([page, priority]) => ({
      url: `${base}${cheminVers(langue, page)}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: variantes(page, base) },
    })),
    ...GUIDES.map((guide) => ({
      url: `${base}${cheminGuide(langue, guide)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(LANGUES_ACTIVES.map((l) => [l, `${base}${cheminGuide(l, guide)}`])),
      },
    })),
  ]);
}
