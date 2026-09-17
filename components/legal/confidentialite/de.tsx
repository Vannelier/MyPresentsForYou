import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import type { ContenuLegal } from "../types";

const confidentialite: ContenuLegal = {
  titreMeta: "Datenschutzerklärung — MyPresentsForYou",
  descriptionMeta:
    "MyPresentsForYou setzt keine Cookies, nutzt keine Tracker und verlangt kein Konto. Was gespeichert wird, wie lange und wie du alles löschst.",
  titre: "Datenschutzerklärung",
  chapo:
    "MyPresentsForYou ist so gebaut, dass es möglichst wenige Daten zu schützen gibt. Diese Seite sagt genau, welche, und warum es sie gibt.",
  Corps: ({ langue }) => (
    <>
      <h2>Keine Cookies, keine Tracker</h2>
      <p>
        Die Website setzt <strong>keine Cookies</strong> und nutzt <strong>keine Reichweitenmessung</strong>{" "}
        — kein Google Analytics, nichts Vergleichbares. Nichts verfolgt, wo du surfst, weder hier noch
        anderswo. Deshalb wird dir auch kein Einwilligungsbanner angezeigt.
      </p>
      <p>
        Die Website führt nur <strong>drei Tagessummen</strong>: die Zahl der erstellten Karten, der bestätigten Wahlen und der Klicks von der Verwaltungsseite zum Shop. Nichts verbindet sie mit einer Karte, einer Person oder einem Gerät.
      </p>
      <p>
        Wenn du auf „Dieses Geschenk kaufen“ klickst, verlässt du MyPresentsForYou: Der Link kann über ein <strong>Affiliate-Netzwerk</strong> laufen, bevor er beim Shop ankommt. Dieses Netzwerk und der Shop können dann eigene Cookies setzen, nach ihren eigenen Regeln. Auf MyPresentsForYou wird nichts gesetzt, und die Person, die die Karte erhält, ist nie betroffen.
      </p>

      <h2>Nur eines bleibt auf deinem Gerät</h2>
      <p>
        Während du eine Karte gestaltest, speichert das Formular deinen Zwischenstand im{" "}
        <strong>lokalen Speicher deines Browsers</strong>. So kannst du bei einem Händler die Adresse eines
        Produkts suchen, zurückkommen und deine Karte dort wiederfinden, wo du aufgehört hast — auf dem
        Handy wird ein beiseitegelegter Tab oft vom System entladen.
      </p>
      <p>
        Dieser Entwurf <strong>verlässt dein Gerät nie</strong>: Er wird an keinen Server geschickt, auch
        nicht an unseren, und wir haben keinen Zugriff darauf. Er wird gelöscht, sobald die Seite erstellt
        ist, spätestens aber nach sieben Tagen. Die Schaltfläche „Neu anfangen“ oben im Formular löscht
        ihn sofort; die Websitedaten im Browser zu löschen, bewirkt dasselbe.
      </p>
      <p>
        Die Schriften werden von unserer eigenen Domain ausgeliefert, nicht von Google Fonts: Das Anzeigen
        einer MyPresentsForYou-Seite schickt keine Anfrage an Dritte und damit auch nicht deine IP-Adresse.
      </p>

      <h2>Was gespeichert wird, wenn du eine Karte erstellst</h2>
      <p>Nur, was du selbst ins Formular schreibst:</p>
      <ul>
        <li>die Titel, Notizen und Adressen der Geschenke, die du vorschlägst;</li>
        <li>deine Nachrichten, deine Unterschrift und den Vornamen, den du der Person gibst;</li>
        <li>die Bilder, die du hochlädst oder deren Adresse du einfügst;</li>
        <li>deine Einstellungen zum Aussehen — Anlass, Palette, Schrift.</li>
      </ul>
      <p>
        Es gibt <strong>kein Konto, kein Passwort, keine E-Mail-Adresse</strong>. Nichts verknüpft eine
        Karte mit einer Identität: Der Zugang hängt allein am geheimen Verwaltungslink, den du beim
        Erstellen bekommst.
      </p>

      <div className="prose__note">
        <p>
          <strong>
            Der Vorname der beschenkten Person ist ein personenbezogenes Datum — ihres, nicht deines.
          </strong>{" "}
          Du gibst ihn für sie ein, ohne dass sie um etwas gebeten hat. Stell auf eine Karte nur, was du
          ihr auch zeigen würdest, und nichts Heikles: Die öffentliche Adresse einer Karte ist kurz und
          erratbar.
        </p>
      </div>

      <h2>Was gespeichert wird, wenn jemand eine Karte bekommt</h2>
      <p>
        Die Person, die den Link öffnet, <strong>gibt nichts ein</strong>: keinen Namen, keine Adresse,
        keine E-Mail. Gespeichert werden das gewählte Geschenk, das Datum dieser Wahl und — wenn du die
        Option eingeschaltet hast — die Nachricht, die sie hinterlassen wollte. Ein Aufrufzähler wird
        erhöht, ohne etwas darüber zu speichern, wer die Seite aufgerufen hat.
      </p>

      <h2>Deine IP-Adresse</h2>
      <p>
        Sie dient einem einzigen Zweck: zu verhindern, dass ein Bot tausende Seiten erstellt oder tausende
        Bilder hochlädt. Der zugehörige Zähler lebt <strong>einige Minuten im Arbeitsspeicher</strong>,
        wird in keine Datenbank geschrieben, nie aufbewahrt und verschwindet beim Neustart des Servers.
      </p>
      <p>
        Unser Hoster führt wie jeder Webserver eigene technische Protokolle. Sie liegen außerhalb unserer
        Kontrolle und unterliegen seinen Aufbewahrungsregeln.
      </p>

      <h2>Wie lange</h2>
      <p>
        Eine Karte, auf der niemand gewählt hat, wird mit ihren Bildern{" "}
        <strong>ein Jahr nach ihrer Erstellung</strong> gelöscht. Eine Karte, auf der gewählt wurde, bleibt
        verfügbar, damit du die Wahl nachsehen kannst, bis du sie selbst über deinen Verwaltungslink
        löschst — ihre Bilder verschwinden dann mit ihr.
      </p>

      <h2>Eine Karte löschen</h2>
      <p>
        Öffne deinen Verwaltungslink: Die Schaltfläche zum Löschen ist unten auf der Seite. Das Löschen
        erfolgt sofort und endgültig — die Karte, ihre Nachrichten und ihre Bilder verschwinden, und beide
        Links funktionieren nicht mehr.
      </p>
      <p>
        Wenn du diesen Link verloren hast, schreib uns über die Seite{" "}
        <Link href={cheminVers(langue, "contact")}>Kontakt</Link> und nenne die öffentliche Adresse der
        Karte.
      </p>

      <h2>An wen Daten weitergegeben werden</h2>
      <p>
        <strong>Nichts wird verkauft, vermietet oder zu kommerziellen Zwecken an Dritte weitergegeben.</strong>{" "}
        Zwei technische Dienstleister sind beteiligt: der Hoster der Website und der Datenbank sowie der
        Speicherdienst für Bilder. Sie handeln ausschließlich nach unseren Anweisungen, um den Dienst zu
        betreiben. Wer sie sind, steht im <Link href={cheminVers(langue, "mentions-legales")}>Impressum</Link>.
      </p>
      <p>
        Ein technisches Detail: Wenn du die Adresse einer Produktseite einfügst, um Titel und Bild
        abzurufen, <strong>ruft unser Server sie auf</strong>, nicht dein Browser. Der Händler sieht unseren
        Server, nie deine IP-Adresse.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Die Datenschutz-Grundverordnung (DSGVO) gibt dir ein Recht auf Auskunft, Berichtigung, Löschung,
        Einschränkung und Widerspruch. In der Praxis übst du die ersten drei direkt über deinen
        Verwaltungslink aus, mit dem du alles einsehen, ändern und löschen kannst, ohne uns zu schreiben.
      </p>
      <p>
        Für alles andere schreib uns
        {aRemplir(SITE.email) ? (
          <>
            {" "}
            an die Adresse auf der Seite <Link href={cheminVers(langue, "contact")}>Kontakt</Link>
          </>
        ) : (
          <>
            {" "}
            an <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </>
        )}
        . Eine Grenze solltest du kennen: <strong>Keine Karte ist mit einer Identität verknüpft</strong>.
        Ohne die öffentliche Adresse der betreffenden Karte können wir sie schlicht nicht finden — und einer
        Anfrage daher nicht nachkommen.
      </p>
      <p>
        Wenn dich unsere Antwort nicht zufriedenstellt, kannst du dich an die Datenschutzbehörde deines
        Wohnsitzlandes wenden.
      </p>
    </>
  ),
};

export default confidentialite;
