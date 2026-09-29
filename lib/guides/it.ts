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
    autresCategories: "Altri regali su cui si esita",
  },

  guides: {
    anniversaire: {
      titreMeta: "Idee regalo di compleanno — MyPresentsForYou",
      descriptionMeta:
        "Idee regalo di compleanno divise per profilo — esperienze, belle cose, piccoli piaceri — e un modo semplice per lasciar scegliere la persona.",
      titre: "Idee regalo di compleanno: e se lasciassi scegliere?",
      chapo:
        "Il compleanno torna ogni anno, e a un certo punto le idee finiscono. Invece di puntare su una sola idea, ne proponi tre o quattro e la persona sceglie quella che preferisce. Le idee qui sotto sono divise per profilo.",
      accroche: "Idee per profilo, e basta regali che cadono nel vuoto.",
      apercu: ["Un laboratorio di ceramica", "Un biglietto per un concerto", "Una bella teiera"],
      pourquoi: {
        titre: "Perché lasciar scegliere per un compleanno",
        paragraphes: [
          "Dopo dieci anni hai già regalato il libro, la sciarpa e il buono per il ristorante. E nel frattempo i suoi gusti sono cambiati. Resta la domanda «cosa ti farebbe piacere?», che risolve il problema e uccide la sorpresa in un colpo solo.",
          "Tre o quattro idee, e la sorpresa regge lo stesso: scopre cosa hai immaginato, e decide lei. Non ti giochi più tutto su una carta sola.",
          "Così puoi anche regalare in modo più ampio del solito. Un laboratorio accanto a un oggetto, un piccolo piacere accanto a un progetto vero. E quello che sceglie ti dice qualcosa di lei.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro:
          "Quattro profili, quattro idee ciascuno, da mescolare sulla stessa pagina. Da due a quattro proposte, non di più: oltre, scegliere stanca.",
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
            r: "Tre o quattro, di tipo diverso se puoi: un laboratorio, un oggetto, un piccolo piacere. Oltre sei, si esita invece di scegliere.",
          },
          {
            q: "Si può preparare la pagina in anticipo?",
            r: "Sì. Imposta una data di apertura e il biglietto resta sigillato dietro un conto alla rovescia. Invii il link quando vuoi, la pagina si apre il giorno del compleanno.",
          },
          {
            q: "La persona vede il prezzo dei regali?",
            r: "Mai. Vede le tue idee, non i prezzi, e nessuno confronta.",
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
        "A Natale tutti ricevono tanto e nessuno sa più cosa regalare. Per qualcuno che vuoi davvero viziare, proponi tre o quattro idee e lascia scegliere. Le idee qui sotto sono divise per profilo.",
      accroche: "Idee che non finiscono in fondo a un armadio.",
      apercu: ["Un weekend in montagna", "Una selezione di tè", "Un corso di cucina"],
      pourquoi: {
        titre: "Perché lasciar scegliere a Natale",
        paragraphes: [
          "Natale è tutti i regali dell'anno in una sera. Tra le letterine dei bambini e un pensierino per ciascuno, agli adulti tocca spesso quello che si è trovato di corsa.",
          "Con più idee invece di un pacco solo, la persona vede cosa hai immaginato, prende quello che le va, e si ritrova con ciò che avrebbe scelto da sé.",
          "Comodo anche quando regali a distanza. Mandi la pagina con un messaggio, la scelta arriva prima delle feste, e hai il tempo di ordinare.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro:
          "Idee da mescolare sulla stessa pagina. A Natale vince spesso l'esperienza da vivere a gennaio: fa durare le feste.",
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
            r: "Sì, una pagina per persona. Ognuno riceve il suo link e sceglie per conto suo; ritrovi le scelte nel link privato di ogni pagina.",
          },
          {
            q: "E se la persona non sceglie prima di Natale?",
            r: "Puoi ricordarglielo, la pagina resta aperta. Se nessuno sceglie, viene eliminata dopo un anno.",
          },
          {
            q: "Si può aprire il biglietto solo la sera della vigilia?",
            r: "Sì. Imposta una data di apertura: il biglietto resta sigillato dietro un conto alla rovescia, anche se hai inviato il link prima.",
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
        "Per un matrimonio si esita tra la lista nozze, la busta e il regalo scelto da sé. C'è un'altra strada: proponi qualche idea alla coppia, su una pagina, e decidono loro. Le idee qui sotto sono divise per tipo di coppia.",
      accroche: "Tra la lista e la busta: qualche idea, e sceglie la coppia.",
      apercu: ["Una cena gourmet", "Un corso di degustazione", "Una notte in B&B"],
      pourquoi: {
        titre: "Perché lasciar scegliere per un matrimonio",
        paragraphes: [
          "La lista nozze dice esattamente cosa comprare. La busta, invece, non dice niente di te. Molti invitati cercano una via di mezzo: un regalo personale che serva davvero.",
          "Qualche idea fa le due cose insieme. Ogni proposta viene da te, e gli sposi prendono quella che gli somiglia. Niente doppioni, e il tuo regalo serve.",
          "Puoi inviare la pagina prima o dopo la festa. Molti aspettano qualche settimana, il tempo che la coppia riprenda fiato e la guardi insieme.",
        ],
      },
      idees: {
        titre: "Spunti, per tipo di coppia",
        intro:
          "Idee per due. Spesso gli sposi prendono l'esperienza da vivere insieme: allunga la festa di qualche mese.",
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
            r: "No, la completa. La lista dice cosa si aspetta la coppia; la tua pagina propone le tue idee. Niente vieta di fare entrambe le cose.",
          },
          {
            q: "Gli sposi possono scegliere insieme?",
            r: "Sì, il link si apre su qualsiasi dispositivo. Guardano la pagina insieme e confermano una sola scelta.",
          },
          {
            q: "Si può regalare in più invitati?",
            r: "La pagina la crea una persona sola, ma potete mettervi d'accordo in più sulle idee, poi dividere l'acquisto una volta fatta la scelta.",
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
        "Quando arriva un bambino, i regali piovono, spesso doppi: tre tutine della stessa taglia, due pupazzi, e niente di quello che manca davvero. Proponi qualche idea e lascia che i genitori prendano quella che li aiuterà. Le idee qui sotto sono divise per profilo.",
      accroche: "Invece dell'ennesimo pupazzo, quello che manca davvero ai genitori.",
      apercu: ["Pasti a domicilio", "Una fascia porta bebè", "Un servizio fotografico"],
      pourquoi: {
        titre: "Perché lasciar scegliere per una nascita",
        paragraphes: [
          "Nei primi mesi i genitori ricevono tanto, e spesso la stessa cosa. Solo loro sanno cosa manca: un'attrezzatura precisa, del tempo, una cena da non dover preparare.",
          "Proporre qualche idea vuol dire lasciargli la scelta senza chiedergli di scrivere una lista. Guardano quando possono, e ci mettono dieci secondi.",
          "Non c'è fretta: la pagina resta online un anno. Molti genitori scelgono qualche settimana dopo, quando finalmente vedono cosa gli servirebbe.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro:
          "Idee per il bebè, e soprattutto per i genitori, che si dimenticano sempre. Da mescolare sulla stessa pagina.",
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
            r: "No. Puoi prepararla prima e inviarla quando vuoi. Puoi anche impostare una data di apertura perché resti sigillata fino ad allora.",
          },
          {
            q: "Si usa regalare ai genitori invece che al bebè?",
            r: "Sempre di più. Una cena a domicilio o due ore di pulizie sono spesso i regali che i genitori ricordano. Proponi entrambi e lasciali scegliere.",
          },
          {
            q: "I genitori devono creare un account per scegliere?",
            r: "No. Aprono il link, scelgono, confermano. Niente account, niente indirizzo e-mail.",
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
        "Quando si trasloca, si scopre cosa manca nel giro di qualche settimana. Da fuori è impossibile indovinarlo. Tanto vale proporre più idee e lasciare che la persona prenda quella che le servirà. Eccone alcune, divise per profilo.",
      accroche: "Quello che manca davvero nella casa nuova.",
      apercu: ["Una pianta da interno", "Un buon coltello da cucina", "Un'opera da appendere"],
      pourquoi: {
        titre: "Perché lasciar scegliere per una casa nuova",
        paragraphes: [
          "Non si sa cosa manca prima di averci vissuto qualche settimana. Gli ospiti, intanto, arrivano con una bottiglia, una pianta o un soprammobile scelto senza aver visto la casa.",
          "Con più idee, la persona decide in base a quello che ha davanti: lo spazio che resta, lo stile, quello che ha già. Il regalo trova il suo posto invece di cercarlo.",
          "Puoi inviare la pagina dopo la festa, una volta svuotati gli scatoloni. È lì che i bisogni si fanno chiari.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro: "Idee per abitare il posto, dalla più utile alla più personale.",
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
            r: "Non per forza. Arriva con un biglietto e il codice QR della pagina: la persona sceglierà dopo, quando vedrà cosa le manca.",
          },
          {
            q: "E per una coppia che va a vivere insieme?",
            r: "Il link si apre su qualsiasi dispositivo. La coppia guarda la pagina insieme e conferma una sola scelta.",
          },
          {
            q: "Si può proporre un'idea senza link a un negozio?",
            r: "Sì. Una mano a montare i mobili o una pianta da scegliere insieme si descrivono benissimo a mano, con un titolo e una nota.",
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
        "Per la festa della mamma si vuole dire grazie senza rifare il mazzo di fiori dell'anno scorso. Proponi tre o quattro regali scelti per lei, e lascia che prenda quello che preferisce. Le idee qui sotto sono divise per profilo.",
      accroche: "Dire grazie in un altro modo, con idee che sceglie lei.",
      apercu: ["Un brunch in due", "Una giornata alla spa", "Un laboratorio floreale"],
      pourquoi: {
        titre: "Perché lasciar scegliere per la festa della mamma",
        paragraphes: [
          "Chiedi a una mamma cosa le farebbe piacere, e risponderà «niente, mi basta che tu ci sia». È sincera, e non ti aiuta.",
          "Con qualche idea davanti, tiene la sorpresa e prende quello che le va davvero: un momento insieme, un oggetto che non si comprerebbe mai, un'attività che rimanda da mesi. Intanto scopri cosa le piace.",
          "La data cambia da un paese all'altro, e la pagina può essere pronta settimane prima. Imposta una data di apertura e resterà sigillata fino al giorno giusto.",
        ],
      },
      idees: {
        titre: "Spunti, per profilo",
        intro: "Idee per dire grazie, da mescolare sulla stessa pagina.",
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
            r: "Sì. Imposta una data di apertura: il biglietto resta sigillato dietro un conto alla rovescia fino al giorno della festa, anche se invii il link prima.",
          },
          {
            q: "E se non è a suo agio con gli schermi?",
            r: "Stampa il biglietto: un foglio piegato con il codice QR, in una busta. Lo inquadra con il telefono, e potete guardare la pagina insieme.",
          },
          {
            q: "Più figli possono fare il regalo insieme?",
            r: "La pagina la crea una persona sola, ma potete scegliere le idee insieme, firmare in più, poi dividere l'acquisto una volta scelto il regalo.",
          },
        ],
      },
    },
  },

  sectionCategories: {
    titre: "Regalare senza sbagliare, per tipo di regalo",
    chapo:
      "Profumo, gioielli, libri, abbigliamento, vino, arredamento: i regali su cui si esita di più. Per ciascuno, spunti per stile e un modo per non decidere al posto dell'altro.",
  },

  categories: {
    parfum: {
      nom: "Profumo",
      titreMeta: "Quale profumo regalare? Lascia scegliere — MyPresentsForYou",
      descriptionMeta:
        "Indeciso tra più profumi? Mettili tutti su una pagina e lascia che la persona scelga il suo. Spunti per famiglia olfattiva.",
      titre: "Quale profumo regalare? Non scegliere, proponi",
      chapo:
        "Il profumo è il regalo più rischioso che ci sia: ciò che profuma bene su di te può non piacere all'altro, e una boccetta aperta non si restituisce. Invece di puntare su uno solo, proponine due o tre e lascia che la persona scelga quello che le somiglia.",
      accroche: "Il profumo lo sceglie chi lo porta.",
      apercu: ["Un profumo legnoso", "Un'acqua fresca agli agrumi", "Un cofanetto di miniature"],
      pourquoi: {
        titre: "Perché un profumo si sceglie male per qualcun altro",
        paragraphes: [
          "Un profumo non ha lo stesso odore su ogni pelle, e ciò che ami indossare non dice nulla di ciò che l'altro ama indossare. Anche ben informati, si finisce spesso per regalare il proprio gusto.",
          "Chiedere «che profumo vuoi?» risolve il problema e cancella il regalo. Proporre due o tre famiglie olfattive mantiene la sorpresa: la persona scopre le tue idee, e decide il suo naso.",
          "Se ha già un profumo del cuore, mettilo nella lista accanto a due novità. Se lo sceglie di nuovo, almeno saprai di regalare ciò che ama.",
        ],
      },
      idees: {
        titre: "Spunti, per famiglia olfattiva",
        intro:
          "Un'idea per famiglia basta: proporre tre legnosi significa scegliere al suo posto. Mescola le famiglie, o affianca un cofanetto di scoperta a una boccetta.",
        profils: [
          {
            nom: "Fresco e leggero",
            idees: [
              { nom: "Un'eau de toilette agli agrumi", pourquoi: "Bergamotto, limone, pompelmo: leggera, facile da portare di giorno." },
              { nom: "Un'acqua di colonia", pourquoi: "La più discreta, per chi non ama i profumi invadenti." },
              { nom: "Un profumo acquatico", pourquoi: "Fresco senza essere dolce, per l'estate." },
              { nom: "Un profumo al tè verde", pourquoi: "Morbido e pulito, raramente un passo falso." },
            ],
          },
          {
            nom: "Floreale e cipriato",
            idees: [
              { nom: "Un profumo floreale", pourquoi: "Rosa, gelsomino, mughetto: il grande classico." },
              { nom: "Un profumo all'iris", pourquoi: "Cipriato, elegante, più inatteso della rosa." },
              { nom: "Un profumo ai fiori d'arancio", pourquoi: "Luminoso, con qualcosa di pulito e rassicurante." },
              { nom: "Un'acqua profumata per il corpo", pourquoi: "Più leggera di un profumo, per provare una famiglia senza impegno." },
            ],
          },
          {
            nom: "Legnoso e caldo",
            idees: [
              { nom: "Un profumo legnoso", pourquoi: "Cedro, sandalo: secco, elegante, per ogni stagione." },
              { nom: "Un profumo ambrato", pourquoi: "Vaniglia, resine, spezie: caldo e avvolgente, per l'inverno." },
              { nom: "Un profumo al vetiver", pourquoi: "Terroso e fresco insieme, facile da amare." },
              { nom: "Un profumo con note di cuoio", pourquoi: "Più deciso, per chi ama farsi notare." },
            ],
          },
          {
            nom: "Per non sbagliare affatto",
            idees: [
              { nom: "Un cofanetto di miniature di profumo", pourquoi: "Più profumi in piccolo formato, per trovare il proprio con calma." },
              { nom: "Un laboratorio per creare il proprio profumo", pourquoi: "Lo si compone con un profumiere: impossibile sbagliare." },
              { nom: "Una candela profumata", pourquoi: "Il profumo nella casa invece che sulla pelle." },
              { nom: "Un diffusore di profumo per ambienti", pourquoi: "Per chi non si profuma, ma ama una casa che profuma." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Proporre più profumi in tre passaggi",
        liste: [
          "Apri l'editor e scegli l'occasione: compleanno, Natale o «Senza occasione».",
          "Aggiungi da due a quattro profumi di famiglie diverse; incolla il link di un prodotto per recuperarne titolo e immagine.",
          "Invia il link. La persona sceglie, tu lo scopri sul tuo link privato e compri la boccetta giusta.",
        ],
      },
      questions: {
        titre: "Domande sul profumo come regalo",
        liste: [
          {
            q: "Bisogna conoscere il profumo che la persona usa già?",
            r: "Aiuta, ma non è necessario. Se te lo ricordi, mettilo nella lista accanto a due novità: la persona sceglierà tra la certezza e la scoperta.",
          },
          {
            q: "Un cofanetto di miniature è una buona idea?",
            r: "È la proposta più sicura, e sta bene accanto a una boccetta: se la persona stessa è indecisa, prenderà il cofanetto e troverà il suo profumo con calma.",
          },
          {
            q: "Si può proporre un profumo accanto a un regalo del tutto diverso?",
            r: "Sì. Un profumo, un biglietto per un concerto, un libro: le idee possono essere di natura diversa. La persona vede le tue idee, mai il loro prezzo.",
          },
        ],
      },
    },

    bijou: {
      nom: "Gioielli",
      titreMeta: "Quale gioiello regalare? Lascia scegliere — MyPresentsForYou",
      descriptionMeta:
        "Oro o argento, discreto o vistoso: indeciso tra più gioielli? Mettili su una pagina e lascia che la persona scelga quello che indosserà.",
      titre: "Quale gioiello regalare? Proponine tre, lascia scegliere",
      chapo:
        "Un gioiello si porta ogni giorno, oppure mai. Oro o argento, discreto o vistoso, l'anello della misura sbagliata: i modi per sbagliare non mancano. Proponi due o tre gioielli di stili diversi: la persona sceglie quello che avrà voglia di indossare.",
      accroche: "Oro o argento, discreto o vistoso: decide la persona.",
      apercu: ["Una catenina d'oro sottile", "Orecchini a cerchio in argento", "Un bracciale rigido"],
      pourquoi: {
        titre: "Perché un gioiello è così difficile da scegliere",
        paragraphes: [
          "Un gioiello dice qualcosa dello stile di chi lo porta. Ciò che ti piace in vetrina può restare nella scatola: troppo brillante, troppo discreto, il metallo sbagliato, la lunghezza sbagliata.",
          "Poi ci sono le trappole pratiche: la misura dell'anello che non conosci, le orecchie non forate, la pelle che reagisce a certi metalli. Indovinare tutto in un colpo è una scommessa.",
          "Proponendo due o tre gioielli mantieni la sorpresa — la persona scopre ciò che hai immaginato per lei — e le lasci l'ultima parola. Quello che sceglie, lo indosserà.",
        ],
      },
      idees: {
        titre: "Spunti, per stile",
        intro:
          "Varia gli stili più che i modelli: tre collane quasi uguali non lasciano una vera scelta. Ed evita l'anello se non conosci la misura.",
        profils: [
          {
            nom: "Discreto, per tutti i giorni",
            idees: [
              { nom: "Una catenina d'oro sottile", pourquoi: "Si porta da sola o con altre, e non si toglie più." },
              { nom: "Orecchini a lobo", pourquoi: "Il gioiello che ci si dimentica di indossare." },
              { nom: "Un braccialetto in cordino", pourquoi: "Semplice e regolabile: nessun problema di misura." },
              { nom: "Un ciondolo con iniziale", pourquoi: "Piccolo, personale, raramente un passo falso." },
            ],
          },
          {
            nom: "Deciso",
            idees: [
              { nom: "Orecchini a cerchio dorati", pourquoi: "Un classico che si nota." },
              { nom: "Una collana statement", pourquoi: "Per chi lascia che un gioiello faccia l'outfit." },
              { nom: "Orecchini pendenti", pourquoi: "Movimento e luce intorno al viso." },
              { nom: "Un anello cocktail", pourquoi: "Una pietra colorata, per le sere di festa." },
            ],
          },
          {
            nom: "Con una storia",
            idees: [
              { nom: "Un gioiello vintage", pourquoi: "Un pezzo antico, unico, che ha già vissuto." },
              { nom: "Un medaglione porta foto", pourquoi: "Un ricordo da tenere vicino." },
              { nom: "Un gioiello inciso", pourquoi: "Una data, un nome, qualche parola all'interno." },
              { nom: "Un gioiello artigianale", pourquoi: "Fatto a mano, in piccole serie." },
            ],
          },
          {
            nom: "Senza problemi di misura",
            idees: [
              { nom: "Un orologio", pourquoi: "Un cinturino regolabile, e un oggetto che si guarda ogni giorno." },
              { nom: "Una spilla", pourquoi: "Si appunta su un cappotto, una borsa, un cappello." },
              { nom: "Un bracciale rigido aperto", pourquoi: "Si adatta al polso senza misurare." },
              { nom: "Un portagioie", pourquoi: "Per custodire quelli che ha già, se esiti ad aggiungerne." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Proporre più gioielli in tre passaggi",
        liste: [
          "Apri l'editor e scegli l'occasione, o «Senza occasione» se il gioiello non aspetta una data.",
          "Aggiungi da due a quattro gioielli di stili diversi; incolla il link di un prodotto per recuperarne titolo e foto.",
          "Invia il link, o stampa il QR code su un biglietto infilato in un astuccio vuoto. Scopri la scelta sul tuo link privato.",
        ],
      },
      questions: {
        titre: "Domande sui gioielli come regalo",
        liste: [
          {
            q: "E se non conosco la misura dell'anello?",
            r: "Proponi piuttosto una collana, un bracciale regolabile o degli orecchini. Se viene scelto un anello, la maggior parte dei gioiellieri lo adatta alla misura dopo l'acquisto.",
          },
          {
            q: "Oro o argento: come capirlo?",
            r: "Guarda cosa porta già la persona: orologio, occhiali, orecchini. Nel dubbio, metti nella lista un gioiello per ciascun metallo: è proprio ciò che la pagina serve a decidere.",
          },
          {
            q: "La persona vede il prezzo dei gioielli?",
            r: "Mai. Vede i gioielli, non il loro prezzo: sceglie quello che le piace, né il più caro né il meno caro.",
          },
        ],
      },
    },

    livre: {
      nom: "Libri",
      titreMeta: "Quale libro regalare? Lascia scegliere — MyPresentsForYou",
      descriptionMeta:
        "Romanzo, saggio, libro illustrato o fumetto: indeciso tra più libri? Mettili su una pagina e lascia che la persona scelga quello che leggerà.",
      titre: "Quale libro regalare? Più titoli, una sola scelta",
      chapo:
        "Regalare un libro significa scommettere su gusti e su una libreria che non conosci. Il romanzo di cui parlano tutti forse è già sul suo comodino. Proponi due o tre titoli di generi diversi, e lascia che la persona prenda quello che la ispira.",
      accroche: "Basta libri già letti o romanzi mai aperti.",
      apercu: ["Un romanzo appena uscito", "Un libro fotografico", "Un fumetto"],
      pourquoi: {
        titre: "Perché un libro è un regalo più rischioso di quanto sembri",
        paragraphes: [
          "Un libro sembra facile da regalare: leggero, accessibile, sempre gradito. In pratica ci sono tre modi di sbagliare: è già stato letto, non è nei suoi gusti, o arriva nel momento sbagliato — un mattone di ottocento pagine per chi legge in metropolitana.",
          "Proporre più titoli risolve tutti e tre. La persona scarta quello che ha già, prende quello che le parla, e tu scopri cosa ha voglia di leggere in questo momento.",
          "Mescola i generi: un romanzo, un saggio, un libro illustrato. Anche chi è fedele a un solo genere ama scegliere tra tre autori ancora sconosciuti.",
        ],
      },
      idees: {
        titre: "Spunti, per tipo di lettura",
        intro:
          "Indica titoli precisi quando puoi: «un romanzo» non si sceglie, «quel romanzo di quell'autore» sì. Gli spunti qui sotto servono a variare i generi.",
        profils: [
          {
            nom: "Chi legge romanzi",
            idees: [
              { nom: "Un romanzo finalista a un premio letterario", pourquoi: "Le novità di cui si parla, per chi segue le uscite." },
              { nom: "Un classico in edizione di pregio", pourquoi: "Rilegato, illustrato: il libro che si conserva." },
              { nom: "Un giallo", pourquoi: "Per le sere in cui il libro non si posa più." },
              { nom: "Un romanzo a fumetti", pourquoi: "Una vera storia, raccontata per immagini." },
            ],
          },
          {
            nom: "Chi ama imparare",
            idees: [
              { nom: "Un libro di divulgazione scientifica", pourquoi: "Per capire il mondo senza aprire un manuale." },
              { nom: "Un saggio storico narrativo", pourquoi: "Un'epoca raccontata come un romanzo." },
              { nom: "Un libro di filosofia accessibile", pourquoi: "Breve, chiaro, e di cui discutere dopo." },
              { nom: "Una biografia", pourquoi: "Una vita raccontata, spesso più sorprendente di un romanzo." },
            ],
          },
          {
            nom: "Chi preferisce sfogliare",
            idees: [
              { nom: "Un libro fotografico", pourquoi: "Si guarda a pezzi, e resta sul tavolino del salotto." },
              { nom: "Un libro di cucina", pourquoi: "Per chi ama ricevere, con ricette da rifare." },
              { nom: "Un atlante illustrato", pourquoi: "Mappe e storie, per sognare viaggi." },
              { nom: "Un fumetto", pourquoi: "Un volume completo, letto in una sera." },
            ],
          },
          {
            nom: "Intorno alla lettura",
            idees: [
              { nom: "Un abbonamento a una box di libri", pourquoi: "Un libro a sorpresa ogni mese, scelto per la persona." },
              { nom: "Un e-reader", pourquoi: "Per chi legge molto e ha poco spazio." },
              { nom: "Un abbonamento agli audiolibri", pourquoi: "Per leggere camminando, guidando, cucinando." },
              { nom: "Una lampada da lettura", pourquoi: "Per leggere la sera senza disturbare nessuno." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Proporre più libri in tre passaggi",
        liste: [
          "Apri l'editor e scegli l'occasione, o «Senza occasione».",
          "Aggiungi da due a quattro titoli precisi; incolla il link del libro dal tuo libraio per recuperarne la copertina.",
          "Invia il link. La persona sceglie, tu lo vedi sul tuo link privato e vai a prendere il libro giusto.",
        ],
      },
      questions: {
        titre: "Domande sui libri come regalo",
        liste: [
          {
            q: "E se la persona ha già letto uno dei libri?",
            r: "Ne sceglie un altro: è proprio questo il senso di proporre più titoli. E ora sai che non devi più regalarglielo.",
          },
          {
            q: "Quanti libri proporre?",
            r: "Tre va bene: abbastanza per scegliere davvero, non troppi da esitare a lungo. Varia i generi più che gli autori di uno stesso genere.",
          },
          {
            q: "Si può proporre un libro usato?",
            r: "Sì. Un'edizione d'epoca o un libro di seconda mano può essere un bellissimo regalo. Incolla il link dell'annuncio, o descrivilo a mano con una foto.",
          },
        ],
      },
    },

    vetement: {
      nom: "Abbigliamento",
      titreMeta: "Regalare un capo senza sbagliare — MyPresentsForYou",
      descriptionMeta:
        "Taglia, colore, vestibilità: regalare un capo significa tre scommesse. Proponi più capi su una pagina e lascia che la persona scelga il suo.",
      titre: "Regalare un capo d'abbigliamento senza sbagliare stile",
      chapo:
        "Un capo d'abbigliamento è il regalo che si cambia più spesso. Troppo grande, colore sbagliato, non è il suo stile: finisce in uno scontrino di cambio. Proponi due o tre capi e lascia che la persona scelga quello che indosserà davvero.",
      accroche: "Taglia e stile: li conosce chi li porta.",
      apercu: ["Un maglione in merino", "Una sciarpa in cashmere", "Un berretto a coste"],
      pourquoi: {
        titre: "Perché un capo si sceglie male per gli altri",
        paragraphes: [
          "Raramente si conosce la taglia esatta di qualcuno, e cambia da una marca all'altra. Anche la taglia giusta non basta: taglio, materiale e colore decidono se un capo si indossa o resta in fondo all'armadio.",
          "Proporre più capi ti permette di azzeccare lo stile e di lasciare alla persona ciò che non potevi indovinare. Una volta fatta la scelta, niente ti impedisce di chiedere la taglia: la sorpresa è già passata.",
          "Comincia dai capi che perdonano: accessori, maglie ampie, taglie uniche. Tieni pantaloni e camicie aderenti per chi conosci bene nelle misure.",
        ],
      },
      idees: {
        titre: "Spunti, dal più sicuro al più audace",
        intro:
          "Comincia con un capo senza taglia, aggiungi una maglia ampia e tieni un'idea più decisa per ultima: la persona vedrà subito cosa le somiglia.",
        profils: [
          {
            nom: "Senza problemi di taglia",
            idees: [
              { nom: "Una sciarpa in cashmere", pourquoi: "Morbida, calda, e va bene a tutti." },
              { nom: "Un berretto di lana", pourquoi: "Taglia unica, e un regalo che serve tutto l'inverno." },
              { nom: "Un foulard di seta", pourquoi: "Si porta al collo, tra i capelli, su una borsa." },
              { nom: "Calzini di lana", pourquoi: "Un piccolo lusso quotidiano che nessuno si compra." },
            ],
          },
          {
            nom: "Comodo e ampio",
            idees: [
              { nom: "Un maglione in lana merino", pourquoi: "Una maglia ampia perdona una taglia approssimativa." },
              { nom: "Un cardigan lungo", pourquoi: "Si porta aperto, e il taglio fa il resto." },
              { nom: "Una felpa in cotone biologico", pourquoi: "Il capo che si rimette ogni fine settimana." },
              { nom: "Un pigiama di flanella", pourquoi: "Il comfort invernale che non ci si compra da soli." },
            ],
          },
          {
            nom: "Un capo che dura",
            idees: [
              { nom: "Un cappotto di lana", pourquoi: "Il capo più indossato dell'inverno." },
              { nom: "Una giacca di jeans", pourquoi: "Un basico che non passa di moda." },
              { nom: "Una camicia di lino", pourquoi: "Leggera, per l'estate e i viaggi." },
              { nom: "Un impermeabile", pourquoi: "L'acquisto utile che si rimanda sempre." },
            ],
          },
          {
            nom: "Intorno ai vestiti",
            idees: [
              { nom: "Pantofole di lana", pourquoi: "Basta una taglia indicativa, il comfort è garantito." },
              { nom: "Un kit per lavorare a maglia", pourquoi: "Per farsi da sé la propria sciarpa." },
              { nom: "Un corso di cucito", pourquoi: "Per imparare a cucire o a sistemare i propri vestiti." },
              { nom: "Una spazzola per abiti", pourquoi: "Per mantenere cappotti e maglioni come nuovi." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Proporre più capi in tre passaggi",
        liste: [
          "Apri l'editor e scegli l'occasione, o «Senza occasione».",
          "Aggiungi da due a quattro capi di stili diversi; incolla il link di un prodotto per recuperarne la foto.",
          "Invia il link. Quando vedi la scelta sul tuo link privato, resta solo da ordinare la taglia giusta.",
        ],
      },
      questions: {
        titre: "Domande sull'abbigliamento come regalo",
        liste: [
          {
            q: "Come conoscere la taglia senza rovinare la sorpresa?",
            r: "Non serve conoscerla prima: la persona sceglie il capo, poi chiedi la taglia o guardi l'etichetta di un capo che porta spesso. La sorpresa era la pagina.",
          },
          {
            q: "Conviene proporre lo stesso capo in più colori?",
            r: "Si può: lo stesso maglione in tre colori è una vera scelta, soprattutto se sei indeciso sulla tinta. Ma tre capi diversi ti diranno di più sui suoi gusti.",
          },
          {
            q: "E se il capo scelto non va bene?",
            r: "Ordina da un negozio che accetta i cambi, e conserva lo scontrino. Il rischio è più basso del solito: la persona ha scelto da sola ciò che voleva indossare.",
          },
        ],
      },
    },

    vin: {
      nom: "Vino",
      titreMeta: "Quale vino regalare? Lascia scegliere — MyPresentsForYou",
      descriptionMeta:
        "Rosso, bianco, bollicine o cofanetto: non sai quale vino regalare? Proponi più bottiglie su una pagina e lascia che la persona scelga la sua.",
      titre: "Quale vino regalare? Più bottiglie, una sola scelta",
      chapo:
        "Regalare vino a chi se ne intende mette soggezione; regalarlo a chi ne beve poco cade nel vuoto. Tra rosso, bianco e bollicine, proponi due o tre bottiglie e lascia che la persona scelga quella che ha voglia di aprire.",
      accroche: "Rosso, bianco o bollicine: stappa chi sceglie.",
      apercu: ["Un rosso da invecchiamento", "Uno champagne di vignaiolo", "Un cofanetto degustazione"],
      pourquoi: {
        titre: "Perché il vino è un regalo delicato",
        paragraphes: [
          "Il vino è questione di gusti e di abitudini. Un appassionato ha le sue regioni, i suoi vitigni, a volte una cantina già piena; chi beve di rado preferisce una bottiglia facile a un vino da invecchiamento. Difficile azzeccare senza chiedere.",
          "Proporre due o tre bottiglie di stili diversi evita il passo falso, e la scelta diventa un momento a sé: si confronta, si ricorda un viaggio, si immagina la cena.",
          "Per chi beve poco o niente, aggiungi un'idea analcolica alla lista: la persona sceglierà senza doversi giustificare.",
        ],
      },
      idees: {
        titre: "Spunti, per stile",
        intro:
          "Varia colori e usi: una bottiglia da bere presto, una da conservare, un'esperienza. Nessun prezzo è mostrato: ognuno sceglie secondo la voglia.",
        profils: [
          {
            nom: "Da aprire presto",
            idees: [
              { nom: "Un vino rosso fruttato", pourquoi: "Gamay, pinot nero: leggero, per una cena tra amici." },
              { nom: "Un vino bianco secco", pourquoi: "Per l'aperitivo o il pesce." },
              { nom: "Un rosato gastronomico", pourquoi: "Più serio di un rosato estivo, per la tavola." },
              { nom: "Un vino naturale", pourquoi: "Per chi ama vini vivi e un po' sorprendenti." },
            ],
          },
          {
            nom: "Per le grandi occasioni",
            idees: [
              { nom: "Uno champagne di vignaiolo", pourquoi: "Bollicine di piccoli produttori, più personali." },
              { nom: "Un metodo classico", pourquoi: "Bollicine fatte allo stesso modo, da altre regioni." },
              { nom: "Un vino da invecchiamento", pourquoi: "Da dimenticare qualche anno in cantina." },
              { nom: "Un vino dolce", pourquoi: "Passito o liquoroso: per il dessert o il formaggio." },
            ],
          },
          {
            nom: "Per scoprire",
            idees: [
              { nom: "Un cofanetto degustazione di vini", pourquoi: "Più piccole bottiglie, per confrontare." },
              { nom: "Un abbonamento a una box di vini", pourquoi: "Una selezione ogni mese, con le schede." },
              { nom: "Un corso di degustazione", pourquoi: "Imparare a degustare in poche ore." },
              { nom: "Una visita in cantina", pourquoi: "Una giornata tra le vigne, degustazione compresa." },
            ],
          },
          {
            nom: "Intorno al vino, o analcolico",
            idees: [
              { nom: "Un decanter", pourquoi: "Per far respirare i vini giovani e servirli con cura." },
              { nom: "Calici da vino", pourquoi: "Un buon bicchiere cambia davvero la degustazione." },
              { nom: "Un vino analcolico", pourquoi: "Per chi non beve, senza rinunciare al rito." },
              { nom: "Un cavatappi da sommelier", pourquoi: "L'attrezzo che dura una vita." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Proporre più vini in tre passaggi",
        liste: [
          "Apri l'editor e scegli l'occasione: compleanno, casa nuova o «Senza occasione».",
          "Aggiungi da due a quattro bottiglie di stili diversi; incolla il link dell'enoteca per recuperarne l'etichetta.",
          "Invia il link. Scopri la bottiglia scelta sul tuo link privato, e la regali — o la aprite insieme.",
        ],
      },
      questions: {
        titre: "Domande sul vino come regalo",
        liste: [
          {
            q: "Come regalare vino a chi se ne intende?",
            r: "Non cercare di competere sul suo terreno: proponi una regione meno nota, un piccolo produttore, una visita in cantina. La persona sceglierà ciò che la incuriosisce.",
          },
          {
            q: "E se la persona non beve alcolici?",
            r: "Metti un'idea analcolica nella lista, o sostituisci il vino con ciò che lo accompagna: bei calici, un corso, un cesto di gastronomia.",
          },
          {
            q: "Come presentare la bottiglia scelta?",
            r: "Stampa il biglietto con il QR code e appendilo al collo della bottiglia: la persona ritrova la pagina, e la scelta che ha fatto.",
          },
        ],
      },
    },

    deco: {
      nom: "Arredamento",
      titreMeta: "Regalare oggetti d'arredo senza sbagliare — MyPresentsForYou",
      descriptionMeta:
        "Vaso, lampada, stampa o plaid: l'arredamento è questione di gusto. Proponi più oggetti su una pagina e lascia che la persona scelga il suo.",
      titre: "Regalare un oggetto d'arredo senza imporre il proprio gusto",
      chapo:
        "Un oggetto d'arredo vivrà a casa di qualcun altro, ogni giorno, sotto i suoi occhi. Se lo stile non va, finisce in un armadio — o resta al suo posto per cortesia. Proponi due o tre oggetti e lascia che la persona scelga quello che troverà il suo posto.",
      accroche: "A casa propria si sceglie ciò che si guarda ogni giorno.",
      apercu: ["Un vaso in ceramica", "Una lampada da tavolo", "Una stampa incorniciata"],
      pourquoi: {
        titre: "Perché l'arredamento si sceglie male al posto degli altri",
        paragraphes: [
          "L'arredamento è il regalo più visibile che ci sia: resta sotto gli occhi della persona e dei suoi ospiti. È anche il più personale. Colori, materiali, stile: ciò che piace in negozio può stonare in un salotto che conosci poco.",
          "Proporre più oggetti permette di puntare a un'atmosfera invece che a un oggetto preciso. La persona prende quello che si abbina a ciò che ha già, e tu non devi indovinare il colore del divano.",
          "È anche il modo giusto per una casa nuova: la coppia guarda la pagina insieme e sceglie cosa entrerà nella nuova casa.",
        ],
      },
      idees: {
        titre: "Spunti, per atmosfera",
        intro:
          "Mescola atmosfere e dimensioni: un piccolo oggetto, uno utile, un pezzo più deciso. La persona vedrà subito cosa le somiglia.",
        profils: [
          {
            nom: "Naturale e caldo",
            idees: [
              { nom: "Un vaso in ceramica", pourquoi: "Fatto a mano, con i fiori o da solo." },
              { nom: "Un plaid di lana", pourquoi: "Sul divano, e si usa tutto l'inverno." },
              { nom: "Un cesto intrecciato", pourquoi: "Per riporre, o per vestire una pianta." },
              { nom: "Una pianta d'appartamento facile", pourquoi: "Con il suo vaso, e poca manutenzione." },
            ],
          },
          {
            nom: "Essenziale",
            idees: [
              { nom: "Una lampada da tavolo", pourquoi: "La luce cambia una stanza più di un mobile." },
              { nom: "Uno specchio rotondo", pourquoi: "Allarga un ingresso, illumina un corridoio." },
              { nom: "Un orologio da parete", pourquoi: "Un oggetto semplice che trova sempre una parete." },
              { nom: "Candelieri in ottone", pourquoi: "Per la tavola, le sere di cena." },
            ],
          },
          {
            nom: "Colorato e deciso",
            idees: [
              { nom: "Una stampa incorniciata", pourquoi: "Illustrazione, fotografia: arte alla parete senza spendere troppo." },
              { nom: "Un cuscino ricamato", pourquoi: "Un tocco di colore che si cambia facilmente." },
              { nom: "Un tappeto berbero", pourquoi: "Scalda una stanza in un colpo." },
              { nom: "Una litografia d'artista", pourquoi: "Un'opera numerata, per iniziare una collezione." },
            ],
          },
          {
            nom: "Utile prima di tutto",
            idees: [
              { nom: "Una candela profumata", pourquoi: "Il piccolo regalo che si accende davvero." },
              { nom: "Un diffusore di oli essenziali", pourquoi: "Per il profumo della casa." },
              { nom: "Una mensola da parete", pourquoi: "Per libri, piante, ricordi." },
              { nom: "Uno svuotatasche", pourquoi: "Per l'ingresso, la scrivania o il comodino." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Proporre più oggetti in tre passaggi",
        liste: [
          "Apri l'editor e scegli l'occasione: casa nuova, compleanno o «Senza occasione».",
          "Aggiungi da due a quattro oggetti di atmosfere diverse; incolla il link di un prodotto per recuperarne la foto.",
          "Invia il link. Scopri la scelta sul tuo link privato, e regali l'oggetto che troverà il suo posto.",
        ],
      },
      questions: {
        titre: "Domande sull'arredamento come regalo",
        liste: [
          {
            q: "Come scegliere senza conoscere la casa della persona?",
            r: "Non serve conoscerla: proponi atmosfere diverse, è la persona a sapere cosa starà bene a casa sua. La sua scelta ti dice qualcosa per la prossima volta.",
          },
          {
            q: "Un'opera d'arte è troppo personale?",
            r: "Da sola, forse. In mezzo ad altre due proposte, no: se non le dice nulla, la persona prenderà altro, senza doverlo dire.",
          },
          {
            q: "Si può regalare arredamento a una coppia che va a vivere insieme?",
            r: "Sì, anzi è l'occasione ideale: una sola pagina, la coppia la guarda insieme e sceglie cosa entrerà nella nuova casa. La guida per la casa nuova offre altri spunti.",
          },
        ],
      },
    },
  },
};
