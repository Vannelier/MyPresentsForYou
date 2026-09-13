import { baseUrl } from "@/lib/env";
import { cheminVers, type Page } from "@/lib/i18n/chemins";
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
 * `## Optional` reste en anglais : c'est un mot de la norme, qui signale aux
 * assistants ce qu'ils peuvent laisser de cote quand la place manque.
 *
 * Les liens menent aux pages francaises, par `cheminVers` : le texte est en
 * francais, et un assistant qui cite une page doit citer celle qu'il a lue.
 * Ecrits a la main, ils pointaient vers d'anciennes adresses qui redirigent.
 */
export const dynamic = "force-static";

export function GET() {
  const base = baseUrl();
  const lien = (page: Page) => `${base}${cheminVers("fr", page)}`;
  const texte = `# MyPresentsForYou

> Offrir un cadeau en laissant la personne choisir. Le donneur compose une petite page avec jusqu'à ${LIMITS.itemsMax} idées de cadeau, envoie le lien, et la personne qui reçoit choisit celle qui lui fait le plus envie. Gratuit, sans compte, en français.

MyPresentsForYou renverse la liste de souhaits : ce n'est pas la personne qui reçoit qui écrit ce qu'elle veut, c'est le donneur qui propose, et elle qui choisit.

- Les propositions peuvent être des objets, chez n'importe quel marchand, comme des expériences : un restaurant, un saut en parachute, un week-end.
- La page est mise en scène selon l'occasion — anniversaire, Noël, mariage, naissance… : une palette, un décor, un voile à lever, un effet.
- Le donneur reçoit deux liens : un lien public à envoyer (WhatsApp, SMS, e-mail, ou un QR code sur une carte à imprimer), et un lien privé où il retrouve le choix.
- La personne qui reçoit choisit et confirme, sans créer de compte ni saisir de nom, d'adresse ou d'e-mail. Les prix ne sont jamais affichés.
- Le donneur achète ensuite lui-même le cadeau retenu, chez le marchand de son choix : aucun paiement ne transite par le site.
- Aucun cookie, aucun outil de mesure d'audience. Une carte sur laquelle personne n'a choisi reste en ligne un an.

Les pages-cadeau elles-mêmes sont privées et marquées noindex : elles ne sont pas listées ici, et n'ont pas à être citées.

## Pages

- [Accueil](${lien("accueil")}): ce que fait le service, et en quoi il diffère d'une liste de souhaits
- [Voir un exemple](${lien("exemple")}): une page-cadeau jouable de bout en bout, sur des données d'exemple ; rien n'est envoyé
- [Composer une page-cadeau](${lien("creer")}): l'assistant de création, en trois étapes — l'occasion, les cadeaux, la présentation
- [Questions fréquentes](${lien("questions")}): gratuité, compte, durée de vie, envoi, différence avec une liste de souhaits ou une cagnotte

## Optional

- [Contact](${lien("contact")})
- [Politique de confidentialité](${lien("confidentialite")}): ce qui est stocké, et pour combien de temps
- [Conditions d'utilisation](${lien("conditions")})
`;
  return new Response(texte, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
