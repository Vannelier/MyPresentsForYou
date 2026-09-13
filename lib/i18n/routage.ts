import { CHEMINS, cheminVers, pageDansUneLangue, pageDuSegment } from "./chemins";
import { LANGUES_ACTIVES, estLangue, langueDuNavigateur, type Langue } from "./langues";

/*
 * Les regles du middleware, en fonction pure : testees sans serveur, et le
 * middleware n'a plus qu'a les appliquer.
 */
export type Decision =
  | { type: "suite" }
  | { type: "redirection"; vers: string; permanente: boolean }
  | { type: "reecriture"; vers: string };

// Le format des slugs de carte, celui de la contrainte en base.
const SLUG = /^[a-z0-9][a-z0-9-]{1,58}[a-z0-9]$/;

/*
 * Ce qui ne passe jamais par le routage des langues : l'API, l'administration,
 * les cartes deja reecrites, et les routes de metadonnees sans point dans leur
 * nom. Les autres (robots.txt, favicon.ico...) portent un point, et sont
 * ecartees a ce titre.
 */
const PASSANTS = new Set(["api", "admin", "carte", "_next", "opengraph-image", "twitter-image", "icon", "apple-icon"]);

export function router(
  chemin: string,
  acceptLanguage: string | null,
  actives: readonly Langue[] = LANGUES_ACTIVES,
): Decision {
  const segments = chemin.split("/").filter(Boolean);
  const premier = segments[0];
  const introuvable = (): Decision => ({
    type: "reecriture",
    vers: `/${langueDuNavigateur(acceptLanguage, actives)}/introuvable`,
  });

  // « / » : la langue du navigateur. Temporaire, puisqu'elle depend du visiteur.
  if (!premier) {
    return { type: "redirection", vers: `/${langueDuNavigateur(acceptLanguage, actives)}`, permanente: false };
  }
  if (PASSANTS.has(premier) || premier.includes(".")) return { type: "suite" };

  /*
   * Une langue n'est jamais prise pour une carte, meme inactive : un slug fait
   * trois caracteres au moins, une langue deux. Une langue inactive mene a la
   * page introuvable plutot que de servir du francais sous son adresse.
   */
  if (estLangue(premier)) {
    if (!actives.includes(premier)) return introuvable();
    if (segments.length !== 2) return { type: "suite" };
    const segment = segments[1];
    const page = pageDuSegment(premier, segment);
    if (page) {
      const dossier = CHEMINS[page].fr;
      return dossier === segment ? { type: "suite" } : { type: "reecriture", vers: `/${premier}/${dossier}` };
    }
    // Le mot d'une autre langue (`/en/creer`) : on redirige vers le bon.
    const ailleurs = pageDansUneLangue(segment);
    if (ailleurs) return { type: "redirection", vers: cheminVers(premier, ailleurs), permanente: true };
    return { type: "suite" };
  }

  if (segments.length === 1) {
    // Les adresses d'avant le multilingue, toutes en francais.
    const page = pageDuSegment("fr", premier);
    if (page) return { type: "redirection", vers: cheminVers("fr", page), permanente: true };
    if (SLUG.test(premier)) return { type: "reecriture", vers: `/carte/${premier}` };
  }
  return introuvable();
}
