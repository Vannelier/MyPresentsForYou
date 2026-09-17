import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import Valeur from "../Valeur";
import type { ContenuLegal } from "../types";

const MANQUANT = "Nog in te vullen door de uitgever";

const mentions: ContenuLegal = {
  titreMeta: "Juridische informatie — MyPresentsForYou",
  descriptionMeta: "Uitgever, host en contact van de site MyPresentsForYou.",
  titre: "Juridische informatie",
  chapo: "Wie deze site uitgeeft, wie hem host en hoe je ons bereikt.",
  Corps: ({ langue }) => {
    const societe = SITE.editeur.statut === "societe";
    return (
      <>
        <h2>Uitgever van de site</h2>
        <p>
          {societe ? "Handelsnaam" : "Verantwoordelijke uitgever"}:{" "}
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.editeur.nom}</Valeur>
          </strong>
          <br />
          Adres: <Valeur manquant={MANQUANT}>{SITE.editeur.adresse}</Valeur>
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
              Ondernemingsnummer: <Valeur manquant={MANQUANT}>{SITE.editeur.numeroEntreprise}</Valeur>
              {SITE.editeur.tva && (
                <>
                  <br />
                  Btw-nummer: {SITE.editeur.tva}
                </>
              )}
            </>
          )}
        </p>

        <h2>Hosting</h2>
        <p>
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.hebergeur.nom}</Valeur>
          </strong>
          <br />
          <Valeur manquant={MANQUANT}>{SITE.hebergeur.adresse}</Valeur>
        </p>

        <h2>Intellectuele eigendom</h2>
        <p>
          De naam MyPresentsForYou, de interface van de site en de code zijn eigendom van hun maker.{" "}
          <strong>De inhoud van de kaarten is daarentegen van wie ze maakt</strong>: teksten, afbeeldingen en
          keuzes blijven van die persoon, en wij maken er geen enkele aanspraak op.
        </p>
        <p>
          Productafbeeldingen die van winkelsites opgehaald worden, zijn van hun respectieve eigenaars. Ze
          worden alleen gekopieerd voor de levensduur van de kaart, zodat die niet kapotgaat als de winkel
          zijn site aanpast.
        </p>

        <h2>Aansprakelijkheid</h2>
        <p>
          MyPresentsForYou verkoopt niets en int geen betalingen. De cadeaus op een kaart verwijzen naar
          sites van derden waarover we geen enkele controle hebben: hun inhoud, prijzen en beschikbaarheid
          vallen onder hun eigen verantwoordelijkheid.
        </p>

        <h2>Een inhoud melden</h2>
        <p>
          Kaarten worden vrij en zonder account gemaakt. Als er een onwettige inhoud bevat, schrijf ons dan
          via de pagina <Link href={cheminVers(langue, "contact")}>Contact</Link> en vermeld het adres — we
          verwijderen de kaart.
        </p>

        <p className="prose__date">
          Zie ook het <Link href={cheminVers(langue, "confidentialite")}>privacybeleid</Link> en de{" "}
          <Link href={cheminVers(langue, "conditions")}>gebruiksvoorwaarden</Link>.
        </p>
      </>
    );
  },
};

export default mentions;
