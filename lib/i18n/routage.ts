import {
  CHEMINS,
  cheminGuide,
  cheminVers,
  guideDansUneLangue,
  guideDuSegment,
  pageDansUneLangue,
  pageDuSegment,
} from "./chemins";
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
    if (segments.length === 3) return routerGuide(premier, segments[1], segments[2]) ?? introuvable();
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

/*
 * Un guide d'occasion, `/<langue>/<idees>/<occasion>` : deux mots traduits, et un
 * dossier francais pour les deux. Le mot d'une autre langue, a l'une ou l'autre
 * place, redirige vers la bonne adresse ; une occasion inconnue rend `null`, que
 * l'appelant mene a la page introuvable. Hors de la page des idees, rien ne
 * change : les autres adresses a trois segments suivent leur chemin.
 */
function routerGuide(langue: Langue, rubrique: string, occasion: string): Decision | null {
  if ((pageDuSegment(langue, rubrique) ?? pageDansUneLangue(rubrique)) !== "idees") return { type: "suite" };
  const guide = guideDuSegment(langue, occasion);
  if (guide && rubrique === CHEMINS.idees[langue]) {
    const dossier = `/${langue}/${CHEMINS.idees.fr}/${guide}`;
    return `/${langue}/${rubrique}/${occasion}` === dossier ? { type: "suite" } : { type: "reecriture", vers: dossier };
  }
  const ailleurs = guide ?? guideDansUneLangue(occasion);
  return ailleurs ? { type: "redirection", vers: cheminGuide(langue, ailleurs), permanente: true } : null;
}
