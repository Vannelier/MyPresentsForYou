/*
 * Les six langues du projet. Le socle n'en active qu'une : les autres
 * arrivent avec leurs dictionnaires, et une langue sans dictionnaire servirait
 * du francais sous une adresse etrangere.
 *
 * Aucun import Node : ce module sert aussi au middleware, qui tourne en Edge.
 */
export const LANGUES = ["fr", "en", "it", "es", "de", "nl"] as const;
export type Langue = (typeof LANGUES)[number];

export const LANGUES_ACTIVES: readonly Langue[] = ["fr"];

/** La langue d'une carte creee avant le multilingue, ou dont l'identifiant est inconnu. */
export const LANGUE_PAR_DEFAUT: Langue = "fr";

/*
 * L'en-tete par lequel le navigateur dit aux routes d'API la langue de la page
 * ou il se trouve. Une route d'API n'a pas d'adresse traduite pour la porter, et
 * un cookie ferait de la langue un etat garde, alors qu'elle suit l'adresse.
 */
export const EN_TETE_LANGUE = "x-langue";

export const LOCALES: Record<Langue, { intl: string; og: string }> = {
  fr: { intl: "fr-BE", og: "fr_BE" },
  en: { intl: "en-GB", og: "en_GB" },
  it: { intl: "it-IT", og: "it_IT" },
  es: { intl: "es-ES", og: "es_ES" },
  de: { intl: "de-DE", og: "de_DE" },
  nl: { intl: "nl-BE", og: "nl_BE" },
};

export function estLangue(x: unknown): x is Langue {
  return typeof x === "string" && (LANGUES as readonly string[]).includes(x);
}

export function langueOuDefaut(x: unknown): Langue {
  return estLangue(x) ? x : LANGUE_PAR_DEFAUT;
}

/**
 * La langue d'un visiteur, d'apres `Accept-Language`, parmi les langues
 * actives. A defaut, l'anglais — la langue la plus partagee — s'il est actif,
 * sinon la premiere active.
 */
export function langueDuNavigateur(
  entete: string | null,
  actives: readonly Langue[] = LANGUES_ACTIVES,
): Langue {
  const voeux = (entete ?? "")
    .split(",")
    .map((morceau) => {
      const [balise, ...params] = morceau.trim().toLowerCase().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { langue: balise.split("-")[0], poids: q ? Number(q.slice(2)) : 1 };
    })
    .filter((v) => v.langue && Number.isFinite(v.poids) && v.poids > 0)
    .sort((a, b) => b.poids - a.poids);
  for (const v of voeux) {
    if (estLangue(v.langue) && actives.includes(v.langue)) return v.langue;
  }
  return actives.includes("en") ? "en" : actives[0];
}
