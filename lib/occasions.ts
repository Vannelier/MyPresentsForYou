/**
 * Occasions : un thème complet, pas seulement des couleurs.
 *
 * Choisir une occasion pose d'un coup une palette, un décor et des formulations
 * de départ. Tout reste modifiable ensuite — l'occasion propose, elle n'impose
 * rien. Comme pour les palettes, seul l'identifiant est stocké en base.
 *
 * Aucun import Node : ce module part dans le bundle navigateur.
 */
import type { PaletteId } from "./palettes";

export type MotifKind =
  | "none"
  | "confetti"
  | "flocons"
  | "coeurs"
  | "etoiles"
  | "guirlande"
  | "feuilles"
  | "pattes"
  | "pieds"
  | "bougies"
  | "cadeaux"
  | "alliances";

export type OccasionId =
  | "aucune"
  | "anniversaire"
  | "noel"
  | "saint-valentin"
  | "naissance"
  | "merci"
  | "felicitations"
  | "fete-des-meres"
  | "fete-des-peres"
  | "mariage"
  | "reussite"
  | "cremaillere"
  | "retraite"
  | "nouvel-an"
  | "pot-de-depart"
  | "animaux";

/** Rubrique du sélecteur, par identifiant. `null` = affichée en tête, sans titre. */
export type OccasionGroup = "calendrier" | "etapes" | "mot" | "theme";

/*
 * Les mots d'une occasion — son nom, sa ligne d'intro, ses suggestions — vivent
 * dans les dictionnaires (lib/i18n), indexes par identifiant. Ce module ne garde
 * que ce qui ne se traduit pas.
 */
export type Occasion = {
  id: OccasionId;
  group: OccasionGroup | null;
  /** Pictogramme du sélecteur, jamais affiché sur la page-cadeau. */
  icon: string;
  palette: PaletteId;
  motif: MotifKind;
  /** Effet proposé par défaut, comme la palette et le décor. */
  effect: EffectId;
};

export const OCCASIONS: Occasion[] = [
  {
    id: "aucune",
    group: null,
    icon: "◇",
    palette: "terracotta",
    motif: "none",
    effect: "aucun",
  },
  {
    id: "anniversaire",
    group: "etapes",
    icon: "✻",
    palette: "terracotta",
    // Le fond portait des confettis, comme l'effet : le meme signe deux fois.
    motif: "bougies",
    effect: "confettis",
  },
  {
    id: "noel",
    group: "calendrier",
    icon: "❄",
    palette: "sapin",
    motif: "flocons",
    effect: "neige",
  },
  {
    id: "saint-valentin",
    group: "calendrier",
    icon: "♥",
    palette: "rose",
    motif: "coeurs",
    effect: "petales",
  },
  {
    id: "naissance",
    group: "etapes",
    icon: "✦",
    palette: "brume",
    /*
     * Des pas de bebe, et non des etoiles : le decor dit desormais de qui il est
     * question. Les etoiles restent au catalogue, elles servent ailleurs.
     */
    motif: "pieds",
    effect: "bulles",
  },
  {
    id: "felicitations",
    group: "mot",
    icon: "✵",
    palette: "encre",
    motif: "guirlande",
    effect: "confettis",
  },
  {
    id: "merci",
    group: "mot",
    icon: "❖",
    palette: "olive",
    motif: "none",
    effect: "petales",
  },
  {
    id: "fete-des-meres",
    group: "calendrier",
    icon: "❀",
    palette: "prune",
    motif: "coeurs",
    effect: "petales",
  },
  {
    id: "fete-des-peres",
    group: "calendrier",
    icon: "◈",
    palette: "encre",
    motif: "cadeaux",
    effect: "aucun",
  },
  {
    id: "nouvel-an",
    group: "calendrier",
    icon: "❉",
    palette: "ivoire",
    motif: "confetti",
    effect: "poussiere",
  },
  {
    id: "mariage",
    group: "etapes",
    icon: "✧",
    palette: "ivoire",
    motif: "alliances",
    effect: "poussiere",
  },
  {
    id: "reussite",
    group: "etapes",
    icon: "✶",
    palette: "encre",
    motif: "confetti",
    effect: "poussiere",
  },
  {
    id: "cremaillere",
    group: "etapes",
    icon: "⌂",
    palette: "olive",
    motif: "feuilles",
    effect: "ballons",
  },
  {
    id: "retraite",
    group: "etapes",
    icon: "❋",
    palette: "brume",
    motif: "feuilles",
    effect: "feuilles",
  },
  {
    id: "pot-de-depart",
    group: "etapes",
    icon: "→",
    palette: "olive",
    motif: "cadeaux",
    effect: "ballons",
  },
  /*
   * Une occasion qui n'en est pas une : elle ne repond ni a une date ni a une
   * etape, seulement a ce qui vit dans la maison. D'ou sa rubrique a elle.
   *
   * La palette noisette existe pour celle-ci : ni terracotta, qui est un brun
   * rouge, ni ivoire, qui est un dore, ne donnent le marron d'un pelage.
   */
  {
    id: "animaux",
    group: "theme",
    icon: "❦",
    palette: "noisette",
    motif: "pattes",
    effect: "aucun",
  },
];

