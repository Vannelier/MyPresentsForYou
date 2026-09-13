# Le multilingue — six langues, sans bibliothèque ni cookie

**Date** : 2026-09-13
**État** : validé, prêt pour le plan d'implémentation du socle

## Le problème

Le site est entièrement en français, et le français y est partout **en dur** : l'éditeur (1 825
lignes), la page-cadeau, la page d'administration, la carte à imprimer, les seize occasions et leurs
formules, les messages d'erreur de l'API, les pages légales. `<html lang="fr">` est fixé dans le
layout racine, et les dates sont formatées en `fr-BE` à quatre endroits.

Or le projet se veut international. La feuille de route place le multilingue avant le référencement
et la publicité : les langues fixent aussi les marchés de l'affiliation.

## Les décisions

Prises avec l'utilisateur le 13 septembre 2026 :

1. **Six langues** : français, anglais, italien, espagnol, allemand, néerlandais.
2. **Une carte s'affiche dans la langue choisie à sa création.** L'offreur la compose dans une
   langue, enregistrée avec la carte. La page-cadeau, la page d'administration et la carte à
   imprimer la suivent. Le receveur ne voit jamais un mélange — le message écrit par l'offreur dans
   sa langue, et des boutons dans une autre.
3. **Les pages du site ont un préfixe de langue et des chemins traduits** : `/fr/creer`,
   `/en/create`, `/de/erstellen`. « / » oriente vers la langue du navigateur, sans cookie.
4. **Les traductions sont rédigées par Claude**, dans le ton sobre retenu pour le français, et
   publiées sans relecture native. Les formules sont réécrites dans chaque langue, pas traduites mot
   à mot.
5. **Des dictionnaires maison, typés** — pas de `next-intl`. Aucune dépendance, aucun cookie
   possible par construction, et `tsc` refuse une langue à laquelle il manque une clé.

## Les adresses

### Les pages du site

Un seul dossier par page dans le code (`app/[langue]/creer/`), et une table qui fait correspondre
chaque chemin traduit à son dossier. Le middleware réécrit l'un vers l'autre ; l'adresse visible est
toujours la traduite.

| page | fr | en | it | es | de | nl |
|---|---|---|---|---|---|---|
| accueil | `/fr` | `/en` | `/it` | `/es` | `/de` | `/nl` |
| créer | `creer` | `create` | `crea` | `crear` | `erstellen` | `maken` |
| exemple | `exemple` | `example` | `esempio` | `ejemplo` | `beispiel` | `voorbeeld` |
| questions | `questions` | `faq` | `domande` | `preguntas` | `fragen` | `vragen` |
| contact | `contact` | `contact` | `contatti` | `contacto` | `kontakt` | `contact` |
| conditions | `conditions` | `terms` | `termini` | `condiciones` | `nutzungsbedingungen` | `voorwaarden` |
| confidentialité | `confidentialite` | `privacy` | `privacy` | `privacidad` | `datenschutz` | `privacy` |
| mentions légales | `mentions-legales` | `legal-notice` | `note-legali` | `aviso-legal` | `impressum` | `colofon` |

### Les cartes et l'administration

**Les cartes gardent leur adresse courte** (`/prenom-anniversaire`) : elle est envoyée, imprimée en
QR code, et ne doit jamais changer.

Next refuse deux segments dynamiques au même niveau : `app/[langue]` et `app/[slug]` ne peuvent pas
coexister. Les cartes vivent donc dans un dossier interne, **`app/carte/[slug]`**, et le middleware y
réécrit `/prenom-anniversaire` sans que l'adresse visible change. `carte` rejoint `RESERVED_SLUGS`.
Aucune collision n'est possible entre une langue et un slug : un code de langue fait deux lettres, un
slug trois au moins (`SLUG_MIN`).

`/admin/[token]` ne change pas d'adresse.

### Le middleware, dans l'ordre

1. **Laissés passer** : `/_next`, `/api`, `/admin`, `/carte`, et tout fichier ou route de métadonnées
   (`robots.txt`, `sitemap.xml`, `llms.txt`, `ads.txt`, `manifest.webmanifest`, icônes, bannière).
2. **`/`** → redirection temporaire vers `/<langue>`, choisie dans l'en-tête `Accept-Language` parmi
   les langues actives ; à défaut, l'anglais. **Aucun cookie** : la langue vit dans l'adresse, et le
   sélecteur de langue mène d'une adresse à l'autre.
