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
    composer: "Composer ma page-cadeau",
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
        "Un anniversaire revient chaque année, et l'inspiration s'épuise plus vite. Voici des pistes rangées par profil, et une manière simple d'éviter le cadeau qui tombe à côté : en proposer quelques-uns, et laisser la personne choisir.",
      accroche: "Des pistes par profil, et la fin du cadeau qui tombe à côté.",
      apercu: ["Un atelier de poterie", "Une place de concert", "Une belle théière"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour un anniversaire",
        paragraphes: [
          "Plus on connaît quelqu'un depuis longtemps, plus il est difficile de le surprendre : les évidences ont déjà été offertes, et les goûts ont changé depuis. Demander « qu'est-ce qui te ferait plaisir ? » règle la question, mais retire tout ce qui fait un cadeau.",
          "Proposer trois ou quatre idées laisse la surprise intacte — la personne découvre ce que tu as imaginé pour elle — tout en lui laissant le dernier mot. Elle reçoit ce qui lui plaît vraiment, et tu n'as plus à tout miser sur une seule idée.",
          "C'est aussi une façon d'offrir plus large que d'habitude : une expérience à côté d'un objet, un petit plaisir à côté d'un projet. Le choix lui-même dit quelque chose, et tu l'apprends.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro:
          "Quatre profils, et pour chacun des idées à mélanger sur une même page. Deux à quatre propositions suffisent : au-delà, choisir devient un travail.",
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
        titre: "Composer la page en trois étapes",
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
            r: "Trois ou quatre, idéalement de natures différentes — une expérience, un objet, un petit plaisir. Au-delà de six, le choix devient une hésitation.",
          },
          {
            q: "Peut-on préparer la page à l'avance ?",
            r: "Oui. Tu peux régler une date d'ouverture : avant elle, la carte reste scellée sur un compte à rebours. Tu envoies le lien quand tu veux, et elle s'ouvre le jour de l'anniversaire.",
          },
          {
            q: "La personne voit-elle le prix des cadeaux ?",
            r: "Non, jamais. Elle voit ce que tu proposes, pas ce que ça coûte : elle choisit ce qui lui plaît, sans comparer.",
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
        "À Noël, les cadeaux se multiplient et les idées se ressemblent. Pour une personne que tu veux vraiment gâter, voici des pistes originales rangées par profil — et une façon de ne pas se tromper : proposer quelques idées, et laisser choisir.",
      accroche: "Des idées originales, et un cadeau qui ne finit pas au fond d'un placard.",
      apercu: ["Un week-end à la montagne", "Un coffret de thés", "Un cours de cuisine"],
      pourquoi: {
        titre: "Pourquoi laisser choisir à Noël",
        paragraphes: [
          "Noël concentre les cadeaux de toute l'année sur une seule soirée. Entre les listes des enfants et les attentions pour chacun, les adultes reçoivent souvent des cadeaux trouvés vite : utiles au mieux, oubliés au pire.",
          "Proposer quelques idées plutôt qu'un paquet unique change la façon d'offrir. La personne découvre ce que tu as imaginé, choisit ce qui lui fait vraiment envie, et reçoit le cadeau qu'elle aurait voulu.",
          "C'est aussi pratique quand on offre à distance : la page se partage par message, le choix se fait avant les fêtes, et tu as le temps de commander avant le réveillon.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro:
          "Des idées à mélanger sur une même page. À Noël, l'expérience à vivre après les fêtes est souvent celle qu'on choisit : elle prolonge le moment.",
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
        titre: "Composer la page en trois étapes",
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
            r: "Oui : compose une page par personne. Chacune reçoit son lien et choisit de son côté ; tu retrouves chaque choix sur le lien privé de chaque page.",
          },
          {
            q: "Et si la personne ne choisit pas avant Noël ?",
            r: "Tu peux le lui rappeler : la page reste ouverte. Sans choix, elle est supprimée au bout d'un an.",
          },
          {
            q: "Peut-on n'ouvrir la carte que le soir du réveillon ?",
            r: "Oui. Règle une date d'ouverture : jusque-là, la carte reste scellée sur un compte à rebours, même si le lien a été envoyé plus tôt.",
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
        "Pour un mariage, on hésite souvent entre la liste, l'enveloppe et le cadeau personnel. Voici une autre voie : quelques idées que tu choisis pour le couple, présentées sur une page, et les mariés qui décident. Avec des pistes rangées par profil.",
      accroche: "Entre la liste et l'enveloppe, quelques idées que le couple choisit.",
      apercu: ["Un dîner gastronomique", "Un atelier œnologie", "Une nuit en chambre d'hôtes"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour un mariage",
        paragraphes: [
          "Une liste de mariage dit exactement quoi offrir, et une enveloppe ne dit rien de toi. Entre les deux, beaucoup d'invités cherchent un cadeau qui soit à la fois personnel et vraiment utile au couple.",
          "Proposer quelques idées réunit les deux : chaque proposition vient de toi, et les mariés choisissent celle qui leur ressemble. Ils ne reçoivent pas un objet de plus qu'ils ont déjà, et tu sais que ton cadeau servira.",
          "La page s'envoie avant ou après la fête. Beaucoup préfèrent l'offrir quelques semaines plus tard, quand le couple a le temps de regarder, et de choisir à deux.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil de couple",
        intro:
          "Des idées pensées pour deux. Les expériences à vivre ensemble sont souvent celles que les mariés choisissent : elles prolongent la fête.",
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
        titre: "Composer la page en trois étapes",
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
            r: "Non, cela la complète. Une liste dit ce que le couple attend ; ta page propose tes idées à toi, et les mariés choisissent celle qui leur plaît. Rien n'empêche de faire les deux.",
          },
          {
            q: "Les deux mariés peuvent-ils choisir ensemble ?",
            r: "Oui : le lien s'ouvre sur n'importe quel appareil. Ils regardent la page ensemble et confirment un seul choix.",
          },
          {
            q: "Peut-on offrir à plusieurs invités ?",
            r: "La page se compose seul, mais rien n'empêche de s'entendre à plusieurs sur les idées proposées, puis de partager l'achat une fois le choix fait.",
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
        "À une naissance, les cadeaux arrivent en nombre et en double : trois pyjamas de la même taille, deux doudous, et aucune des choses qui manquent vraiment. Voici des pistes rangées par profil — et une façon d'offrir juste : proposer quelques idées, et laisser les parents choisir.",
      accroche: "Plutôt qu'un doudou de plus, ce qui manque vraiment aux parents.",
      apercu: ["Des repas livrés", "Une écharpe de portage", "Une séance photo"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour une naissance",
        paragraphes: [
          "Les premiers mois, les parents reçoivent beaucoup, et souvent la même chose. Ce qui leur manque vraiment, ils sont les seuls à le savoir : un matériel précis, du temps, un repas qu'ils n'ont pas à préparer.",
          "Proposer quelques idées leur laisse le choix sans leur demander de faire une liste — une tâche de plus, à un moment où ils n'en ont pas le temps. Ils découvrent tes propositions quand ils le peuvent, et choisissent en un geste.",
          "Rien ne presse : la page reste en ligne un an. Beaucoup de parents choisissent quelques semaines après la naissance, quand ils voient enfin ce qui leur serait utile.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro:
          "Des idées pour le bébé, et surtout pour les parents, qu'on oublie souvent. Mélange-les sur une même page.",
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
        titre: "Composer la page en trois étapes",
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
            r: "Non. Tu peux la préparer avant et l'envoyer quand tu veux ; tu peux aussi régler une date d'ouverture, pour qu'elle reste scellée jusque-là.",
          },
          {
            q: "Offrir aux parents plutôt qu'au bébé, est-ce que ça se fait ?",
            r: "De plus en plus. Un repas livré ou quelques heures d'aide sont souvent les cadeaux dont les parents se souviennent le mieux. Propose les deux, et laisse-les choisir.",
          },
          {
            q: "Les parents doivent-ils créer un compte pour choisir ?",
            r: "Non. Ils ouvrent le lien, choisissent et confirment, sans compte ni adresse e-mail.",
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
        "Un nouveau logement, c'est une liste de ce qui manque que personne n'a encore écrite. Voici des pistes rangées par profil — et une façon d'offrir utile sans deviner : proposer quelques idées, et laisser choisir ce qui manque vraiment.",
      accroche: "Pour un nouveau chez-soi, ce qui manque vraiment, choisi sur place.",
      apercu: ["Une plante d'intérieur", "Un bon couteau de cuisine", "Une œuvre à accrocher"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour une crémaillère",
        paragraphes: [
          "Quand on emménage, on sait rarement ce qui manque avant d'y avoir vécu quelques semaines. Les invités, eux, arrivent avec une bouteille, une plante ou un objet de décoration choisi sans connaître le lieu.",
          "Proposer quelques idées laisse la personne décider d'après ce qu'elle voit chez elle : la place disponible, le style du logement, ce qu'elle a déjà. Le cadeau trouve sa place, au lieu de la chercher.",
          "La page peut s'envoyer après la fête, une fois l'installation terminée. C'est souvent à ce moment-là que les besoins se précisent.",
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
        titre: "Composer la page en trois étapes",
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
            r: "Pas forcément. Tu peux arriver avec une carte portant le QR code de la page : la personne choisit plus tard, en voyant ce qui lui manque.",
          },
          {
            q: "Et pour un couple qui emménage ensemble ?",
            r: "Le lien s'ouvre sur n'importe quel appareil : le couple regarde la page à deux et confirme un seul choix.",
          },
          {
            q: "Peut-on proposer une idée sans lien de boutique ?",
            r: "Oui. Une aide au montage ou une plante à choisir ensemble se décrivent très bien à la main, avec un titre et une note.",
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
        "Pour la fête des mères, on cherche à dire merci sans retomber sur les mêmes attentions chaque année. Voici des pistes rangées par profil — et une idée simple : proposer quelques cadeaux choisis pour elle, et la laisser décider.",
      accroche: "Dire merci autrement, avec des idées qu'elle choisit.",
      apercu: ["Un brunch à deux", "Une journée au spa", "Un atelier floral"],
      pourquoi: {
        titre: "Pourquoi laisser choisir pour la fête des mères",
        paragraphes: [
          "Beaucoup de mères répondent « rien, ça me fait plaisir que tu sois là » quand on leur demande ce qui leur ferait envie. La réponse est sincère, mais elle ne dit pas quoi offrir.",
          "Proposer quelques idées lui laisse le plaisir de la surprise et la liberté de choisir : un moment ensemble, un objet qu'elle hésitait à s'offrir, une activité qu'elle repousse depuis longtemps. Tu apprends au passage ce qui lui fait vraiment envie.",
          "La date de la fête change d'un pays à l'autre, et la page peut être prête bien avant : règle une date d'ouverture, et la carte restera scellée jusqu'au jour venu.",
        ],
      },
      idees: {
        titre: "Des pistes, par profil",
        intro: "Des idées pour dire merci — à mélanger sur une même page.",
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
        titre: "Composer la page en trois étapes",
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
            r: "Oui. Règle une date d'ouverture : la carte reste scellée sur un compte à rebours jusqu'au jour de la fête, même si le lien est envoyé avant.",
          },
          {
            q: "Et si elle n'est pas à l'aise avec les écrans ?",
            r: "Imprime la carte : une feuille pliée avec le QR code, à glisser dans une enveloppe. Il suffit de le scanner avec un téléphone, et vous pouvez choisir ensemble.",
          },
          {
            q: "Plusieurs enfants peuvent-ils offrir ensemble ?",
            r: "La page se compose seul, mais vous pouvez vous entendre sur les idées, signer ensemble, puis partager l'achat une fois le choix fait.",
          },
        ],
      },
    },
  },
};
