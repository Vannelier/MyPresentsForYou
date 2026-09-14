import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import Valeur from "../Valeur";
import type { ContenuLegal } from "../types";

const MANQUANT = "Da completare a cura dell’editore";

const mentions: ContenuLegal = {
  titreMeta: "Note legali — MyPresentsForYou",
  descriptionMeta: "Editore, hosting e contatti del sito MyPresentsForYou.",
  titre: "Note legali",
  chapo: "Chi pubblica questo sito, chi lo ospita e come contattarci.",
  Corps: ({ langue }) => {
    const societe = SITE.editeur.statut === "societe";
    return (
      <>
        <h2>Editore del sito</h2>
        <p>
          {societe ? "Ragione sociale" : "Responsabile della pubblicazione"}:{" "}
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.editeur.nom}</Valeur>
          </strong>
          <br />
          Indirizzo: <Valeur manquant={MANQUANT}>{SITE.editeur.adresse}</Valeur>
          <br />
          Contatto:{" "}
          {aRemplir(SITE.email) ? (
            <Valeur manquant={MANQUANT}>{SITE.email}</Valeur>
          ) : (
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          )}
          {societe && (
            <>
              <br />
              Numero d’impresa: <Valeur manquant={MANQUANT}>{SITE.editeur.numeroEntreprise}</Valeur>
              {SITE.editeur.tva && (
                <>
                  <br />
                  Partita IVA: {SITE.editeur.tva}
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

        <h2>Proprietà intellettuale</h2>
        <p>
          Il nome MyPresentsForYou, l’interfaccia del sito e il suo codice sono di proprietà del loro
          autore. Invece, <strong>il contenuto dei biglietti appartiene a chi li compone</strong>: testi,
          immagini e scelte restano suoi, e non ne rivendichiamo alcun diritto.
        </p>
        <p>
          Le immagini dei prodotti recuperate dai siti dei negozi appartengono ai rispettivi proprietari.
          Vengono copiate solo per la durata del biglietto, perché non si rompa se il negozio modifica il
          suo sito.
        </p>

        <h2>Responsabilità</h2>
        <p>
          MyPresentsForYou non vende nulla e non incassa alcun pagamento. I regali proposti su un biglietto
          rimandano a siti di terzi, sui quali non abbiamo alcun controllo: contenuti, prezzi e
          disponibilità sono di loro esclusiva responsabilità.
        </p>

        <h2>Segnalare un contenuto</h2>
        <p>
          I biglietti si creano liberamente e senza account. Se uno di essi presenta un contenuto
          illecito, scrivici dalla pagina <Link href={cheminVers(langue, "contact")}>Contatti</Link>{" "}
          indicandone l’indirizzo — lo elimineremo.
        </p>

        <p className="prose__date">
          Vedi anche l’<Link href={cheminVers(langue, "confidentialite")}>informativa sulla privacy</Link>{" "}
          e i <Link href={cheminVers(langue, "conditions")}>termini di utilizzo</Link>.
        </p>
      </>
    );
  },
};

export default mentions;
