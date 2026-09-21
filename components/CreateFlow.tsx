"use client";

import { useState } from "react";
import Link from "next/link";
import CopyLine from "@/components/CopyLine";
import CardPreview from "@/components/CardPreview";
import PageEditor, { type CreateResult, type EditorInitial } from "@/components/editor/PageEditor";
import MesCartesLocales from "@/components/editor/MesCartesLocales";
import { memoriserCarte } from "@/components/editor/cartesLocales";
import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import { cheminVers } from "@/lib/i18n/chemins";
import type { Pistes } from "@/lib/pistes";
import { DEFAULT_THEME } from "@/lib/types";

const EMPTY: EditorInitial = {
  name: "",
  intro_message: "",
  signature: "",
  link_title: "",
  recipient_name: "",
  header_image_url: null,
  reveal_at: null,
  welcome_message: "",
  open_label: "",
  wait_message: "",
  items_title: "",
  items_message: "",
  thank_you_message: "",
  cover_image_url: null,
  theme: { ...DEFAULT_THEME },
  items: [],
};

export default function CreateFlow({ baseUrlLabel, pistes }: { baseUrlLabel: string; pistes: Pistes }) {
  const [created, setCreated] = useState<CreateResult | null>(null);
  const { langue, d } = useDictionnaire();

  if (created) return <Created result={created} />;

  return (
    <div className="shell shell--wide">
      <header className="hero">
        <h1>{d.creation.titre}</h1>
        <p>{d.creation.chapo}</p>
      </header>

      {/* Absente tant qu'aucune carte n'a ete creee sur cet appareil. */}
      <MesCartesLocales />

      <PageEditor
        mode="create"
        initial={EMPTY}
        baseUrlLabel={baseUrlLabel}
        onCreated={(r) => {
          // Le lien admin n'existe que sur l'ecran suivant : on le garde en local
          // des sa creation, pour le retrouver depuis le meme navigateur.
          memoriserCarte({ adminUrl: r.adminUrl, publicUrl: r.publicUrl, nom: r.carte.to });
          setCreated(r);
        }}
        pistes={pistes}
      />
    </div>
  );
}

function Created({ result }: { result: CreateResult }) {
  const { d } = useDictionnaire();
  const t = d.creation;
  return (
    <div className="shell shell--flush">
      <div className="state fade-in" style={{ textAlign: "left" }}>
        <div className="state__seal" aria-hidden="true">
          ✓
        </div>
        <h1 style={{ textAlign: "center" }}>{t.pret}</h1>

        {/*
          Creer n'est pas valider.
          Le bouton « Creer la page » est le plus gros de la barre d'action, et
          il se touche par erreur en visant « Apercu » juste a cote. Cet ecran
          n'offrait alors aucun retour : le formulaire avait disparu, et rien ne
          disait que tout restait modifiable. Il le dit maintenant, et le bouton
          du bas ramene directement a l'editeur.
        */}
        <p className="state__note">{t.rienNestFige}</p>

        {/*
          Le lien de recuperation passe devant, et pulse.

          C'est le seul des deux qu'on ne peut pas retrouver : le lien public
          part dans une conversation, celui-ci n'existe que sur cet ecran. Il
          etait en troisieme position, sous un QR code qui prend toute la
          largeur — c'est-a-dire souvent hors de l'ecran au telephone, la ou on
          ferme l'onglet en croyant avoir fini.
        */}
        <div className="link-box link-box--admin link-box--pulse">
          <span className="link-box__label">{t.lienRecuperation}</span>
          <span className="link-box__help">
            <strong>{t.lienRecuperationFort}</strong>
            {t.lienRecuperationSuite}
          </span>
          <CopyLine value={result.adminUrl} />
          <span className="link-box__help">{t.cartesMemorisee}</span>
        </div>

        <div className="link-box link-box--plain">
          <span className="link-box__label">{t.lienEnvoi}</span>
          <span className="link-box__help">{t.lienEnvoiAide}</span>
          <CopyLine value={result.publicUrl} />
        </div>

        {/*
          Un apercu de la carte, et le chemin vers l'atelier.

          L'atelier complet vivait ici, deplie : carrousel, champs de texte,
          feuille pleine largeur. C'etait la bonne intention — montrer des cet
          ecran qu'une carte existe — mais au mauvais format : sur un ecran de
          fin ou l'on vient chercher deux liens, il occupait plus de place que
          les liens eux-memes et repoussait les deux boutons hors de vue.
        */}
        <CardPreview
          url={result.publicUrl}
          to={result.carte.to}
          intro={result.carte.intro}
          title={result.carte.title}
          signature={result.carte.signature}
          theme={result.carte.theme}
          printHref={`${result.adminUrl}/imprimer`}
        />

        {result.warnings?.length > 0 && (
          <div style={{ marginTop: "1rem" }}>
            {result.warnings.map((w) => (
              <p className="notice notice--warn" key={w.message}>
                {w.message}
              </p>
            ))}
          </div>
        )}

        {/*
          « Reprendre la modification » plutot que « Ouvrir l'administration ».
          Les deux menent au meme endroit — l'editeur vit dans l'administration —
          mais a cet instant precis personne n'a encore rien choisi : il n'y a
          rien a administrer, et tout a reprendre. L'ancre depose sur l'editeur
          plutot qu'en haut de page.
        */}
        <div className="btn-row" style={{ marginTop: "1.75rem" }}>
          <a className="btn btn--sm" href={`${result.adminUrl}#modifier`}>
            {t.reprendre}
          </a>
          <a className="btn btn--ghost btn--sm" href={result.publicUrl} target="_blank" rel="noreferrer">
            {t.voirPublique}
          </a>
        </div>
      </div>
    </div>
  );
}