export const DEFAULT_OCCASION_ID: OccasionId = "aucune";

/**
 * Les occasions rangées par rubrique, dans l'ordre d'affichage. Passé une
 * dizaine d'entrées, une grille à plat devient illisible.
 */
export const OCCASION_GROUPS: { label: OccasionGroup | null; items: Occasion[] }[] = [
  { label: null, items: OCCASIONS.filter((o) => o.group === null) },
  ...([
    "calendrier",
    "etapes",
    "mot",
    "theme",
  ] as OccasionGroup[]).map((label) => ({
    label,
    items: OCCASIONS.filter((o) => o.group === label),
  })),
];

export function occasionById(id: string | undefined | null): Occasion {
  return OCCASIONS.find((o) => o.id === id) ?? OCCASIONS[0];
}

export function isOccasionId(id: unknown): id is OccasionId {
  return typeof id === "string" && OCCASIONS.some((o) => o.id === id);
}

// --- Polices ---------------------------------------------------------------

export type FontId =
  | "elegant"
  | "classique"
  | "delicat"
  | "net"
  | "rond"
  | "manuscrit"
  | "calligraphie";

export type FontChoice = { id: FontId; cssVar: string; sample: string };

export const FONTS: FontChoice[] = [
  { id: "elegant", cssVar: "var(--font-display)", sample: "Aa" },
  { id: "classique", cssVar: "var(--font-classic)", sample: "Aa" },
  { id: "delicat", cssVar: "var(--font-delicate)", sample: "Aa" },
  { id: "net", cssVar: "var(--font-sans)", sample: "Aa" },
  { id: "rond", cssVar: "var(--font-round)", sample: "Aa" },
  { id: "manuscrit", cssVar: "var(--font-script)", sample: "Aa" },
  { id: "calligraphie", cssVar: "var(--font-calligraphy)", sample: "Aa" },
];

export const DEFAULT_FONT_ID: FontId = "elegant";

// --- Styles d'ouverture ----------------------------------------------------

export type OpeningId =
  | "voile"
  | "rideau"
  | "volets"
  | "enveloppe"
  | "couvercle"
  | "halo";

export type OpeningStyle = { id: OpeningId };

export const OPENINGS: OpeningStyle[] = [
  { id: "voile" },
  { id: "rideau" },
  { id: "volets" },
  { id: "enveloppe" },
  { id: "couvercle" },
  { id: "halo" },
];

/*
 * Les effets sont separes des ouvertures : l'ouverture dit comment le voile se
 * leve, l'effet ce qui se passe juste apres, sur la page decouverte. Les deux se
 * combinent librement — un halo peut lacher des confettis.
 */
export type EffectId =
  | "aucun"
  | "confettis"
  | "petales"
  | "etincelles"
  | "neige"
  | "notes"
  | "bulles"
  | "feuilles"
  | "ballons"
  | "poussiere";

export type Effect = { id: EffectId };

export const EFFECTS: Effect[] = [
  { id: "aucun" },
  { id: "confettis" },
  { id: "petales" },
  { id: "etincelles" },
  { id: "neige" },
  { id: "notes" },
  { id: "bulles" },
  { id: "feuilles" },
  { id: "ballons" },
  { id: "poussiere" },
];

export const DEFAULT_EFFECT_ID: EffectId = "aucun";

export function effectById(id: string | undefined | null): Effect {
  return EFFECTS.find((e) => e.id === id) ?? EFFECTS[0];
}

export function isEffectId(id: unknown): id is EffectId {
  return typeof id === "string" && EFFECTS.some((e) => e.id === id);
}

export const DEFAULT_OPENING_ID: OpeningId = "voile";

export function openingById(id: string | undefined | null): OpeningStyle {
  return OPENINGS.find((o) => o.id === id) ?? OPENINGS[0];
}

export function isOpeningId(id: unknown): id is OpeningId {
  return typeof id === "string" && OPENINGS.some((o) => o.id === id);
}

export function fontById(id: string | undefined | null): FontChoice {
  return FONTS.find((f) => f.id === id) ?? FONTS[0];
}

export function isFontId(id: unknown): id is FontId {
  return typeof id === "string" && FONTS.some((f) => f.id === id);
}
