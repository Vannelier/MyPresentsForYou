"use client";

import { useLayoutEffect, useState } from "react";
import CopyLine from "@/components/CopyLine";
import CardPreview from "@/components/CardPreview";
import PageEditor, { type CreateResult, type EditorInitial } from "@/components/editor/PageEditor";
import MesCartesLocales from "@/components/editor/MesCartesLocales";
import { memoriserCarte } from "@/components/editor/cartesLocales";
import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import type { Dictionnaire } from "@/lib/i18n";
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
  const { d } = useDictionnaire();

  if (created) return <Created result={created} />;

  return (
    <div className="shell shell--wide">
      <header className="hero">
        <h1>{d.creation.titre}</h1>
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
  /*
   * Ouverte d'emblee : c'est l'instant precis ou le lien de recuperation
   * existe pour la derniere fois avant de defiler sous la carte et les
   * boutons. Un encart colore dans la page, meme en tete, restait sautable
   * d'un pouce trop rapide ; la modale force le passage par lui avant de
   * voir le reste de l'ecran.
   */
  const [modalOuverte, setModalOuverte] = useState(true);
  /*
   * La page venait de creer, souvent depuis le bas d'un long formulaire — le
   * bouton « Creer la page » y vit. Sans remise a zero, le navigateur garde ce
   * defilement : la modale, fixe, restait visible, mais une fois fermee le
   * lien de recuperation restait hors ecran, au-dessus. `useLayoutEffect` et
   * non `useEffect` : la remise a zero doit precéder la premiere peinture de
   * cet ecran, pas la suivre d'une frame visible.
   */
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="shell shell--flush">
      {modalOuverte && (
        <RecuperationModal adminUrl={result.adminUrl} t={t} onFermer={() => setModalOuverte(false)} />
      )}

      <div className="state fade-in" style={{ textAlign: "left" }}>
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
          Le lien de recuperation passe devant, et pulse — la modale vient de
          fermer ou n'a jamais empeche de faire defiler la page en dessous
          d'elle, et c'est ici qu'on revient le chercher en cas de doute.
        */}
        <div className="link-box link-box--admin link-box--pulse">
          <span className="link-box__label">{t.lienRecuperation}</span>
          <span className="link-box__help">
            <strong>{t.lienRecuperationFort}</strong>
          </span>
          <CopyLine value={result.adminUrl} />
          <span className="link-box__help">{t.cartesMemorisee}</span>
        </div>

        {/*
          Un cadre, d'une autre couleur que celui du lien de recuperation :
          les deux doivent rester deux cadres, mais pas se confondre. Celui-ci
          reprend l'accent terracotta du site, l'autre le dore reserve a ce
          qui ne se retrouve pas ailleurs.
        */}
        <div className="link-box link-box--envoi">
          <span className="link-box__label">{t.lienEnvoi}</span>
          <CopyLine value={result.publicUrl} />
        </div>

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
          Repliee par defaut : l'impression est une envie, pas une etape de la
          creation. Deplier montrait d'emblee une feuille A4 en reduction avant
          meme les deux liens qu'on vient chercher sur cet ecran.
        */}
        <details className="impression-plateau">
          <summary className="impression-plateau__titre">{t.impressionOuvrir}</summary>
          <CardPreview
            url={result.publicUrl}
            to={result.carte.to}
            intro={result.carte.intro}
            title={result.carte.title}
            signature={result.carte.signature}
            theme={result.carte.theme}
            printHref={`${result.adminUrl}/imprimer`}
          />
        </details>

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

/**
 * Le premier geste sur cet ecran, avant tout le reste : sauvegarder le lien
 * de recuperation. Pas de fermeture au clic hors de la boite ni a `Echap` —
 * volontairement, ce n'est pas une fenetre qu'on ferme par reflexe, c'est le
 * seul instant ou ce lien est garanti d'etre encore sous les yeux.
 */
function RecuperationModal({
  adminUrl,
  t,
  onFermer,
}: {
  adminUrl: string;
  t: Dictionnaire["creation"];
  onFermer: () => void;
}) {
  return (
    <div className="modal-lien" role="dialog" aria-modal="true" aria-label={t.lienRecuperation}>
      <div className="modal-lien__panneau">
        <p className="modal-lien__titre">{t.lienRecuperation}</p>
        <p className="modal-lien__texte">{t.modalTexte}</p>
        <CopyLine value={adminUrl} />
        <p className="modal-lien__texte">{t.cartesMemorisee}</p>
        <button type="button" className="btn modal-lien__bouton" onClick={onFermer}>
          {t.modalBouton}
        </button>
      </div>
    </div>
  );
}
