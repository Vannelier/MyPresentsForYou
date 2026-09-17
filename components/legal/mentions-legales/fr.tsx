import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import Valeur from "../Valeur";
import type { ContenuLegal } from "../types";

const MANQUANT = "À compléter par l'éditeur";

const mentions: ContenuLegal = {
  titreMeta: "Mentions légales — MyPresentsForYou",
  descriptionMeta: "Éditeur, hébergeur et contact du site MyPresentsForYou.",
  titre: "Mentions légales",
  chapo: "Qui édite ce site, qui l'héberge, et comment nous joindre.",
  Corps: ({ langue }) => {
    const societe = SITE.editeur.statut === "societe";
    return (
      <>
        <h2>Éditeur du site</h2>
        <p>
          {societe ? "Raison sociale" : "Responsable de la publication"} :{" "}
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.editeur.nom}</Valeur>
          </strong>
          <br />
          Adresse : <Valeur manquant={MANQUANT}>{SITE.editeur.adresse}</Valeur>
          <br />
          Contact :{" "}
          {aRemplir(SITE.email) ? (
            <Valeur manquant={MANQUANT}>{SITE.email}</Valeur>
          ) : (
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          )}
          {societe && (
            <>
              <br />
              Numéro d&apos;entreprise : <Valeur manquant={MANQUANT}>{SITE.editeur.numeroEntreprise}</Valeur>
              {SITE.editeur.tva && (
                <>
                  <br />
                  Numéro de TVA : {SITE.editeur.tva}
                </>
              )}
            </>
          )}
        </p>

        <h2>Hébergeur</h2>
        <p>
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.hebergeur.nom}</Valeur>
          </strong>
          <br />
          <Valeur manquant={MANQUANT}>{SITE.hebergeur.adresse}</Valeur>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Le nom MyPresentsForYou, l&apos;interface du site et son code sont la propriété de leur auteur. En
          revanche, <strong>le contenu des cartes appartient à celui qui les compose</strong> : textes,
          images et choix restent les siens, et nous n&apos;en revendiquons aucun droit.
        </p>
        <p>
          Les images de produits récupérées depuis des sites marchands appartiennent à leurs
          propriétaires respectifs. Elles sont recopiées pour la seule durée de vie de la carte, afin
          qu&apos;elle ne se casse pas si le marchand modifie son site.
        </p>

        <h2>Responsabilité</h2>
        <p>
          MyPresentsForYou ne vend rien et n&apos;encaisse aucun paiement. Les cadeaux proposés sur une carte
          renvoient vers des sites tiers, sur lesquels nous n&apos;avons aucun contrôle : leur contenu,
          leurs prix et leur disponibilité n&apos;engagent qu&apos;eux.
        </p>

        <h2>Signaler un contenu</h2>
        <p>
          Les cartes sont créées librement et sans compte. Si l&apos;une d&apos;elles présente un
          contenu illicite, écris-nous depuis la page <Link href={cheminVers(langue, "contact")}>Contact</Link> en
          indiquant son adresse — nous la supprimerons.
        </p>

        <p className="prose__date">
          Voir aussi la <Link href={cheminVers(langue, "confidentialite")}>politique de confidentialité</Link> et les{" "}
          <Link href={cheminVers(langue, "conditions")}>conditions d&apos;utilisation</Link>.
        </p>
      </>
    );
  },
};

export default mentions;
