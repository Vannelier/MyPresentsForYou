import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import type { ContenuLegal } from "../types";

const conditions: ContenuLegal = {
  titreMeta: "Terms of use — MyPresentsForYou",
  descriptionMeta:
    "What MyPresentsForYou does, what it doesn’t, and what we ask of you. A free service, with no account and no payment.",
  titre: "Terms of use",
  chapo: "The service is free and needs no account. Here is what we commit to, and what we ask of you in return.",
  Corps: ({ langue }) => (
    <>
      <h2>What MyPresentsForYou is</h2>
      <p>
        A tool to put together a page presenting several gift ideas, send its link, and find out which
        one was chosen. <strong>MyPresentsForYou sells nothing</strong>: it takes no payment, delivers
        nothing, and never stands between you and the shop where you will buy. It is a shared reminder,
        not a shop.
      </p>
      <p>
        The service is funded by affiliate links. The &quot;Buy this gift&quot; button on your admin page may go through an <strong>affiliate network</strong>: if you buy after this click, the shop may pay us a commission. You pay nothing extra, and the page the person receives contains no affiliate links.
      </p>

      <h2>No account, so no safety net</h2>
      <p>
        Access to your card relies entirely on the admin link given to you when you create it.{" "}
        <strong>We cannot send it to you again</strong>: nothing ties a card to an identity, and that is
        precisely what lets us ask you for nothing. Keep this link.
      </p>
      <p>
        It follows that whoever holds the link holds the rights. Do not publish it, and only pass it on to
        people you trust. The public link, on the other hand, is made to be shared — but its address is
        short and guessable, so put nothing sensitive on a card.
      </p>

      <h2>How long a card lasts</h2>
      <p>
        A card on which nobody has chosen is deleted <strong>one year after it is created</strong>. Once
        the choice is made, the card is fixed on that choice: it can no longer be edited, and remains
        available until you delete it.
      </p>

      <h2>What we ask of you</h2>
      <ul>
        <li>Do not publish anything unlawful, hateful, defamatory or infringing the rights of others.</li>
        <li>Do not use cards for unsolicited marketing, phishing or deceptive redirection.</li>
        <li>
          Do not get around the service’s technical limits, or automate it to create pages in bulk.
        </li>
        <li>
          Respect the person you address a card to: you write their first name without them having asked.
        </li>
      </ul>
      <p>
        A card that breaks these rules may be deleted without notice. To report one, see the{" "}
        <Link href={cheminVers(langue, "contact")}>Contact</Link> page.
      </p>

      <h2>What we do not commit to</h2>
      <p>
        The service is provided <strong>free of charge and as is</strong>, with no guarantee of
        availability or retention. An outage, an error or a loss of data remains possible. If a card
        matters to you, keep a list of what you put on it somewhere else.
      </p>
      <p>
        Automatic fetching of a product’s title and image depends entirely on the site in question: many
        shops refuse automated requests. When it fails, manual entry takes over — that is not a fault, it
        is how it is meant to work.
      </p>

      <h2>Changes</h2>
      <p>
        These terms may change as the service evolves. The update date at the top of the page is
        authoritative; notable changes will be announced on the home page.
      </p>

      <p className="prose__date">
        See also the <Link href={cheminVers(langue, "confidentialite")}>privacy policy</Link>.
      </p>
    </>
  ),
};

export default conditions;
