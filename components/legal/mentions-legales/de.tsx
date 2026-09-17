import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import Valeur from "../Valeur";
import type { ContenuLegal } from "../types";

const MANQUANT = "Vom Betreiber noch zu ergänzen";

const mentions: ContenuLegal = {
  titreMeta: "Impressum — MyPresentsForYou",
  descriptionMeta: "Betreiber, Hoster und Kontakt der Website MyPresentsForYou.",
  titre: "Impressum",
  chapo: "Wer diese Website betreibt, wer sie hostet und wie du uns erreichst.",
  Corps: ({ langue }) => {
    const societe = SITE.editeur.statut === "societe";
    return (
      <>
        <h2>Betreiber der Website</h2>
        <p>
          {societe ? "Firma" : "Verantwortlich für den Inhalt"}:{" "}
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.editeur.nom}</Valeur>
          </strong>
          <br />
          Adresse: <Valeur manquant={MANQUANT}>{SITE.editeur.adresse}</Valeur>
          <br />
          Kontakt:{" "}
          {aRemplir(SITE.email) ? (
            <Valeur manquant={MANQUANT}>{SITE.email}</Valeur>
          ) : (
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          )}
          {societe && (
            <>
              <br />
              Unternehmensnummer: <Valeur manquant={MANQUANT}>{SITE.editeur.numeroEntreprise}</Valeur>
              {SITE.editeur.tva && (
                <>
                  <br />
                  USt-IdNr.: {SITE.editeur.tva}
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

        <h2>Geistiges Eigentum</h2>
        <p>
          Der Name MyPresentsForYou, die Oberfläche der Website und ihr Code sind Eigentum ihres Urhebers.{" "}
          <strong>Der Inhalt der Karten gehört dagegen der Person, die sie gestaltet</strong>: Texte,
          Bilder und Auswahl bleiben ihre, und wir beanspruchen keinerlei Rechte daran.
        </p>
        <p>
          Von Händlerseiten abgerufene Produktbilder gehören ihren jeweiligen Inhabern. Sie werden nur für
          die Lebensdauer der Karte kopiert, damit diese nicht kaputtgeht, wenn der Händler seine Website
          ändert.
        </p>

        <h2>Haftung</h2>
        <p>
          MyPresentsForYou verkauft nichts und nimmt keine Zahlungen entgegen. Die auf einer Karte
          vorgeschlagenen Geschenke verweisen auf Websites Dritter, auf die wir keinen Einfluss haben: Für
          Inhalt, Preise und Verfügbarkeit sind allein diese verantwortlich.
        </p>

        <h2>Inhalte melden</h2>
        <p>
          Karten werden frei und ohne Konto erstellt. Wenn eine davon rechtswidrige Inhalte enthält, schreib
          uns über die Seite <Link href={cheminVers(langue, "contact")}>Kontakt</Link> und nenne ihre
          Adresse — wir löschen sie.
        </p>

        <p className="prose__date">
          Siehe auch die <Link href={cheminVers(langue, "confidentialite")}>Datenschutzerklärung</Link> und
          die <Link href={cheminVers(langue, "conditions")}>Nutzungsbedingungen</Link>.
        </p>
      </>
    );
  },
};

export default mentions;
