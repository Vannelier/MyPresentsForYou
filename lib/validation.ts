import type { Item, Theme } from "./types";
import { newItemId } from "./ids";
import {
  DEFAULT_EFFECT_ID,
  DEFAULT_OCCASION_ID,
  DEFAULT_OPENING_ID,
  isEffectId,
  isFontId,
  isOccasionId,
  isOpeningId,
  occasionById,
} from "./occasions";
import { dictionnaire } from "./i18n";
import type { CleErreur, Erreur } from "./i18n/erreurs";
import { langueOuDefaut, type Langue } from "./i18n/langues";
import { PALETTES } from "./palettes";
import { slugError } from "./slug";

import { ALLOWED_IMAGE_TYPES, LIMITS } from "./limits";

export { ALLOWED_IMAGE_TYPES, LIMITS };

/*
 * L'erreur porte sa cle, pas son texte : la validation ne sait pas dans quelle
 * langue repondre. `handleError` la traduit avec les messages de la requete.
 */
export class ValidationError extends Error {
  readonly field: string | undefined;
  readonly erreur: Erreur;
  constructor(erreur: Erreur | CleErreur, field?: string) {
    const e = typeof erreur === "string" ? { cle: erreur } : erreur;
    super(e.cle);
    this.name = "ValidationError";
    this.erreur = e;
    this.field = field;
  }
}

function asObject(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new ValidationError("corpsInvalide");
  }
  return value as Record<string, unknown>;
}

function text(value: unknown, field: string, max: number, { required = false } = {}): string {
  if (value === undefined || value === null) {
    if (required) throw new ValidationError("champObligatoire", field);
    return "";
  }
  if (typeof value !== "string") throw new ValidationError("champTexte", field);
  const trimmed = value.trim();
  if (required && trimmed.length === 0) {
    throw new ValidationError("champObligatoire", field);
  }
  if (trimmed.length > max) {
    throw new ValidationError({ cle: "champTropLong", valeurs: { max } }, field);
  }
  return trimmed;
}

export function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function optionalUrl(value: unknown, field: string): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") throw new ValidationError("urlInvalide", field);
  const trimmed = value.trim();
  if (trimmed === "") return null;
  if (!isHttpUrl(trimmed)) {
    throw new ValidationError("urlProtocole", field);
  }
  return trimmed;
}

/**
 * Date ISO facultative.
 *
 * On exige explicitement la forme ISO au lieu de s'en remettre a `new Date` :
 * son analyseur de repli est si permissif que « le 25 decembre » devient
 * 2001-12-24, soit une date passee acceptee en silence.
 */
const ISO_DATE =
  /^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:?\d{2})?)?$/;

function optionalDate(value: unknown, field: string): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string" || !ISO_DATE.test(value.trim())) {
    throw new ValidationError("dateInvalide", field);
  }
  const date = new Date(value.trim());
  if (Number.isNaN(date.getTime())) throw new ValidationError("dateInvalide", field);
  return date.toISOString();
}

export function validateTheme(value: unknown): Theme {
  if (value === undefined || value === null) return { layout: "grid" };
  const o = asObject(value);
  const layout = o.layout === "list" ? "list" : "grid";
  // On ne garde que l'identifiant de palette : stocker les couleurs figerait les
  // pages deja creees, et un identifiant inconnu retombe sur la palette par defaut.
  const raw = o.palette as Record<string, unknown> | undefined;
  const id = raw && typeof raw === "object" && typeof raw.id === "string" ? raw.id : undefined;
  const palette = id && PALETTES.some((p) => p.id === id) ? { id } : undefined;

  const occasion = isOccasionId(o.occasion) ? o.occasion : DEFAULT_OCCASION_ID;
  const font = isFontId(o.font) ? o.font : undefined;
  // Le decor n'existe que si l'occasion en propose un ; par defaut il est actif.
  const hasMotif = occasionById(occasion).motif !== "none";
  const motif = hasMotif ? o.motif !== false : false;

  /*
   * Plus de `cover` : le voile ne se refuse plus. Une carte sans lui s'ouvrait
   * directement sur la liste, sans rien a lever — la mise en scene, qui fait la
   * page, disparaissait avec. Un `cover` envoye est ignore, comme tout champ
   * inconnu.
   */
  const opening = isOpeningId(o.opening) ? o.opening : DEFAULT_OPENING_ID;
  const effect = isEffectId(o.effect) ? o.effect : DEFAULT_EFFECT_ID;
  // Laisser un mot n'a pas de sens quand on scanne le QR devant la personne :
  // c'est donc au donneur de l'activer, jamais actif par defaut.
  const reply = o.reply === true;
  /*
   * La langue de la carte, un identifiant comme l'occasion. Toute langue connue
   * est acceptee, pas seulement les actives : une carte composee en allemand
   * doit le rester, meme si l'allemand etait un jour desactive.
   */
  const langue = langueOuDefaut(o.langue);

  return {
    layout,
    palette,
    occasion,
    font,
    motif,
    opening,
    effect,
    reply,
    langue,
  };
}

