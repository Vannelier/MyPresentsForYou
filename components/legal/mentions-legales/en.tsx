import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import Valeur from "../Valeur";
import type { ContenuLegal } from "../types";

const MANQUANT = "To be completed by the publisher";

const mentions: ContenuLegal = {
  titreMeta: "Legal notice — MyPresentsForYou",
  descriptionMeta: "Publisher, host and contact details for the MyPresentsForYou site.",
  titre: "Legal notice",
  chapo: "Who publishes this site, who hosts it, and how to reach us.",
  Corps: ({ langue }) => {
    const societe = SITE.editeur.statut === "societe";
    return (
      <>
        <h2>Site publisher</h2>
        <p>
          {societe ? "Company name" : "Person responsible for publication"}:{" "}
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.editeur.nom}</Valeur>
          </strong>
          <br />
          Address: <Valeur manquant={MANQUANT}>{SITE.editeur.adresse}</Valeur>
          <br />
          Contact:{" "}
          {aRemplir(SITE.email) ? (
            <Valeur manquant={MANQUANT}>{SITE.email}</Valeur>
          ) : (
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          )}
          {societe && (
            <>
              <br />
              Company number: <Valeur manquant={MANQUANT}>{SITE.editeur.numeroEntreprise}</Valeur>
              {SITE.editeur.tva && (
                <>
                  <br />
                  VAT number: {SITE.editeur.tva}
                </>
              )}
            </>
          )}
        </p>

        <h2>Host</h2>
        <p>
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.hebergeur.nom}</Valeur>
          </strong>
          <br />
          <Valeur manquant={MANQUANT}>{SITE.hebergeur.adresse}</Valeur>
        </p>

        <h2>Intellectual property</h2>
        <p>
          The MyPresentsForYou name, the site’s interface and its code are the property of their author. On
          the other hand, <strong>the content of cards belongs to whoever composes them</strong>: texts,
          images and choices remain theirs, and we claim no rights over them.
        </p>
        <p>
          Product images fetched from shop sites belong to their respective owners. They are copied only
          for the lifetime of the card, so that it does not break if the shop changes its site.
        </p>

        <h2>Liability</h2>
        <p>
          MyPresentsForYou sells nothing and takes no payment. The gifts suggested on a card link to
          third-party sites over which we have no control: their content, prices and availability are
          their responsibility alone.
        </p>

        <h2>Reporting content</h2>
        <p>
          Cards are created freely and without an account. If one of them contains unlawful content, write
          to us from the <Link href={cheminVers(langue, "contact")}>Contact</Link> page, giving its address —
          we will delete it.
        </p>

        <p className="prose__date">
          See also the <Link href={cheminVers(langue, "confidentialite")}>privacy policy</Link> and the{" "}
          <Link href={cheminVers(langue, "conditions")}>terms of use</Link>.
        </p>
      </>
    );
  },
};

export default mentions;
