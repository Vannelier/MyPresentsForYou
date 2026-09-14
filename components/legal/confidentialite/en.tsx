import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import type { ContenuLegal } from "../types";

const confidentialite: ContenuLegal = {
  titreMeta: "Privacy policy — MyPresentsForYou",
  descriptionMeta:
    "MyPresentsForYou sets no cookies, uses no trackers and asks for no account. What is stored, for how long, and how to erase everything.",
  titre: "Privacy policy",
  chapo:
    "MyPresentsForYou is built to have as little data as possible to protect. This page says exactly which data, and why it exists.",
  Corps: ({ langue }) => (
    <>
      <h2>No cookies, no trackers</h2>
      <p>
        The site sets <strong>no cookies</strong> and uses <strong>no analytics tools</strong> — no Google
        Analytics, nothing equivalent. Nothing follows your browsing, here or elsewhere. That is why no
        consent banner is shown to you.
      </p>

      <h2>Only one thing is kept on your device</h2>
      <p>
        While you put a card together, the form saves your work in progress in your{" "}
        <strong>browser’s local storage</strong>. That is what lets you go and look up a product’s address
        at a shop, then come back and find your card where you left it — on a phone, a tab left aside is
        often unloaded by the system.
      </p>
      <p>
        This draft <strong>never leaves your device</strong>: it is sent to no server, not even ours, and
        we have no access to it. It is erased as soon as the page is created, and in any case after seven
        days. The “Start over” button at the top of the form deletes it immediately; clearing site data in
        your browser does the same.
      </p>
      <p>
        Fonts are served from our own domain, not from Google Fonts: displaying a MyPresentsForYou page
        sends no request to a third party, and therefore not your IP address.
      </p>

      <h2>What is stored when you create a card</h2>
      <p>Only what you write yourself in the form:</p>
      <ul>
        <li>the titles, notes and addresses of the gifts you suggest;</li>
        <li>your messages, your signature and the first name you give the person;</li>
        <li>the images you upload or whose address you paste;</li>
        <li>your appearance settings — occasion, palette, font.</li>
      </ul>
      <p>
        There is <strong>no account, no password, no email address</strong>. Nothing ties a card to an
        identity: access relies entirely on the secret admin link given to you when you create it.
      </p>

      <div className="prose__note">
        <p>
          <strong>The recipient’s first name is personal data — theirs, not yours.</strong> You enter it
          for them, without them having asked for anything. Only put on a card what you would be happy to
          show them, and nothing sensitive: a card’s public address is short and guessable.
        </p>
      </div>

      <h2>What is stored when someone receives a card</h2>
      <p>
        The person who opens the link <strong>enters nothing</strong>: no name, no address, no email. What
        is stored is the gift they chose, the date of that choice, and — if you turned the option on — the
        note they chose to leave. A view counter is incremented, without keeping anything about who viewed.
      </p>

      <h2>Your IP address</h2>
      <p>
        It is used for one thing only: preventing a robot from creating thousands of pages or uploading
        thousands of images. The matching counter lives <strong>in memory for a few minutes</strong>; it
        is written to no database, is never kept, and disappears when the server restarts.
      </p>
      <p>
        Our host, for its part, keeps its own technical logs, like any web server. They are outside our
        control and fall under its own retention policy.
      </p>

      <h2>How long</h2>
      <p>
        A card on which nobody has chosen is deleted, with its images,{" "}
        <strong>one year after it is created</strong>. A card whose choice has been made stays available so
        you can look it up, until you delete it yourself from your admin link — its images then go with it.
      </p>

      <h2>Erasing a card</h2>
      <p>
        Open your admin link: the delete button is at the bottom of the page. Deletion is immediate and
        permanent — the card, its messages and its images disappear, and both links stop working.
      </p>
      <p>
        If you have lost this link, write to us from the{" "}
        <Link href={cheminVers(langue, "contact")}>Contact</Link> page, giving the card’s public address.
      </p>

      <h2>Who the data is passed to</h2>
      <p>
        <strong>Nothing is sold, rented or handed over to third parties for commercial purposes.</strong>{" "}
        Two technical providers are involved: the host of the site and database, and the image storage
        service. They act solely on our instructions, to run the service. Their identity is given in the{" "}
        <Link href={cheminVers(langue, "mentions-legales")}>legal notice</Link>.
      </p>
      <p>
        A technical detail: when you paste the address of a product page to fetch its title and image,{" "}
        <strong>it is our server that visits it</strong>, not your browser. The shop sees our server, never
        your IP address.
      </p>

      <h2>Your rights</h2>
      <p>
        The EU General Data Protection Regulation (GDPR) gives you the right of access, rectification,
        erasure, restriction and objection. In practice, you exercise the first three yourself from your
        admin link, which lets you view, change and delete everything without writing to us.
      </p>
      <p>
        For the rest, write to us
        {aRemplir(SITE.email) ? (
          <>
            {" "}
            at the address given on the <Link href={cheminVers(langue, "contact")}>Contact</Link> page
          </>
        ) : (
          <>
            {" "}
            at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </>
        )}
        . One limit you should know: <strong>no card is tied to an identity</strong>. Without the public
        address of the card concerned, it is materially impossible for us to find it — and therefore to
        act on a request.
      </p>
      <p>
        If our reply does not satisfy you, you can contact the data protection authority of your country
        of residence.
      </p>
    </>
  ),
};

export default confidentialite;