export function validateItems(value: unknown, langue: Langue): Item[] {
  if (!Array.isArray(value)) throw new ValidationError("listeInvalide", "items");
  if (value.length < LIMITS.itemsMin) {
    throw new ValidationError("auMoinsUnCadeau", "items");
  }
  if (value.length > LIMITS.itemsMax) {
    throw new ValidationError({ cle: "tropDeCadeaux", valeurs: { max: LIMITS.itemsMax } }, "items");
  }

  const sansTitre = dictionnaire(langue).editeur.sansTitre;
  const seen = new Set<string>();
  return value.map((raw, i) => {
    const o = asObject(raw);
    // Un titre vide ne bloque plus la creation : la carte affiche un libelle de
    // repli, dans sa langue, plutot que de refuser l'enregistrement.
    const label = text(o.label, `items.${i}.label`, LIMITS.itemLabel) || sansTitre;
    const note = text(o.note, `items.${i}.note`, LIMITS.itemNote) || null;
    const image_url = optionalUrl(o.image_url, `items.${i}.image_url`);
    const source_url = optionalUrl(o.source_url, `items.${i}.source_url`);

    let id = typeof o.id === "string" && /^itm_[a-z0-9]{4,32}$/.test(o.id) ? o.id : newItemId();
    while (seen.has(id)) id = newItemId();
    seen.add(id);

    return { id, label, image_url, source_url, note };
  });
}

export type PageInput = {
  name: string;
  intro_message: string;
  signature: string;
  recipient_name: string;
  header_image_url: string | null;
  reveal_at: string | null;
  link_title: string;
  welcome_message: string;
  open_label: string;
  wait_message: string;
  items_title: string;
  items_message: string;
  thank_you_message: string;
  cover_image_url: string | null;
  theme: Theme;
  items: Item[];
};

export function validateCreate(body: unknown): PageInput & { slug: string } {
  const o = asObject(body);
  const slug = text(o.slug, "slug", 60, { required: true }).toLowerCase();
  const err = slugError(slug);
  if (err) throw new ValidationError(err, "slug");
  return { slug, ...validatePageFields(o) };
}

/**
 * Aucun champ de texte n'est obligatoire : laisser un champ vide fait retomber
 * la page sur la suggestion affichee en placeholder, cote formulaire. Le serveur
 * ne fait donc que borner les longueurs.
 */
export function validatePageFields(o: Record<string, unknown>): PageInput {
  const theme = validateTheme(o.theme);
  return {
    name: text(o.name, "name", LIMITS.name),
    intro_message: text(o.intro_message, "intro_message", LIMITS.intro),
    signature: text(o.signature, "signature", LIMITS.signature),
    recipient_name: text(o.recipient_name, "recipient_name", LIMITS.recipient),
    header_image_url: optionalUrl(o.header_image_url, "header_image_url"),
    reveal_at: optionalDate(o.reveal_at, "reveal_at"),
    link_title: text(o.link_title, "link_title", LIMITS.linkTitle),
    welcome_message: text(o.welcome_message, "welcome_message", LIMITS.message),
    open_label: text(o.open_label, "open_label", LIMITS.openLabel),
    wait_message: text(o.wait_message, "wait_message", LIMITS.waitMessage),
    items_title: text(o.items_title, "items_title", LIMITS.itemsTitle),
    items_message: text(o.items_message, "items_message", LIMITS.itemsMessage),
    thank_you_message: text(o.thank_you_message, "thank_you_message", LIMITS.message),
    cover_image_url: optionalUrl(o.cover_image_url, "cover_image_url"),
    theme,
    items: validateItems(o.items, langueOuDefaut(theme.langue)),
  };
}

/** PATCH : seuls les champs presents sont valides et renvoyes. */
export function validatePatch(body: unknown): Partial<PageInput> {
  const o = asObject(body);
  const out: Partial<PageInput> = {};
  if ("name" in o) out.name = text(o.name, "name", LIMITS.name);
  if ("intro_message" in o) out.intro_message = text(o.intro_message, "intro_message", LIMITS.intro);
  if ("signature" in o) out.signature = text(o.signature, "signature", LIMITS.signature);
  if ("recipient_name" in o) {
    out.recipient_name = text(o.recipient_name, "recipient_name", LIMITS.recipient);
  }
  if ("header_image_url" in o) {
    out.header_image_url = optionalUrl(o.header_image_url, "header_image_url");
  }
  if ("reveal_at" in o) out.reveal_at = optionalDate(o.reveal_at, "reveal_at");
  if ("link_title" in o) out.link_title = text(o.link_title, "link_title", LIMITS.linkTitle);
  if ("welcome_message" in o) {
    out.welcome_message = text(o.welcome_message, "welcome_message", LIMITS.message);
  }
  if ("open_label" in o) out.open_label = text(o.open_label, "open_label", LIMITS.openLabel);
  if ("wait_message" in o) {
    out.wait_message = text(o.wait_message, "wait_message", LIMITS.waitMessage);
  }
  if ("items_title" in o) out.items_title = text(o.items_title, "items_title", LIMITS.itemsTitle);
  if ("items_message" in o) {
    out.items_message = text(o.items_message, "items_message", LIMITS.itemsMessage);
  }
  if ("thank_you_message" in o) {
    out.thank_you_message = text(o.thank_you_message, "thank_you_message", LIMITS.message);
  }
  if ("cover_image_url" in o) out.cover_image_url = optionalUrl(o.cover_image_url, "cover_image_url");
  if ("theme" in o) out.theme = validateTheme(o.theme);
  // L'editeur envoie toujours le theme avec les cadeaux ; un correctif qui n'en
  // porte pas retombe sur le libelle francais.
  if ("items" in o) out.items = validateItems(o.items, langueOuDefaut(out.theme?.langue));
  if (Object.keys(out).length === 0) {
    throw new ValidationError("aucuneModification");
  }
  return out;
}
