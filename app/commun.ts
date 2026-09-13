import type { Metadata, Viewport } from "next";
import {
  Caveat,
  Cormorant_Garamond,
  Dancing_Script,
  Fraunces,
  Inter,
  Playfair_Display,
  Quicksand,
} from "next/font/google";
import { baseUrl } from "@/lib/env";
import "./globals.css";
import "./editor.css";
import "./landing.css";
import "./legal.css";
import "./print.css";

/*
 * Ce que partagent les trois layouts racines — le site sous `[langue]`, les
 * cartes, l'administration. Il n'y a plus de layout racine unique : `<html
 * lang>` doit porter la langue de la page, qu'un layout place au-dessus de
 * `[langue]` ne connaitrait pas, et qu'une carte ne revele qu'une fois lue en
 * base.
 */

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

/*
 * Polices proposees pour le titre des pages-cadeau.
 *
 * `preload: false` sur celles-ci : seules deux d'entre elles servent au chrome de
 * l'outil, precharger les cinq autres sur chaque page couterait plus qu'il ne
 * rapporte. Le navigateur ne telecharge une police que si une page l'utilise.
 */
const script = Caveat({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-script",
});

const classic = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-classic",
});

const delicate = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  variable: "--font-delicate",
});

const round = Quicksand({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-round",
});

const calligraphy = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-calligraphy",
});

/** Les variables CSS des sept polices, a poser sur `<html>`. */
export const CLASSES_POLICES = [
  display.variable,
  sans.variable,
  script.variable,
  classic.variable,
  delicate.variable,
  round.variable,
  calligraphy.variable,
].join(" ");

export const VIEWPORT: Viewport = {
  themeColor: "#b0533c",
};

/*
 * Les icones ne sont pas declarees ici : `app/favicon.ico`, `app/icon.svg` et
 * `app/apple-icon.png` sont detectes par Next, qui pose les balises lui-meme.
 * Les redeclarer dans `metadata.icons` remplacerait cette detection au lieu de
 * la completer. Meme chose pour la banniere, prise dans `app/opengraph-image.tsx`.
 *
 * `metadataBase` sert a tout le site : sans elle, l'adresse de la banniere
 * partirait en relatif, et aucune messagerie ne sait quoi en faire.
 *
 * Pas de gabarit de titre (`template`) : le titre d'une page-cadeau est celui
 * que le donneur a ecrit, et lui accoler « — MyPresentsForYou » signerait sa
 * carte a sa place dans l'apercu WhatsApp.
 */
export const METADONNEES_COMMUNES: Metadata = {
  metadataBase: new URL(baseUrl()),
  applicationName: "MyPresentsForYou",
};
