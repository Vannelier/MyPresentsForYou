import type { TextesGuides } from "./types";

export const de: TextesGuides = {
  page: {
    titreMeta: "Geschenkideen nach Anlass — MyPresentsForYou",
    descriptionMeta:
      "Geburtstag, Weihnachten, Hochzeit, Geburt, Einzug, Muttertag: Geschenkideen nach Typ sortiert, und eine einfache Art, wählen zu lassen.",
    titre: "Geschenkideen nach Anlass",
    chapo:
      "Für jeden Anlass Ideen nach Typ sortiert — und ein Weg, nicht mehr raten zu müssen: ein paar Ideen vorschlagen und die Person wählen lassen.",
  },

  libelles: {
    composer: "Meine Geschenkseite erstellen",
    exemple: "Beispiel einer Geschenkseite ansehen",
    questions: "Alle häufigen Fragen",
    autres: "Für andere Anlässe",
    fil: "Brotkrümelnavigation",
    accueil: "Startseite",
    miseAJour: "Zuletzt aktualisiert:",
    voirAussi: "Siehe auch:",
    lire: "Zum Ratgeber",
  },

  guides: {
    anniversaire: {
      titreMeta: "Geschenkideen zum Geburtstag — MyPresentsForYou",
      descriptionMeta:
        "Geschenkideen zum Geburtstag nach Typ sortiert — Erlebnisse, schöne Dinge, kleine Freuden — und eine einfache Art, die Person wählen zu lassen.",
      titre: "Geschenkideen zum Geburtstag: Warum nicht wählen lassen?",
      chapo:
        "Geburtstage kommen jedes Jahr wieder, und irgendwann fällt dir nichts mehr ein. Statt alles auf eine Idee zu setzen, schlägst du drei oder vier vor, und die Person nimmt die, die ihr am besten gefällt. Die Ideen unten sind nach Typ sortiert.",
      accroche: "Ideen nach Typ, und keine Geschenke mehr, die ins Leere gehen.",
      apercu: ["Ein Töpferkurs", "Konzertkarten", "Eine schöne Teekanne"],
      pourquoi: {
        titre: "Warum zum Geburtstag wählen lassen",
        paragraphes: [
          "Nach zehn Jahren hast du das Buch, den Schal und den Restaurantgutschein schon verschenkt. Und ihr Geschmack hat sich seitdem verändert. Bleibt die Frage „Was wünschst du dir?“, die das Problem löst und die Überraschung gleich mit erledigt.",
          "Drei oder vier Ideen, und die Überraschung hält trotzdem: Sie sieht, was du dir ausgedacht hast, und entscheidet selbst. Du setzt nicht mehr alles auf eine Karte.",
          "So kannst du auch breiter schenken als sonst. Ein Kurs neben einem Gegenstand, eine kleine Freude neben einem richtigen Vorhaben. Und was sie wählt, verrät dir etwas über sie.",
        ],
      },
      idees: {
        titre: "Ideen, nach Typ",
        intro:
          "Vier Typen, je vier Ideen, auf einer Seite zu mischen. Zwei bis vier Vorschläge, nicht mehr: Danach wird das Wählen anstrengend.",
        profils: [
          {
            nom: "Für alle, denen Erinnerungen mehr bedeuten als Dinge",
            idees: [
              { nom: "Ein Kreativkurs", pourquoi: "Töpfern, Buchbinden, Kochen: ein Vormittag zum Lernen, und man nimmt mit, was man gemacht hat." },
              { nom: "Karten für ein Konzert oder eine Aufführung", pourquoi: "Passend zur Saison, damit es ein Datum gibt, auf das man sich freut." },
              { nom: "Eine Nacht an einem ungewöhnlichen Ort", pourquoi: "Baumhaus, Hausboot, Leuchtturm: Der Ort macht den Großteil der Erinnerung aus." },
              { nom: "Ein Schnupperkurs", pourquoi: "Fotografie, Weinprobe, Klettern: etwas Neues, ganz unverbindlich." },
            ],
          },
          {
            nom: "Für alle, die schöne Alltagsdinge lieben",
            idees: [
              { nom: "Eine schöne Teekanne oder Kaffeemaschine", pourquoi: "Ein Gegenstand, den man täglich benutzt und jedes Mal bemerkt." },
              { nom: "Eine Wolldecke", pourquoi: "Die Art von Gemütlichkeit, die man sich selten selbst gönnt." },
              { nom: "Ein handgebundenes Notizbuch", pourquoi: "Für Listen, Ideen oder Reisen." },
              { nom: "Eine Leselampe", pourquoi: "Gutes Licht verändert einen Abend." },
            ],
          },
          {
            nom: "Für alle, die schon alles haben",
            idees: [
              { nom: "Ein Entdecker-Abo", pourquoi: "Bücher, Kaffee oder Blumen: eine Lieferung im Monat, für einige Monate." },
              { nom: "Ein Essen in einem lang ersehnten Restaurant", pourquoi: "Der Tisch, den man immer wieder verschiebt." },
              { nom: "Eine Spende an eine gemeinnützige Organisation", pourquoi: "Ein Geschenk, das keinen Platz braucht, in ihrem Namen." },
              { nom: "Ein Wellnesstag", pourquoi: "Eine Massage, ein Hamam: echte Zeit für sich." },
            ],
          },
          {
            nom: "Für alle, die gern lernen und selbst machen",
            idees: [
              { nom: "Ein Selbermach-Set", pourquoi: "Bier, Seife, Kerzen: alles, um es selbst herzustellen, Anleitung inklusive." },
              { nom: "Ein Standardwerk", pourquoi: "Aus dem Lieblingsgebiet, das Buch, das man jahrelang behält." },
              { nom: "Ein hochwertiges Werkzeug", pourquoi: "Küchenmesser, Gartenschere, Werkzeugkasten: das Ding, das hält." },
              { nom: "Ein Onlinekurs", pourquoi: "Um im eigenen Tempo bei einem Thema voranzukommen, das reizt." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Die Seite in drei Schritten erstellen",
        liste: [
          "Wähle den Anlass „Geburtstag“: Die Seite übernimmt seine Farben, sein Motiv und seine Formulierungen.",
          "Füge zwei bis zehn Ideen hinzu; füge den Link zu einem Produkt ein, um Titel und Bild zu übernehmen, oder beschreibe ein Erlebnis von Hand.",
          "Schick den Link oder drucke den QR-Code auf eine Karte. Du siehst die Wahl über deinen privaten Link und machst das Geschenk.",
        ],
      },
      questions: {
        titre: "Fragen zu Geburtstagsgeschenken",
        liste: [
          {
            q: "Wie viele Ideen sollte ich zum Geburtstag vorschlagen?",
            r: "Drei oder vier, möglichst unterschiedlich: ein Kurs, ein Gegenstand, eine kleine Freude. Ab sechs wird gezögert statt gewählt.",
          },
          {
            q: "Kann ich die Seite im Voraus vorbereiten?",
            r: "Ja. Leg ein Öffnungsdatum fest, dann bleibt die Karte hinter einem Countdown versiegelt. Du schickst den Link, wann du willst; die Seite geht am Geburtstag auf.",
          },
          {
            q: "Sieht die Person die Preise der Geschenke?",
            r: "Nie. Sie sieht deine Ideen, nicht deren Preise, und niemand vergleicht.",
          },
        ],
      },
    },

    noel: {
      titreMeta: "Originelle Geschenkideen zu Weihnachten — MyPresentsForYou",
      descriptionMeta:
        "Originelle Geschenkideen zu Weihnachten nach Typ sortiert — Erlebnisse, Winterabende, wer schon alles hat — und eine einfache Art, wählen zu lassen.",
      titre: "Geschenkideen zu Weihnachten: vorschlagen und wählen lassen",
      chapo:
        "An Weihnachten bekommen alle viel, und keiner weiß mehr, was er schenken soll. Für jemanden, den du richtig verwöhnen willst, schlag drei oder vier Ideen vor und lass wählen. Die Ideen unten sind nach Typ sortiert.",
      accroche: "Ideen, die nicht hinten im Schrank landen.",
      apercu: ["Ein Wochenende in den Bergen", "Eine Teeauswahl", "Ein Kochkurs"],
      pourquoi: {
        titre: "Warum an Weihnachten wählen lassen",
        paragraphes: [
          "Weihnachten, das sind die Geschenke eines ganzen Jahres an einem Abend. Zwischen den Wunschzetteln der Kinder und einer Kleinigkeit für alle bekommen Erwachsene oft das, was schnell gefunden war.",
          "Mit mehreren Ideen statt einem Paket sieht die Person, was du dir ausgedacht hast, nimmt, worauf sie Lust hat, und hat am Ende, was sie selbst ausgesucht hätte.",
          "Praktisch auch, wenn man aus der Ferne schenkt. Du schickst die Seite per Nachricht, die Wahl kommt vor den Feiertagen, und du hast Zeit zu bestellen.",
        ],
      },
      idees: {
        titre: "Ideen, nach Typ",
        intro:
          "Ideen, die du auf einer Seite mischst. An Weihnachten gewinnt oft das Erlebnis für den Januar: Es verlängert die Feiertage.",
        profils: [
          {
            nom: "Für alle, die gemeinsame Erlebnisse lieben",
            idees: [
              { nom: "Ein Wochenende in den Bergen oder am Meer", pourquoi: "Außerhalb der Saison, um es wirklich zu genießen." },
              { nom: "Ein Kochkurs zu zweit", pourquoi: "Ein Abend, und Rezepte, die bleiben." },
              { nom: "Karten für eine Aufführung im Januar", pourquoi: "Ein Datum, auf das man sich freut, wenn die Feiertage vorbei sind." },
              { nom: "Eine ungewöhnliche Führung", pourquoi: "Unterirdische Gänge, Werkstätten, hinter den Kulissen: die eigene Stadt einmal anders." },
            ],
          },
          {
            nom: "Für alle, die Winterabende lieben",
            idees: [
              { nom: "Eine Tee- oder Kaffeeauswahl", pourquoi: "Zum Entdecken, Tasse für Tasse." },
              { nom: "Eine Decke und ein gutes Buch", pourquoi: "Das einfachste Geschenk, und oft das beliebteste." },
              { nom: "Ein Gesellschaftsspiel für Erwachsene", pourquoi: "Für lange Abende mit Familie oder Freunden." },
              { nom: "Eine handgemachte Kerze", pourquoi: "Aus einer Werkstatt, die sie selbst herstellt." },
            ],
          },
          {
            nom: "Für alle, die schon alles haben",
            idees: [
              { nom: "Ein Abo für ein paar Monate", pourquoi: "Zeitschrift, Blumen oder regionale Produkte: Die Freude kommt jeden Monat wieder." },
              { nom: "Eine Patenschaft für einen Bienenstock oder einen Baum", pourquoi: "Mit Neuigkeiten übers Jahr." },
              { nom: "Ein Essen in einem schönen Restaurant", pourquoi: "Die Art von Abend, die man sich selten selbst gönnt." },
              { nom: "Ein Tag bei einem Handwerksbetrieb", pourquoi: "Um ein Handwerk mit den eigenen Händen zu lernen." },
            ],
          },
          {
            nom: "Für alle, die schon das nächste Jahr planen",
            idees: [
              { nom: "Ein schöner Kalender oder ein Notizbuch", pourquoi: "Für die Pläne des neuen Jahres." },
              { nom: "Ein Reiseführer und eine Landkarte", pourquoi: "Für das Reiseziel, von dem schon lange die Rede ist." },
              { nom: "Hochwertige Sportausrüstung", pourquoi: "Für den guten Vorsatz — diesmal gehalten." },
              { nom: "Ein kurzer Kurs", pourquoi: "Sprache, Fotografie, Zeichnen: ein Vorhaben für den Januar." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Die Seite in drei Schritten erstellen",
        liste: [
          "Wähle den Anlass „Weihnachten“: Die Seite übernimmt seine Winterfarben und sein Motiv.",
          "Füge zwei bis zehn Ideen hinzu; füge den Link zu einem Produkt ein, um Titel und Bild zu übernehmen, oder beschreibe ein Erlebnis von Hand.",
          "Schick den Link vor den Feiertagen, oder leg den QR-Code in einer Karte unter den Baum. Du siehst die Wahl und bestellst rechtzeitig.",
        ],
      },
      questions: {
        titre: "Fragen zu Weihnachtsgeschenken",
        liste: [
          {
            q: "Kann ich mehreren Personen aus derselben Familie schenken?",
            r: "Ja, eine Seite pro Person. Jede bekommt ihren eigenen Link und wählt für sich; die Wahl findest du über den privaten Link jeder Seite.",
          },
          {
            q: "Und wenn die Person vor Weihnachten nicht wählt?",
            r: "Du kannst nachhaken, die Seite bleibt offen. Wählt niemand, wird sie nach einem Jahr gelöscht.",
          },
          {
            q: "Kann sich die Karte erst an Heiligabend öffnen?",
            r: "Ja. Leg ein Öffnungsdatum fest: Die Karte bleibt hinter einem Countdown versiegelt, auch wenn du den Link früher verschickt hast.",
          },
        ],
      },
    },

    mariage: {
      titreMeta: "Geschenkideen zur Hochzeit fürs Paar — MyPresentsForYou",
      descriptionMeta:
        "Geschenkideen zur Hochzeit nach Art des Paares, und eine Alternative zum Geldgeschenk: ein paar Ideen vorschlagen und das Brautpaar wählen lassen.",
      titre: "Geschenkideen zur Hochzeit: das Brautpaar wählen lassen",
      chapo:
        "Bei einer Hochzeit schwankt man zwischen Hochzeitstisch, Geldumschlag und einem selbst ausgesuchten Geschenk. Es gibt einen anderen Weg: Du schlägst dem Paar auf einer Seite ein paar Ideen vor, und die beiden entscheiden. Die Ideen unten sind nach Art des Paares sortiert.",
      accroche: "Zwischen Hochzeitstisch und Umschlag: ein paar Ideen, und das Paar wählt.",
      apercu: ["Ein Gourmet-Dinner", "Eine Weinprobe", "Eine Nacht in einer Pension"],
      pourquoi: {
        titre: "Warum zur Hochzeit wählen lassen",
        paragraphes: [
          "Der Hochzeitstisch sagt genau, was man kaufen soll. Der Umschlag sagt nichts über dich. Viele Gäste suchen etwas dazwischen: ein persönliches Geschenk, das wirklich gebraucht wird.",
          "Ein paar Ideen schaffen beides. Jeder Vorschlag kommt von dir, und das Brautpaar nimmt den, der zu ihm passt. Keine Doppelten, und dein Geschenk wird genutzt.",
          "Du kannst die Seite vor oder nach der Feier schicken. Viele warten ein paar Wochen, bis das Paar durchgeatmet hat und sie sich zu zweit ansehen kann.",
        ],
      },
      idees: {
        titre: "Ideen, nach Art des Paares",
        intro:
          "Ideen für zwei. Oft nimmt das Brautpaar das gemeinsame Erlebnis: Es verlängert das Fest um ein paar Monate.",
        profils: [
          {
            nom: "Ein Paar, das gern ausgeht",
            idees: [
              { nom: "Ein Abendessen in einem guten Restaurant", pourquoi: "Für einen Abend im ersten Ehemonat." },
              { nom: "Karten für ein Konzert oder ein Festival", pourquoi: "Ein Datum, auf das man sich gemeinsam freut." },
              { nom: "Eine Weinprobe oder ein Cocktailkurs", pourquoi: "Zwei Stunden zum Lernen, und genug, um es zu Hause nachzumachen." },
              { nom: "Eine Flussfahrt", pourquoi: "Ein paar Stunden auf dem Wasser, fern vom Trubel." },
            ],
          },
          {
            nom: "Ein Paar, das sich einrichtet",
            idees: [
              { nom: "Ein schönes Tafelservice", pourquoi: "Das, was man für Gäste hervorholt." },
              { nom: "Ein hochwertiges Küchengerät", pourquoi: "Das, bei dem man zögert, es sich selbst zu kaufen." },
              { nom: "Ein Werk einer lokalen Künstlerin oder eines lokalen Künstlers", pourquoi: "Ein Druck oder eine Radierung für die erste gemeinsame Wand." },
              { nom: "Pflanzen samt Töpfen", pourquoi: "Um das neue Zuhause zu beleben." },
            ],
          },
          {
            nom: "Ein Paar, das gern reist",
            idees: [
              { nom: "Eine Nacht in einer Pension", pourquoi: "Für ein Wochenende zu zweit, zum Wunschtermin." },
              { nom: "Ein Koffer oder eine Reisetasche", pourquoi: "Das Stück, das sie überallhin begleitet." },
              { nom: "Eine Aktivität in den Flitterwochen", pourquoi: "Tauchen, geführte Wanderung, Kochkurs vor Ort." },
              { nom: "Ein Album für die Reisefotos", pourquoi: "Zum Füllen nach der Rückkehr." },
            ],
          },
          {
            nom: "Ein Paar, das schon alles hat",
            idees: [
              { nom: "Ein Beitrag zu einem Vorhaben", pourquoi: "Die Reise, die Renovierung, das erste gemeinsam ausgesuchte Möbelstück." },
              { nom: "Ein illustriertes Porträt des Paares", pourquoi: "Von einer Künstlerin oder einem Künstler, nach einem Foto." },
              { nom: "Ein Fotoshooting im Freien", pourquoi: "Bilder der beiden, ohne Hochzeitsgarderobe." },
              { nom: "Ein Baum zum Pflanzen", pourquoi: "Ein Geschenk, das mit ihrer Geschichte wächst." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Die Seite in drei Schritten erstellen",
        liste: [
          "Wähle den Anlass „Hochzeit“: Die Seite übernimmt seine Farben, sein Ringe-Motiv und Formulierungen an beide.",
          "Füge zwei bis zehn Ideen für das Paar hinzu; ein Erlebnis lässt sich gut von Hand beschreiben, ganz ohne Link.",
          "Schick den Link an das Brautpaar oder leg den QR-Code in deine Glückwunschkarte. Du siehst, was sie gewählt haben, und machst das Geschenk.",
        ],
      },
      questions: {
        titre: "Fragen zu Hochzeitsgeschenken",
        liste: [
          {
            q: "Ersetzt das einen Hochzeitstisch?",
            r: "Nein, es ergänzt ihn. Der Hochzeitstisch sagt, was sich das Paar wünscht; deine Seite schlägt deine eigenen Ideen vor. Nichts spricht gegen beides.",
          },
          {
            q: "Kann das Brautpaar gemeinsam wählen?",
            r: "Ja, der Link öffnet sich auf jedem Gerät. Die beiden sehen sich die Seite zusammen an und bestätigen eine Wahl.",
          },
          {
            q: "Können mehrere Gäste gemeinsam schenken?",
            r: "Die Seite erstellt eine Person, aber ihr könnt euch zu mehreren auf die Ideen einigen und den Kauf teilen, sobald gewählt ist.",
          },
        ],
      },
    },

    naissance: {
      titreMeta: "Originelle Geschenke zur Geburt — MyPresentsForYou",
      descriptionMeta:
        "Originelle und nützliche Geschenkideen zur Geburt, fürs Baby oder für die Eltern, und eine einfache Art, die Eltern wählen zu lassen, was fehlt.",
      titre: "Geschenke zur Geburt, originell und nützlich: die Eltern wählen lassen",
      chapo:
        "Wenn ein Baby kommt, trudeln die Geschenke ein, oft doppelt: drei Strampler in derselben Größe, zwei Kuscheltiere, und nichts von dem, was wirklich fehlt. Schlag ein paar Ideen vor und lass die Eltern die nehmen, die ihnen hilft. Die Ideen unten sind nach Typ sortiert.",
      accroche: "Statt noch eines Kuscheltiers: was den Eltern wirklich fehlt.",
      apercu: ["Gelieferte Mahlzeiten", "Ein Tragetuch", "Ein Fotoshooting"],
      pourquoi: {
        titre: "Warum zur Geburt wählen lassen",
        paragraphes: [
          "In den ersten Monaten bekommen Eltern viel, und oft dasselbe. Nur sie wissen, was fehlt: eine bestimmte Ausstattung, Zeit, ein Abendessen, das sie nicht kochen müssen.",
          "Ein paar Ideen vorzuschlagen heißt, ihnen die Wahl zu lassen, ohne dass sie eine Liste schreiben müssen. Sie schauen, wann sie können, und brauchen zehn Sekunden.",
          "Es eilt nicht: Die Seite bleibt ein Jahr online. Viele Eltern wählen ein paar Wochen später, wenn sie endlich sehen, was ihnen helfen würde.",
        ],
      },
      idees: {
        titre: "Ideen, nach Typ",
        intro:
          "Ideen fürs Baby, und vor allem für die Eltern, die immer vergessen werden. Auf einer Seite zu mischen.",
        profils: [
          {
            nom: "Zum Durchatmen",
            idees: [
              { nom: "Gelieferte Mahlzeiten", pourquoi: "Ein paar Abende ohne Kochen, in den ersten Wochen." },
              { nom: "Ein paar Stunden Haushaltshilfe", pourquoi: "Weniger Putzen oder Bügeln." },
              { nom: "Eine Massage für den Elternteil, der entbunden hat", pourquoi: "Echte Erholung, wann immer es passt." },
              { nom: "Ein Abend Babysitting", pourquoi: "Später, für den ersten Abend zu zweit." },
            ],
          },
          {
            nom: "Für den Alltag mit dem Baby",
            idees: [
              { nom: "Ein Tragetuch oder eine Babytrage", pourquoi: "Für freie Hände, passend zur Nutzung ausgewählt." },
              { nom: "Ein Schlafsack in der nächsten Größe", pourquoi: "Den schenkt niemand: Geschenkt wird immer der erste." },
              { nom: "Eine Krabbeldecke", pourquoi: "Für die ersten Monate auf dem Boden." },
              { nom: "Eine praktische Wickeltasche", pourquoi: "Überall dabei, jahrelang." },
            ],
          },
          {
            nom: "Um Erinnerungen festzuhalten",
            idees: [
              { nom: "Ein Neugeborenen-Fotoshooting", pourquoi: "In den ersten Wochen zu machen." },
              { nom: "Ein Babyalbum zum Ausfüllen", pourquoi: "Die ersten Male, Monat für Monat notiert." },
              { nom: "Ein Hand- und Fußabdruck", pourquoi: "Eine Erinnerung, die lange bleibt." },
              { nom: "Ein Kunstdruck des ersten Fotos", pourquoi: "Gerahmt, fürs Kinderzimmer." },
            ],
          },
          {
            nom: "Für später",
            idees: [
              { nom: "Bücher für die ersten Jahre", pourquoi: "Eine kleine Bibliothek zum Mitwachsen." },
              { nom: "Ein langlebiges Holzspielzeug", pourquoi: "Das von einem Kind zum nächsten weitergegeben wird." },
              { nom: "Eine Einzahlung auf ein Sparkonto", pourquoi: "Ein Geschenk, das auf seine Zeit wartet." },
              { nom: "Kleidung für den zweiten Geburtstag", pourquoi: "Für den Tag, an dem alles andere zu klein ist." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Die Seite in drei Schritten erstellen",
        liste: [
          "Wähle den Anlass „Geburt“: Die Seite übernimmt seine sanften Farben und sein Motiv.",
          "Füge zwei bis zehn Ideen hinzu; für eine Dienstleistung oder eine Auszeit genügt eine Beschreibung von Hand.",
          "Schick den Link an die Eltern, ganz ohne Druck: Die Seite bleibt ein Jahr online. Du siehst ihre Wahl und machst das Geschenk.",
        ],
      },
      questions: {
        titre: "Fragen zu Geschenken zur Geburt",
        liste: [
          {
            q: "Muss ich mit dem Verschicken bis zur Geburt warten?",
            r: "Nein. Du kannst sie vorher vorbereiten und schicken, wann du willst. Du kannst auch ein Öffnungsdatum festlegen, damit sie bis dahin versiegelt bleibt.",
          },
          {
            q: "Ist es üblich, den Eltern statt dem Baby etwas zu schenken?",
            r: "Immer öfter. Ein geliefertes Abendessen oder zwei Stunden Putzhilfe sind oft die Geschenke, an die sich Eltern erinnern. Schlag beides vor und lass sie wählen.",
          },
          {
            q: "Brauchen die Eltern ein Konto, um zu wählen?",
            r: "Nein. Sie öffnen den Link, wählen, bestätigen. Kein Konto, keine E-Mail-Adresse.",
          },
        ],
      },
    },

    cremaillere: {
      titreMeta: "Geschenkideen zum Einzug — MyPresentsForYou",
      descriptionMeta:
        "Originelle Geschenkideen zum Einzug und zur Einweihung, für Singles oder Paare, und eine einfache Art, wählen zu lassen, was noch fehlt.",
      titre: "Geschenkideen zum Einzug: was noch fehlt",
      chapo:
        "Nach einem Umzug merkt man erst in den folgenden Wochen, was fehlt. Von außen lässt sich das nicht erraten. Also lieber ein paar Ideen vorschlagen und die Person die nehmen lassen, die sie brauchen wird. Hier sind welche, nach Typ sortiert.",
      accroche: "Was im neuen Zuhause wirklich fehlt.",
      apercu: ["Eine Zimmerpflanze", "Ein gutes Küchenmesser", "Ein Bild für die Wand"],
      pourquoi: {
        titre: "Warum zum Einzug wählen lassen",
        paragraphes: [
          "Was fehlt, weiß man erst, wenn man ein paar Wochen dort gewohnt hat. Die Gäste kommen derweil mit einer Flasche, einer Pflanze oder einem Deko-Stück, ausgesucht, ohne die Wohnung gesehen zu haben.",
          "Mit mehreren Ideen entscheidet die Person nach dem, was sie vor Augen hat: dem Platz, der noch da ist, dem Stil, dem, was schon da ist. Das Geschenk findet seinen Platz, statt ihn zu suchen.",
          "Du kannst die Seite nach der Feier schicken, wenn die Kartons ausgepackt sind. Dann wird klar, was gebraucht wird.",
        ],
      },
      idees: {
        titre: "Ideen, nach Typ",
        intro: "Ideen, um den Ort mit Leben zu füllen, vom Nützlichsten bis zum Persönlichsten.",
        profils: [
          {
            nom: "Für alle, die gern Gäste haben",
            idees: [
              { nom: "Ein schönes Gläserset", pourquoi: "Für die ersten Abendessen zu Hause." },
              { nom: "Ein Schneidebrett aus Massivholz", pourquoi: "Für alles zu gebrauchen, und schön genug für den Tisch." },
              { nom: "Ein Serviertablett", pourquoi: "Für den Aperitif wie fürs Frühstück." },
              { nom: "Leinenservietten", pourquoi: "Das Detail, das einen Tisch verändert." },
            ],
          },
          {
            nom: "Für alle, die gern kochen",
            idees: [
              { nom: "Ein gutes Küchenmesser", pourquoi: "Das Werkzeug, das man jeden Tag benutzt." },
              { nom: "Ein gusseiserner Bräter", pourquoi: "Für jahrelange Schmorgerichte." },
              { nom: "Ein saisonales Kochbuch", pourquoi: "Um die neue Küche einzuweihen." },
              { nom: "Eine Mühle und eine Gewürzauswahl", pourquoi: "Um die ersten Schränke zu füllen." },
            ],
          },
          {
            nom: "Für alle, die Pflanzen und Einrichtung lieben",
            idees: [
              { nom: "Eine große Zimmerpflanze", pourquoi: "Passend zum Licht in der Wohnung ausgewählt." },
              { nom: "Ein Werk aus der lokalen Kunstszene", pourquoi: "Ein Druck oder eine Radierung für die erste Wand." },
              { nom: "Eine Beistelllampe", pourquoi: "Für die Ecke, die noch kein Licht hat." },
              { nom: "Ein Wandbilderrahmen", pourquoi: "Für die Erinnerungen, die mit einziehen." },
            ],
          },
          {
            nom: "Für alle, denen Nützliches lieber ist als Deko",
            idees: [
              { nom: "Ein vollständiger Werkzeugkasten", pourquoi: "Für die Regale, die noch aufgebaut werden müssen." },
              { nom: "Ein Handstaubsauger", pourquoi: "Das kleine Gerät, das man am Ende doch kauft." },
              { nom: "Ein paar Stunden Hilfe beim Möbelaufbau", pourquoi: "Für die Möbel, die noch in Kartons stecken." },
              { nom: "Ein smartes Thermostat", pourquoi: "Für ein gemütliches und sparsames Zuhause." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Die Seite in drei Schritten erstellen",
        liste: [
          "Wähle den Anlass „Einweihung“: Die Seite übernimmt seine Farben und sein Motiv.",
          "Füge zwei bis zehn Ideen hinzu; füge den Link zu einem Produkt ein oder beschreibe eine Dienstleistung von Hand.",
          "Schick den Link nach der Feier, wenn alles eingerichtet ist. Du siehst, was gefehlt hat, und machst das Geschenk.",
        ],
      },
      questions: {
        titre: "Fragen zu Geschenken zum Einzug",
        liste: [
          {
            q: "Muss ich das Geschenk zur Einweihungsfeier mitbringen?",
            r: "Nicht unbedingt. Komm mit einer Karte und dem QR-Code der Seite: Gewählt wird später, wenn klar ist, was fehlt.",
          },
          {
            q: "Und für ein Paar, das zusammenzieht?",
            r: "Der Link öffnet sich auf jedem Gerät. Das Paar sieht sich die Seite zusammen an und bestätigt eine Wahl.",
          },
          {
            q: "Kann ich eine Idee ohne Link zu einem Shop vorschlagen?",
            r: "Ja. Hilfe beim Möbelaufbau oder eine gemeinsam ausgesuchte Pflanze lassen sich gut von Hand beschreiben, mit einem Titel und einer Notiz.",
          },
        ],
      },
    },

    "fete-des-meres": {
      titreMeta: "Originelle Geschenkideen zum Muttertag — MyPresentsForYou",
      descriptionMeta:
        "Originelle Geschenkideen zum Muttertag nach Typ sortiert — gemeinsame Zeit, Wohlfühlen, Hobbys — und eine einfache Art, sie wählen zu lassen.",
      titre: "Geschenkideen zum Muttertag: sie wählen lassen",
      chapo:
        "Zum Muttertag willst du Danke sagen, ohne den Strauß vom letzten Jahr zu wiederholen. Schlag drei oder vier Geschenke vor, die du für sie ausgesucht hast, und lass sie das nehmen, das ihr am besten gefällt. Die Ideen unten sind nach Typ sortiert.",
      accroche: "Danke sagen, einmal anders, mit Ideen, aus denen sie wählt.",
      apercu: ["Ein Brunch zu zweit", "Ein Wellnesstag", "Ein Blumenbinde-Kurs"],
      pourquoi: {
        titre: "Warum sie zum Muttertag wählen lassen",
        paragraphes: [
          "Frag eine Mutter, was sie sich wünscht, und sie sagt: „Nichts, ich freu mich, dass du da bist.“ Das ist ehrlich gemeint, und es hilft dir nicht weiter.",
          "Mit ein paar Ideen vor sich behält sie die Überraschung und nimmt, worauf sie wirklich Lust hat: Zeit zu zweit, etwas, das sie sich nie selbst kaufen würde, etwas, das sie seit Monaten aufschiebt. Nebenbei erfährst du, was ihr gefällt.",
          "Das Datum ist von Land zu Land verschieden, und die Seite kann Wochen vorher fertig sein. Leg ein Öffnungsdatum fest, dann bleibt sie bis zum Tag selbst versiegelt.",
        ],
      },
      idees: {
        titre: "Ideen, nach Typ",
        intro: "Ideen, um Danke zu sagen, auf einer Seite zu mischen.",
        profils: [
          {
            nom: "Um Zeit zusammen zu verbringen",
            idees: [
              { nom: "Ein Brunch an einem schönen Ort", pourquoi: "Ein Sonntagmorgen, nur ihr beide." },
              { nom: "Ein Theater- oder Konzertbesuch", pourquoi: "Ein Abend, auf den man sich gemeinsam freut." },
              { nom: "Ein Tagesausflug", pourquoi: "An einen Ort, von dem sie oft erzählt." },
              { nom: "Ein Kurs zu zweit", pourquoi: "Keramik, Kochen, Blumenbinden." },
            ],
          },
          {
            nom: "Um sich etwas Gutes zu tun",
            idees: [
              { nom: "Ein Wellnesstag", pourquoi: "Echte Erholung, zum Wunschtermin." },
              { nom: "Eine Massage oder eine Behandlung", pourquoi: "Eine Stunde nur für sie." },
              { nom: "Ein Set handgemachter Pflegeprodukte", pourquoi: "Aus einer kleinen Manufaktur." },
              { nom: "Ein dicker Bademantel aus Baumwolle", pourquoi: "Gemütlichkeit für jeden Tag." },
            ],
          },
          {
            nom: "Für ihre Hobbys",
            idees: [
              { nom: "Ein Blumenbinde-Kurs", pourquoi: "Einen Strauß binden und lernen, es wieder zu tun." },
              { nom: "Ein schönes Buch zu einem Lieblingsthema", pourquoi: "Garten, Kochen, Reisen, Malerei." },
              { nom: "Hochwertige Gartenwerkzeuge", pourquoi: "Werkzeuge, die viele Jahre halten." },
              { nom: "Ein Fotokurs", pourquoi: "Um Familienerinnerungen besser festzuhalten." },
            ],
          },
          {
            nom: "Als bleibende Erinnerung",
            idees: [
              { nom: "Ein Familien-Fotobuch", pourquoi: "Die schönsten Bilder der letzten Jahre." },
              { nom: "Ein gravierter Schmuck", pourquoi: "Initialen oder ein Datum, das zählt." },
              { nom: "Ein illustriertes Porträt", pourquoi: "Nach einem Familienfoto." },
              { nom: "Ein Brief und ein gelieferter Blumenstrauß", pourquoi: "Wenn die Entfernung ein Treffen verhindert." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Die Seite in drei Schritten erstellen",
        liste: [
          "Wähle den Anlass „Muttertag“: Die Seite übernimmt seine Farben und seine Eröffnungsworte.",
          "Füge zwei bis zehn Ideen hinzu; gemeinsame Zeit lässt sich gut von Hand beschreiben.",
          "Schick den Link oder drucke den QR-Code auf eine Karte. Sie wählt, du siehst ihre Wahl und machst das Geschenk.",
        ],
      },
      questions: {
        titre: "Fragen zu Muttertagsgeschenken",
        liste: [
          {
            q: "Kann ich die Seite mehrere Tage vorher vorbereiten?",
            r: "Ja. Leg ein Öffnungsdatum fest: Die Karte bleibt bis zum Muttertag hinter einem Countdown versiegelt, auch wenn du den Link vorher schickst.",
          },
          {
            q: "Und wenn sie mit Bildschirmen nicht so vertraut ist?",
            r: "Druck die Karte aus: ein gefaltetes Blatt mit dem QR-Code, in einem Umschlag. Sie scannt ihn mit dem Handy, und ihr könnt euch die Seite zusammen ansehen.",
          },
          {
            q: "Können mehrere Kinder gemeinsam schenken?",
            r: "Die Seite erstellt eine Person, aber ihr könnt die Ideen zusammen aussuchen, gemeinsam unterschreiben und den Kauf teilen, sobald das Geschenk feststeht.",
          },
        ],
      },
    },
  },
};
