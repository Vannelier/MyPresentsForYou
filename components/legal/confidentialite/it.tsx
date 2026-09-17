import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import type { ContenuLegal } from "../types";

const confidentialite: ContenuLegal = {
  titreMeta: "Informativa sulla privacy — MyPresentsForYou",
  descriptionMeta:
    "MyPresentsForYou non usa cookie né tracciamenti e non chiede alcun account. Cosa viene salvato, per quanto tempo e come cancellare tutto.",
  titre: "Informativa sulla privacy",
  chapo:
    "MyPresentsForYou è costruito per avere meno dati possibile da proteggere. Questa pagina dice esattamente quali, e perché esistono.",
  Corps: ({ langue }) => (
    <>
      <h2>Nessun cookie, nessun tracciamento</h2>
      <p>
        Il sito non installa <strong>alcun cookie</strong> e non usa{" "}
        <strong>alcuno strumento di statistica</strong> — niente Google Analytics, niente di equivalente.
        Nulla segue la tua navigazione, né qui né altrove. È per questo che non ti viene mostrato alcun
        banner di consenso.
      </p>

      <h2>Una sola cosa resta sul tuo dispositivo</h2>
      <p>
        Mentre componi un biglietto, il modulo salva il lavoro in corso nella{" "}
        <strong>memoria locale del tuo browser</strong>. È ciò che ti permette di andare a cercare
        l’indirizzo di un prodotto in un negozio, poi tornare e ritrovare il biglietto dove l’avevi
        lasciato — al telefono, una scheda messa da parte viene spesso chiusa dal sistema.
      </p>
      <p>
        Questa bozza <strong>non lascia mai il tuo dispositivo</strong>: non viene inviata ad alcun
        server, nemmeno al nostro, e noi non vi abbiamo alcun accesso. Viene cancellata non appena la
        pagina è creata, e comunque dopo sette giorni. Il pulsante «Ricomincia da capo», in cima al
        modulo, la elimina subito; cancellare i dati del sito dal browser fa lo stesso.
      </p>
      <p>
        I caratteri tipografici sono serviti dal nostro dominio, non da Google Fonts: visualizzare una
        pagina MyPresentsForYou non invia alcuna richiesta a terzi, e quindi nemmeno il tuo indirizzo IP.
      </p>

      <h2>Cosa viene salvato quando crei un biglietto</h2>
      <p>Solo ciò che scrivi tu nel modulo:</p>
      <ul>
        <li>i titoli, le note e gli indirizzi dei regali che proponi;</li>
        <li>i tuoi messaggi, la tua firma e il nome che dai alla persona;</li>
        <li>le immagini che carichi o di cui incolli l’indirizzo;</li>
        <li>le tue impostazioni di aspetto — occasione, palette, carattere.</li>
      </ul>
      <p>
        Non c’è <strong>né account, né password, né indirizzo e-mail</strong>. Niente collega un biglietto
        a un’identità: l’accesso si basa interamente sul link segreto di amministrazione che ricevi alla
        creazione.
      </p>

      <div className="prose__note">
        <p>
          <strong>Il nome di chi riceve è un dato personale — suo, non tuo.</strong> Lo inserisci al posto
          di quella persona, senza che abbia chiesto nulla. Metti su un biglietto solo ciò che accetteresti
          di mostrarle, e niente di sensibile: l’indirizzo pubblico di un biglietto è breve e indovinabile.
        </p>
      </div>

      <h2>Cosa viene salvato quando qualcuno riceve un biglietto</h2>
      <p>
        La persona che apre il link <strong>non inserisce nulla</strong>: né nome, né indirizzo, né e-mail.
        Vengono salvati il regalo scelto, la data della scelta e — se hai attivato l’opzione — il messaggio
        che ha voluto lasciare. Un contatore di visite viene incrementato, senza conservare nulla di chi ha
        visitato.
      </p>

      <h2>Il tuo indirizzo IP</h2>
      <p>
        Serve a una sola cosa: impedire che un robot crei migliaia di pagine o carichi migliaia di
        immagini. Il contatore corrispondente vive <strong>in memoria per pochi minuti</strong>, non viene
        scritto in alcun database, non viene mai conservato e scompare al riavvio del server.
      </p>
      <p>
        Il nostro fornitore di hosting, invece, tiene i propri registri tecnici, come ogni server web.
        Sfuggono al nostro controllo e seguono la sua politica di conservazione.
      </p>

      <h2>Per quanto tempo</h2>
      <p>
        Un biglietto su cui nessuno ha scelto viene eliminato, con le sue immagini,{" "}
        <strong>un anno dopo la sua creazione</strong>. Un biglietto la cui scelta è stata fatta resta
        disponibile perché tu possa consultarla, finché non lo elimini tu dal tuo link di amministrazione —
        le sue immagini se ne vanno allora con lui.
      </p>

      <h2>Cancellare un biglietto</h2>
      <p>
        Apri il tuo link di amministrazione: il pulsante di eliminazione è in fondo alla pagina.
        L’eliminazione è immediata e definitiva — il biglietto, i suoi messaggi e le sue immagini
        scompaiono, e i due link smettono di funzionare.
      </p>
      <p>
        Se hai perso questo link, scrivici dalla pagina{" "}
        <Link href={cheminVers(langue, "contact")}>Contatti</Link> indicando l’indirizzo pubblico del
        biglietto.
      </p>

      <h2>A chi vengono trasmessi i dati</h2>
      <p>
        <strong>Nulla viene venduto, affittato o ceduto a terzi a fini commerciali.</strong> Intervengono
        due fornitori tecnici: chi ospita il sito e il database, e il servizio di archiviazione delle
        immagini. Agiscono solo su nostra istruzione, per far funzionare il servizio. La loro identità è
        indicata nelle <Link href={cheminVers(langue, "mentions-legales")}>note legali</Link>.
      </p>
      <p>
        Una precisazione tecnica: quando incolli l’indirizzo di una pagina prodotto per recuperarne titolo
        e immagine, <strong>è il nostro server a visitarla</strong>, non il tuo browser. Il negozio vede il
        nostro server, mai il tuo indirizzo IP.
      </p>

      <h2>I tuoi diritti</h2>
      <p>
        Il Regolamento generale sulla protezione dei dati (GDPR) ti riconosce il diritto di accesso,
        rettifica, cancellazione, limitazione e opposizione. In pratica, eserciti direttamente i primi tre
        dal tuo link di amministrazione, che ti permette di consultare, modificare ed eliminare tutto senza
        scriverci.
      </p>
      <p>
        Per il resto, scrivici
        {aRemplir(SITE.email) ? (
          <>
            {" "}
            all’indirizzo indicato nella pagina <Link href={cheminVers(langue, "contact")}>Contatti</Link>
          </>
        ) : (
          <>
            {" "}
            a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </>
        )}
        . Un limite da conoscere: <strong>nessun biglietto è collegato a un’identità</strong>. Senza
        l’indirizzo pubblico del biglietto in questione, ci è materialmente impossibile ritrovarlo — e
        quindi dare seguito a una richiesta.
      </p>
      <p>
        Se la nostra risposta non ti soddisfa, puoi rivolgerti all’autorità per la protezione dei dati del
        tuo paese di residenza.
      </p>
    </>
  ),
};

export default confidentialite;
