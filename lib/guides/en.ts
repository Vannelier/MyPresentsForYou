import type { TextesGuides } from "./types";

export const en: TextesGuides = {
  page: {
    titreMeta: "Gift ideas by occasion — MyPresentsForYou",
    descriptionMeta:
      "Birthday, Christmas, wedding, new baby, housewarming, Mother's Day: gift ideas sorted by profile, and a simple way to let them choose.",
    titre: "Gift ideas by occasion",
    chapo:
      "For each occasion, ideas sorted by profile — and a way to stop guessing: suggest a few ideas, and let the person choose.",
  },

  libelles: {
    composer: "Create my gift page",
    exemple: "See an example gift page",
    questions: "All frequently asked questions",
    autres: "For other occasions",
    fil: "Breadcrumb",
    accueil: "Home",
    miseAJour: "Last updated:",
    voirAussi: "See also:",
    lire: "Read the guide",
    autresCategories: "Other gifts people agonise over",
  },

  guides: {
    anniversaire: {
      titreMeta: "Birthday gift ideas they choose — MyPresentsForYou",
      descriptionMeta:
        "Birthday gift ideas sorted by profile — experiences, beautiful things, small treats — and a simple way to let the person choose.",
      titre: "Birthday gift ideas: why not let them choose?",
      chapo:
        "Birthdays come round every year, and at some point you run dry. Instead of betting on one idea, you suggest three or four and they pick the one they like best. The ideas below are sorted by profile.",
      accroche: "Ideas by profile, and no more gifts that fall flat.",
      apercu: ["A pottery workshop", "Concert tickets", "A beautiful teapot"],
      pourquoi: {
        titre: "Why let them choose for a birthday",
        paragraphes: [
          "After ten years, you've already given the book, the scarf and the restaurant voucher. And their tastes have moved on since. That leaves \"what would you like?\", which solves the problem and kills the surprise in one go.",
          "Three or four ideas, and the surprise still holds: they find out what you came up with, and they decide. You're no longer staking everything on one card.",
          "It also lets you give more widely than usual. A workshop next to an object, a small treat next to a bigger plan. And what they pick tells you something about them.",
        ],
      },
      idees: {
        titre: "Ideas, by profile",
        intro:
          "Four profiles, four ideas each, to mix on the same page. Two to four suggestions, no more: past that, choosing gets tiring.",
        profils: [
          {
            nom: "For someone who prefers memories to things",
            idees: [
              { nom: "A creative workshop", pourquoi: "Pottery, bookbinding, cooking: a morning to learn and leave with what you made." },
              { nom: "Concert or theatre tickets", pourquoi: "Chosen for the season, so there is a date to look forward to." },
              { nom: "A night somewhere unusual", pourquoi: "A treehouse, a houseboat, a lighthouse: the setting is most of the memory." },
              { nom: "A taster class", pourquoi: "Photography, wine, climbing: something new, with no commitment." },
            ],
          },
          {
            nom: "For someone who loves beautiful everyday things",
            idees: [
              { nom: "A beautiful teapot or coffee maker", pourquoi: "Used every day, and noticed every time." },
              { nom: "A wool throw", pourquoi: "The kind of comfort people rarely buy for themselves." },
              { nom: "A hand-bound notebook", pourquoi: "For lists, ideas or travels." },
              { nom: "A reading lamp", pourquoi: "Good light changes an evening." },
            ],
          },
          {
            nom: "For someone who has everything",
            idees: [
              { nom: "A discovery subscription", pourquoi: "Books, coffee or flowers: a delivery a month, for a few months." },
              { nom: "A meal at a long-awaited restaurant", pourquoi: "The table they keep putting off." },
              { nom: "A donation to a charity", pourquoi: "A gift that takes up no space, made in their name." },
              { nom: "A spa day", pourquoi: "A massage, a hammam: real time for themselves." },
            ],
          },
          {
            nom: "For someone who loves to learn and make",
            idees: [
              { nom: "A make-your-own kit", pourquoi: "Beer, soap, candles: everything to make it yourself, instructions included." },
              { nom: "A reference book", pourquoi: "In the field they love, the one you keep for years." },
              { nom: "A quality tool", pourquoi: "A kitchen knife, secateurs, a toolbox: the thing that lasts." },
              { nom: "An online course", pourquoi: "To make progress at their own pace on a subject that draws them." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Create the page in three steps",
        liste: [
          "Choose the \"Birthday\" occasion: the page takes on its colours, pattern and wording.",
          "Add two to ten ideas; paste a product link to fetch its title and image, or describe an experience by hand.",
          "Send the link, or print the QR code on a card. You see the choice on your private link, and you give the gift.",
        ],
      },
      questions: {
        titre: "Questions about birthday gifts",
        liste: [
          {
            q: "How many ideas should I suggest for a birthday?",
            r: "Three or four, of different kinds if you can: a workshop, an object, a small treat. Beyond six, people dither instead of choosing.",
          },
          {
            q: "Can I prepare the page in advance?",
            r: "Yes. Set an opening date and the card stays sealed behind a countdown. Send the link whenever you like; the page opens on the birthday.",
          },
          {
            q: "Does the person see the price of the gifts?",
            r: "Never. They see your ideas, not their prices, and nobody compares.",
          },
        ],
      },
    },

    noel: {
      titreMeta: "Original Christmas gift ideas — MyPresentsForYou",
      descriptionMeta:
        "Original Christmas gift ideas sorted by profile — experiences, winter evenings, people who have everything — and a simple way to let them choose.",
      titre: "Christmas gift ideas: suggest, and let them choose",
      chapo:
        "At Christmas everyone gets a lot, and nobody knows what to give any more. For someone you really want to spoil, suggest three or four ideas and let them choose. The ideas below are sorted by profile.",
      accroche: "Ideas that don't end up at the back of a cupboard.",
      apercu: ["A weekend in the mountains", "A tea gift box", "A cooking class"],
      pourquoi: {
        titre: "Why let them choose at Christmas",
        paragraphes: [
          "Christmas is a year's worth of presents in one evening. Between the children's lists and a little something for everyone, adults often end up with whatever was found in a hurry.",
          "With several ideas instead of one parcel, they see what you came up with, take what they fancy, and end up with what they'd have picked themselves.",
          "Handy when you're giving from far away, too. You send the page by message, the choice comes in before the holidays, and you have time to order.",
        ],
      },
      idees: {
        titre: "Ideas, by profile",
        intro:
          "Ideas to mix on the same page. At Christmas, the thing to do in January often wins: it makes the holidays last.",
        profils: [
          {
            nom: "For someone who loves shared experiences",
            idees: [
              { nom: "A weekend in the mountains or by the sea", pourquoi: "Out of season, to really enjoy it." },
              { nom: "A cooking class for two", pourquoi: "One evening, and recipes that stay." },
              { nom: "Tickets for a show in January", pourquoi: "A date to look forward to once the holidays are over." },
              { nom: "An unusual guided tour", pourquoi: "Tunnels, workshops, backstage: their city seen differently." },
            ],
          },
          {
            nom: "For someone who loves winter evenings",
            idees: [
              { nom: "A tea or coffee gift box", pourquoi: "Something to discover, cup after cup." },
              { nom: "A throw and a good book", pourquoi: "The simplest gift, and often the most appreciated." },
              { nom: "A board game for adults", pourquoi: "For long evenings with family or friends." },
              { nom: "A handmade candle", pourquoi: "Chosen from a workshop that makes them." },
            ],
          },
          {
            nom: "For someone who has everything",
            idees: [
              { nom: "A subscription for a few months", pourquoi: "A magazine, flowers or local produce: the pleasure comes back every month." },
              { nom: "Sponsoring a beehive or a tree", pourquoi: "With news throughout the year." },
              { nom: "A meal at a great restaurant", pourquoi: "The kind of evening people rarely treat themselves to." },
              { nom: "A day with a craftsperson", pourquoi: "To learn a skill with their own hands." },
            ],
          },
          {
            nom: "For someone already planning next year",
            idees: [
              { nom: "A beautiful diary or notebook", pourquoi: "For the plans of the year ahead." },
              { nom: "A travel guide and a map", pourquoi: "For the destination they have talked about for ages." },
              { nom: "Quality sports gear", pourquoi: "For the resolution — kept, this time." },
              { nom: "A short course", pourquoi: "A language, photography, drawing: a project for January." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Create the page in three steps",
        liste: [
          "Choose the \"Christmas\" occasion: the page takes on its winter colours and pattern.",
          "Add two to ten ideas; paste a product link to fetch its title and image, or describe an experience by hand.",
          "Send the link before the holidays, or tuck the QR code into a card under the tree. You see the choice, and order in time.",
        ],
      },
      questions: {
        titre: "Questions about Christmas gifts",
        liste: [
          {
            q: "Can I give to several people in the same family?",
            r: "Yes, one page per person. Each gets their own link and chooses on their own; you find the choices on each page's private link.",
          },
          {
            q: "What if the person doesn't choose before Christmas?",
            r: "You can nudge them, the page stays open. If nobody chooses, it's deleted after a year.",
          },
          {
            q: "Can the card open only on Christmas Eve?",
            r: "Yes. Set an opening date: the card stays sealed behind a countdown, even if you sent the link earlier.",
          },
        ],
      },
    },

    mariage: {
      titreMeta: "Wedding gift ideas for the couple — MyPresentsForYou",
      descriptionMeta:
        "Wedding gift ideas sorted by type of couple, and an alternative to giving cash: suggest a few ideas, and let the newlyweds choose.",
      titre: "Wedding gift ideas: let the newlyweds choose",
      chapo:
        "For a wedding, people waver between the registry, cash in a card and a gift they pick themselves. There's another way: you suggest a few ideas to the couple, on one page, and they decide. The ideas below are sorted by type of couple.",
      accroche: "Between the registry and the envelope: a few ideas, and the couple picks.",
      apercu: ["A gourmet dinner", "A wine-tasting class", "A night at a B&B"],
      pourquoi: {
        titre: "Why let them choose for a wedding",
        paragraphes: [
          "A wedding registry says exactly what to buy. Cash in an envelope says nothing about you. Plenty of guests look for something in between: a personal gift that actually gets used.",
          "A few ideas do both at once. Each one comes from you, and the newlyweds take the one that suits them. No duplicates, and your gift gets used.",
          "You can send the page before or after the wedding. Many people wait a few weeks, until the couple has caught their breath and can look at it together.",
        ],
      },
      idees: {
        titre: "Ideas, by type of couple",
        intro:
          "Ideas for two. Newlyweds often go for the experience to share: it stretches the celebration out by a few months.",
        profils: [
          {
            nom: "A couple who loves going out",
            idees: [
              { nom: "Dinner at a fine restaurant", pourquoi: "For an evening in their first month of marriage." },
              { nom: "Concert or festival tickets", pourquoi: "A date to look forward to together." },
              { nom: "A wine or cocktail class", pourquoi: "Two hours to learn, and enough to do it again at home." },
              { nom: "A river cruise", pourquoi: "A few hours on the water, away from the bustle." },
            ],
          },
          {
            nom: "A couple setting up home",
            idees: [
              { nom: "A beautiful dinner service", pourquoi: "The one that comes out for guests." },
              { nom: "A quality kitchen appliance", pourquoi: "The one people hesitate to buy for themselves." },
              { nom: "A work by a local artist", pourquoi: "A print or an engraving for the couple's first wall." },
              { nom: "Plants and their pots", pourquoi: "To bring the new home to life." },
            ],
          },
          {
            nom: "A couple who loves to travel",
            idees: [
              { nom: "A night at a bed and breakfast", pourquoi: "For a weekend for two, on the date of their choice." },
              { nom: "A suitcase or travel bag", pourquoi: "The thing that will go everywhere with them." },
              { nom: "An activity on the honeymoon", pourquoi: "Diving, a guided hike, a local cooking class." },
              { nom: "An album for the travel photos", pourquoi: "To fill once they are back." },
            ],
          },
          {
            nom: "A couple who has everything",
            idees: [
              { nom: "A contribution to a project", pourquoi: "The trip, the renovation, the first piece of furniture chosen together." },
              { nom: "An illustrated portrait of the couple", pourquoi: "Made by an artist, from a photo." },
              { nom: "An outdoor photo shoot", pourquoi: "Pictures of the two of them, out of their wedding clothes." },
              { nom: "A tree to plant", pourquoi: "A gift that grows with their story." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Create the page in three steps",
        liste: [
          "Choose the \"Wedding\" occasion: the page takes on its palette, its rings pattern and wording addressed to both.",
          "Add two to ten ideas designed for the couple; an experience is easy to describe by hand, with no link.",
          "Send the link to the newlyweds, or tuck the QR code into your congratulations card. You see what they chose, and you give the gift.",
        ],
      },
      questions: {
        titre: "Questions about wedding gifts",
        liste: [
          {
            q: "Does this replace a wedding registry?",
            r: "No, it goes alongside it. The registry says what the couple expects; your page suggests your own ideas. Nothing stops you doing both.",
          },
          {
            q: "Can both newlyweds choose together?",
            r: "Yes, the link opens on any device. They look at the page together and confirm one choice.",
          },
          {
            q: "Can several guests give together?",
            r: "One person puts the page together, but several of you can agree on the ideas, then split the cost once the choice is made.",
          },
        ],
      },
    },

    naissance: {
      titreMeta: "Useful, original new baby gifts — MyPresentsForYou",
      descriptionMeta:
        "Original and useful new baby gift ideas, for the baby or for the parents, and a simple way to let the parents choose what they really need.",
      titre: "New baby gift ideas: let the parents choose",
      chapo:
        "When a baby arrives, presents pour in, often twice over: three sleepsuits in the same size, two cuddly toys, and nothing that's actually missing. Suggest a few ideas and let the parents take the one that will help. The ideas below are sorted by profile.",
      accroche: "Instead of one more cuddly toy, what the parents are really missing.",
      apercu: ["Meals delivered", "A baby wrap", "A photo shoot"],
      pourquoi: {
        titre: "Why let the parents choose",
        paragraphes: [
          "In the first months, parents get a lot, and often the same things. Only they know what's missing: a particular bit of kit, some time, a dinner they don't have to cook.",
          "Suggesting a few ideas leaves them the choice without asking them to write a list. They look when they can, and it takes them ten seconds.",
          "There's no rush: the page stays online for a year. Many parents choose a few weeks later, once they can finally see what would help.",
        ],
      },
      idees: {
        titre: "Ideas, by profile",
        intro:
          "Ideas for the baby, and above all for the parents, who always get forgotten. Mix them on the same page.",
        profils: [
          {
            nom: "To get a little breathing space",
            idees: [
              { nom: "Meals delivered", pourquoi: "A few evenings without cooking, in the first weeks." },
              { nom: "A few hours of home help", pourquoi: "Less cleaning or ironing to do." },
              { nom: "A massage for the birth parent", pourquoi: "Real rest, to take whenever possible." },
              { nom: "An evening of babysitting", pourquoi: "Later on, for a first night out together." },
            ],
          },
          {
            nom: "For everyday life with the baby",
            idees: [
              { nom: "A wrap or baby carrier", pourquoi: "To keep hands free, chosen to suit how they will use it." },
              { nom: "A sleeping bag in the next size up", pourquoi: "The one nobody gives: everyone gives the first size." },
              { nom: "A play mat", pourquoi: "For the first months on the floor." },
              { nom: "A practical changing bag", pourquoi: "Taken everywhere, for years." },
            ],
          },
          {
            nom: "To keep memories",
            idees: [
              { nom: "A newborn photo shoot", pourquoi: "To do in the first few weeks." },
              { nom: "A baby book to fill in", pourquoi: "The first times, written down month by month." },
              { nom: "Hand and foot casts", pourquoi: "A keepsake that lasts." },
              { nom: "An art print of the first photo", pourquoi: "Framed, for the nursery." },
            ],
          },
          {
            nom: "For later on",
            idees: [
              { nom: "Books for the early years", pourquoi: "A small library to grow up with." },
              { nom: "A durable wooden toy", pourquoi: "One that will pass from child to child." },
              { nom: "A payment into a savings account", pourquoi: "A gift that waits for its time." },
              { nom: "Clothes for their second birthday", pourquoi: "For the day everything else is too small." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Create the page in three steps",
        liste: [
          "Choose the \"New baby\" occasion: the page takes on its soft colours and pattern.",
          "Add two to ten ideas; for a service or some rest, a description written by hand is enough.",
          "Send the link to the parents, with no pressure: the page stays online for a year. You see their choice, and you give the gift.",
        ],
      },
      questions: {
        titre: "Questions about new baby gifts",
        liste: [
          {
            q: "Should I wait for the birth to send the page?",
            r: "No. You can prepare it beforehand and send it whenever you like. You can also set an opening date so it stays sealed until then.",
          },
          {
            q: "Is it OK to give to the parents rather than the baby?",
            r: "More and more. A delivered dinner or two hours of cleaning are often the gifts parents remember. Suggest both and let them choose.",
          },
          {
            q: "Do the parents need an account to choose?",
            r: "No. They open the link, choose, confirm. No account, no email address.",
          },
        ],
      },
    },

    cremaillere: {
      titreMeta: "Original housewarming gift ideas — MyPresentsForYou",
      descriptionMeta:
        "Original housewarming gift ideas, for someone living alone or a couple, and a simple way to let them choose what is still missing.",
      titre: "Housewarming gift ideas: what is still missing",
      chapo:
        "When you move in, you find out what's missing over the following weeks. From outside, there's no way to guess. So you might as well suggest a few ideas and let them take the one they'll use. Here are some, sorted by profile.",
      accroche: "What the new place is really missing.",
      apercu: ["A house plant", "A good kitchen knife", "Art for the wall"],
      pourquoi: {
        titre: "Why let them choose for a housewarming",
        paragraphes: [
          "You don't know what's missing until you've lived somewhere for a few weeks. Guests, meanwhile, turn up with a bottle, a plant or a decorative object chosen without having seen the flat.",
          "With several ideas, they decide based on what's in front of them: the space left, the style, what they already have. The gift finds its spot instead of looking for one.",
          "You can send the page after the party, once the boxes are unpacked. That's when the needs become clear.",
        ],
      },
      idees: {
        titre: "Ideas, by profile",
        intro: "Ideas to make the place a home, from the most useful to the most personal.",
        profils: [
          {
            nom: "For someone who loves having people over",
            idees: [
              { nom: "A beautiful set of glasses", pourquoi: "For the first dinners at home." },
              { nom: "A solid wood chopping board", pourquoi: "Useful for everything, and good enough for the table." },
              { nom: "A serving tray", pourquoi: "For drinks as well as breakfast." },
              { nom: "Linen napkins", pourquoi: "The detail that changes a table." },
            ],
          },
          {
            nom: "For someone who loves to cook",
            idees: [
              { nom: "A good kitchen knife", pourquoi: "The tool used every day." },
              { nom: "A cast-iron casserole dish", pourquoi: "For years of slow-cooked meals." },
              { nom: "A seasonal cookbook", pourquoi: "To christen the new kitchen." },
              { nom: "A grinder and a set of spices", pourquoi: "To fill the first cupboards." },
            ],
          },
          {
            nom: "For someone who loves plants and decor",
            idees: [
              { nom: "A large house plant", pourquoi: "Chosen to suit the light in the home." },
              { nom: "A work by a local artist", pourquoi: "A print or an engraving for the first wall." },
              { nom: "A side lamp", pourquoi: "For the corner that still has no light." },
              { nom: "A wall photo frame", pourquoi: "For the memories that are moving in too." },
            ],
          },
          {
            nom: "For someone who prefers useful to decorative",
            idees: [
              { nom: "A complete toolbox", pourquoi: "For the shelves still waiting to go up." },
              { nom: "A handheld vacuum cleaner", pourquoi: "The small appliance everyone ends up buying." },
              { nom: "A few hours of help assembling furniture", pourquoi: "For the furniture still in boxes." },
              { nom: "A smart thermostat", pourquoi: "For a comfortable, efficient home." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Create the page in three steps",
        liste: [
          "Choose the \"Housewarming\" occasion: the page takes on its colours and pattern.",
          "Add two to ten ideas; paste a product link, or describe a service by hand.",
          "Send the link after the party, once they have settled in. You see what was missing, and you give the gift.",
        ],
      },
      questions: {
        titre: "Questions about housewarming gifts",
        liste: [
          {
            q: "Do I need to bring the gift to the housewarming party?",
            r: "Not necessarily. Turn up with a card and the page's QR code: they'll choose later, once they see what's missing.",
          },
          {
            q: "What about a couple moving in together?",
            r: "The link opens on any device. The couple looks at the page together and confirms one choice.",
          },
          {
            q: "Can I suggest an idea without a shop link?",
            r: "Yes. A hand putting furniture together or a plant to pick out together is easy to describe by hand, with a title and a note.",
          },
        ],
      },
    },

    "fete-des-meres": {
      titreMeta: "Original Mother's Day gift ideas — MyPresentsForYou",
      descriptionMeta:
        "Original Mother's Day gift ideas sorted by profile — time together, wellbeing, hobbies — and a simple way to let her choose.",
      titre: "Mother's Day gift ideas: let her choose",
      chapo:
        "For Mother's Day, you want to say thank you without repeating last year's bouquet. Suggest three or four gifts chosen for her, and let her take the one she likes best. The ideas below are sorted by profile.",
      accroche: "Say thank you differently, with ideas she picks from.",
      apercu: ["Brunch for two", "A spa day", "A flower-arranging class"],
      pourquoi: {
        titre: "Why let her choose for Mother's Day",
        paragraphes: [
          "Ask a mother what she'd like and she'll say \"nothing, I'm just happy you're here\". She means it, and it doesn't help you.",
          "With a few ideas in front of her, she keeps the surprise and takes what she really wants: time together, something she'd never buy herself, an activity she's been putting off for months. Along the way you learn what she likes.",
          "The date changes from one country to another, and the page can be ready weeks ahead. Set an opening date and it stays sealed until the day comes.",
        ],
      },
      idees: {
        titre: "Ideas, by profile",
        intro: "Ideas to say thank you, to mix on the same page.",
        profils: [
          {
            nom: "To share a moment",
            idees: [
              { nom: "Brunch somewhere lovely", pourquoi: "A Sunday morning, just the two of you." },
              { nom: "A trip to the theatre or a concert", pourquoi: "An evening to look forward to together." },
              { nom: "A day trip", pourquoi: "To discover a place she often talks about." },
              { nom: "A workshop to do together", pourquoi: "Ceramics, cooking, flower arranging." },
            ],
          },
          {
            nom: "To take care of herself",
            idees: [
              { nom: "A spa day", pourquoi: "Real rest, on the date of her choice." },
              { nom: "A massage or treatment", pourquoi: "An hour just for her." },
              { nom: "A set of handmade skincare products", pourquoi: "Chosen from a small maker." },
              { nom: "A thick cotton bathrobe", pourquoi: "Everyday comfort." },
            ],
          },
          {
            nom: "For her hobbies",
            idees: [
              { nom: "A flower-arranging class", pourquoi: "To make a bouquet, and learn to do it again." },
              { nom: "A beautiful book on a subject she loves", pourquoi: "Gardening, cooking, travel, painting." },
              { nom: "Quality gardening tools", pourquoi: "Tools that last for seasons." },
              { nom: "A photography course", pourquoi: "To capture family memories better." },
            ],
          },
          {
            nom: "To keep a memory",
            idees: [
              { nom: "A family photo book", pourquoi: "The best pictures of recent years." },
              { nom: "An engraved piece of jewellery", pourquoi: "Initials or a date that matter." },
              { nom: "An illustrated portrait", pourquoi: "From a family photo." },
              { nom: "A letter and flowers delivered", pourquoi: "When distance keeps you apart." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Create the page in three steps",
        liste: [
          "Choose the \"Mother's Day\" occasion: the page takes on its palette and opening words.",
          "Add two to ten ideas; a moment to share is easy to describe by hand.",
          "Send the link, or print the QR code on a card. She chooses, you see her choice, and you give the gift.",
        ],
      },
      questions: {
        titre: "Questions about Mother's Day gifts",
        liste: [
          {
            q: "Can I prepare the page several days in advance?",
            r: "Yes. Set an opening date: the card stays sealed behind a countdown until Mother's Day, even if you send the link earlier.",
          },
          {
            q: "What if she isn't comfortable with screens?",
            r: "Print the card: a folded sheet with the QR code, in an envelope. She scans it with her phone, and you can look at the page together.",
          },
          {
            q: "Can several children give together?",
            r: "One person puts the page together, but you can pick the ideas together, sign as a group, then split the cost once the gift is chosen.",
          },
        ],
      },
    },
  },

  sectionCategories: {
    titre: "Choosing the right gift, by type",
    chapo:
      "Perfume, jewellery, books, clothes, wine, home decor: the gifts people hesitate over most. For each one, ideas by style, and a way to stop deciding for someone else.",
  },

  categories: {
    parfum: {
      nom: "Perfume",
      titreMeta: "Which perfume to give? Let them choose — MyPresentsForYou",
      descriptionMeta:
        "Torn between several perfumes? Put them all on one page and let the person pick their own. Ideas sorted by scent family.",
      titre: "Which perfume to give? Don't choose, suggest",
      chapo:
        "Perfume is about the riskiest gift there is: what smells lovely on you may not suit them, and an opened bottle can't go back. Rather than bet on one, suggest two or three and let the person pick the one that feels like them.",
      accroche: "The scent is theirs to choose.",
      apercu: ["A woody perfume", "A fresh citrus cologne", "A miniature perfume set"],
      pourquoi: {
        titre: "Why perfume is so hard to choose for someone else",
        paragraphes: [
          "Perfume smells different on every skin, and what you like wearing says nothing about what they like wearing. Even with good intel, people often end up giving their own taste.",
          "Asking \"which perfume do you want?\" solves the problem and kills the gift. Suggesting two or three scent families keeps the surprise: they discover your ideas, and their nose decides.",
          "If they already have a signature scent, put it on the list next to two new ones. If they pick it again, at least you know you're giving what they love.",
        ],
      },
      idees: {
        titre: "Ideas, by scent family",
        intro:
          "One idea per family is enough: suggesting three woody scents is choosing for them. Mix the families, or put a discovery set next to a full bottle.",
        profils: [
          {
            nom: "Fresh and light",
            idees: [
              { nom: "A citrus eau de toilette", pourquoi: "Bergamot, lemon, grapefruit: light and easy to wear by day." },
              { nom: "An eau de cologne", pourquoi: "The most discreet, for people who dislike scents that shout." },
              { nom: "An aquatic perfume", pourquoi: "Fresh without being sweet, for summer." },
              { nom: "A green tea perfume", pourquoi: "Soft and clean, rarely a misstep." },
            ],
          },
          {
            nom: "Floral and powdery",
            idees: [
              { nom: "A floral perfume", pourquoi: "Rose, jasmine, lily of the valley: the great classic." },
              { nom: "An iris perfume", pourquoi: "Powdery, elegant, less expected than rose." },
              { nom: "An orange blossom perfume", pourquoi: "Bright, with something clean and reassuring about it." },
              { nom: "A scented body mist", pourquoi: "Lighter than perfume, to try a family without committing." },
            ],
          },
          {
            nom: "Woody and warm",
            idees: [
              { nom: "A woody perfume", pourquoi: "Cedar, sandalwood: dry, elegant, for any season." },
              { nom: "An amber perfume", pourquoi: "Vanilla, resins, spices: warm and enveloping, for winter." },
              { nom: "A vetiver perfume", pourquoi: "Earthy and fresh at once, easy to love." },
              { nom: "A leather perfume", pourquoi: "Bolder, for people who like to be noticed." },
            ],
          },
          {
            nom: "To play it completely safe",
            idees: [
              { nom: "A perfume miniature set", pourquoi: "Several scents in small sizes, to find theirs without rushing." },
              { nom: "A perfume-making workshop", pourquoi: "They blend their own with a perfumer: impossible to miss." },
              { nom: "A scented candle", pourquoi: "Scent for the home rather than the skin." },
              { nom: "A reed diffuser", pourquoi: "For people who don't wear perfume but love a home that smells good." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Suggest several perfumes in three steps",
        liste: [
          "Open the editor and pick the occasion: birthday, Christmas, or \"No occasion\".",
          "Add two to four perfumes from different families; paste a product link to fetch its title and image.",
          "Send the link. They choose, you see it on your private link, and you buy the right bottle.",
        ],
      },
      questions: {
        titre: "Questions about perfume as a gift",
        liste: [
          {
            q: "Do I need to know the perfume they already wear?",
            r: "It helps, but it isn't necessary. If you remember it, put it on the list next to two new ones: they'll choose between the safe bet and something new.",
          },
          {
            q: "Is a miniature set a good idea?",
            r: "It's the safest suggestion, and it belongs next to a full bottle: if they're unsure themselves, they'll take the set and find their scent at their own pace.",
          },
          {
            q: "Can I suggest perfume alongside a completely different gift?",
            r: "Yes. A perfume, a concert ticket, a book: ideas can be of different kinds. They see your ideas, never their prices.",
          },
        ],
      },
    },

    bijou: {
      nom: "Jewellery",
      titreMeta: "Which jewellery to give? Let them choose — MyPresentsForYou",
      descriptionMeta:
        "Gold or silver, subtle or bold: torn between several pieces of jewellery? Put them on one page and let the person pick the one they'll wear.",
      titre: "Which jewellery to give? Suggest three, let them choose",
      chapo:
        "Jewellery gets worn every day, or never. Gold or silver, subtle or statement, a ring in the wrong size: there are plenty of ways to get it wrong. Suggest two or three pieces in different styles, and the person picks the one they'll want to wear.",
      accroche: "Gold or silver, subtle or bold: they decide.",
      apercu: ["A fine gold chain", "Silver hoop earrings", "A bangle"],
      pourquoi: {
        titre: "Why jewellery is so hard to choose",
        paragraphes: [
          "Jewellery says something about the style of whoever wears it. What you like in the shop window can stay in its box: too shiny, too plain, wrong metal, wrong length.",
          "Then come the practical traps: a ring size you don't know, ears that aren't pierced, skin that reacts to certain metals. Guessing all of that at once is a gamble.",
          "By suggesting two or three pieces, you keep the surprise — they discover what you imagined for them — and leave them the final word. The one they pick is the one they'll wear.",
        ],
      },
      idees: {
        titre: "Ideas, by style",
        intro:
          "Vary the styles rather than the models: three near-identical necklaces aren't really a choice. And skip rings if you don't know the size.",
        profils: [
          {
            nom: "Subtle, for every day",
            idees: [
              { nom: "A fine gold chain", pourquoi: "Worn alone or layered, and never taken off." },
              { nom: "Stud earrings", pourquoi: "The piece you forget you're wearing." },
              { nom: "A cord bracelet", pourquoi: "Simple and adjustable: no size question." },
              { nom: "An initial pendant", pourquoi: "Small, personal, rarely a misstep." },
            ],
          },
          {
            nom: "Bold",
            idees: [
              { nom: "Gold hoop earrings", pourquoi: "A classic that gets noticed." },
              { nom: "A statement necklace", pourquoi: "For people who let a piece make the outfit." },
              { nom: "Drop earrings", pourquoi: "Movement and light around the face." },
              { nom: "A cocktail ring", pourquoi: "A coloured stone, for evenings out." },
            ],
          },
          {
            nom: "With a story",
            idees: [
              { nom: "A vintage piece of jewellery", pourquoi: "An old, one-of-a-kind piece that has already lived." },
              { nom: "A photo locket", pourquoi: "A memory kept close." },
              { nom: "Engraved jewellery", pourquoi: "A date, a name, a few words inside." },
              { nom: "Handmade designer jewellery", pourquoi: "Made by hand, in small runs." },
            ],
          },
          {
            nom: "No size to guess",
            idees: [
              { nom: "A watch", pourquoi: "An adjustable strap, and something they look at every day." },
              { nom: "A brooch", pourquoi: "Pins onto a coat, a bag, a hat." },
              { nom: "An open cuff bangle", pourquoi: "Fits the wrist without measuring." },
              { nom: "A jewellery box", pourquoi: "To keep what they already own, if you'd rather not add to it." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Suggest several pieces in three steps",
        liste: [
          "Open the editor and pick the occasion, or \"No occasion\" if the jewellery doesn't need a date.",
          "Add two to four pieces in different styles; paste a product link to fetch its title and photo.",
          "Send the link, or print the QR code on a card slipped into an empty jewellery box. You find the choice on your private link.",
        ],
      },
      questions: {
        titre: "Questions about jewellery as a gift",
        liste: [
          {
            q: "What if I don't know their ring size?",
            r: "Suggest a necklace, an adjustable bracelet or earrings instead. If a ring is chosen, most jewellers will resize it after purchase.",
          },
          {
            q: "Gold or silver: how can I tell?",
            r: "Look at what they already wear: watch, glasses, earrings. When in doubt, put one piece in each metal on the list — deciding that is exactly what the page is for.",
          },
          {
            q: "Do they see the price of the jewellery?",
            r: "Never. They see the pieces, not the prices: they choose the one they like, not the most or least expensive.",
          },
        ],
      },
    },

    livre: {
      nom: "Books",
      titreMeta: "Which book to give? Let them choose — MyPresentsForYou",
      descriptionMeta:
        "Novel, non-fiction, coffee-table book or comic: torn between several books? Put them on one page and let the person pick the one they'll read.",
      titre: "Which book to give? Several titles, one choice",
      chapo:
        "Giving a book means betting on someone's taste and a bookshelf you've never seen. The novel everyone is talking about may already be on their bedside table. Suggest two or three titles in different genres, and let them take the one they fancy.",
      accroche: "No more books already read, or novels left unopened.",
      apercu: ["A new novel", "A photography book", "A graphic novel"],
      pourquoi: {
        titre: "Why a book is riskier than it looks",
        paragraphes: [
          "A book seems easy to give: light, affordable, always welcome. In practice there are three ways to miss: they've read it, it isn't their thing, or it comes at the wrong time — an eight-hundred-page brick for someone who reads on the bus.",
          "Suggesting several titles solves all three. They set aside the one they've already read, take the one that speaks to them, and you learn what they feel like reading right now.",
          "Mix the genres: a novel, a non-fiction book, a coffee-table book. Even loyal readers of one genre enjoy choosing between three authors they haven't met yet.",
        ],
      },
      idees: {
        titre: "Ideas, by kind of reading",
        intro:
          "Give precise titles when you can: \"a novel\" can't be chosen, \"this novel by this author\" can. The ideas below are there to help you vary genres.",
        profils: [
          {
            nom: "Novel readers",
            idees: [
              { nom: "A prize-shortlisted novel", pourquoi: "The books everyone's discussing, for people who follow new releases." },
              { nom: "A classic in a beautiful edition", pourquoi: "Clothbound, illustrated: the copy you keep." },
              { nom: "A crime novel", pourquoi: "For evenings when the book never gets put down." },
              { nom: "A graphic novel", pourquoi: "A real story, told in pictures." },
            ],
          },
          {
            nom: "People who love learning",
            idees: [
              { nom: "A popular science book", pourquoi: "To understand the world without a textbook." },
              { nom: "A narrative history book", pourquoi: "An era told like a novel." },
              { nom: "An accessible philosophy book", pourquoi: "Short, clear, and something to talk about afterwards." },
              { nom: "A biography", pourquoi: "A life story, often stranger than fiction." },
            ],
          },
          {
            nom: "People who'd rather browse",
            idees: [
              { nom: "A photography book", pourquoi: "Looked at in pieces, and kept on the coffee table." },
              { nom: "A cookbook", pourquoi: "For people who love hosting, with recipes you make again." },
              { nom: "An illustrated atlas", pourquoi: "Maps and stories, for dreaming of travel." },
              { nom: "A comic book", pourquoi: "A complete story, read in one evening." },
            ],
          },
          {
            nom: "Around reading",
            idees: [
              { nom: "A book subscription box", pourquoi: "A surprise book each month, picked for them." },
              { nom: "An e-reader", pourquoi: "For people who read a lot and lack shelf space." },
              { nom: "An audiobook subscription", pourquoi: "To read while walking, driving or cooking." },
              { nom: "A reading lamp", pourquoi: "To read at night without disturbing anyone." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Suggest several books in three steps",
        liste: [
          "Open the editor and pick the occasion, or \"No occasion\".",
          "Add two to four precise titles; paste the book's link from your bookshop to fetch its cover.",
          "Send the link. They choose, you see it on your private link, and you go and get the right book.",
        ],
      },
      questions: {
        titre: "Questions about books as a gift",
        liste: [
          {
            q: "What if they've already read one of the books?",
            r: "They pick another one: that's the whole point of suggesting several. And now you know not to give it to them.",
          },
          {
            q: "How many books should I suggest?",
            r: "Three is good: enough for a real choice, not so many that they dither. Vary the genres rather than listing authors from the same one.",
          },
          {
            q: "Can I suggest a second-hand book?",
            r: "Yes. An old edition or a second-hand find can make a lovely gift. Paste the listing's link, or describe it by hand with a photo.",
          },
        ],
      },
    },

    vetement: {
      nom: "Clothes",
      titreMeta: "Giving clothes without getting it wrong — MyPresentsForYou",
      descriptionMeta:
        "Size, colour, fit: giving clothes means three guesses. Suggest several pieces on one page, and let the person pick the one they'll actually wear.",
      titre: "Giving clothes without getting the style wrong",
      chapo:
        "Clothes are the gift most often exchanged. Too big, wrong colour, not their style: it ends up as a gift receipt. Suggest two or three pieces, and let the person pick the one they'll actually wear.",
      accroche: "Their size and style: they know best.",
      apercu: ["A merino jumper", "A cashmere scarf", "A ribbed beanie"],
      pourquoi: {
        titre: "Why clothes are hard to choose for others",
        paragraphes: [
          "You rarely know someone's exact size, and it changes from brand to brand. Even the right size isn't enough: cut, fabric and colour decide whether a piece gets worn or stays at the back of the wardrobe.",
          "Suggesting several pieces lets you get the style right, and leaves them to settle what you couldn't guess. Once they've chosen, nothing stops you asking their size: the surprise has already happened.",
          "Start with forgiving pieces: accessories, loose knits, one-size items. Keep trousers and fitted shirts for people whose measurements you know.",
        ],
      },
      idees: {
        titre: "Ideas, from safest to boldest",
        intro:
          "Start with a piece with no size, add a loose knit, and keep a bolder idea for last: they'll see straight away what feels like them.",
        profils: [
          {
            nom: "No size question",
            idees: [
              { nom: "A cashmere scarf", pourquoi: "Soft, warm, and it fits everyone." },
              { nom: "A wool beanie", pourquoi: "One size, and a gift that's used all winter." },
              { nom: "A silk scarf", pourquoi: "Worn at the neck, in the hair, on a bag." },
              { nom: "Wool socks", pourquoi: "A small everyday luxury nobody buys for themselves." },
            ],
          },
          {
            nom: "Comfortable and loose",
            idees: [
              { nom: "A merino wool jumper", pourquoi: "A loose knit forgives an approximate size." },
              { nom: "A long cardigan", pourquoi: "Worn open, and the cut does the rest." },
              { nom: "An organic cotton sweatshirt", pourquoi: "The piece you reach for every weekend." },
              { nom: "Flannel pyjamas", pourquoi: "Winter comfort people never buy themselves." },
            ],
          },
          {
            nom: "A piece that lasts",
            idees: [
              { nom: "A wool coat", pourquoi: "The most-worn piece of the winter." },
              { nom: "A denim jacket", pourquoi: "A basic that never dates." },
              { nom: "A linen shirt", pourquoi: "Light, for summer and travel." },
              { nom: "A raincoat", pourquoi: "The useful purchase that always gets put off." },
            ],
          },
          {
            nom: "Around clothes",
            idees: [
              { nom: "Wool slippers", pourquoi: "A rough size is enough, comfort guaranteed." },
              { nom: "A knitting kit", pourquoi: "To knit their own scarf." },
              { nom: "A sewing class", pourquoi: "To learn to sew or alter their own clothes." },
              { nom: "A clothes brush", pourquoi: "To keep coats and jumpers looking new." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Suggest several pieces in three steps",
        liste: [
          "Open the editor and pick the occasion, or \"No occasion\".",
          "Add two to four pieces in different styles; paste a product link to fetch its photo.",
          "Send the link. Once you see the choice on your private link, all that's left is ordering the right size.",
        ],
      },
      questions: {
        titre: "Questions about clothes as a gift",
        liste: [
          {
            q: "How do I find their size without spoiling the surprise?",
            r: "You don't need it beforehand: they choose the piece first, then you ask their size, or check the label of something they wear often. The page was the surprise.",
          },
          {
            q: "Should I suggest the same item in several colours?",
            r: "You can: the same jumper in three colours is a real choice, especially if you're unsure about the shade. But three different pieces will tell you more about their taste.",
          },
          {
            q: "What if the chosen piece doesn't fit?",
            r: "Order from a shop that accepts exchanges, and keep the receipt. The risk is lower than usual: they chose what they wanted to wear.",
          },
        ],
      },
    },

    vin: {
      nom: "Wine",
      titreMeta: "Which wine to give? Let them choose — MyPresentsForYou",
      descriptionMeta:
        "Red, white, fizz or a tasting set: not sure which wine to give? Suggest several bottles on one page and let the person pick theirs.",
      titre: "Which wine to give? Several bottles, one choice",
      chapo:
        "Giving wine to someone who knows it well is intimidating; giving it to someone who barely drinks falls flat. Between red, white and fizz, suggest two or three bottles and let the person pick the one they want to open.",
      accroche: "Red, white or fizz: they pull the cork.",
      apercu: ["A red for cellaring", "A grower champagne", "A wine tasting set"],
      pourquoi: {
        titre: "Why wine is a tricky gift",
        paragraphes: [
          "Wine is a matter of taste and habit. Enthusiasts have their regions, their grapes, sometimes a full cellar; occasional drinkers prefer an easy bottle to one for laying down. Hard to get right without asking.",
          "Suggesting two or three bottles in different styles avoids the misstep, and the choice becomes a moment of its own: comparing, remembering a trip, imagining the meal.",
          "For someone who drinks little or nothing, slip an alcohol-free idea onto the list: they can choose without having to apologise.",
        ],
      },
      idees: {
        titre: "Ideas, by style",
        intro:
          "Vary colours and uses: a bottle to drink soon, one to keep, an experience. No price is shown: everyone chooses what they fancy.",
        profils: [
          {
            nom: "To open soon",
            idees: [
              { nom: "A fruity red wine", pourquoi: "Gamay, pinot noir: light, for dinner with friends." },
              { nom: "A dry white wine", pourquoi: "For aperitifs or fish." },
              { nom: "A food-friendly rosé", pourquoi: "More serious than a summer rosé, made for the table." },
              { nom: "A natural wine", pourquoi: "For people who like lively, slightly surprising wines." },
            ],
          },
          {
            nom: "For big occasions",
            idees: [
              { nom: "A grower champagne", pourquoi: "Bubbles from small producers, more personal." },
              { nom: "A crémant", pourquoi: "Made the same way, from other regions." },
              { nom: "A wine for cellaring", pourquoi: "To forget in the cellar for a few years." },
              { nom: "A dessert wine", pourquoi: "Sweet or fortified: for pudding or cheese." },
            ],
          },
          {
            nom: "To discover",
            idees: [
              { nom: "A wine tasting set", pourquoi: "Several small bottles, to compare." },
              { nom: "A wine subscription box", pourquoi: "A selection every month, with tasting notes." },
              { nom: "A wine tasting class", pourquoi: "Learn to taste in a few hours." },
              { nom: "A vineyard tour", pourquoi: "A day among the vines, tasting included." },
            ],
          },
          {
            nom: "Around wine, or alcohol-free",
            idees: [
              { nom: "A wine decanter", pourquoi: "To open up young wines and serve them with care." },
              { nom: "Wine glasses", pourquoi: "A good glass really changes the tasting." },
              { nom: "An alcohol-free wine", pourquoi: "For people who don't drink, without giving up the ritual." },
              { nom: "A waiter's friend corkscrew", pourquoi: "The tool that lasts a lifetime." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Suggest several wines in three steps",
        liste: [
          "Open the editor and pick the occasion: birthday, housewarming, or \"No occasion\".",
          "Add two to four bottles in different styles; paste the wine merchant's link to fetch the label.",
          "Send the link. You see the chosen bottle on your private link, and you give it — or open it together.",
        ],
      },
      questions: {
        titre: "Questions about wine as a gift",
        liste: [
          {
            q: "How do I give wine to someone who knows a lot about it?",
            r: "Don't try to compete on their ground: suggest a lesser-known region, a small producer, a vineyard visit. They'll choose whatever intrigues them.",
          },
          {
            q: "What if they don't drink alcohol?",
            r: "Put an alcohol-free idea on the list, or swap the wine for what goes with it: nice glasses, a class, a deli hamper.",
          },
          {
            q: "How should I present the chosen bottle?",
            r: "Print the card with its QR code and hang it from the neck of the bottle: they find the page again, and the choice they made.",
          },
        ],
      },
    },

    deco: {
      nom: "Home decor",
      titreMeta: "Home decor gifts, without guessing — MyPresentsForYou",
      descriptionMeta:
        "Vase, lamp, print or throw: home decor is a matter of taste. Suggest several pieces on one page and let the person pick the one for their home.",
      titre: "Giving home decor without imposing your taste",
      chapo:
        "A decorative piece will live in someone else's home, every day, in plain sight. If the style doesn't fit, it ends up in a cupboard — or stays out of politeness. Suggest two or three pieces, and let the person pick the one that will find its place.",
      accroche: "At home, people choose what they look at every day.",
      apercu: ["A ceramic vase", "A table lamp", "A framed print"],
      pourquoi: {
        titre: "Why decor is hard to choose for others",
        paragraphes: [
          "Home decor is the most visible gift there is: it stays in front of the person, and their guests. It's also the most personal. Colours, materials, style: what looks good in a shop can clash in a living room you barely know.",
          "Suggesting several pieces lets you aim at a mood rather than a specific object. They take the one that goes with what they already have, and you don't have to guess the colour of the sofa.",
          "It's also the right approach for a housewarming: the couple look at the page together and choose what comes into their new home.",
        ],
      },
      idees: {
        titre: "Ideas, by mood",
        intro:
          "Mix moods and sizes: a small object, a useful one, a bolder piece. They'll see straight away what feels like them.",
        profils: [
          {
            nom: "Natural and warm",
            idees: [
              { nom: "A ceramic vase", pourquoi: "Handmade, with flowers or on its own." },
              { nom: "A wool throw", pourquoi: "On the sofa, and used all winter." },
              { nom: "A woven basket", pourquoi: "For storage, or to dress up a plant." },
              { nom: "An easy-care houseplant", pourquoi: "With its pot, and little upkeep." },
            ],
          },
          {
            nom: "Minimal",
            idees: [
              { nom: "A table lamp", pourquoi: "Light changes a room more than furniture." },
              { nom: "A round mirror", pourquoi: "Makes a hallway feel bigger and brighter." },
              { nom: "A wall clock", pourquoi: "A simple object that always finds a wall." },
              { nom: "Brass candle holders", pourquoi: "For the table, on dinner-party evenings." },
            ],
          },
          {
            nom: "Colourful and bold",
            idees: [
              { nom: "A framed art print", pourquoi: "Illustration, photography: art on the wall without breaking the bank." },
              { nom: "An embroidered cushion", pourquoi: "A touch of colour that's easy to change." },
              { nom: "A Berber rug", pourquoi: "Warms up a room in one go." },
              { nom: "An artist's lithograph", pourquoi: "A numbered work, to start a collection." },
            ],
          },
          {
            nom: "Useful first",
            idees: [
              { nom: "A scented candle", pourquoi: "The small gift that actually gets lit." },
              { nom: "An essential oil diffuser", pourquoi: "For the smell of the home." },
              { nom: "A wall shelf", pourquoi: "For books, plants and keepsakes." },
              { nom: "A catch-all tray", pourquoi: "For the hallway, the desk or the bedside table." },
            ],
          },
        ],
      },
      etapes: {
        titre: "Suggest several pieces in three steps",
        liste: [
          "Open the editor and pick the occasion: housewarming, birthday, or \"No occasion\".",
          "Add two to four pieces in different moods; paste a product link to fetch its photo.",
          "Send the link. You see the choice on your private link, and give the piece that will find its place.",
        ],
      },
      questions: {
        titre: "Questions about home decor as a gift",
        liste: [
          {
            q: "How do I choose without knowing their home?",
            r: "You don't need to know it: suggest different moods, and they know what will go at home. Their choice tells you something for next time.",
          },
          {
            q: "Is a piece of art too personal?",
            r: "On its own, maybe. Among two other suggestions, no: if it doesn't speak to them, they'll pick something else, without having to say so.",
          },
          {
            q: "Can I give decor to a couple moving in together?",
            r: "Yes, it's the ideal occasion: one page, the couple look at it together and choose what comes into their new home. The housewarming guide has more ideas.",
          },
        ],
      },
    },
  },
};
