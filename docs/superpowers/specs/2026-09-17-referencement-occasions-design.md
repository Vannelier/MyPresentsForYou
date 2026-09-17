# Le référencement : des guides par occasion, et un sélecteur de langue en tête

Étape « référencement » de la feuille de route, après le multilingue et avant la publicité. Conception
validée par l'utilisateur le 17 septembre 2026, qui délègue ensuite les choix restants.

## Le problème

Le socle technique est en place (sitemap et `hreflang` dans six langues, canoniques, données
structurées, `llms.txt`), mais le site n'a que sept pages indexables par langue, et aucune ne répond
à ce que les gens tapent réellement — « idée cadeau anniversaire », « cadeau de naissance
original ». Un site sans liens entrants ne se fait trouver que par des pages qui répondent à une
recherche précise.

## Les décisions

1. **Six pages par occasion**, dans les six langues, plus une page qui les réunit.
2. **Mots-clés tirés de signaux publics** — les suggestions de saisie de Google dans chaque langue
   et chaque pays — faute d'accès à des volumes chiffrés. Chaque choix est sourcé plus bas.
3. **Chaque page est un guide et un outil** : pourquoi laisser choisir pour cette occasion, des
   pistes d'idées par profil, un aperçu de carte aux couleurs de l'occasion, des questions propres,
   et un bouton qui ouvre l'éditeur avec l'occasion déjà choisie.
4. **Données typées, rendues par un gabarit commun**, côté serveur seulement : un guide n'alourdit
   pas le dictionnaire que reçoit le navigateur.
5. **Un sélecteur de langue en tête des pages du site** : drapeau et nom de la langue, menu
   déroulant. Drapeaux France, Royaume-Uni, Italie, Espagne, Allemagne, Pays-Bas.

## Les occasions, et pourquoi celles-là

Suggestions relevées le 17 septembre 2026 (`suggestqueries.google.com`, `hl` et `gl` de chaque
langue) :

- **Anniversaire** — « idée cadeau anniversaire femme / homme / maman / couple » (fr-BE),
  « birthday gift ideas for her / for him / for mum » (en-GB), « idee regalo compleanno donna /
  mamma », « ideas regalo cumpleaños mujer / madre », « Geschenkideen Geburtstag Frau / Mama »,
  « cadeau ideeën verjaardag vrouw / man ». La demande la plus large et la plus constante.
- **Noël** — « cadeau de noël original pour couple / pour maman », « christmas gift ideas for
  adults », « Geschenkideen Weihnachten Erwachsene / Eltern », « kerstcadeau ideeën ».
- **Mariage** — « idée cadeau mariage pour les mariés / original / couple », « wedding gift ideas
  for couple who have everything », « Geschenkideen Hochzeit Geld », « huwelijkscadeau geld
  origineel », « ideas regalo boda dinero ». Le cadeau d'argent y revient partout : laisser le
  couple choisir entre des idées en est l'alternative directe.
- **Naissance** — « cadeau de naissance original et utile / pour la maman / pour les parents »,
  « new baby gifts for parents », « regalo nascita personalizzato », « geboortecadeau ».
- **Crémaillère** — « idée cadeau crémaillère couple / original ». Préférée à la fête des pères,
  dont les suggestions portent presque toutes sur le fait-main d'enfant (« à fabriquer », « basteln »,
  « manualidades »), que l'outil ne sert pas.
- **Fête des mères** — « idée cadeau fête des mères original », « mothers day gift ideas for mum »,
  « moederdag cadeau met betekenis », « idee regalo festa della mamma originali ». Volume
  saisonnier fort ; le guide vise l'adulte qui offre, pas le bricolage.

**Ce qu'on en tire pour la rédaction** : les recherches précisent presque toujours à qui l'on
offre (« pour elle », « maman », « couple », « parents ») et veulent de l'« original ». Les pistes
d'idées s'organisent donc par profil — sans supposer le genre de qui reçoit : par goûts et par
situation (« qui a déjà tout », « qui aime recevoir », « un couple »).

## Les adresses

