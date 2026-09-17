import type { TextesGuides } from "./types";

export const it: TextesGuides = {
  page: {
    titreMeta: "Idee regalo per ogni occasione — MyPresentsForYou",
    descriptionMeta:
      "Compleanno, Natale, matrimonio, nascita, casa nuova, festa della mamma: idee regalo divise per profilo, e un modo semplice per lasciar scegliere.",
    titre: "Idee regalo per occasione",
    chapo:
      "Per ogni occasione, spunti divisi per profilo — e un modo per smettere di indovinare: proporre qualche idea, e lasciar scegliere la persona.",
  },

  libelles: {
    composer: "Crea la mia pagina regalo",
    exemple: "Guarda un esempio di pagina regalo",
    questions: "Tutte le domande frequenti",
    autres: "Per altre occasioni",
    fil: "Percorso",
    accueil: "Home",
    miseAJour: "Ultimo aggiornamento:",
    voirAussi: "Vedi anche:",
    lire: "Leggi la guida",
  },

  guides: {
    anniversaire: {
      titreMeta: "Idee regalo di compleanno — MyPresentsForYou",
      descriptionMeta:
        "Idee regalo di compleanno divise per profilo — esperienze, belle cose, piccoli piaceri — e un modo semplice per lasciar scegliere la persona.",
      titre: "Idee regalo di compleanno: e se lasciassi scegliere?",
      chapo:
        "Il compleanno torna ogni anno, e l'ispirazione si esaurisce prima. Ecco spunti divisi per profilo, e un modo semplice per evitare il regalo sbagliato: proporne alcuni, e lasciar scegliere la persona.",
      accroche: "Spunti per profilo, e basta regali sbagliati.",
      apercu: ["Un laboratorio di ceramica", "Un biglietto per un concerto", "Una bella teiera"],
      pourquoi: {
        titre: "Perché lasciar scegliere per un compleanno",
        paragraphes: [
          "Più conosci qualcuno da tempo, più è difficile sorprenderlo: i regali ovvi sono già stati fatti, e i gusti nel frattempo sono cambiati. Chiedere «cosa ti piacerebbe?» risolve la questione, ma toglie tutto ciò che rende tale un regalo.",
          "Proporre tre o quattro idee lascia intatta la sorpresa — la persona scopre cosa hai immaginato per lei — lasciandole però l'ultima parola. Riceve ciò che le piace davvero, e tu non devi più puntare tutto su un'idea sola.",
          "È anche un modo per regalare in modo più ampio del solito: un'esperienza accanto a un oggetto, un piccolo piacere accanto a un progetto. La scelta stessa dice qualcosa, e tu lo scopri.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro:
          "Quattro profili, e per ciascuno idee da mescolare sulla stessa pagina. Bastano da due a quattro proposte: oltre, scegliere diventa un lavoro.",
        profils: [
          {
            nom: "Per chi preferisce i ricordi agli oggetti",
            idees: [
              { nom: "Un laboratorio creativo", pourquoi: "Ceramica, legatoria, cucina: una mattinata per imparare e tornare a casa con ciò che si è fatto." },
              { nom: "Un biglietto per un concerto o uno spettacolo", pourquoi: "Da scegliere secondo la stagione, per avere una data da aspettare." },
              { nom: "Una notte in un luogo insolito", pourquoi: "Casa sull'albero, chiatta, faro: il luogo fa gran parte del ricordo." },
              { nom: "Un corso introduttivo", pourquoi: "Fotografia, degustazione di vini, arrampicata: una scoperta senza impegno." },
            ],
          },
          {
            nom: "Per chi ama le belle cose di tutti i giorni",
            idees: [
              { nom: "Una bella teiera o caffettiera", pourquoi: "Un oggetto che si usa ogni giorno, e che si nota ogni volta." },
              { nom: "Una coperta di lana", pourquoi: "Il tipo di comfort che raramente ci si regala da soli." },
              { nom: "Un taccuino rilegato a mano", pourquoi: "Per le liste, le idee o i viaggi." },
              { nom: "Una lampada da lettura", pourquoi: "Una buona luce cambia una serata." },
            ],
          },
          {
            nom: "Per chi ha già tutto",
            idees: [
              { nom: "Un abbonamento scoperta", pourquoi: "Libri, caffè o fiori: una consegna al mese, per qualche mese." },
              { nom: "Una cena in un locale tanto atteso", pourquoi: "Il ristorante che si rimanda sempre." },
              { nom: "Una donazione a un'associazione", pourquoi: "Un regalo che non occupa spazio, fatto a suo nome." },
              { nom: "Una giornata di benessere", pourquoi: "Un massaggio, un hammam: un vero momento per sé." },
            ],
          },
          {
            nom: "Per chi ama imparare e creare",
            idees: [
              { nom: "Un kit fai da te", pourquoi: "Birra, sapone, candele: tutto per farli da sé, istruzioni comprese." },
              { nom: "Un libro di riferimento", pourquoi: "Nel campo che appassiona, quello che si tiene per anni." },
              { nom: "Un attrezzo di qualità", pourquoi: "Coltello da cucina, cesoie, cassetta degli attrezzi: l'oggetto che dura." },
              { nom: "Un corso online", pourquoi: "Per avanzare al proprio ritmo su un argomento che attira." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Crea la pagina in tre passaggi",
        liste: [
          "Scegli l'occasione «Compleanno»: la pagina ne prende i colori, la decorazione e le frasi.",
          "Aggiungi da due a dieci idee; incolla il link di un prodotto per recuperarne titolo e immagine, o descrivi un'esperienza a mano.",
          "Invia il link, o stampa il codice QR su un biglietto. Scopri la scelta sul tuo link privato, e fai il regalo.",
        ],
      },
      questions: {
        titre: "Domande sui regali di compleanno",
        liste: [
          {
            q: "Quante idee proporre per un compleanno?",
            r: "Tre o quattro, idealmente di natura diversa — un'esperienza, un oggetto, un piccolo piacere. Oltre sei, la scelta diventa un'esitazione.",
          },
          {
            q: "Si può preparare la pagina in anticipo?",
            r: "Sì. Puoi impostare una data di apertura: fino ad allora, il biglietto resta sigillato con un conto alla rovescia. Invii il link quando vuoi, e si apre il giorno del compleanno.",
          },
          {
            q: "La persona vede il prezzo dei regali?",
            r: "No, mai. Vede ciò che proponi, non quanto costa: sceglie ciò che le piace, senza confrontare.",
          },
        ],
      },
    },

    noel: {
      titreMeta: "Idee regalo di Natale originali — MyPresentsForYou",
      descriptionMeta:
        "Idee regalo di Natale originali, divise per profilo — esperienze, serate d'inverno, chi ha già tutto — e un modo semplice per lasciar scegliere.",
      titre: "Idee regalo di Natale: proporre, e lasciar scegliere",
      chapo:
        "A Natale i regali si moltiplicano e le idee si somigliano. Per una persona che vuoi davvero coccolare, ecco spunti originali divisi per profilo — e un modo per non sbagliare: proporre qualche idea, e lasciar scegliere.",
      accroche: "Idee originali, e un regalo che non finisce in fondo a un armadio.",
      apercu: ["Un weekend in montagna", "Una selezione di tè", "Un corso di cucina"],
      pourquoi: {
        titre: "Perché lasciar scegliere a Natale",
        paragraphes: [
          "Il Natale concentra i regali di tutto l'anno in una sola serata. Tra le liste dei bambini e un pensiero per ciascuno, gli adulti ricevono spesso regali trovati in fretta: utili nel migliore dei casi, dimenticati nel peggiore.",
          "Proporre qualche idea invece di un unico pacchetto cambia il modo di regalare. La persona scopre ciò che hai immaginato, sceglie ciò che le fa davvero voglia, e riceve il regalo che avrebbe desiderato.",
          "È pratico anche quando si regala a distanza: la pagina si condivide con un messaggio, la scelta si fa prima delle feste, e hai il tempo di ordinare prima della vigilia.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro:
          "Idee da mescolare sulla stessa pagina. A Natale, l'esperienza da vivere dopo le feste è spesso quella scelta: prolunga il momento.",
        profils: [
          {
            nom: "Per chi ama le esperienze da condividere",
            idees: [
              { nom: "Un weekend in montagna o al mare", pourquoi: "Fuori stagione, per goderselo davvero." },
              { nom: "Un corso di cucina per due", pourquoi: "Una serata, e ricette che restano." },
              { nom: "Biglietti per uno spettacolo a gennaio", pourquoi: "Una data da aspettare quando le feste sono finite." },
              { nom: "Una visita guidata insolita", pourquoi: "Sotterranei, botteghe, dietro le quinte: la propria città in un altro modo." },
            ],
          },
          {
            nom: "Per chi ama le serate d'inverno",
            idees: [
              { nom: "Una selezione di tè o di caffè", pourquoi: "Da scoprire, tazza dopo tazza." },
              { nom: "Una coperta e un buon libro", pourquoi: "Il regalo più semplice, e spesso il più apprezzato." },
              { nom: "Un gioco da tavolo per adulti", pourquoi: "Per le lunghe serate in famiglia o tra amici." },
              { nom: "Una candela artigianale", pourquoi: "Scelta in un laboratorio che le produce." },
            ],
          },
          {
            nom: "Per chi ha già tutto",
            idees: [
              { nom: "Un abbonamento di qualche mese", pourquoi: "Rivista, fiori o prodotti locali: il piacere torna ogni mese." },
              { nom: "L'adozione di un alveare o di un albero", pourquoi: "Con notizie durante tutto l'anno." },
              { nom: "Una cena in un bel ristorante", pourquoi: "Il tipo di serata che raramente ci si concede." },
              { nom: "Una giornata con un artigiano", pourquoi: "Per imparare un mestiere con le proprie mani." },
            ],
          },
          {
            nom: "Per chi prepara già l'anno nuovo",
            idees: [
              { nom: "Una bella agenda o un taccuino", pourquoi: "Per i progetti dell'anno che comincia." },
              { nom: "Una guida di viaggio e una mappa", pourquoi: "Per la meta di cui si parla da tanto." },
              { nom: "Attrezzatura sportiva di qualità", pourquoi: "Per il buon proposito, mantenuto stavolta." },
              { nom: "Un corso breve", pourquoi: "Lingua, fotografia, disegno: un progetto per gennaio." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Crea la pagina in tre passaggi",
        liste: [
          "Scegli l'occasione «Natale»: la pagina ne prende i colori invernali e la decorazione.",
          "Aggiungi da due a dieci idee; incolla il link di un prodotto per recuperarne titolo e immagine, o descrivi un'esperienza a mano.",
          "Invia il link prima delle feste, o metti il codice QR in un biglietto sotto l'albero. Vedi la scelta, e ordini in tempo.",
        ],
      },
      questions: {
        titre: "Domande sui regali di Natale",
        liste: [
          {
            q: "Si può regalare a più persone della stessa famiglia?",
            r: "Sì: crea una pagina per persona. Ognuno riceve il proprio link e sceglie per conto suo; ritrovi ogni scelta sul link privato di ciascuna pagina.",
          },
          {
            q: "E se la persona non sceglie prima di Natale?",
            r: "Puoi ricordarglielo: la pagina resta aperta. Senza una scelta, viene eliminata dopo un anno.",
          },
          {
            q: "Si può aprire il biglietto solo la sera della vigilia?",
            r: "Sì. Imposta una data di apertura: fino ad allora, il biglietto resta sigillato con un conto alla rovescia, anche se il link è stato inviato prima.",
          },
        ],
      },
    },

    mariage: {
      titreMeta: "Idee regalo di nozze per gli sposi — MyPresentsForYou",
      descriptionMeta:
        "Idee regalo di matrimonio divise per tipo di coppia, e un'alternativa alla busta: proporre qualche idea, e lasciar scegliere gli sposi.",
      titre: "Idee regalo di matrimonio: lascia scegliere gli sposi",
      chapo:
        "Per un matrimonio si esita spesso tra la lista nozze, la busta e il regalo personale. Ecco un'altra strada: qualche idea che scegli per la coppia, presentata su una pagina, e gli sposi che decidono. Con spunti divisi per profilo.",
      accroche: "Tra la lista nozze e la busta, qualche idea che la coppia sceglie.",
      apercu: ["Una cena gourmet", "Un corso di degustazione", "Una notte in B&B"],
      pourquoi: {
        titre: "Perché lasciar scegliere per un matrimonio",
        paragraphes: [
          "Una lista nozze dice esattamente cosa regalare, e una busta non dice nulla di te. Tra le due, molti invitati cercano un regalo che sia allo stesso tempo personale e davvero utile alla coppia.",
          "Proporre qualche idea unisce le due cose: ogni proposta viene da te, e gli sposi scelgono quella che somiglia loro. Non ricevono un oggetto in più che hanno già, e tu sai che il tuo regalo servirà.",
          "La pagina si invia prima o dopo la festa. Molti preferiscono regalarla qualche settimana dopo, quando la coppia ha il tempo di guardarla, e di scegliere insieme.",
        ],
      },
      idees: {
        titre: "Spunti, per tipo di coppia",
        intro:
          "Idee pensate per due. Le esperienze da vivere insieme sono spesso quelle che gli sposi scelgono: prolungano la festa.",
        profils: [
          {
            nom: "Una coppia che ama uscire",
            idees: [
              { nom: "Una cena in un bel ristorante", pourquoi: "Per una sera del primo mese di matrimonio." },
              { nom: "Biglietti per un concerto o un festival", pourquoi: "Una data da aspettare insieme." },
              { nom: "Un corso di degustazione o di cocktail", pourquoi: "Due ore per imparare, e quanto basta per rifarlo a casa." },
              { nom: "Una crociera sul fiume", pourquoi: "Qualche ora sull'acqua, lontano dalla frenesia." },
            ],
          },
          {
            nom: "Una coppia che mette su casa",
            idees: [
              { nom: "Un bel servizio da tavola", pourquoi: "Quello che si tira fuori per gli ospiti." },
              { nom: "Un elettrodomestico da cucina di qualità", pourquoi: "Quello che si esita a comprarsi da soli." },
              { nom: "Un'opera di un artista locale", pourquoi: "Una stampa o un'incisione per la prima parete della coppia." },
              { nom: "Piante e vasi", pourquoi: "Per dare vita alla nuova casa." },
            ],
          },
          {
            nom: "Una coppia che ama viaggiare",
            idees: [
              { nom: "Una notte in un bed and breakfast", pourquoi: "Per un weekend a due, nella data che preferiscono." },
              { nom: "Una valigia o una borsa da viaggio", pourquoi: "L'oggetto che li accompagnerà ovunque." },
              { nom: "Un'attività durante il viaggio di nozze", pourquoi: "Immersioni, escursione guidata, corso di cucina sul posto." },
              { nom: "Un album per le foto del viaggio", pourquoi: "Da riempire al ritorno." },
            ],
          },
          {
            nom: "Una coppia che ha già tutto",
            idees: [
              { nom: "Un contributo a un progetto", pourquoi: "Il viaggio, i lavori, il primo mobile scelto insieme." },
              { nom: "Un ritratto illustrato della coppia", pourquoi: "Realizzato da un artista, a partire da una foto." },
              { nom: "Un servizio fotografico all'aperto", pourquoi: "Immagini di loro due, senza l'abito della cerimonia." },
              { nom: "Un albero da piantare", pourquoi: "Un regalo che cresce con la loro storia." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Crea la pagina in tre passaggi",
        liste: [
          "Scegli l'occasione «Matrimonio»: la pagina ne prende la palette, la decorazione con le fedi e frasi rivolte a entrambi.",
          "Aggiungi da due a dieci idee pensate per la coppia; un'esperienza si descrive benissimo a mano, senza link.",
          "Invia il link agli sposi, o metti il codice QR nel tuo biglietto di auguri. Vedi cosa hanno scelto, e fai il regalo.",
        ],
      },
      questions: {
        titre: "Domande sui regali di matrimonio",
        liste: [
          {
            q: "Sostituisce la lista nozze?",
            r: "No, la completa. Una lista dice cosa si aspetta la coppia; la tua pagina propone le tue idee, e gli sposi scelgono quella che preferiscono. Niente vieta di fare entrambe le cose.",
          },
          {
            q: "Gli sposi possono scegliere insieme?",
            r: "Sì: il link si apre su qualsiasi dispositivo. Guardano la pagina insieme e confermano una sola scelta.",
          },
          {
            q: "Si può regalare in più invitati?",
            r: "La pagina la crea una persona sola, ma niente vieta di mettersi d'accordo in più sulle idee da proporre, e poi dividere l'acquisto una volta fatta la scelta.",
          },
        ],
      },
    },

    naissance: {
      titreMeta: "Regalo di nascita originale e utile — MyPresentsForYou",
      descriptionMeta:
        "Idee regalo per la nascita originali e utili, per il bebè o per i genitori, e un modo semplice per lasciar scegliere ai genitori ciò che manca.",
      titre: "Regalo per la nascita originale e utile: lascia scegliere i genitori",
      chapo:
        "Quando nasce un bambino, i regali arrivano in quantità e in doppio: tre tutine della stessa taglia, due pupazzi, e nessuna delle cose che mancano davvero. Ecco spunti divisi per profilo — e un modo per regalare giusto: proporre qualche idea, e lasciar scegliere i genitori.",
      accroche: "Invece dell'ennesimo pupazzo, ciò che manca davvero ai genitori.",
      apercu: ["Pasti a domicilio", "Una fascia porta bebè", "Un servizio fotografico"],
      pourquoi: {
        titre: "Perché lasciar scegliere per una nascita",
        paragraphes: [
          "Nei primi mesi i genitori ricevono molto, e spesso la stessa cosa. Ciò che manca davvero lo sanno solo loro: un'attrezzatura precisa, del tempo, un pasto da non dover preparare.",
          "Proporre qualche idea lascia loro la scelta senza chiedere di fare una lista — un compito in più, in un momento in cui non hanno tempo. Guardano le tue proposte quando possono, e scelgono con un gesto.",
          "Non c'è fretta: la pagina resta online un anno. Molti genitori scelgono qualche settimana dopo la nascita, quando finalmente vedono cosa sarebbe utile.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro:
          "Idee per il bebè, e soprattutto per i genitori, che spesso vengono dimenticati. Mescolale sulla stessa pagina.",
        profils: [
          {
            nom: "Per tirare un po' il fiato",
            idees: [
              { nom: "Pasti a domicilio", pourquoi: "Qualche sera senza cucinare, nelle prime settimane." },
              { nom: "Qualche ora di aiuto in casa", pourquoi: "Pulizie o stiratura in meno." },
              { nom: "Un massaggio per chi ha partorito", pourquoi: "Un vero momento di riposo, da prendere quando possibile." },
              { nom: "Una serata di baby-sitting", pourquoi: "Più avanti, per una prima uscita in due." },
            ],
          },
          {
            nom: "Per la vita di tutti i giorni con il bebè",
            idees: [
              { nom: "Una fascia o un marsupio", pourquoi: "Per avere le mani libere, da scegliere secondo l'uso." },
              { nom: "Un sacco nanna della taglia successiva", pourquoi: "Quello che nessuno regala: si regala sempre il primo." },
              { nom: "Un tappeto gioco", pourquoi: "Per i primi mesi a terra." },
              { nom: "Una borsa fasciatoio pratica", pourquoi: "Da portare ovunque, per anni." },
            ],
          },
          {
            nom: "Per conservare i ricordi",
            idees: [
              { nom: "Un servizio fotografico newborn", pourquoi: "Da fare nelle prime settimane." },
              { nom: "Un diario della nascita da compilare", pourquoi: "Le prime volte, scritte mese dopo mese." },
              { nom: "Un calco di mani e piedi", pourquoi: "Un ricordo che dura a lungo." },
              { nom: "Una stampa d'arte della prima foto", pourquoi: "Incorniciata, per la cameretta." },
            ],
          },
          {
            nom: "Per più avanti",
            idees: [
              { nom: "Libri per i primi anni", pourquoi: "Una piccola biblioteca con cui crescere." },
              { nom: "Un giocattolo di legno resistente", pourquoi: "Che passerà da un bambino all'altro." },
              { nom: "Un versamento su un libretto di risparmio", pourquoi: "Un regalo che aspetta il suo momento." },
              { nom: "Vestiti per i due anni", pourquoi: "Per il giorno in cui tutto il resto sarà troppo piccolo." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Crea la pagina in tre passaggi",
        liste: [
          "Scegli l'occasione «Nascita»: la pagina ne prende i colori delicati e la decorazione.",
          "Aggiungi da due a dieci idee; per un servizio o un momento di riposo basta una descrizione a mano.",
          "Invia il link ai genitori, senza fretta: la pagina resta online un anno. Vedi la loro scelta, e fai il regalo.",
        ],
      },
      questions: {
        titre: "Domande sui regali per la nascita",
        liste: [
          {
            q: "Bisogna aspettare la nascita per inviare la pagina?",
            r: "No. Puoi prepararla prima e inviarla quando vuoi; puoi anche impostare una data di apertura, perché resti sigillata fino ad allora.",
          },
          {
            q: "Si usa regalare ai genitori invece che al bebè?",
            r: "Sempre di più. Un pasto a domicilio o qualche ora di aiuto sono spesso i regali che i genitori ricordano meglio. Proponi entrambi, e lasciali scegliere.",
          },
          {
            q: "I genitori devono creare un account per scegliere?",
            r: "No. Aprono il link, scelgono e confermano, senza account né indirizzo e-mail.",
          },
        ],
      },
    },

    cremaillere: {
      titreMeta: "Idee regalo per la casa nuova — MyPresentsForYou",
      descriptionMeta:
        "Idee regalo originali per chi va a vivere in una casa nuova, da solo o in coppia, e un modo semplice per lasciar scegliere ciò che manca ancora.",
      titre: "Idee regalo per la casa nuova: ciò che manca ancora",
      chapo:
        "Una casa nuova porta con sé una lista di ciò che manca che nessuno ha ancora scritto. Ecco spunti divisi per profilo — e un modo per regalare qualcosa di utile senza indovinare: proporre qualche idea, e lasciar scegliere ciò che manca davvero.",
      accroche: "Per una casa nuova, ciò che manca davvero, scelto sul posto.",
      apercu: ["Una pianta da interno", "Un buon coltello da cucina", "Un'opera da appendere"],
      pourquoi: {
        titre: "Perché lasciar scegliere per una casa nuova",
        paragraphes: [
          "Quando si trasloca, raramente si sa cosa manca prima di averci vissuto qualche settimana. Gli ospiti, invece, arrivano con una bottiglia, una pianta o un oggetto decorativo scelto senza conoscere il posto.",
          "Proporre qualche idea lascia decidere in base a ciò che si vede in casa: lo spazio disponibile, lo stile dell'abitazione, ciò che c'è già. Il regalo trova il suo posto, invece di cercarlo.",
          "La pagina si può inviare dopo la festa, una volta finita la sistemazione. È spesso allora che i bisogni si fanno chiari.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro: "Idee per abitare il luogo, dalla più utile alla più personale.",
        profils: [
          {
            nom: "Per chi ama ricevere",
            idees: [
              { nom: "Un bel servizio di bicchieri", pourquoi: "Per le prime cene in casa." },
              { nom: "Un tagliere in legno massello", pourquoi: "Serve a tutto, e si porta in tavola." },
              { nom: "Un vassoio da portata", pourquoi: "Per l'aperitivo come per la colazione." },
              { nom: "Tovaglioli di lino", pourquoi: "Il dettaglio che cambia una tavola." },
            ],
          },
          {
            nom: "Per chi ama cucinare",
            idees: [
              { nom: "Un buon coltello da cucina", pourquoi: "L'attrezzo che si usa ogni giorno." },
              { nom: "Una casseruola in ghisa", pourquoi: "Per anni di piatti a cottura lenta." },
              { nom: "Un libro di cucina di stagione", pourquoi: "Per inaugurare la nuova cucina." },
              { nom: "Un macinino e una selezione di spezie", pourquoi: "Per riempire le prime dispense." },
            ],
          },
          {
            nom: "Per chi ama le piante e l'arredamento",
            idees: [
              { nom: "Una grande pianta da interno", pourquoi: "Scelta secondo la luce della casa." },
              { nom: "Un'opera di un artista locale", pourquoi: "Una stampa o un'incisione per la prima parete." },
              { nom: "Una lampada d'appoggio", pourquoi: "Per l'angolo ancora senza luce." },
              { nom: "Una cornice da parete", pourquoi: "Per i ricordi che si trasferiscono anche loro." },
            ],
          },
          {
            nom: "Per chi preferisce l'utile al decorativo",
            idees: [
              { nom: "Una cassetta degli attrezzi completa", pourquoi: "Per le mensole ancora da montare." },
              { nom: "Un aspirapolvere portatile", pourquoi: "Il piccolo elettrodomestico che si finisce sempre per comprare." },
              { nom: "Qualche ora di aiuto per il montaggio", pourquoi: "Per i mobili ancora negli scatoloni." },
              { nom: "Un termostato intelligente", pourquoi: "Per una casa confortevole e che consuma meno." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Crea la pagina in tre passaggi",
        liste: [
          "Scegli l'occasione «Casa nuova»: la pagina ne prende i colori e la decorazione.",
          "Aggiungi da due a dieci idee; incolla il link di un prodotto, o descrivi un servizio a mano.",
          "Invia il link dopo la festa, una volta sistemati. Vedi cosa mancava, e fai il regalo.",
        ],
      },
      questions: {
        titre: "Domande sui regali per la casa nuova",
        liste: [
          {
            q: "Bisogna portare il regalo il giorno della festa?",
            r: "Non per forza. Puoi arrivare con un biglietto con il codice QR della pagina: la persona sceglie più tardi, vedendo cosa le manca.",
          },
          {
            q: "E per una coppia che va a vivere insieme?",
            r: "Il link si apre su qualsiasi dispositivo: la coppia guarda la pagina insieme e conferma una sola scelta.",
          },
          {
            q: "Si può proporre un'idea senza link a un negozio?",
            r: "Sì. Un aiuto per il montaggio o una pianta da scegliere insieme si descrivono benissimo a mano, con un titolo e una nota.",
          },
        ],
      },
    },

    "fete-des-meres": {
      titreMeta: "Idee regalo per la festa della mamma — MyPresentsForYou",
      descriptionMeta:
        "Idee regalo originali per la festa della mamma, divise per profilo — momenti insieme, benessere, passioni — e un modo semplice per lasciarla scegliere.",
      titre: "Idee regalo per la festa della mamma: lasciala scegliere",
      chapo:
        "Per la festa della mamma si cerca di dire grazie senza ricadere ogni anno negli stessi pensieri. Ecco spunti divisi per profilo — e un'idea semplice: proporre qualche regalo scelto per lei, e lasciarla decidere.",
      accroche: "Dire grazie in un altro modo, con idee che sceglie lei.",
      apercu: ["Un brunch in due", "Una giornata alla spa", "Un laboratorio floreale"],
      pourquoi: {
        titre: "Perché lasciar scegliere per la festa della mamma",
        paragraphes: [
          "Molte mamme rispondono «niente, mi basta che tu ci sia» quando si chiede loro cosa desiderano. La risposta è sincera, ma non dice cosa regalare.",
          "Proporre qualche idea le lascia il piacere della sorpresa e la libertà di scegliere: un momento insieme, un oggetto che esitava a comprarsi, un'attività che rimanda da tempo. Intanto scopri cosa le fa davvero voglia.",
          "La data della festa cambia da un paese all'altro, e la pagina può essere pronta molto prima: imposta una data di apertura, e il biglietto resterà sigillato fino al giorno giusto.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro: "Idee per dire grazie — da mescolare sulla stessa pagina.",
        profils: [
          {
            nom: "Per condividere un momento",
            idees: [
              { nom: "Un brunch in un bel locale", pourquoi: "Una domenica mattina, solo voi due." },
              { nom: "Una serata a teatro o a un concerto", pourquoi: "Una serata da aspettare insieme." },
              { nom: "Una gita di un giorno", pourquoi: "Per scoprire un posto di cui parla spesso." },
              { nom: "Un laboratorio da fare insieme", pourquoi: "Ceramica, cucina, composizione floreale." },
            ],
          },
          {
            nom: "Per prendersi cura di sé",
            idees: [
              { nom: "Una giornata alla spa", pourquoi: "Un vero momento di riposo, nella data che preferisce." },
              { nom: "Un massaggio o un trattamento", pourquoi: "Un'ora tutta per lei." },
              { nom: "Un cofanetto di prodotti artigianali per la cura di sé", pourquoi: "Scelti da un piccolo produttore." },
              { nom: "Un accappatoio in cotone spesso", pourquoi: "Il comfort di tutti i giorni." },
            ],
          },
          {
            nom: "Per le sue passioni",
            idees: [
              { nom: "Un laboratorio floreale", pourquoi: "Per comporre un mazzo, e imparare a rifarlo." },
              { nom: "Un bel libro su un argomento che ama", pourquoi: "Giardino, cucina, viaggi, pittura." },
              { nom: "Attrezzi da giardino di qualità", pourquoi: "Attrezzi che durano per molte stagioni." },
              { nom: "Un corso di fotografia", pourquoi: "Per catturare meglio i ricordi di famiglia." },
            ],
          },
          {
            nom: "Per conservare un ricordo",
            idees: [
              { nom: "Un fotolibro di famiglia", pourquoi: "Le immagini più belle degli ultimi anni." },
              { nom: "Un gioiello inciso", pourquoi: "Iniziali o una data che contano." },
              { nom: "Un ritratto illustrato", pourquoi: "A partire da una foto di famiglia." },
              { nom: "Una lettera e un mazzo di fiori consegnati", pourquoi: "Quando la distanza impedisce di esserci." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Crea la pagina in tre passaggi",
        liste: [
          "Scegli l'occasione «Festa della mamma»: la pagina ne prende la palette e la frase di apertura.",
          "Aggiungi da due a dieci idee; un momento da condividere si descrive benissimo a mano.",
          "Invia il link, o stampa il codice QR su un biglietto. Lei sceglie, tu vedi la sua scelta, e fai il regalo.",
        ],
      },
      questions: {
        titre: "Domande sui regali per la festa della mamma",
        liste: [
          {
            q: "Si può preparare la pagina qualche giorno prima?",
            r: "Sì. Imposta una data di apertura: il biglietto resta sigillato con un conto alla rovescia fino al giorno della festa, anche se il link viene inviato prima.",
          },
          {
            q: "E se non è a suo agio con gli schermi?",
            r: "Stampa il biglietto: un foglio piegato con il codice QR, da mettere in una busta. Basta inquadrarlo con un telefono, e potete scegliere insieme.",
          },
          {
            q: "Più figli possono fare il regalo insieme?",
            r: "La pagina la crea una persona sola, ma potete mettervi d'accordo sulle idee, firmare insieme, e poi dividere l'acquisto una volta fatta la scelta.",
          },
        ],
      },
    },
  },
};
