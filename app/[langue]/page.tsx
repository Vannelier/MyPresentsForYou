import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

/*
 * Le titre porte ce qu'on cherche, pas ce qu'on est.
 *
 * « MyPresentsForYou — offre le choix » ne se trouve qu'en tapant « MyPresentsForYou », c'est-à-dire
 * en connaissant déjà le site. Le titre décrit donc d'abord l'action — offrir en
 * laissant choisir — et garde la marque en fin de ligne, là où elle ne prend pas
 * la place des mots utiles. Environ 60 signes : au-delà, Google coupe.
 */
export const metadata: Metadata = {
  title: "Offrir en laissant choisir le cadeau — MyPresentsForYou",
  description:
    "Réunis quelques idées de cadeaux sur une page et envoie le lien : la personne choisit, tu offres. Gratuit et sans compte.",
  alternates: { canonical: "/" },
  keywords: [
    "offrir un cadeau au choix",
    "laisser choisir son cadeau",
    "idées cadeau à envoyer",
    "carte cadeau personnalisée",
    "alternative à la liste de souhaits",
  ],
};

/*
 * Décrit le site pour les moteurs : de quoi il s'agit, et que c'est gratuit.
 * `WebApplication` plutôt que `WebSite` — c'est un outil qu'on utilise, pas un
 * contenu qu'on lit — et un `offers` à zéro, qui est la façon normalisée de dire
 * « gratuit » plutôt que de l'espérer compris depuis la description.
 */
const DONNEES_STRUCTUREES = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MyPresentsForYou",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Tout navigateur web",
  inLanguage: "fr",
  description:
    "Réunis quelques idées de cadeaux sur une page et envoie le lien : la personne choisit, tu offres.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  featureList: [
    "Jusqu'à dix propositions par carte",
    "Aucun compte requis",
    "QR code à imprimer",
    "Carte modifiable jusqu'au choix",
  ],
};