| page | fr | en | it | es | de | nl |
|---|---|---|---|---|---|---|
| idées cadeaux | idees-cadeaux | gift-ideas | idee-regalo | ideas-regalo | geschenkideen | cadeau-ideeen |
| anniversaire | anniversaire | birthday | compleanno | cumpleanos | geburtstag | verjaardag |
| Noël | noel | christmas | natale | navidad | weihnachten | kerst |
| mariage | mariage | wedding | matrimonio | boda | hochzeit | huwelijk |
| naissance | naissance | new-baby | nascita | nacimiento | geburt | geboorte |
| crémaillère | cremaillere | housewarming | casa-nuova | casa-nueva | einzug | housewarming |
| fête des mères | fete-des-meres | mothers-day | festa-della-mamma | dia-de-la-madre | muttertag | moederdag |

`/fr/idees-cadeaux/anniversaire`, `/en/gift-ideas/birthday`. Le code garde un dossier
(`app/[langue]/idees-cadeaux/[occasion]`) ; le middleware réécrit l'adresse traduite vers lui,
redirige en 308 le mot d'une autre langue, et mène une occasion inconnue à la page introuvable.
`/idees-cadeaux`, ancienne adresse sans langue possible, part vers `/fr/idees-cadeaux` et devient un
slug réservé.

## Le contenu d'un guide

1. Titre et introduction formulés d'après les recherches de la langue.
2. Aperçu de carte (palette, décor et formules de l'occasion, trois idées du guide) — maquette rendue
   côté serveur — et un premier bouton vers l'éditeur.
3. Pourquoi laisser choisir pour cette occasion.
4. Pistes d'idées : quatre profils de quatre idées, une ligne par idée ; idées génériques, ni marque
   ni lien marchand (le modèle économique réserve les liens affiliés au chemin d'achat).
5. Comment faire, en trois étapes, et le bouton une seconde fois.
6. Trois questions propres à l'occasion, affichées et balisées `FAQPage` depuis la même source.
7. Liens vers les autres occasions, l'exemple et les questions fréquentes ; date de mise à jour ;
   fil d'Ariane balisé `BreadcrumbList`.

Longueur visée : 600 à 900 mots. Le français est écrit d'abord et fait foi ; les autres langues en
sont traduites et adaptées, sans relecture native. Aucune date de fête n'est donnée : elles varient
d'un pays à l'autre.

## L'éditeur

Le bouton ouvre `/<langue>/<creer>?occasion=<id>`. L'éditeur lit le paramètre après le montage — la
page de création reste statique — et ne l'applique qu'en l'absence de brouillon, par le même
chemin qu'un clic sur l'occasion (palette, décor, effet).

## Le sélecteur de langue

Composant client en tête de l'accueil, de la création, des pages de texte et des guides ; dans le
bandeau de la page d'exemple ; jamais sur une carte ni sur l'administration. Il déduit de l'adresse
courante la même page dans chaque langue (fonction pure, testée), rend de vrais liens (`hreflang`,
`lang`), se ferme au clic extérieur et à Échap. Drapeaux dessinés en SVG dans le code — les émojis
drapeaux ne s'affichent pas sous Windows ; l'Espagne sans armoiries. Il remplace le sélecteur texte du
pied de page, qui gagne un lien vers les idées cadeaux.

## Référencement

Sitemap : 14 pages par langue (84 entrées), `hreflang` compris. `llms.txt` cite la page des idées et
les guides de chaque langue. L'accueil gagne une section « idées par occasion ».

## Garde-fous

- Routage : adresses de guides, mots d'autres langues, occasion inconnue.
- Équivalents d'une adresse dans chaque langue (sélecteur).
- Chaque guide de chaque langue a la forme du français : mêmes clés, autant de profils, d'idées,
  d'étapes et de questions.
- Titres de 60 signes au plus, descriptions de 160 au plus, dans toutes les langues — pages
  existantes comprises.
- Tout chemin français de page est un slug réservé.
- Le sélecteur n'est importé ni par une carte ni par l'administration ; chaque langue a son drapeau
  (`Record` complet).
- Sitemap et `llms.txt` citent les guides, et seulement des adresses servies.

## Hors périmètre

La fête des pères et les dix autres occasions (selon ce que ces six pages attireront) ; un blog ;
les liens entrants ; l'inscription à Google Search Console, qui demande le domaine définitif.
