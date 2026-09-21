/**
 * Les cartes creees sur cet appareil, gardees pour retrouver leur lien
 * d'administration.
 *
 * Meme principe que le brouillon (voir draft.ts) : `localStorage`, jamais envoye
 * au serveur, tout enveloppe dans des `try` — en navigation privee ou quota plein,
 * la simple lecture leve. La difference : le brouillon disparait a la creation ;
 * cette liste garde justement ce que la creation produit — le lien admin, qu'aucun
 * compte ni e-mail ne permet de retrouver autrement.
 *
 * Le lien admin porte le jeton secret de la carte. Il ne sort pas de l'appareil :
 * meme origine, jamais transmis. Le garder ici revient a le garder dans un
 * marque-page — c'est le sien, sur sa machine.
 */
import { DUREE_VIE_PAGE_JOURS } from "@/lib/env";

const CLE = "mypresentsforyou:cartes";
const VERSION = 1;

/** La liste plafonne : au-dela, ce ne sont plus « ses » cartes mais un journal. */
const MAX = 30;

/*
 * Alignee sur la vie d'une page (`DUREE_VIE_PAGE_JOURS`), et non recopiee a la
 * main : un lien vers une carte deja purgee ne mene qu'a « introuvable », et deux
 * durees ecrites separement finiraient par diverger.
 */
const DUREE_MS = DUREE_VIE_PAGE_JOURS * 24 * 60 * 60 * 1000;

export type CarteLocale = {
  adminUrl: string;
  publicUrl: string;
  /** Un libelle pour reconnaitre la carte : le prenom du receveur, ou l'adresse. */
  nom: string;
  /** Horodatage de la creation, pour l'expiration et l'ordre. */
  a: number;
};

type Enregistrement = { version: number; cartes: CarteLocale[] };

/** Une adresse web http(s), ou `null` : le contenu vient du stockage, pas du code. */
function url(v: unknown): string | null {
  if (typeof v !== "string") return null;
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:" ? v : null;
  } catch {
    return null;
  }
}

function lireBrut(): CarteLocale[] {
  let brut: unknown;
  try {
    const texte = localStorage.getItem(CLE);
    if (!texte) return [];
    brut = JSON.parse(texte);
  } catch {
    return [];
  }
  if (typeof brut !== "object" || brut === null) return [];
  const o = brut as Record<string, unknown>;
  if (o.version !== VERSION || !Array.isArray(o.cartes)) return [];

  const maintenant = Date.now();
  const vues = new Set<string>();
  const cartes: CarteLocale[] = [];
  for (const c of o.cartes) {
    if (typeof c !== "object" || c === null) continue;
    const r = c as Record<string, unknown>;
    const adminUrl = url(r.adminUrl);
    const publicUrl = url(r.publicUrl);
    const a = typeof r.a === "number" ? r.a : 0;
    if (!adminUrl || !publicUrl || !a || maintenant - a > DUREE_MS) continue;
    if (vues.has(adminUrl)) continue;
    vues.add(adminUrl);
    cartes.push({ adminUrl, publicUrl, nom: typeof r.nom === "string" ? r.nom : "", a });
  }
  return cartes;
}

function ecrire(cartes: CarteLocale[]): void {
  try {
    const enr: Enregistrement = { version: VERSION, cartes: cartes.slice(0, MAX) };
    localStorage.setItem(CLE, JSON.stringify(enr));
  } catch {
    /* quota plein, navigation privee : on continue sans filet */
  }
}

/**
 * Ajoute une carte en tete, sans doublon d'adresse admin. Silencieuse : perdre la
 * memorisation est desagreable, casser la creation le serait bien plus.
 */
export function memoriserCarte(carte: { adminUrl: string; publicUrl: string; nom: string }): void {
  if (!url(carte.adminUrl) || !url(carte.publicUrl)) return;
  const autres = lireBrut().filter((c) => c.adminUrl !== carte.adminUrl);
  ecrire([{ ...carte, a: Date.now() }, ...autres]);
}

/** Les cartes memorisees, les plus recentes d'abord. */
export function lireCartesLocales(): CarteLocale[] {
  return lireBrut().sort((a, b) => b.a - a.a);
}

/** Retire une carte de la liste. */
export function oublierCarte(adminUrl: string): void {
  ecrire(lireBrut().filter((c) => c.adminUrl !== adminUrl));
}
