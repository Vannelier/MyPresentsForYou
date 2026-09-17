import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import type { ContenuLegal } from "../types";

const conditions: ContenuLegal = {
  titreMeta: "Termini di utilizzo — MyPresentsForYou",
  descriptionMeta:
    "Cosa fa MyPresentsForYou, cosa non fa e cosa ti chiediamo. Servizio gratuito, senza account, senza pagamenti.",
  titre: "Termini di utilizzo",
  chapo:
    "Il servizio è gratuito e senza account. Ecco a cosa ci impegniamo, e cosa ti chiediamo in cambio.",
  Corps: ({ langue }) => (
    <>
      <h2>Che cos’è MyPresentsForYou</h2>
      <p>
        Uno strumento per comporre una pagina con diverse idee regalo, inviarne il link e sapere quale è
        stata scelta. <strong>MyPresentsForYou non vende nulla</strong>: non incassa alcun pagamento, non
        consegna nulla e non si frappone mai tra te e il negozio in cui comprerai. È un promemoria
        condiviso, non un negozio.
      </p>
      <p>
        Il servizio si finanzia con l&apos;affiliazione. Il pulsante «Acquista questo regalo» della tua pagina di amministrazione può passare da una <strong>rete di affiliazione</strong>: se acquisti dopo questo clic, il negozio può versarci una commissione. Non paghi nulla in più, e la pagina che riceve la persona non contiene alcun link di affiliazione.
      </p>

      <h2>Niente account, quindi niente rete di sicurezza</h2>
      <p>
        L’accesso al tuo biglietto si basa interamente sul link di amministrazione che ricevi alla
        creazione. <strong>Non possiamo rimandartelo</strong>: niente collega un biglietto a un’identità,
        ed è proprio questo che ci permette di non chiederti nulla. Conserva questo link.
      </p>
      <p>
        Di conseguenza, chi possiede il link ha i diritti. Non pubblicarlo e condividilo solo con persone
        di fiducia. Il link pubblico, invece, è fatto per essere condiviso — ma il suo indirizzo è breve e
        indovinabile, quindi non mettere nulla di sensibile su un biglietto.
      </p>

      <h2>Durata di un biglietto</h2>
      <p>
        Un biglietto su cui nessuno ha scelto viene eliminato{" "}
        <strong>un anno dopo la sua creazione</strong>. Una volta fatta la scelta, resta fissato su di
        essa: non è più modificabile e resta consultabile finché non lo elimini.
      </p>

      <h2>Cosa ti chiediamo</h2>
      <ul>
        <li>Non pubblicare nulla di illecito, d’odio, diffamatorio o contrario ai diritti di terzi.</li>
        <li>Non usare i biglietti per pubblicità non richiesta, phishing o reindirizzamenti ingannevoli.</li>
        <li>
          Non aggirare i limiti tecnici del servizio, né automatizzarlo per creare pagine in massa.
        </li>
        <li>
          Rispettare la persona a cui indirizzi un biglietto: ci scrivi il suo nome senza che l’abbia
          chiesto.
        </li>
      </ul>
      <p>
        Un biglietto che viola queste regole può essere eliminato senza preavviso. Per segnalarne uno,
        vedi la pagina <Link href={cheminVers(langue, "contact")}>Contatti</Link>.
      </p>

      <h2>Ciò a cui non ci impegniamo</h2>
      <p>
        Il servizio è fornito <strong>gratuitamente e così com’è</strong>, senza garanzia di disponibilità
        né di conservazione. Un’interruzione, un errore o una perdita di dati restano possibili. Se un
        biglietto è importante per te, conserva altrove l’elenco di ciò che ci hai messo.
      </p>
      <p>
        Il recupero automatico del titolo e dell’immagine di un prodotto dipende interamente dal sito in
        questione: molti negozi rifiutano le richieste automatiche. Quando non riesce, subentra
        l’inserimento manuale — non è un guasto, è il funzionamento previsto.
      </p>

      <h2>Modifiche</h2>
      <p>
        Questi termini possono evolvere insieme al servizio. Fa fede la data di aggiornamento in cima alla
        pagina; i cambiamenti importanti saranno segnalati nella home.
      </p>

      <p className="prose__date">
        Vedi anche l’<Link href={cheminVers(langue, "confidentialite")}>informativa sulla privacy</Link>.
      </p>
    </>
  ),
};

export default conditions;
