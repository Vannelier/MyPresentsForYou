"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CopyLine from "@/components/CopyLine";
import CardPreview from "@/components/CardPreview";
import { GiftCard } from "@/components/GiftView";
import PageEditor, { type EditorInitial } from "@/components/editor/PageEditor";
import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import { cheminVers } from "@/lib/i18n/chemins";
import { LOCALES } from "@/lib/i18n/langues";
import { remplir } from "@/lib/i18n/remplir";
import { occasionById } from "@/lib/occasions";
import type { Item, Theme } from "@/lib/types";

export type AdminSnapshot = {
  slug: string;
  publicUrl: string;
  name: string;
  intro_message: string;
  signature: string;
  link_title: string;
  recipient_name: string;
  header_image_url: string | null;
  reveal_at: string | null;
  reply_message: string;
  sealed: boolean;
  welcome_message: string;
  open_label: string;
  wait_message: string;
  items_title: string;
  items_message: string;
  thank_you_message: string;
  cover_image_url: string | null;
  theme: Theme;
  items: Item[];
  created_at: string;
  updated_at: string;
  expires_at: string | null;
  chosen_item_id: string | null;
  chosen_at: string | null;
  view_count: number;
  expired: boolean;
  locked: boolean;
};

export default function AdminView({ page, token }: { page: AdminSnapshot; token: string }) {
  const router = useRouter();
  const { langue, d } = useDictionnaire();
  const t = d.admin;
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chosen = page.items.find((i) => i.id === page.chosen_item_id) ?? null;
  const editable = !page.locked && !page.expired;

  const initial: EditorInitial = {
    slug: page.slug,
    name: page.name,
    intro_message: page.intro_message,
    signature: page.signature,
    link_title: page.link_title,
    recipient_name: page.recipient_name,
    header_image_url: page.header_image_url,
    reveal_at: page.reveal_at,
    welcome_message: page.welcome_message,
    open_label: page.open_label,
    wait_message: page.wait_message,
    items_title: page.items_title,
    items_message: page.items_message,
    thank_you_message: page.thank_you_message,
    cover_image_url: page.cover_image_url,
    theme: page.theme,
    items: page.items,
  };

  async function remove() {
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/${encodeURIComponent(token)}`, { method: "DELETE" });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? t.suppressionEchouee);
        setDeleting(false);
        return;
      }
      router.replace(cheminVers(langue, "accueil"));
    } catch {
      setError(t.connexionPerdue);
      setDeleting(false);
    }
  }

  return (
    <div className="shell shell--wide">
      <header className="hero">
        <p className="eyebrow">{page.name || t.surtitre}</p>
        <h1>{page.locked ? t.choixFait : t.enAttente}</h1>
      </header>

      {/* Le cadeau choisi passe avant les liens : c'est ce qu'on vient chercher
          ici une fois le choix fait, et les liens n'ont plus grand-chose à dire. */}
      {chosen && (
        <section className="panel">
          <h2>{t.cadeauChoisi}</h2>
          <p className="help">{t.cadeauChoisiAide}</p>
          <div style={{ maxWidth: "20rem" }}>
            <GiftCard item={chosen} selected disabled />
          </div>
          {page.reply_message.trim() && (
            <blockquote className="reply-quote">
              <p>{remplir(t.motDuReceveur, { mot: page.reply_message })}</p>
            </blockquote>
          )}

          {chosen.source_url && (
            <p style={{ marginTop: "0.9rem", fontSize: "0.88rem" }}>
              <a href={chosen.source_url} target="_blank" rel="noreferrer">
                {t.pageOrigine}
              </a>
            </p>
          )}
        </section>
      )}

      <section className="panel">
        <h2>{t.partager}</h2>

        {/* Seule date conservée : une carte scellée ne s'ouvre pas encore, et rien
            d'autre sur cette page ne le dirait. */}
        {page.reveal_at && (
          <p className="help">
            {remplir(page.sealed ? t.sOuvreLe : t.ouverteDepuis, {
              date: formatDateTime(page.reveal_at, LOCALES[langue].intl),
            })}
          </p>
        )}

        <div className="link-box">
          <span className="link-box__label">{t.lienEnvoi}</span>
          <CopyLine value={page.publicUrl} />
        </div>

        {/*
          L'apercu de la carte, et non le QR seul.

          Le damier noir et blanc pleine largeur ne disait rien de ce qu'on va
          tenir dans la main : ni le prenom, ni le theme, ni meme qu'il existe
          une carte derriere. Le bouton « Carte a imprimer » vivait dessous, dans
          une rangee separee ou personne ne faisait le lien entre les deux.
        */}
        <CardPreview
          url={page.publicUrl}
          to={page.recipient_name}
          intro={page.intro_message.trim() || d.occasions[occasionById(page.theme.occasion).id].intro}
          title={page.welcome_message}
          signature={page.signature}
          theme={page.theme}
          printHref={`/admin/${token}/imprimer`}
        />
      </section>

      {editable && (
        <>
          {/*
            Ancre nommee : l'ecran « Ta page est prete » y renvoie directement.
            Sans elle, « Modifier la page » deposait le donneur en haut de
            l'administration, plusieurs ecrans au-dessus de l'editeur.
          */}
          <section className="panel" id="modifier" style={{ paddingBottom: "0.6rem" }}>
            <h2>{t.modifier}</h2>
            <p className="help">{t.modifierAide}</p>
          </section>
          <PageEditor mode="edit" initial={initial} adminToken={token} slug={page.slug} />
        </>
      )}

      {/* Une fois le choix fait, supprimer n'est plus une perte mais une fin de
          course : on range la carte plutôt qu'on ne l'efface. */}
      <section className="panel">
        <h2>{page.locked ? t.bienRecu : t.ranger}</h2>
        <p className="help">{page.locked ? t.clotureAide : t.suppressionAide}</p>
        {error && (
          <p className="notice notice--error" role="alert" style={{ marginBottom: "0.8rem" }}>
            {error}
          </p>
        )}
        {confirming ? (
          <div className="btn-row">
            <button type="button" className="btn btn--danger btn--sm" disabled={deleting} onClick={remove}>
              {deleting
                ? page.locked
                  ? t.enCloture
                  : t.enSuppression
                : page.locked
                  ? t.confirmerCloture
                  : t.confirmerSuppression}
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              disabled={deleting}
              onClick={() => setConfirming(false)}
            >
              {t.annuler}
            </button>
          </div>
        ) : (
          <button type="button" className="btn btn--danger btn--sm" onClick={() => setConfirming(true)}>
            {page.locked ? t.cloturer : t.supprimer}
          </button>
        )}
      </section>
    </div>
  );
}

function formatDateTime(value: string | null, locale: string): string {
  if (!value) return "—";
  return new Date(value).toLocaleString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
