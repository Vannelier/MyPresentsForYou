import { baseUrl } from "@/lib/env";
import { dictionnaire } from "@/lib/i18n";
import { cheminVers, type Page } from "@/lib/i18n/chemins";
import { LANGUES_ACTIVES, NOMS_DES_LANGUES, type Langue } from "@/lib/i18n/langues";
import { LIMITS } from "@/lib/limits";

/*
 * llms.txt (llmstxt.org) : le site resume pour les assistants conversationnels,
 * en Markdown, avec les liens qui comptent. C'est de plus en plus a eux qu'on
 * demande « comment offrir un cadeau en laissant choisir » : ils doivent pouvoir
 * dire ce que fait le service sans le deviner d'apres l'accueil.
 *
 * Fige au build, comme robots.txt et le sitemap : les adresses viennent de
 * NEXT_PUBLIC_BASE_URL, qui doit donc exister des cette phase.
 *
 * Les pages-cadeau n'y figurent pas, pour la raison qui les tient hors du
 * sitemap : les lister reviendrait a publier les liens envoyes.
 *
 * Un seul fichier pour toutes les langues : la norme n'en prevoit qu'un, a la
 * racine. Le resume est en anglais, que lisent tous les assistants ; chaque
 * langue active a sa section, ou chaque page est citee dans sa langue avec la
 * description que les moteurs affichent deja. Les pages legales n'existent
 * qu'en francais, et ne sont citees qu'une fois. Les liens passent par
 * `cheminVers` : ecrits a la main, ils pointaient vers d'anciennes adresses.
 *
 * `## Optional` reste en anglais : c'est un mot de la norme, qui signale aux
 * assistants ce qu'ils peuvent laisser de cote quand la place manque.
 */
export const dynamic = "force-static";

const sansMarque = (titre: string) => titre.replace(/\s+—\s+MyPresentsForYou$/, "");

export function GET() {
  const base = baseUrl();
  const lien = (langue: Langue, page: Page) => `${base}${cheminVers(langue, page)}`;

  const sections = LANGUES_ACTIVES.map((langue) => {
    const d = dictionnaire(langue);
    return [
      `## ${NOMS_DES_LANGUES[langue]}`,
      "",
      `- [${sansMarque(d.accueil.titreMeta)}](${lien(langue, "accueil")}): ${d.accueil.descriptionMeta}`,
      `- [${sansMarque(d.exemple.titreMeta)}](${lien(langue, "exemple")}): ${d.exemple.descriptionMeta}`,
      `- [${sansMarque(d.creation.titreMeta)}](${lien(langue, "creer")}): ${d.creation.descriptionMeta}`,
      `- [${d.questions.titre}](${lien(langue, "questions")}): ${d.questions.descriptionMeta}`,
    ].join("\n");
  });

  const fr = dictionnaire("fr");
  const facultatif = [
    ...LANGUES_ACTIVES.map(
      (langue) =>
        `- [${dictionnaire(langue).contact.titre} (${NOMS_DES_LANGUES[langue]})](${lien(langue, "contact")})`,
    ),
    `- [${fr.pied.confidentialite}](${lien("fr", "confidentialite")}): what is stored, and for how long (French only)`,
    `- [${fr.pied.conditions}](${lien("fr", "conditions")}): terms of use (French only)`,
  ];
  const langues = LANGUES_ACTIVES.map((l) => NOMS_DES_LANGUES[l]).join(", ");

  const texte = `# MyPresentsForYou

> Give a gift by letting the person choose. The giver puts up to ${LIMITS.itemsMax} gift ideas on a small page, sends the link, and the person receiving it chooses the one they like most. Free, with no account, in ${langues}.

MyPresentsForYou turns the wish list around: it is not the person receiving who writes what they want — the giver suggests, and they choose.

- Ideas can be objects, from any shop, or experiences: a restaurant, a skydive, a weekend away.
- The page is staged for the occasion — birthday, Christmas, wedding, new baby…: a palette, a pattern, a veil to lift, an effect.
- The giver gets two links: a public link to send (WhatsApp, text message, email, or a QR code on a printable card), and a private link where they find the choice.
- The person receiving chooses and confirms, without creating an account or entering a name, address or email. Prices are never shown.
- The giver then buys the chosen gift themselves, from the shop of their choice: no payment goes through the site.
- No cookies, no analytics. A card on which nobody has chosen stays online for a year.
- Each card is shown in the language it was composed in, whatever the language of the person opening it.

The gift pages themselves are private and marked noindex: they are not listed here, and should not be cited.

${sections.join("\n\n")}

## Optional

${facultatif.join("\n")}
`;
  return new Response(texte, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
