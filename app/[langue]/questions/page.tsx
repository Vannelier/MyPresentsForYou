import type { Metadata } from "next";
import Link from "next/link";
import TextPage from "@/components/TextPage";
import { dictionnaire, remplir } from "@/lib/i18n";
import { alternatesDe } from "@/lib/i18n/alternates";
import { cheminVers } from "@/lib/i18n/chemins";
import { langueOuDefaut } from "@/lib/i18n/langues";
import { LIMITS } from "@/lib/limits";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).questions;
  return {
    title: d.titreMeta,
    description: d.descriptionMeta,
    alternates: alternatesDe(langue, "questions"),
  };
}

/**
 * Les questions et leurs réponses, en données plutôt qu'en JSX : elles vivent
 * dans le dictionnaire, sous `questions.liste`.
 *
 * Le texte affiché et le balisage `FAQPage` sont produits par la même source :
 * Google exige que les deux coïncident, et deux listes tenues en parallèle
 * auraient divergé à la première correction de formulation.
 */
export default async function Questions({ params }: Params) {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).questions;
  const liste = d.liste.map(({ q, r }) => ({
    q,
    r: r.map((paragraphe) => remplir(paragraphe, { max: LIMITS.itemsMax })),
  }));

  /*
   * Balisage `FAQPage`. À dire franchement : depuis 2023, Google réserve les
   * résultats enrichis « questions » aux sites gouvernementaux et de santé — ce
   * balisage n'affichera donc pas d'accordéon dans les résultats. Il reste utile
   * pour la compréhension de la page par les moteurs, et ne coûte rien. Ce qui
   * fera venir du monde ici, ce sont les réponses elles-mêmes, pas ce script.
   */
  const donneesStructurees = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: langue,
    mainEntity: liste.map(({ q, r }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: r.join(" ") },
    })),
  };

  return (
    <TextPage langue={langue} page="questions" titre={d.titre} chapo={d.chapo}>
      <script
        type="application/ld+json"
        // Contenu que nous produisons nous-mêmes à partir du dictionnaire,
        // jamais une saisie : rien d'extérieur n'entre dans cette chaîne.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
      />

      <div className="faq">
        {liste.map(({ q, r }, i) => (
          <details className="faq__item" key={q} open={i === 0}>
            <summary>
              <h2 style={{ display: "inline", font: "inherit", margin: 0 }}>{q}</h2>
            </summary>
            <div>
              {r.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}
            </div>
          </details>
        ))}
      </div>

      <h2>{d.autreQuestion}</h2>
      <p>
        {d.autreDebut}
        <Link href={cheminVers(langue, "contact")}>{d.autreContact}</Link>
        {d.autreMilieu}
        <Link href={cheminVers(langue, "confidentialite")}>{d.autreConfidentialite}</Link>
        {d.autreFin}
      </p>
    </TextPage>
  );
}