export default function LandingPage() {
  return (
    <main className="landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DONNEES_STRUCTUREES) }}
      />
      {/* --- Accroche : la promesse, la preuve, l'action, en un seul écran. --- */}
      <section className="lp-hero">
        <div className="lp-hero__text">
          <p className="eyebrow">MyPresentsForYou</p>
          <h1>Offrir juste, sans rien demander.</h1>
          <p className="lp-sub">
            Réunis quelques idées de cadeaux sur une page soignée, puis envoie-la. La personne
            choisit ; tu offres.
          </p>
          <div className="lp-cta">
            <Link className="btn btn--auto" href="/creer">
              Composer ma page-cadeau
            </Link>
            <Link className="btn btn--ghost btn--auto" href="/exemple">
              Voir un exemple
            </Link>
            <span className="lp-cta__note">Gratuit · sans compte · trois étapes</span>
          </div>
        </div>

        {/* Maquette figée, purement décorative : la vraie page est rendue par GiftView. */}
        <div className="lp-phone" aria-hidden="true">
          <div className="lp-phone__screen">
            <p className="eyebrow">Joyeux anniversaire</p>
            <p className="lp-phone__title">À toi de choisir</p>
            <div className="lp-phone__cards">
              <div className="lp-phone__card">
                <span className="lp-phone__thumb lp-phone__thumb--a" />
                <span className="lp-phone__label">Un appareil photo</span>
              </div>
              <div className="lp-phone__card is-picked">
                <span className="lp-phone__thumb lp-phone__thumb--b" />
                <span className="lp-phone__label">Un dîner au restaurant</span>
                <span className="lp-phone__check">✓</span>
              </div>
              <div className="lp-phone__card">
                <span className="lp-phone__thumb lp-phone__thumb--c" />
                <span className="lp-phone__label">Un week-end aux thermes</span>
              </div>
            </div>
            <span className="lp-phone__button">Confirmer mon choix</span>
          </div>
        </div>
      </section>

      {/* --- Le mécanisme. Une phrase par étape, pas plus. --- */}
      <section className="lp-steps">
        <ol>
          <li>
            <span className="lp-step__num">1</span>
            <h2>Tu réunis tes idées</h2>
            <p>
              Colle le lien d&apos;un produit : le titre et la photo se remplissent le plus souvent
              d&apos;eux-mêmes. Sinon, une photo prise avec ton téléphone suffit.
            </p>
          </li>
          <li>
            <span className="lp-step__num">2</span>
            <h2>Tu envoies la carte</h2>
            <p>
              Dans une messagerie, le lien s&apos;affiche comme une carte, avec ton message et son
              prénom. Tu peux aussi imprimer le QR code, le glisser dans une enveloppe, et être là
              quand la carte s&apos;ouvre.
            </p>
          </li>
          <li>
            <span className="lp-step__num">3</span>
            <h2>Tu découvres son choix</h2>
            <p>
              Un lien privé, que tu gardes pour toi, t&apos;indique le cadeau choisi et le jour du
              choix. Il ne reste plus qu&apos;à l&apos;acheter.
            </p>
          </li>
        </ol>
      </section>

      {/*
        Ce que le donneur y gagne, pas ce que l'outil sait faire. Une liste de
        reglages — palettes, polices, occasions — decrivait le produit sans
        jamais dire pourquoi on s'en servirait.

        Titres en <p> et non en titres de niveau : la section n'a pas de titre
        propre, et un h3 ici se rattacherait a la derniere etape ci-dessus.
      */}
      <section className="lp-craft">
        <ul className="lp-craft__grid">
          <li>
            <p className="lp-craft__title">Pas besoin de demander</p>
            <p>
              « Qu&apos;est-ce qui te ferait plaisir ? » gâche la surprise et renvoie la question à
              l&apos;autre. Ici, tu as déjà cherché ; il ne reste qu&apos;à choisir.
            </p>
          </li>
          <li>
            <p className="lp-craft__title">Plus personnel qu&apos;une liste de souhaits</p>
            <p>
              Dans une liste de souhaits, on coche une ligne écrite par l&apos;autre. Ici, chaque
              idée vient de toi, et cela se sent.
            </p>
          </li>
          <li>
            <p className="lp-craft__title">Aucun prix affiché</p>
            <p>
              La personne choisit ce qui lui plaît vraiment, sans comparer les prix ni se demander
              combien tu as dépensé.
            </p>
          </li>
          <li>
            <p className="lp-craft__title">La surprise reste entière</p>
            <p>
              Rien n&apos;est visible avant l&apos;ouverture. Et la carte peut rester scellée
              jusqu&apos;au jour de la fête.
            </p>
          </li>
          <li>
            <p className="lp-craft__title">Un seul geste en retour</p>
            <p>
              Un décor et des mots adaptés à l&apos;occasion. De son côté, il n&apos;y a qu&apos;une
              chose à faire : choisir.
            </p>
          </li>
          <li>
            <p className="lp-craft__title">Un mot en retour</p>
            <p>
              Avec son choix, la personne peut te laisser un mot. Tu le retrouves sur ton lien privé,
              à côté du cadeau choisi.
            </p>
          </li>
        </ul>
      </section>

      {/* --- Objections, une ligne chacune. --- */}
      <section className="lp-notes">
        <div>
          <p className="lp-notes__title">Rien à payer ici</p>
          <p>Aucun paiement ne passe par MyPresentsForYou. Tu achètes le cadeau où tu veux, comme d&apos;habitude.</p>
        </div>
        <div>
          <p className="lp-notes__title">Aucun compte</p>
          <p>Pas de compte à créer. La personne qui reçoit ne saisit que son choix : ni nom, ni adresse, ni e-mail.</p>
        </div>
        <div>
          <p className="lp-notes__title">Modifiable jusqu&apos;au choix</p>
          <p>Tant que rien n&apos;est choisi, tu peux tout modifier. Les liens déjà envoyés restent valables.</p>
        </div>
      </section>

      <section className="lp-final">
        <h2>Et si tu composais la tienne ?</h2>
        <p>Deux idées suffisent pour commencer, dix au plus. Tu pourras tout modifier ensuite.</p>
        <Link className="btn btn--auto" href="/creer">
          Composer ma page-cadeau
        </Link>
      </section>

      <SiteFooter note="Chaque carte reste en ligne un an. Conserve ton lien privé : il te montrera le cadeau choisi." />
    </main>
  );
}
