import type { Langue } from "@/lib/i18n/langues";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nl } from "./nl";
import type { Categorie } from "@/lib/i18n/chemins";
import type { PaletteId } from "@/lib/palettes";
import type { Pistes } from "@/lib/pistes";
import type { TextesGuides } from "./types";

/*
 * Un `Record` complet : une langue sans ses guides ne compile pas. Module
 * serveur — un composant navigateur qui l'importerait embarquerait les six
 * langues ; `scripts/check.ts` le refuse.
 */
export const TEXTES_GUIDES: Record<Langue, TextesGuides> = { fr, en, it, es, de, nl };

/*
 * La palette de l'apercu et de la vignette de chaque categorie. Une occasion a
 * la sienne au catalogue ; une categorie n'y figure pas, et six vignettes a la
 * couleur de l'occasion neutre se confondaient.
 */
export const PALETTES_CATEGORIES: Record<Categorie, PaletteId> = {
  parfum: "rose",
  bijou: "ivoire",
  livre: "encre",
  vetement: "prune",
  vin: "noisette",
  deco: "olive",
};

export function textesGuides(langue: Langue): TextesGuides {
  return TEXTES_GUIDES[langue];
}

/**
 * Les pistes des guides d'une langue, pour « Besoin d'idees ? » dans l'editeur :
 * les memes idees que les guides, sans leurs explications, pour qu'une seule
 * source les tienne a jour.
 */
export function pistesPourEditeur(langue: Langue): Pistes {
  return Object.fromEntries(
    Object.entries(TEXTES_GUIDES[langue].guides).map(([guide, contenu]) => [
      guide,
      contenu.idees.profils.map((p) => ({ profil: p.nom, idees: p.idees.map((i) => i.nom) })),
    ]),
  );
}
