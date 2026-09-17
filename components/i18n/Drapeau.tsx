import type { Langue } from "@/lib/i18n/langues";

/*
 * Le drapeau d'une langue, dessine dans le code.
 *
 * Pas d'emoji : Windows n'affiche pas les emojis drapeaux, et « 🇫🇷 » y devient
 * « FR » en deux lettres. Pas d'image a telecharger ni de service tiers non plus.
 *
 * Un drapeau designe un pays, pas une langue : France pour le francais,
 * Royaume-Uni pour l'anglais, Pays-Bas pour le neerlandais — les plus reconnus.
 * Les reglages de dates et de nombres restent ceux de LOCALES. L'Espagne est
 * dessinee sans ses armoiries, illisibles a cette taille. Un `Record` complet :
 * une langue ajoutee sans son drapeau ne compile pas.
 */
const DRAPEAUX: Record<Langue, React.ReactNode> = {
  fr: (
    <>
      <rect width="10" height="20" fill="#0055a4" />
      <rect x="10" width="10" height="20" fill="#ffffff" />
      <rect x="20" width="10" height="20" fill="#ef4135" />
    </>
  ),
  it: (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#ffffff" />
      <rect x="20" width="10" height="20" fill="#ce2b37" />
    </>
  ),
  nl: (
    <>
      <rect width="30" height="6.67" fill="#ae1c28" />
      <rect y="6.67" width="30" height="6.67" fill="#ffffff" />
      <rect y="13.33" width="30" height="6.67" fill="#21468b" />
    </>
  ),
  de: (
    <>
      <rect width="30" height="6.67" fill="#000000" />
      <rect y="6.67" width="30" height="6.67" fill="#dd0000" />
      <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
    </>
  ),
  es: (
    <>
      <rect width="30" height="20" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
    </>
  ),
  // Union Jack sur une grille de 60 x 30, recadre dans le 3:2 des autres.
  en: (
    <g transform="scale(0.5) translate(0 5)">
      <rect y="-5" width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
      <path d="M0,0 L30,15 M60,0 L30,15" stroke="#c8102e" strokeWidth="2" />
      <path d="M30,15 L60,30 M30,15 L0,30" stroke="#c8102e" strokeWidth="2" />
      <path d="M30,-5 V35 M0,15 H60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30,-5 V35 M0,15 H60" stroke="#c8102e" strokeWidth="6" />
    </g>
  ),
};

export default function Drapeau({ langue }: { langue: Langue }) {
  return (
    <svg className="drapeau" viewBox="0 0 30 20" aria-hidden="true" focusable="false">
      {DRAPEAUX[langue]}
    </svg>
  );
}
