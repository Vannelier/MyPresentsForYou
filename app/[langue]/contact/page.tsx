import type { Metadata } from "next";
import Link from "next/link";
import TextPage from "@/components/TextPage";
import { dictionnaire } from "@/lib/i18n";
import { alternatesDe } from "@/lib/i18n/alternates";
import { cheminVers } from "@/lib/i18n/chemins";
import { langueOuDefaut } from "@/lib/i18n/langues";
import { SITE, aRemplir } from "@/lib/site";

type Params = { params: Promise<{ langue: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).contact;
  return {
    title: d.titreMeta,
    description: d.descriptionMeta,
    alternates: alternatesDe(langue, "contact"),
  };
}

export default async function Contact({ params }: Params) {
  const langue = langueOuDefaut((await params).langue);
  const d = dictionnaire(langue).contact;
  const sansAdresse = aRemplir(SITE.email);

  return (
    <TextPage langue={langue} page="contact" titre={d.titre} chapo={d.chapo}>
      <h2>{d.ecrire}</h2>
      {sansAdresse ? (
        // Une note pour l'editeur du site, pas pour un visiteur : elle ne s'affiche
        // que tant que lib/site.ts n'a pas d'adresse. Elle reste en francais.
        <div className="prose__note" lang="fr">
          <p>
            <span className="prose__manquant">Adresse de contact à renseigner</span> dans{" "}
            <code>lib/site.ts</code>. Tant qu&apos;elle est vide, cette page ne peut pas en inventer
            une.
          </p>
        </div>
      ) : (
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      )}

      <p>{d.sansFormulaire}</p>

      <h2>{d.aide}</h2>

      <h3>{d.lienPerduTitre}</h3>
      <p>
        {d.lienPerduDebut}
        <strong>{d.lienPerduFort}</strong>
        {d.lienPerduFin}
      </p>

      <h3>{d.suppressionTitre}</h3>
      <p>{d.suppressionTexte}</p>

      <h3>{d.signalementTitre}</h3>
      <p>{d.signalementTexte}</p>

      <h3>{d.bugTitre}</h3>
      <p>{d.bugTexte}</p>

      <h2>{d.avantTitre}</h2>
      <p>
        {d.avantDebut}
        <Link href={cheminVers(langue, "questions")}>{d.avantLien}</Link>
        {d.avantFin}
      </p>
    </TextPage>
  );
}
