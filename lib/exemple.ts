import { dictionnaire } from "./i18n";
import type { Langue } from "./i18n/langues";
import { occasionById } from "./occasions";
import type { PublicPage } from "./types";

/*
 * La page-cadeau que montre /exemple. Figee, jamais en base : la demonstration
 * de db/seed.sql est une vraie carte, et le premier visiteur qui y choisirait un
 * cadeau la verrouillerait pour tous les suivants.
 *
 * Les textes sont ceux que propose l'occasion, dans la langue de la page, lus
 * dans le dictionnaire et non recopies : l'exemple montre ce qu'on obtient sans
 * rien ecrire, et suit toute retouche de ces formules. Les prenoms sont
 * epicenes, et les cadeaux melent experiences et objets — la neutralite ne
 * s'arrete pas a eux.
 */
const IMAGES = ["parachute", "appareil-photo", "restaurant", "casque"] as const;

export function exemple(langue: Langue): PublicPage {
  const d = dictionnaire(langue);
  const anniversaire = occasionById("anniversaire");
  const formules = d.occasions.anniversaire;

  return {
    slug: "exemple",
    recipient_name: d.exemple.destinataire,
    intro_message: formules.intro,
    welcome_message: formules.bienvenue,
    open_label: formules.ouvrir,
    wait_message: formules.attente,
    items_title: d.carte.titreCadeaux,
    items_message: d.carte.messageCadeaux,
    thank_you_message: formules.remerciement,
    signature: d.exemple.signature,
    reply_message: "",
    header_image_url: null,
    reveal_at: null,
    theme: {
      layout: "grid",
      palette: { id: anniversaire.palette },
      occasion: anniversaire.id,
      motif: anniversaire.motif !== "none",
      effect: anniversaire.effect,
      // Le mot du receveur est active pour que le parcours se voie en entier.
      reply: true,
      langue,
    },
    items: IMAGES.map((image, i) => ({
      id: `exemple-${image}`,
      label: d.exemple.cadeaux[i].label,
      note: d.exemple.cadeaux[i].note,
      image_url: `/exemple/${image}.jpg`,
      source_url: null,
    })),
    chosen_item_id: null,
    chosen_at: null,
  };
}
