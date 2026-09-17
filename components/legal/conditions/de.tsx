import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import type { ContenuLegal } from "../types";

const conditions: ContenuLegal = {
  titreMeta: "Nutzungsbedingungen — MyPresentsForYou",
  descriptionMeta:
    "Was MyPresentsForYou tut, was es nicht tut und was wir von dir erwarten. Kostenlos, ohne Konto, ohne Zahlung.",
  titre: "Nutzungsbedingungen",
  chapo:
    "Der Dienst ist kostenlos und ohne Konto. Hier steht, wozu wir uns verpflichten und worum wir dich im Gegenzug bitten.",
  Corps: ({ langue }) => (
    <>
      <h2>Was MyPresentsForYou ist</h2>
      <p>
        Ein Werkzeug, um eine Seite mit mehreren Geschenkideen zu gestalten, ihren Link zu verschicken und
        zu erfahren, welche gewählt wurde. <strong>MyPresentsForYou verkauft nichts</strong>: Es nimmt
        keine Zahlung entgegen, liefert nichts und steht nie zwischen dir und dem Geschäft, in dem du
        kaufst. Es ist eine gemeinsame Merkhilfe, kein Laden.
      </p>
      <p>
        Der Dienst finanziert sich über Affiliate-Links. Der Button „Dieses Geschenk kaufen“ auf deiner Verwaltungsseite kann über ein <strong>Affiliate-Netzwerk</strong> laufen: Wenn du nach diesem Klick kaufst, kann uns der Shop eine Provision zahlen. Du zahlst nichts extra, und die Seite, die die Person erhält, enthält keine Affiliate-Links.
      </p>

      <h2>Kein Konto, also kein Sicherheitsnetz</h2>
      <p>
        Der Zugang zu deiner Karte hängt allein am Verwaltungslink, den du beim Erstellen bekommst.{" "}
        <strong>Wir können ihn dir nicht erneut schicken</strong>: Nichts verknüpft eine Karte mit einer
        Identität, und genau deshalb müssen wir dich nach nichts fragen. Bewahre diesen Link auf.
      </p>
      <p>
        Daraus folgt: Wer den Link hat, hat die Rechte. Veröffentliche ihn nicht und gib ihn nur an
        Menschen weiter, denen du vertraust. Der öffentliche Link dagegen ist zum Teilen gedacht — aber
        seine Adresse ist kurz und erratbar, also stell nichts Heikles auf eine Karte.
      </p>

      <h2>Wie lange eine Karte bleibt</h2>
      <p>
        Eine Karte, auf der niemand gewählt hat, wird <strong>ein Jahr nach ihrer Erstellung</strong>{" "}
        gelöscht. Sobald gewählt wurde, bleibt sie bei dieser Wahl: Sie ist nicht mehr änderbar und bleibt
        abrufbar, bis du sie löschst.
      </p>

      <h2>Worum wir dich bitten</h2>
      <ul>
        <li>
          Nichts Rechtswidriges, Hasserfülltes, Verleumderisches oder die Rechte Dritter Verletzendes zu
          veröffentlichen.
        </li>
        <li>Die Karten nicht für unerwünschte Werbung, Phishing oder irreführende Weiterleitungen zu nutzen.</li>
        <li>
          Die technischen Grenzen des Dienstes nicht zu umgehen und ihn nicht zu automatisieren, um
          massenhaft Seiten zu erstellen.
        </li>
        <li>
          Die Person zu respektieren, an die du eine Karte richtest: Du trägst ihren Vornamen ein, ohne dass
          sie darum gebeten hat.
        </li>
      </ul>
      <p>
        Eine Karte, die gegen diese Regeln verstößt, kann ohne Vorankündigung gelöscht werden. Um eine zu
        melden, siehe die Seite <Link href={cheminVers(langue, "contact")}>Kontakt</Link>.
      </p>

      <h2>Wozu wir uns nicht verpflichten</h2>
      <p>
        Der Dienst wird <strong>kostenlos und so, wie er ist</strong>, bereitgestellt, ohne Gewähr für
        Verfügbarkeit oder Aufbewahrung. Ein Ausfall, ein Fehler oder ein Datenverlust bleibt möglich. Wenn
        dir eine Karte wichtig ist, bewahre die Liste dessen, was du daraufgesetzt hast, auch woanders auf.
      </p>
      <p>
        Der automatische Abruf von Titel und Bild eines Produkts hängt ganz von der jeweiligen Website ab:
        Viele Händler lehnen automatische Anfragen ab. Klappt er nicht, übernimmt die Eingabe von Hand —
        das ist keine Störung, sondern so vorgesehen.
      </p>

      <h2>Änderungen</h2>
      <p>
        Diese Bedingungen können sich mit dem Dienst weiterentwickeln. Maßgeblich ist das Datum der letzten
        Aktualisierung oben auf der Seite; wichtige Änderungen werden auf der Startseite angekündigt.
      </p>

      <p className="prose__date">
        Siehe auch die <Link href={cheminVers(langue, "confidentialite")}>Datenschutzerklärung</Link>.
      </p>
    </>
  ),
};

export default conditions;
