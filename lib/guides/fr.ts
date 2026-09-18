import type { TextesGuides } from "./types";

/*
 * Les guides en francais, qui font foi. Les titres suivent les suggestions de
 * recherche relevees pour chaque occasion (« idee cadeau anniversaire »,
 * « cadeau de naissance original et utile »…) ; les pistes sont rangees par
 * profil, sans rien supposer du genre de qui recoit, et sans marque ni lien
 * marchand.
 */
export const fr: TextesGuides = {
  page: {
    titreMeta: "Idées cadeaux par occasion — MyPresentsForYou",
    descriptionMeta:
      "Anniversaire, Noël, mariage, naissance, crémaillère, fête des mères : des idées de cadeaux par profil, et une façon simple de laisser choisir.",
    titre: "Idées cadeaux par occasion",
    chapo:
      "Pour chaque occasion, des pistes rangées par profil — et une façon de ne plus deviner : proposer quelques idées, et laisser la personne choisir.",
  },

  libelles: {
    composer: "Créer ma page-cadeau",
    exemple: "Voir un exemple de page-cadeau",
    questions: "Toutes les questions fréquentes",
    autres: "Pour d'autres occasions",
    fil: "Fil d'Ariane",
    accueil: "Accueil",
    miseAJour: "Dernière mise à jour :",
    voirAussi: "Voir aussi :",
    lire: "Lire le guide",
  },

  guides: {
    anniversaire: {
      titreMeta: "Idées cadeau d'anniversaire, au choix — MyPresentsForYou",
      descriptionMeta:
        "Des idées de cadeau d'anniversaire rangées par profil — expériences, beaux objets, petits plaisirs — et une façon simple de laisser la personne choisir.",
      titre: "Idées cadeau d'anniversaire : et si tu laissais choisir ?",
      chapo:
        "Un anniversaire, ça revient tous les ans, et à un moment on sèche. Plutôt que de parier sur une seule idée, tu en proposes trois ou quatre et la personne prend celle qu'elle préfère. Les idées ci-dessous sont classées par profil.",
      accroche: "Des idées par profil, et plus de cadeau qui tombe à plat.",
      apercu: ["Un atelier de poterie", "Une place de concert", "Une belle théière"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour un anniversaire",
        paragraphes: [
          "Au bout de dix ans, tu as déjà offert le livre, l'écharpe et le bon pour un restaurant. Et ses goûts ont bougé depuis. Reste la question « qu'est-ce qui te ferait plaisir ? », qui règle le problème et tue la surprise d'un coup.",
          "Trois ou quatre idées, et la surprise tient quand même : elle découvre ce que tu as imaginé, et c'est elle qui tranche. Tu ne joues plus tout sur une seule carte.",
          "Ça permet aussi d'offrir plus large que d'habitude. Un atelier à côté d'un objet, un petit plaisir à côté d'un vrai projet. Et ce qu'elle choisit t'apprend quelque chose sur elle.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro:
          "Quatre profils, quatre idées chacun, à mélanger sur la même page. Deux à quatre propositions, pas plus : après, choisir devient fatigant.",
        profils: [
          {
            nom: "Qui préfère les souvenirs aux objets",
            idees: [
              { nom: "Un atelier créatif", pourquoi: "Poterie, reliure, cuisine : une matinée pour apprendre et repartir avec ce qu'on a fait." },
              { nom: "Une place de concert ou de spectacle", pourquoi: "À choisir selon la saison, pour avoir une date à attendre." },
              { nom: "Une nuit dans un lieu insolite", pourquoi: "Cabane, péniche, phare : le cadre fait l'essentiel du souvenir." },
              { nom: "Un cours d'initiation", pourquoi: "Photographie, œnologie, escalade : une découverte sans engagement." },
            ],
          },
          {
            nom: "Qui aime les belles choses du quotidien",
            idees: [
              { nom: "Une belle théière ou cafetière", pourquoi: "Un objet dont on se sert chaque jour, et qu'on remarque à chaque fois." },
              { nom: "Un plaid en laine", pourquoi: "Le genre de confort qu'on ne s'offre pas soi-même." },
              { nom: "Un carnet relié main", pourquoi: "Pour les listes, les idées ou les voyages." },
              { nom: "Une lampe de lecture", pourquoi: "Une bonne lumière change une soirée." },
            ],
          },
          {
            nom: "Qui a déjà tout",
            idees: [
              { nom: "Un abonnement de découverte", pourquoi: "Livres, cafés ou fleurs : un envoi par mois, pendant quelques mois." },
              { nom: "Un repas dans une adresse attendue", pourquoi: "La table qu'on remet toujours à plus tard." },
              { nom: "Un don à une association", pourquoi: "Un cadeau qui ne prend aucune place, fait au nom de la personne." },
              { nom: "Une journée de soin", pourquoi: "Un massage, un hammam : un vrai temps pour soi." },
            ],
          },
          {
            nom: "Qui aime apprendre et fabriquer",
            idees: [
              { nom: "Un kit de fabrication", pourquoi: "Bière, savon, bougies : de quoi faire soi-même, notice comprise." },
              { nom: "Un livre de référence", pourquoi: "Dans le domaine qui passionne, celui qu'on garde des années." },
              { nom: "Un outil de qualité", pourquoi: "Couteau de cuisine, sécateur, boîte à outils : l'objet qui dure." },
              { nom: "Une formation en ligne", pourquoi: "Pour avancer à son rythme sur un sujet qui attire." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Créer la page en trois étapes",
        liste: [
          "Choisis l'occasion « Anniversaire » : la page prend ses couleurs, son décor et ses formules.",
          "Ajoute deux à dix idées ; colle le lien d'un produit pour en récupérer le titre et l'image, ou décris une expérience à la main.",
          "Envoie le lien, ou imprime le QR code sur une carte. Tu découvres le choix sur ton lien privé, et tu offres.",
        ],
      },
      questions: {
        titre: "Questions sur les cadeaux d'anniversaire",
        liste: [
          {
            q: "Combien d'idées proposer pour un anniversaire ?",
            r: "Trois ou quatre, de natures différentes si possible : un atelier, un objet, un petit plaisir. Au-delà de six, on hésite au lieu de choisir.",
          },
          {
            q: "Peut-on préparer la page à l'avance ?",
            r: "Oui. Règle une date d'ouverture et la carte reste scellée derrière un compte à rebours. Tu envoies le lien quand tu veux, la page s'ouvre le jour de l'anniversaire.",
          },
          {
            q: "La personne voit-elle le prix des cadeaux ?",
            r: "Jamais. Elle voit tes idées, pas leur prix, et personne ne compare.",
          },
        ],
      },
    },

    noel: {
      titreMeta: "Idées cadeau de Noël originales, au choix — MyPresentsForYou",
      descriptionMeta:
        "Des idées cadeau de Noël originales, rangées par profil — expériences, soirées d'hiver, qui a déjà tout — et une façon simple de laisser choisir.",
      titre: "Idées cadeau de Noël : proposer, et laisser choisir",
      chapo:
        "À Noël, tout le monde reçoit beaucoup et personne ne sait plus quoi offrir. Pour quelqu'un que tu veux vraiment gâter, propose trois ou quatre idées et laisse-le choisir. Les idées ci-dessous sont classées par profil.",
      accroche: "Des idées qui ne finissent pas au fond d'un placard.",
      apercu: ["Un week-end à la montagne", "Un coffret de thés", "Un cours de cuisine"],
      pourquoi: {
        titre: "Pourquoi laisser choisir à Noël",
        paragraphes: [
          "Noël, c'est tous les cadeaux de l'année en une soirée. Entre les listes des enfants et le petit quelque chose pour chacun, les adultes héritent souvent de ce qu'on a trouvé en vitesse.",
          "Avec plusieurs idées au lieu d'un paquet, la personne voit ce que tu as imaginé, prend ce qui lui fait envie, et repart avec ce qu'elle aurait choisi elle-même.",
          "Pratique aussi quand on offre à distance. Tu envoies la page par message, le choix tombe avant les fêtes, et tu as le temps de commander.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro:
          "Des idées à mélanger sur la même page. À Noël, c'est souvent l'expérience à vivre en janvier qui gagne : elle fait durer les fêtes.",
        profils: [
          {
            nom: "Qui aime les expériences à partager",
            idees: [
              { nom: "Un week-end à la montagne ou à la mer", pourquoi: "Hors saison, pour en profiter vraiment." },
              { nom: "Un cours de cuisine à deux", pourquoi: "Une soirée, et des recettes qui restent." },
              { nom: "Des places pour un spectacle en janvier", pourquoi: "Une date à attendre quand les fêtes sont passées." },
              { nom: "Une visite guidée insolite", pourquoi: "Souterrains, ateliers, coulisses : sa ville autrement." },
            ],
          },
          {
            nom: "Qui aime les soirées d'hiver",
            idees: [
              { nom: "Un coffret de thés ou de cafés", pourquoi: "De quoi découvrir, tasse après tasse." },
              { nom: "Un plaid et un bon livre", pourquoi: "Le cadeau le plus simple, et souvent le plus apprécié." },
              { nom: "Un jeu de société pour adultes", pourquoi: "Pour les longues soirées en famille ou entre amis." },
              { nom: "Une bougie artisanale", pourquoi: "Choisie dans un atelier qui les fabrique." },
            ],
          },
          {
            nom: "Qui a déjà tout",
            idees: [
              { nom: "Un abonnement de quelques mois", pourquoi: "Magazine, fleurs ou produits locaux : le plaisir revient chaque mois." },
              { nom: "Le parrainage d'une ruche ou d'un arbre", pourquoi: "Avec des nouvelles au fil de l'année." },
              { nom: "Un repas dans une belle adresse", pourquoi: "Le genre de soirée qu'on ne s'offre pas soi-même." },
              { nom: "Une journée avec un artisan", pourquoi: "Pour apprendre un savoir-faire de ses mains." },
            ],
          },
          {
            nom: "Qui prépare déjà l'année suivante",
            idees: [
              { nom: "Un bel agenda ou un carnet", pourquoi: "Pour les projets de l'année qui commence." },
              { nom: "Un guide de voyage et une carte", pourquoi: "Pour la destination dont on parle depuis longtemps." },
              { nom: "Un équipement de sport de qualité", pourquoi: "Pour la bonne résolution, tenue cette fois." },
              { nom: "Une formation courte", pourquoi: "Langue, photo, dessin : un projet pour janvier." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Créer la page en trois étapes",
        liste: [
          "Choisis l'occasion « Noël » : la page prend ses couleurs d'hiver et son décor.",
          "Ajoute deux à dix idées ; colle le lien d'un produit pour en récupérer le titre et l'image, ou décris une expérience à la main.",
          "Envoie le lien avant les fêtes, ou glisse le QR code dans une carte au pied du sapin. Tu vois le choix, et tu commandes à temps.",
        ],
      },
      questions: {
        titre: "Questions sur les cadeaux de Noël",
        liste: [
          {
            q: "Peut-on offrir à plusieurs personnes de la même famille ?",
            r: "Oui, une page par personne. Chacun reçoit son lien et choisit de son côté ; tu retrouves les choix sur le lien privé de chaque page.",
          },
          {
            q: "Et si la personne ne choisit pas avant Noël ?",
            r: "Tu peux relancer, la page reste ouverte. Si personne ne choisit, elle est supprimée au bout d'un an.",
          },
          {
            q: "Peut-on n'ouvrir la carte que le soir du réveillon ?",
            r: "Oui. Règle une date d'ouverture : la carte reste scellée derrière un compte à rebours, même si tu as envoyé le lien avant.",
          },
        ],
      },
    },

    mariage: {
      titreMeta: "Idée cadeau de mariage pour les mariés — MyPresentsForYou",
      descriptionMeta:
        "Idées de cadeau de mariage rangées par profil de couple, et une alternative à l'enveloppe : proposer quelques idées, et laisser les mariés choisir.",
      titre: "Idée cadeau de mariage : laisser les mariés choisir",
      chapo:
        "Pour un mariage, on hésite entre la liste, l'enveloppe et le cadeau qu'on choisit soi-même. Il y a une autre voie : tu proposes quelques idées au couple, sur une page, et ce sont eux qui tranchent. Les idées ci-dessous sont classées par type de couple.",
      accroche: "Entre la liste et l'enveloppe : quelques idées, et le couple choisit.",
      apercu: ["Un dîner gastronomique", "Un atelier œnologie", "Une nuit en chambre d'hôtes"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour un mariage",
        paragraphes: [
          "La liste de mariage dit exactement quoi acheter. L'enveloppe, elle, ne dit rien de toi. Beaucoup d'invités cherchent entre les deux : un cadeau personnel qui serve vraiment.",
          "Quelques idées font les deux à la fois. Chaque proposition vient de toi, et les mariés prennent celle qui leur ressemble. Pas de doublon, et ton cadeau sert.",
          "Tu peux envoyer la page avant ou après la fête. Beaucoup attendent quelques semaines, le temps que le couple respire et regarde ça à deux.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil de couple",
        intro:
          "Des idées pour deux. Souvent, les mariés prennent l'expérience à vivre ensemble : elle prolonge la fête de quelques mois.",
        profils: [
          {
            nom: "Un couple qui aime sortir",
            idees: [
              { nom: "Un dîner dans une belle table", pourquoi: "Pour un soir du premier mois de mariage." },
              { nom: "Des places pour un concert ou un festival", pourquoi: "Une date à attendre ensemble." },
              { nom: "Un atelier œnologie ou cocktails", pourquoi: "Deux heures pour apprendre, et de quoi refaire à la maison." },
              { nom: "Une croisière sur un fleuve", pourquoi: "Quelques heures sur l'eau, loin de l'agitation." },
            ],
          },
          {
            nom: "Un couple qui s'installe",
            idees: [
              { nom: "Un beau service de table", pourquoi: "Celui qu'on sort pour recevoir." },
              { nom: "Un appareil de cuisine de qualité", pourquoi: "Celui qu'on hésite à s'offrir soi-même." },
              { nom: "Une œuvre d'un artiste local", pourquoi: "Un tirage ou une gravure pour le premier mur du couple." },
              { nom: "Des plantes et leurs pots", pourquoi: "Pour faire vivre le nouveau logement." },
            ],
          },
          {
            nom: "Un couple qui voyage",
            idees: [
              { nom: "Une nuit en chambre d'hôtes", pourquoi: "Pour un week-end à deux, à la date de leur choix." },
              { nom: "Une valise ou un sac de voyage", pourquoi: "L'objet qui les accompagnera partout." },
              { nom: "Une activité pendant le voyage de noces", pourquoi: "Plongée, randonnée guidée, cours de cuisine sur place." },
              { nom: "Un album pour les photos du voyage", pourquoi: "À remplir au retour." },
            ],
          },
          {
            nom: "Un couple qui a déjà tout",
            idees: [
              { nom: "Une participation à un projet", pourquoi: "Le voyage, les travaux, le premier meuble choisi à deux." },
              { nom: "Un portrait illustré du couple", pourquoi: "Réalisé par un artiste, d'après une photo." },
              { nom: "Une séance photo en extérieur", pourquoi: "Des images d'eux, sans la tenue de cérémonie." },
              { nom: "Un arbre à planter", pourquoi: "Un cadeau qui grandit avec leur histoire." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Créer la page en trois étapes",
        liste: [
          "Choisis l'occasion « Mariage » : la page prend sa palette, son décor d'alliances et des formules adressées aux deux.",
          "Ajoute deux à dix idées pensées pour le couple ; une expérience se décrit très bien à la main, sans lien.",
          "Envoie le lien aux mariés, ou glisse le QR code dans ta carte de félicitations. Tu vois ce qu'ils ont choisi, et tu offres.",
        ],
      },
      questions: {
        titre: "Questions sur les cadeaux de mariage",
        liste: [
          {
            q: "Est-ce que cela remplace une liste de mariage ?",
            r: "Non, ça la complète. La liste dit ce que le couple attend ; ta page propose tes idées à toi. Rien n'empêche de faire les deux.",
          },
          {
            q: "Les deux mariés peuvent-ils choisir ensemble ?",
            r: "Oui, le lien s'ouvre sur n'importe quel appareil. Ils regardent la page ensemble et confirment un seul choix.",
          },
          {
            q: "Peut-on offrir à plusieurs invités ?",
            r: "Une seule personne crée la page, mais vous pouvez vous mettre d'accord à plusieurs sur les idées, puis partager l'achat une fois le choix fait.",
          },
        ],
      },
    },

    naissance: {
      titreMeta: "Cadeau de naissance original et utile — MyPresentsForYou",
      descriptionMeta:
        "Idées de cadeau de naissance originales et utiles, pour le bébé ou pour les parents, et une façon simple de laisser les parents choisir ce qui manque.",
      titre: "Cadeau de naissance original et utile : laisse les parents choisir",
      chapo:
        "Quand un bébé arrive, les cadeaux affluent, souvent en double : trois pyjamas de la même taille, deux doudous, et rien de ce qui manque vraiment. Propose quelques idées, et laisse les parents prendre celle qui les aidera. Les idées ci-dessous sont classées par profil.",
      accroche: "Plutôt qu'un doudou de plus, ce qui manque vraiment aux parents.",
      apercu: ["Des repas livrés", "Une écharpe de portage", "Une séance photo"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour une naissance",
        paragraphes: [
          "Les premiers mois, les parents reçoivent beaucoup, et souvent la même chose. Eux seuls savent ce qui manque : un matériel précis, du temps, un dîner qu'ils n'ont pas à préparer.",
          "Proposer quelques idées, c'est leur laisser le choix sans leur demander d'écrire une liste. Ils regardent quand ils peuvent, et ça leur prend dix secondes.",
          "Rien ne presse : la page reste en ligne un an. Beaucoup de parents choisissent quelques semaines plus tard, quand ils voient enfin ce qui leur serait utile.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro:
          "Des idées pour le bébé, et surtout pour les parents, qu'on oublie toujours. À mélanger sur la même page.",
        profils: [
          {
            nom: "Pour souffler un peu",
            idees: [
              { nom: "Des repas livrés", pourquoi: "Quelques soirs sans cuisiner, les premières semaines." },
              { nom: "Quelques heures d'aide à domicile", pourquoi: "Du ménage ou du repassage en moins." },
              { nom: "Un massage pour le parent qui a accouché", pourquoi: "Un vrai moment de repos, à prendre quand c'est possible." },
              { nom: "Une soirée de baby-sitting", pourquoi: "Plus tard, pour une première sortie à deux." },
            ],
          },
          {
            nom: "Pour le quotidien avec le bébé",
            idees: [
              { nom: "Une écharpe ou un porte-bébé", pourquoi: "Pour garder les mains libres, à choisir selon leur usage." },
              { nom: "Une gigoteuse de la taille suivante", pourquoi: "Celle qu'on ne reçoit jamais : on offre toujours la première." },
              { nom: "Un tapis d'éveil", pourquoi: "Pour les premiers mois au sol." },
              { nom: "Un sac à langer pratique", pourquoi: "Qu'on emporte partout, pendant des années." },
            ],
          },
          {
            nom: "Pour garder des souvenirs",
            idees: [
              { nom: "Une séance photo de nouveau-né", pourquoi: "À faire dans les premières semaines." },
              { nom: "Un livre de naissance à remplir", pourquoi: "Les premières fois, écrites au fil des mois." },
              { nom: "Un moulage des mains et des pieds", pourquoi: "Un souvenir qu'on garde longtemps." },
              { nom: "Un tirage d'art de la première photo", pourquoi: "Encadré, pour la chambre." },
            ],
          },
          {
            nom: "Pour plus tard",
            idees: [
              { nom: "Des livres pour les premières années", pourquoi: "Une petite bibliothèque, pour grandir avec." },
              { nom: "Un jouet en bois durable", pourquoi: "Qui passera d'un enfant à l'autre." },
              { nom: "Un versement sur un compte d'épargne", pourquoi: "Un cadeau qui attend son heure." },
              { nom: "Des vêtements pour ses deux ans", pourquoi: "Pour le jour où tout le reste sera trop petit." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Créer la page en trois étapes",
        liste: [
          "Choisis l'occasion « Naissance » : la page prend ses couleurs douces et son décor.",
          "Ajoute deux à dix idées ; pour un service ou un moment de repos, une description à la main suffit.",
          "Envoie le lien aux parents, sans rien presser : la page reste en ligne un an. Tu vois leur choix, et tu offres.",
        ],
      },
      questions: {
        titre: "Questions sur les cadeaux de naissance",
        liste: [
          {
            q: "Faut-il attendre la naissance pour envoyer la page ?",
            r: "Non. Tu peux la préparer avant et l'envoyer quand tu veux. Tu peux aussi régler une date d'ouverture pour qu'elle reste scellée jusque-là.",
          },
          {
            q: "Offrir aux parents plutôt qu'au bébé, est-ce que ça se fait ?",
            r: "De plus en plus. Un dîner livré ou deux heures de ménage sont souvent les cadeaux dont les parents se souviennent. Propose les deux et laisse-les choisir.",
          },
          {
            q: "Les parents doivent-ils créer un compte pour choisir ?",
            r: "Non. Ils ouvrent le lien, choisissent, confirment. Pas de compte, pas d'adresse e-mail.",
          },
        ],
      },
    },

    cremaillere: {
      titreMeta: "Idée cadeau de crémaillère originale — MyPresentsForYou",
      descriptionMeta:
        "Idées de cadeau de crémaillère originales, pour une personne seule ou un couple, et une façon simple de laisser choisir ce qui manque encore.",
      titre: "Idée cadeau de crémaillère : ce qui manque encore",
      chapo:
        "Quand on emménage, on découvre ce qui manque au fil des semaines. De l'extérieur, impossible à deviner. Autant proposer plusieurs idées et laisser la personne prendre celle qui lui servira. En voici, classées par profil.",
      accroche: "Ce qui manque vraiment dans le nouveau chez-soi.",
      apercu: ["Une plante d'intérieur", "Un bon couteau de cuisine", "Une œuvre à accrocher"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour une crémaillère",
        paragraphes: [
          "On ne sait pas ce qui manque avant d'avoir vécu là quelques semaines. Les invités, eux, arrivent avec une bouteille, une plante ou un objet de déco choisi sans avoir vu l'appartement.",
          "Avec plusieurs idées, la personne décide d'après ce qu'elle a sous les yeux : la place qui reste, le style, ce qu'elle a déjà. Le cadeau trouve sa place au lieu de la chercher.",
          "Tu peux envoyer la page après la fête, une fois les cartons vidés. C'est là que les besoins se précisent.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro: "Des idées pour habiter le lieu, de la plus utile à la plus personnelle.",
        profils: [
          {
            nom: "Qui aime recevoir",
            idees: [
              { nom: "Un beau service de verres", pourquoi: "Pour les premiers dîners chez soi." },
              { nom: "Une planche à découper en bois massif", pourquoi: "Qui sert à tout, et se pose sur la table." },
              { nom: "Un plateau de service", pourquoi: "Pour l'apéritif comme pour le petit-déjeuner." },
              { nom: "Des serviettes en lin", pourquoi: "Le détail qui change une table." },
            ],
          },
          {
            nom: "Qui aime cuisiner",
            idees: [
              { nom: "Un bon couteau de cuisine", pourquoi: "L'outil dont on se sert chaque jour." },
              { nom: "Une cocotte en fonte", pourquoi: "Pour des années de plats mijotés." },
              { nom: "Un livre de cuisine de saison", pourquoi: "Pour inaugurer la nouvelle cuisine." },
              { nom: "Un moulin et un assortiment d'épices", pourquoi: "De quoi remplir les premiers placards." },
            ],
          },
          {
            nom: "Qui aime les plantes et la décoration",
            idees: [
              { nom: "Une grande plante d'intérieur", pourquoi: "Choisie selon la lumière du logement." },
              { nom: "Une œuvre d'un artiste local", pourquoi: "Un tirage ou une gravure pour le premier mur." },
              { nom: "Une lampe d'appoint", pourquoi: "Pour le coin qu'on n'a pas encore éclairé." },
              { nom: "Un cadre photo mural", pourquoi: "Pour les souvenirs qui s'installent aussi." },
            ],
          },
          {
            nom: "Qui préfère l'utile au décoratif",
            idees: [
              { nom: "Une boîte à outils complète", pourquoi: "Pour les étagères qui restent à monter." },
              { nom: "Un aspirateur à main", pourquoi: "Le petit appareil qu'on finit toujours par acheter." },
              { nom: "Quelques heures d'aide au montage", pourquoi: "Pour les meubles encore en cartons." },
              { nom: "Un thermostat connecté", pourquoi: "Pour un logement confortable et économe." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Créer la page en trois étapes",
        liste: [
          "Choisis l'occasion « Crémaillère » : la page prend ses couleurs et son décor.",
          "Ajoute deux à dix idées ; colle le lien d'un produit, ou décris un service à la main.",
          "Envoie le lien après la fête, une fois l'installation faite. Tu vois ce qui manquait, et tu offres.",
        ],
      },
      questions: {
        titre: "Questions sur les cadeaux de crémaillère",
        liste: [
          {
            q: "Faut-il apporter le cadeau le jour de la crémaillère ?",
            r: "Pas forcément. Arrive avec une carte et le QR code de la page : la personne choisira plus tard, quand elle verra ce qui lui manque.",
          },
          {
            q: "Et pour un couple qui emménage ensemble ?",
            r: "Le lien s'ouvre sur n'importe quel appareil. Le couple regarde la page à deux et confirme un seul choix.",
          },
          {
            q: "Peut-on proposer une idée sans lien de boutique ?",
            r: "Oui. Un coup de main pour monter les meubles ou une plante à choisir ensemble, ça se décrit très bien à la main, avec un titre et une note.",
          },
        ],
      },
    },

    "fete-des-meres": {
      titreMeta: "Idée cadeau fête des mères originale — MyPresentsForYou",
      descriptionMeta:
        "Idées cadeau de fête des mères originales, rangées par profil — moments à partager, bien-être, passions — et une façon simple de la laisser choisir.",
      titre: "Idée cadeau fête des mères : la laisser choisir",
      chapo:
        "Pour la fête des mères, on veut dire merci sans refaire le bouquet de l'an dernier. Propose trois ou quatre cadeaux choisis pour elle, et laisse-la prendre celui qu'elle préfère. Les idées ci-dessous sont classées par profil.",
      accroche: "Dire merci autrement, avec des idées qu'elle choisit.",
      apercu: ["Un brunch à deux", "Une journée au spa", "Un atelier floral"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour la fête des mères",
        paragraphes: [
          "Demande à une mère ce qui lui ferait plaisir, elle répondra « rien, je suis contente que tu sois là ». C'est sincère, et ça ne t'aide pas.",
          "Avec quelques idées devant elle, elle garde la surprise et prend ce qui lui fait vraiment envie : un moment à deux, un objet qu'elle n'oserait pas s'acheter, une activité qu'elle repousse depuis des mois. Tu apprends au passage ce qu'elle aime.",
          "La date change d'un pays à l'autre, et la page peut être prête des semaines avant. Règle une date d'ouverture, elle restera scellée jusqu'au jour venu.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro: "Des idées pour dire merci, à mélanger sur la même page.",
        profils: [
          {
            nom: "Pour partager un moment",
            idees: [
              { nom: "Un brunch dans une belle adresse", pourquoi: "Un dimanche matin, rien qu'à deux." },
              { nom: "Une sortie au théâtre ou au concert", pourquoi: "Une soirée qu'on attend ensemble." },
              { nom: "Une excursion d'une journée", pourquoi: "Pour découvrir un lieu dont elle parle souvent." },
              { nom: "Un atelier à faire ensemble", pourquoi: "Céramique, cuisine, composition florale." },
            ],
          },
          {
            nom: "Pour prendre soin d'elle",
            idees: [
              { nom: "Une journée au spa", pourquoi: "Un vrai temps de repos, à la date de son choix." },
              { nom: "Un massage ou un soin", pourquoi: "Une heure pour elle seule." },
              { nom: "Un coffret de soins artisanaux", pourquoi: "Des produits choisis dans une petite maison." },
              { nom: "Un peignoir en coton épais", pourquoi: "Le confort de tous les jours." },
            ],
          },
          {
            nom: "Pour ses passions",
            idees: [
              { nom: "Un atelier floral", pourquoi: "Pour composer un bouquet, et apprendre à le refaire." },
              { nom: "Un beau livre sur un sujet qu'elle aime", pourquoi: "Jardin, cuisine, voyage, peinture." },
              { nom: "Des outils de jardinage de qualité", pourquoi: "Des outils qui durent des saisons." },
              { nom: "Un cours de photographie", pourquoi: "Pour mieux saisir les souvenirs de famille." },
            ],
          },
          {
            nom: "Pour garder un souvenir",
            idees: [
              { nom: "Un livre photo de famille", pourquoi: "Les plus belles images des dernières années." },
              { nom: "Un bijou gravé", pourquoi: "Des initiales ou une date qui comptent." },
              { nom: "Un portrait illustré", pourquoi: "D'après une photo de famille." },
              { nom: "Une lettre et un bouquet livrés", pourquoi: "Quand la distance empêche d'être là." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Créer la page en trois étapes",
        liste: [
          "Choisis l'occasion « Fête des mères » : la page prend sa palette et sa formule d'ouverture.",
          "Ajoute deux à dix idées ; un moment à partager se décrit très bien à la main.",
          "Envoie le lien, ou imprime le QR code sur une carte. Elle choisit, tu vois son choix, et tu offres.",
        ],
      },
      questions: {
        titre: "Questions sur les cadeaux de fête des mères",
        liste: [
          {
            q: "Peut-on préparer la page plusieurs jours avant ?",
            r: "Oui. Règle une date d'ouverture : la carte reste scellée derrière un compte à rebours jusqu'au jour de la fête, même si tu envoies le lien avant.",
          },
          {
            q: "Et si elle n'est pas à l'aise avec les écrans ?",
            r: "Imprime la carte : une feuille pliée avec le QR code, dans une enveloppe. Elle le scanne avec son téléphone, et vous pouvez regarder la page ensemble.",
          },
          {
            q: "Plusieurs enfants peuvent-ils offrir ensemble ?",
            r: "Une seule personne crée la page, mais vous pouvez choisir les idées ensemble, signer à plusieurs, puis partager l'achat une fois le cadeau retenu.",
          },
        ],
      },
    },
  },
};