3. **Premier segment = une langue active** → le chemin traduit est réécrit vers son dossier. Un chemin
   d'une autre langue (`/en/creer`) est redirigé vers le bon (`/en/create`).
4. **Une ancienne adresse française** (`/creer`, `/questions`…) → redirection permanente vers
   `/fr/…`. Le site n'a aucun trafic encore, mais `llms.txt`, le sitemap et d'éventuels liens partagés
   les citent.
5. **Un segment unique au format d'un slug** → réécrit vers `/carte/<slug>`.
6. **Le reste** → réécrit vers la page introuvable du site, dans la langue du navigateur. Sans
   layout racine unique, une adresse qui ne tomberait sous aucun des trois n'aurait pas de page
   introuvable où s'afficher ; une adresse sous une langue (`/fr/inconnu`) tombe, elle, sur la page
   introuvable de `[langue]`.

### Trois layouts racines

`<html lang>` doit porter la langue de la page. Un layout racine unique ne la connaît pas : il est au
dessus de `[langue]`, et une carte ne révèle la sienne qu'une fois lue en base. Le site, les cartes et
l'administration ont donc chacun leur layout racine :

- `app/[langue]/layout.tsx` — `lang` vient du segment ; les pages restent générées à l'avance
  (`generateStaticParams` sur les langues actives) ;
- `app/carte/layout.tsx` et `app/admin/layout.tsx` — `lang` vient de la carte, lue une seule fois
  grâce au `cache()` de React.

Les polices et les feuilles de style passent dans un module commun, importé par les trois.

## La langue de la carte

- **Un identifiant dans le thème**, `theme.langue`, sur le modèle de `theme.occasion` : pas de
  migration, et une valeur absente ou inconnue retombe sur le français — la langue de toutes les
  cartes créées avant ce chantier.
- **Choisie à la création**, dans la première étape de l'éditeur, à côté de l'occasion. Elle vaut par
  défaut la langue de la page où l'on compose : on crée en anglais depuis `/en/create`. Elle change
  aussi les formules d'occasion proposées.
- **Le texte écrit par l'offreur reste tel quel.** Seuls les textes du produit suivent la langue.
- **Les dates** sont formatées par `Intl` dans la locale de la langue : `fr-BE`, `en-GB`, `it-IT`,
  `es-ES`, `de-DE`, `nl-BE`.

## Les dictionnaires

- **Un fichier par langue** : `lib/i18n/fr.ts` fait foi. Les autres déclarent
  `satisfies Dictionnaire`, où `Dictionnaire` est dérivé du français : une clé manquante ou en trop
  est une erreur de compilation.
- **Ce qui y entre** : tous les textes d'interface — pages du site, éditeur, page-cadeau, page
  d'administration, carte à imprimer — et les textes des occasions, palettes, polices, effets et
  ouvertures. `lib/occasions.ts` et consorts ne gardent que les identifiants, les couleurs et les
  décors ; les mots passent au dictionnaire, indexés par identifiant.
- **Côté navigateur**, les composants reçoivent le dictionnaire par un contexte React, posé par le
  layout. Le navigateur ne reçoit que celui de la langue affichée, jamais les cinq autres.
- **Les textes à variable** s'écrivent `« Pour {prenom} »` et se remplissent par une fonction
  commune. Pas de fonction dans le dictionnaire : un composant côté navigateur ne peut pas en
  recevoir une depuis le serveur.
- **Les messages d'erreur de l'API** sortent dans la langue de la requête, transmise par le client
  dans un en-tête `x-langue` ; à défaut, le français.
- **Les pluriels** passent par `Intl.PluralRules`. Le produit en compte peu.
- **Les pages légales** restent des pages de prose, un composant par langue, et non des centaines
  de clés. Leurs traductions portent la mention que la version française fait foi.

## Le minimum de référencement qui va avec les adresses

Les balises `hreflang` (`alternates.languages`), un sitemap qui liste chaque page dans chaque langue
active, et `llms.txt` par langue. Le reste du référencement — titres, descriptions, contenus — attend
l'étape suivante de la feuille de route.

Un sélecteur de langue, dans le pied de page, mène à la même page dans chaque langue active.

## Garde-fous

Dans `scripts/check.ts`, chacun testé par mutation :

1. **Les chemins traduits sont uniques** dans chaque langue, au format d'un segment d'adresse, et
   toutes les pages ont un chemin dans toutes les langues.
