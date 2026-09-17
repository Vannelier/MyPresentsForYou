import type { Guide } from "@/lib/i18n/chemins";

/*
 * Le texte des guides par occasion, dans une langue.
 *
 * Des donnees plutot que de la prose en composants : chaque guide suit le meme
 * plan, et le balisage `FAQPage` doit reprendre exactement les questions
 * affichees — une seule source pour les deux. Hors du dictionnaire : un guide
 * pese plusieurs centaines de mots, que le navigateur n'a pas a recevoir sur
 * chaque page du site. Ces modules ne servent qu'au serveur.
 *
 * `npm run check` compare chaque langue au francais, qui fait foi : memes cles,
 * autant de profils, d'idees, d'etapes et de questions.
 */
export type IdeeGuide = { nom: string; pourquoi: string };

export type ContenuGuide = {
  titreMeta: string;
  descriptionMeta: string;
  titre: string;
  chapo: string;
  /** Une phrase, sur la carte du guide dans la page des idees cadeaux. */
  accroche: string;
  /** Trois idees courtes, montrees dans l'apercu de carte. */
  apercu: string[];
  pourquoi: { titre: string; paragraphes: string[] };
  idees: { titre: string; intro: string; profils: { nom: string; idees: IdeeGuide[] }[] };
  etapes: { titre: string; liste: string[] };
  questions: { titre: string; liste: { q: string; r: string }[] };
};

export type TextesGuides = {
  /** La page qui reunit les guides. */
  page: { titreMeta: string; descriptionMeta: string; titre: string; chapo: string };
  libelles: {
    composer: string;
    exemple: string;
    questions: string;
    autres: string;
    fil: string;
    accueil: string;
    miseAJour: string;
    voirAussi: string;
    lire: string;
  };
  guides: Record<Guide, ContenuGuide>;
};
