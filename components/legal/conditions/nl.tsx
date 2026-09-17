import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import type { ContenuLegal } from "../types";

const conditions: ContenuLegal = {
  titreMeta: "Gebruiksvoorwaarden — MyPresentsForYou",
  descriptionMeta:
    "Wat MyPresentsForYou doet, wat het niet doet en wat we van je vragen. Gratis, zonder account, zonder betaling.",
  titre: "Gebruiksvoorwaarden",
  chapo:
    "De dienst is gratis en zonder account. Hier lees je waartoe we ons verbinden, en wat we in ruil van je vragen.",
  Corps: ({ langue }) => (
    <>
      <h2>Wat MyPresentsForYou is</h2>
      <p>
        Een hulpmiddel om een pagina met enkele cadeau-ideeën te maken, de link te versturen en te weten
        welk idee gekozen is. <strong>MyPresentsForYou verkoopt niets</strong>: het int geen betalingen,
        levert niets en komt nooit tussen jou en de winkel waar je koopt. Het is een gedeeld
        geheugensteuntje, geen winkel.
      </p>
      <p>
        De dienst wordt gefinancierd met affiliatelinks. De knop &quot;Dit cadeau kopen&quot; op je beheerpagina kan via een <strong>affiliatenetwerk</strong> lopen: als je na deze klik koopt, kan de winkel ons een commissie betalen. Je betaalt niets extra, en de pagina die de ander ontvangt bevat geen affiliatelinks.
      </p>

      <h2>Geen account, dus geen vangnet</h2>
      <p>
        De toegang tot je kaart hangt volledig af van de beheerlink die je bij het maken krijgt.{" "}
        <strong>We kunnen hem je niet opnieuw sturen</strong>: niets koppelt een kaart aan een identiteit,
        en precies daardoor hoeven we je niets te vragen. Bewaar deze link.
      </p>
      <p>
        Gevolg: wie de link heeft, heeft de rechten. Maak hem niet openbaar en geef hem alleen door aan
        mensen die je vertrouwt. De openbare link is er wel om te delen — maar het adres is kort en te
        raden, dus zet niets gevoeligs op een kaart.
      </p>

      <h2>Hoe lang een kaart blijft</h2>
      <p>
        Een kaart waarop niemand gekozen heeft, wordt <strong>een jaar na het maken</strong> verwijderd.
        Zodra er gekozen is, blijft ze op die keuze staan: ze kan niet meer aangepast worden en blijft te
        bekijken tot je ze verwijdert.
      </p>

      <h2>Wat we van je vragen</h2>
      <ul>
        <li>Niets onwettigs, haatdragends, lasterlijks of in strijd met de rechten van anderen publiceren.</li>
        <li>De kaarten niet gebruiken voor ongevraagde reclame, phishing of misleidende doorverwijzingen.</li>
        <li>
          De technische grenzen van de dienst niet omzeilen en de dienst niet automatiseren om massaal
          pagina’s te maken.
        </li>
        <li>
          De persoon voor wie je een kaart maakt respecteren: je vult de voornaam van die persoon in zonder
          dat die erom gevraagd heeft.
        </li>
      </ul>
      <p>
        Een kaart die deze regels overtreedt, kan zonder waarschuwing verwijderd worden. Om er een te
        melden, zie de pagina <Link href={cheminVers(langue, "contact")}>Contact</Link>.
      </p>

      <h2>Waartoe we ons niet verbinden</h2>
      <p>
        De dienst wordt <strong>gratis en zoals hij is</strong> aangeboden, zonder garantie op
        beschikbaarheid of bewaring. Een onderbreking, een fout of gegevensverlies blijft mogelijk. Als een
        kaart belangrijk voor je is, bewaar dan ook elders een lijst van wat je erop gezet hebt.
      </p>
      <p>
        Het automatisch ophalen van titel en afbeelding van een product hangt volledig af van de betrokken
        site: veel winkels weigeren automatische verzoeken. Als het mislukt, neemt het invullen met de hand
        het over — dat is geen storing, zo is het bedoeld.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Deze voorwaarden kunnen met de dienst mee veranderen. De datum van bijwerking bovenaan de pagina is
        bepalend; belangrijke wijzigingen worden op de startpagina gemeld.
      </p>

      <p className="prose__date">
        Zie ook het <Link href={cheminVers(langue, "confidentialite")}>privacybeleid</Link>.
      </p>
    </>
  ),
};

export default conditions;