2. **Le middleware** — ses règles, extraites en fonction pure, testées sans serveur :
   - une langue n'est jamais réécrite vers une carte ;
   - un slug n'est jamais pris pour une langue ;
   - une ancienne adresse française part vers `/fr/…` ;
   - `/` choisit la langue d'`Accept-Language`, et l'anglais à défaut.
3. **Aucun cookie** : le middleware ne pose jamais `Set-Cookie`.
4. **Les formules d'occasion**, dans chaque langue : distinctes d'une occasion à l'autre, et dans les
   limites des champs — les vérifications qui existent pour le français, étendues.
5. **`theme.langue`** : un identifiant inconnu retombe sur le français.
6. `carte` est réservé ; le garde-fou « toute page du site occupe un slug réservé » continue de
   tenir.

## Livraison en trois PR

1. **Le socle.** Les adresses, le middleware, les trois layouts, la langue de la carte et son
   sélecteur, le dictionnaire français et l'extraction de tous les textes, les garde-fous. **Seul le
   français est actif** : le site passe sous `/fr`, sans rien changer à ce qu'on lit.
2. **Les cinq langues.** Anglais, italien, espagnol, allemand, néerlandais : dictionnaires, formules
   d'occasion, `llms.txt`. Elles deviennent actives.
3. **Les pages légales traduites.**

## Hors périmètre

- La traduction du texte écrit par l'offreur.
- Plusieurs devises : sans paiement, sans objet.
- L'e-mail de notification : il viendra après, écrit d'emblée dans les six langues.
- Le référencement au-delà des `hreflang`, du sitemap et de `llms.txt`.

## Vérification

- Au navigateur, à 375 et 1440 px : `/` redirige selon `Accept-Language` ; `/fr/creer` compose une
  carte ; une carte s'ouvre à son adresse courte ; les anciennes adresses redirigent ; aucune réponse
  ne porte `Set-Cookie`.
- La page d'exemple et une carte en français s'affichent **à l'identique** d'avant le socle.
- `npm run check`, `npx tsc --noEmit`, `npm run build`.

## Écarts

Ce que l'implémentation du socle a changé à cette spécification, et pourquoi.

- **La langue de la carte n'a pas de sélecteur dans l'éditeur.** Elle vaut la langue de la page où
  l'on compose, sans choix à part. Un sélecteur à côté de l'occasion aurait permis une carte
  anglaise composée sous une interface française : l'aperçu, les formules proposées et les messages
  d'erreur n'auraient pas été dans la langue de la carte. Changer de langue, c'est changer de page.
- **`remplir()` a son propre module** (`lib/i18n/remplir.ts`), et non `lib/i18n/index.ts` : celui-ci
  importe les dictionnaires, et un composant navigateur qui l'importerait les embarquerait tous.
- **Les erreurs voyagent par leur clé** (`lib/i18n/erreurs.ts`). `ValidationError` et `slugError`
  portaient un texte français, que ni les routes ni l'éditeur n'auraient pu traduire après coup ;
  elles portent désormais une clé et ses valeurs. Seule la purge garde un message en dur : la tâche
  planifiée est sa seule lectrice.
- **Le libellé d'un cadeau sans titre**, stocké en base, suit la langue de la carte.
- **Le sitemap déclare l'accueil sous `/fr`**, et non `/` : la racine redirige, et une adresse qui
  redirige n'a rien à faire dans un sitemap. `x-default` pointe vers `/`, sur l'accueil seulement :
  c'est la seule page dont une adresse choisit la langue.
- **Le sélecteur de langue n'est pas rendu** tant qu'une seule langue est active.
- **`Intl.PluralRules` n'est pas employé.** Les nombres affichés sont des limites fixes, toutes
  supérieures à un, ou des abréviations (`j`, `h`, `min`). Seul le texte d'accessibilité du curseur
  de teinte, « Teinte {n} degrés », peut tomber sur 0 ou 1 — comme avant le socle.
- **`llms.txt` reste unique et en français**, ses liens menant à `/fr/…` ; sa version par langue
  vient avec les cinq langues.
- **Des garde-fous au-delà de la liste** : aucun message en dur dans les routes, chaque appel du
  navigateur à l'API annonce sa langue, chaque marque d'un message est remplie, et le sitemap comme
  les `hreflang` ne citent que des adresses que le routeur sert telles quelles.
