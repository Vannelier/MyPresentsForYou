import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import type { ContenuLegal } from "../types";

const confidentialite: ContenuLegal = {
  titreMeta: "Privacybeleid — MyPresentsForYou",
  descriptionMeta:
    "MyPresentsForYou plaatst geen cookies, gebruikt geen trackers en vraagt geen account. Wat er opgeslagen wordt, hoe lang, en hoe je alles wist.",
  titre: "Privacybeleid",
  chapo:
    "MyPresentsForYou is zo gebouwd dat er zo weinig mogelijk gegevens te beschermen zijn. Deze pagina zegt precies welke, en waarom ze bestaan.",
  Corps: ({ langue }) => (
    <>
      <h2>Geen cookies, geen trackers</h2>
      <p>
        De site plaatst <strong>geen cookies</strong> en gebruikt <strong>geen bezoekersstatistieken</strong>{" "}
        — geen Google Analytics, niets vergelijkbaars. Niets volgt je surfgedrag, hier of elders. Daarom
        krijg je ook geen toestemmingsbanner te zien.
      </p>
      <p>
        De site houdt alleen <strong>drie dagtotalen</strong> bij: het aantal gemaakte kaarten, bevestigde keuzes en klikken naar de winkel vanaf de beheerpagina. Niets koppelt ze aan een kaart, een persoon of een apparaat.
      </p>

      <h2>Er blijft maar één ding op je toestel</h2>
      <p>
        Terwijl je een kaart maakt, bewaart het formulier je werk in de{" "}
        <strong>lokale opslag van je browser</strong>. Zo kun je bij een winkel het adres van een product
        gaan zoeken, terugkomen en je kaart terugvinden waar je ze liet — op een telefoon wordt een tabblad
        dat je even laat liggen vaak door het systeem afgesloten.
      </p>
      <p>
        Dit concept <strong>verlaat je toestel nooit</strong>: het wordt naar geen enkele server gestuurd,
        ook niet naar de onze, en we hebben er geen toegang toe. Het wordt gewist zodra de pagina gemaakt
        is, en in elk geval na zeven dagen. De knop “Opnieuw beginnen” bovenaan het formulier verwijdert
        het meteen; de sitegegevens in je browser wissen doet hetzelfde.
      </p>
      <p>
        De lettertypes komen van ons eigen domein, niet van Google Fonts: een MyPresentsForYou-pagina tonen
        stuurt geen enkel verzoek naar derden, en dus ook niet je IP-adres.
      </p>

      <h2>Wat er opgeslagen wordt als je een kaart maakt</h2>
      <p>Alleen wat je zelf in het formulier schrijft:</p>
      <ul>
        <li>de titels, notities en adressen van de cadeaus die je voorstelt;</li>
        <li>je berichten, je handtekening en de voornaam die je aan de persoon geeft;</li>
        <li>de afbeeldingen die je uploadt of waarvan je het adres plakt;</li>
        <li>je instellingen voor het uiterlijk — gelegenheid, palet, lettertype.</li>
      </ul>
      <p>
        Er is <strong>geen account, geen wachtwoord, geen e-mailadres</strong>. Niets koppelt een kaart aan
        een identiteit: de toegang hangt volledig af van de geheime beheerlink die je bij het maken krijgt.
      </p>

      <div className="prose__note">
        <p>
          <strong>De voornaam van wie de kaart krijgt, is een persoonsgegeven — van die persoon, niet van jou.</strong>{" "}
          Je vult hem in voor die persoon, zonder dat die iets gevraagd heeft. Zet op een kaart alleen wat
          je die persoon ook zou willen tonen, en niets gevoeligs: het openbare adres van een kaart is kort
          en te raden.
        </p>
      </div>

      <h2>Wat er opgeslagen wordt als iemand een kaart krijgt</h2>
      <p>
        Wie de link opent, <strong>vult niets in</strong>: geen naam, geen adres, geen e-mail. Opgeslagen
        worden het gekozen cadeau, de datum van die keuze en — als je de optie aanzette — het bericht dat
        achtergelaten werd. Een teller van bezoeken gaat omhoog, zonder iets te bewaren over wie er keek.
      </p>

      <h2>Je IP-adres</h2>
      <p>
        Het dient voor één ding: voorkomen dat een robot duizenden pagina’s maakt of duizenden afbeeldingen
        uploadt. De bijbehorende teller leeft <strong>een paar minuten in het werkgeheugen</strong>, wordt
        in geen enkele database geschreven, wordt nooit bewaard en verdwijnt als de server herstart.
      </p>
      <p>
        Onze hostingpartij houdt, zoals elke webserver, zelf technische logboeken bij. Die vallen buiten
        onze controle en onder haar eigen bewaarbeleid.
      </p>

      <h2>Hoe lang</h2>
      <p>
        Een kaart waarop niemand gekozen heeft, wordt samen met de afbeeldingen{" "}
        <strong>een jaar na het maken</strong> verwijderd. Een kaart waarop gekozen is, blijft beschikbaar
        zodat je de keuze kunt nakijken, tot je ze zelf verwijdert via je beheerlink — de afbeeldingen
        verdwijnen dan mee.
      </p>

      <h2>Een kaart wissen</h2>
      <p>
        Open je beheerlink: de knop om te verwijderen staat onderaan de pagina. Het verwijderen gebeurt
        meteen en definitief — de kaart, de berichten en de afbeeldingen verdwijnen, en beide links werken
        niet meer.
      </p>
      <p>
        Als je deze link kwijt bent, schrijf ons dan via de pagina{" "}
        <Link href={cheminVers(langue, "contact")}>Contact</Link> en vermeld het openbare adres van de kaart.
      </p>

      <h2>Aan wie gegevens doorgegeven worden</h2>
      <p>
        <strong>Er wordt niets verkocht, verhuurd of voor commerciële doeleinden aan derden doorgegeven.</strong>{" "}
        Twee technische dienstverleners zijn betrokken: de host van de site en de database, en de
        opslagdienst voor afbeeldingen. Ze handelen uitsluitend op onze instructies, om de dienst te laten
        werken. Wie ze zijn, staat in de{" "}
        <Link href={cheminVers(langue, "mentions-legales")}>juridische informatie</Link>.
      </p>
      <p>
        Een technische precisering: als je het adres van een productpagina plakt om titel en afbeelding op
        te halen, <strong>bezoekt onze server die pagina</strong>, niet je browser. De winkel ziet onze
        server, nooit je IP-adres.
      </p>

      <h2>Je rechten</h2>
      <p>
        De Algemene Verordening Gegevensbescherming (AVG) geeft je recht op inzage, rectificatie, wissing,
        beperking en bezwaar. In de praktijk oefen je de eerste drie zelf uit via je beheerlink, waarmee je
        alles kunt bekijken, aanpassen en verwijderen zonder ons te schrijven.
      </p>
      <p>
        Voor de rest kun je ons schrijven
        {aRemplir(SITE.email) ? (
          <>
            {" "}
            via het adres op de pagina <Link href={cheminVers(langue, "contact")}>Contact</Link>
          </>
        ) : (
          <>
            {" "}
            op <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </>
        )}
        . Een grens die je moet kennen: <strong>geen enkele kaart is aan een identiteit gekoppeld</strong>.
        Zonder het openbare adres van de betrokken kaart is het voor ons praktisch onmogelijk om ze terug te
        vinden — en dus om op een verzoek in te gaan.
      </p>
      <p>
        Als ons antwoord je niet tevredenstelt, kun je je wenden tot de gegevensbeschermingsautoriteit van je
        woonland.
      </p>
    </>
  ),
};

export default confidentialite;
