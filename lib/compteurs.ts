import { sql } from "./db";
import type { GiftPage } from "./types";

/*
 * Les trois chiffres dont depend le modele economique : cartes creees, choix
 * confirmes, clics vers la boutique depuis l'administration. Sans eux,
 * l'estimation du README (1,40 EUR par carte) reste une fiction.
 *
 * Un total par jour et par evenement, rien d'autre : ni carte, ni adresse IP,
 * ni navigateur. `gift_pages` ne suffit pas — une carte non choisie est purgee
 * au bout d'un an et supprimer une carte l'efface, le compte avec elle — et une
 * ligne par evenement serait deja un journal d'activite, que la politique de
 * confidentialite n'annonce pas.
 */
export const EVENEMENTS = ["carte_creee", "choix_confirme", "clic_boutique"] as const;
export type Evenement = (typeof EVENEMENTS)[number];

/**
 * Ajoute un au total du jour. Ne leve jamais : une base qui refuse l'ecriture
 * ne doit pas faire echouer la creation d'une carte ni un choix deja enregistre.
 */
export async function compter(evenement: Evenement): Promise<void> {
  try {
    await sql`
      INSERT INTO compteurs (jour, evenement, total)
      VALUES (current_date, ${evenement}, 1)
      ON CONFLICT (jour, evenement) DO UPDATE SET total = compteurs.total + 1
    `;
  } catch (err) {
    console.error("[mypresentsforyou] compteur", evenement, (err as Error).message);
  }
}

/**
 * L'adresse du cadeau choisi, si l'offreur en a donne une et qu'elle est bien
 * une adresse web. La redirection d'achat ne sert rien d'autre : sans ce filtre,
 * une `javascript:` ou un chemin relatif ferait de `/api/admin/…/acheter` une
 * redirection ouverte.
 */
export function urlAchat(page: Pick<GiftPage, "items" | "chosen_item_id">): string | null {
  const choisi = page.items.find((i) => i.id === page.chosen_item_id);
  if (!choisi?.source_url) return null;
  try {
    const url = new URL(choisi.source_url);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : null;
  } catch {
    return null;
  }
}

/**
 * L'adresse de sortie du bouton « Acheter » : par le Link Wrapper de Skimlinks
 * quand un identifiant est pose, telle quelle sinon.
 *
 * Le Link Wrapper plutot que le script de Skimlinks : le script se chargerait
 * sur toutes les pages et y poserait des cookies, ce que la politique de
 * confidentialite exclut. La redirection, elle, ne concerne que l'offreur qui
 * clique pour acheter. Un marchand que Skimlinks ne connait pas est servi sans
 * commission, mais servi : le lien ne casse jamais.
 */
export function lienSortant(cible: string, idSkimlinks: string | null): string {
  if (!idSkimlinks) return cible;
  const params = new URLSearchParams({ id: idSkimlinks, url: cible, xcust: "bouton_acheter" });
  return `https://go.skimresources.com/?${params}`;
}

export type LigneCompteur = { jour: string; evenement: string; total: number };

export type Synthese = {
  totaux: Record<Evenement, number>;
  /** Part des cartes creees dont le choix a ete confirme, entre 0 et 1 ; null sans carte. */
  tauxChoix: number | null;
  /** Clics vers la boutique rapportes aux choix confirmes ; null sans choix. */
  tauxAchat: number | null;
};

/**
 * Les deux rapports qui disent si l'affiliation peut vivre. Calcules sur la
 * periode entiere : jour par jour, un choix fait trois jours apres la creation
 * de sa carte donnerait des taux superieurs a 100 %.
 */
export function synthese(lignes: LigneCompteur[]): Synthese {
  const totaux = Object.fromEntries(EVENEMENTS.map((e) => [e, 0])) as Record<Evenement, number>;
  for (const l of lignes) {
    if ((EVENEMENTS as readonly string[]).includes(l.evenement)) totaux[l.evenement as Evenement] += l.total;
  }
  return {
    totaux,
    tauxChoix: totaux.carte_creee ? totaux.choix_confirme / totaux.carte_creee : null,
    tauxAchat: totaux.choix_confirme ? totaux.clic_boutique / totaux.choix_confirme : null,
  };
}
