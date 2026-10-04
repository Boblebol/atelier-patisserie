import { PastryCreation, Review, FaqItem } from '../types';

export const siteConfig = {
  name: "L'Atelier Pâtisserie",
  chefTitle: "Cheffe Pâtissière Passionnée",
  tagline: "Haute pâtisserie artisanale, créations sur mesure & émotions gourmandes",
  location: "Paris & Île-de-France (Retrait en atelier ou livraison sur devis)",
  phone: "+33 6 00 00 00 00", // Remplacer par son vrai numéro
  whatsappNumber: "33600000000", // Sans le '+' pour le lien wa.me
  instagramHandle: "patisserie.artisanale", // Remplacer par son vrai compte Instagram
  instagramUrl: "https://instagram.com",
  email: "contact@latelier-patisserie.fr",
  leadTimeNotice: "Commandes 48h à 72h à l'avance pour garantir la fraîcheur maximale",
  
  commitments: [
    {
      title: "100% Fait Maison",
      desc: "Chaque biscuit, crème, insert et glaçage est confectionné artisanalement à la main.",
      icon: "Sparkles"
    },
    {
      title: "Ingrédients Nobles",
      desc: "Vanille Bourbon de Madagascar, chocolat pur beurre de cacao, fruits frais du marché.",
      icon: "Award"
    },
    {
      title: "Créations Uniques",
      desc: "Design personnalisé selon votre thème : anniversaires, mariages, baptêmes et fêtes.",
      icon: "Heart"
    },
    {
      title: "Fraîcheur Absolue",
      desc: "Réalisé le jour même ou la veille du retrait pour une texture et un goût incomparables.",
      icon: "Clock"
    }
  ],

  flavorOptions: [
    { label: "Vanille Bourbon & Framboises fraîches", category: "Fruité" },
    { label: "Chocolat Noir Grand Cru & Cœur Coulant Noisette", category: "Gourmand" },
    { label: "Kinder Bueno & Crème Mascarpone Légère", category: "Gourmand" },
    { label: "Exotique : Mangue, Passion & Noix de Coco", category: "Fruité" },
    { label: "Pistache d'Iran & Fleur d'Oranger", category: "Raffiné" },
    { label: "Caramel Beurre Salé & Praliné Croustillant", category: "Gourmand" }
  ],

  portionSizes: [
    { portions: 6, label: "6 parts (Intime)", priceFactor: 1.0 },
    { portions: 8, label: "8-10 parts (Famille)", priceFactor: 1.35 },
    { portions: 12, label: "12-14 parts (Fête)", priceFactor: 1.8 },
    { portions: 16, label: "16-20 parts (Grand Événement)", priceFactor: 2.3 },
    { portions: 25, label: "25+ parts (Sur mesure / Étage)", priceFactor: 3.2 }
  ]
};

export const creationsCatalog: PastryCreation[] = [
  {
    id: "entremets-miroir-fruits-rouges",
    title: "L'Écrin Miroir Fruits Rouges & Figues",
    subtitle: "Entremets signature au glaçage ivoire marbré & fruits frais du verger",
    category: "entremets",
    categoryLabel: "Entremets Miroir",
    description: "Une création d'une finesse absolue. Un glaçage miroir immaculé marbré de coulis de fruits rouges, délicatement orné de figues fraîches charnues, framboises fondantes, myrtilles sauvages et groseilles acidulées. Plaquette d'anniversaire personnalisée calligraphiée à la main.",
    portionRange: "6 à 16 parts",
    basePrice: 42,
    highlightBadge: "Coup de Cœur",
    mainImage: "/images/entremets-miroir-fruits-rouges-close.jpg",
    mainImageWebp: "/images/webp/entremets-miroir-fruits-rouges-close.webp",
    galleryImages: [
      {
        src: "/images/entremets-miroir-fruits-rouges-close.jpg",
        webp: "/images/webp/entremets-miroir-fruits-rouges-close.webp",
        caption: "Zoom sur le glaçage miroir brillant et les figues fraîches",
        angle: "Vue Rapprochée"
      },
      {
        src: "/images/entremets-miroir-fruits-rouges-flatlay.jpg",
        webp: "/images/webp/entremets-miroir-fruits-rouges-flatlay.webp",
        caption: "Vue aérienne de l'entremets avec plat doré festif",
        angle: "Vue du Dessus"
      },
      {
        src: "/images/entremets-miroir-fruits-rouges-angle.jpg",
        webp: "/images/webp/entremets-miroir-fruits-rouges-angle.webp",
        caption: "Couronne de fruits rouges et calligraphie Joyeux Anniversaire",
        angle: "Angle 3/4"
      },
      {
        src: "/images/entremets-miroir-fruits-rouges-macro.jpg",
        webp: "/images/webp/entremets-miroir-fruits-rouges-macro.webp",
        caption: "Texture marbrée du coulis artisanal et éclat des baies",
        angle: "Macro Gourmande"
      },
      {
        src: "/images/entremets-miroir-fruits-rouges-side.jpg",
        webp: "/images/webp/entremets-miroir-fruits-rouges-side.webp",
        caption: "Ligne épurée et tombée de glaçage soyeux",
        angle: "Profil Élégant"
      },
      {
        src: "/images/entremets-miroir-fruits-rouges-top.jpg",
        webp: "/images/webp/entremets-miroir-fruits-rouges-top.webp",
        caption: "Présentation sur support étoilé or",
        angle: "Vue Globale"
      }
    ],
    composition: {
      biscuit: "Génoise moelleuse à la vanille de Madagascar ou financier amande",
      creme: "Mousse légère et aérienne au chocolat blanc vanillé",
      insert: "Cœur coulant compotée de fruits des bois acidulés",
      glacage: "Glaçage miroir ivoire marbré au jus de framboise",
      decorations: [
        "Figues violettes fraîches coupées en quartiers",
        "Framboises, myrtilles sauvages, mûres et groseilles",
        "Plaquette chocolat blanc personnalisée calligraphiée",
        "Touches d'éclats dorés"
      ]
    },
    allergens: ["Gluten (farine)", "Œufs", "Lait & dérivés", "Fruits à coque (selon biscuit choisi)"],
    leadTimeHours: 48
  },
  {
    id: "drip-cake-kinder-bueno-chocolat",
    title: "Le Drip Cake Céleste Kinder Bueno & Chocolat",
    subtitle: "Layer cake ultra-gourmand pour anniversaires inoubliables (34 ans)",
    category: "drip-cake",
    categoryLabel: "Drip & Layer Cakes",
    description: "Le clou du spectacle pour les passionnés de chocolat et de gourmandise régressive. Plusieurs étages de gâteau moelleux garnis d'une crème fouettée onctueuse mascarpone-vanille, recouverts d'un coulage chocolat noir intense ('drip effect'), d'une couronne pochée à la ganache chocolat et d'une avalanche de barres Kinder Bueno blanches et au lait, barres chocolatées et inscription personnalisée au caramel doré.",
    portionRange: "8 à 25 parts",
    basePrice: 55,
    highlightBadge: "Best-Seller Fêtes",
    mainImage: "/images/drip-cake-kinder-chocolat-front.jpg",
    mainImageWebp: "/images/webp/drip-cake-kinder-chocolat-front.webp",
    galleryImages: [
      {
        src: "/images/drip-cake-kinder-chocolat-front.jpg",
        webp: "/images/webp/drip-cake-kinder-chocolat-front.webp",
        caption: "Face majestueuse dévoilant les coulures chocolat et les inclusions Kinder",
        angle: "Vue de Face"
      },
      {
        src: "/images/drip-cake-kinder-chocolat-angle.jpg",
        webp: "/images/webp/drip-cake-kinder-chocolat-angle.webp",
        caption: "Mise en situation sur table de fête avec inscription personnalisée 34 ans",
        angle: "Vue d'Ambiance"
      },
      {
        src: "/images/drip-cake-kinder-chocolat-top.jpg",
        webp: "/images/webp/drip-cake-kinder-chocolat-top.webp",
        caption: "Couronne supérieure généreusement pochée et garnie de Kinder Bueno",
        angle: "Vue du Dessus"
      },
      {
        src: "/images/drip-cake-kinder-chocolat-detail.jpg",
        webp: "/images/webp/drip-cake-kinder-chocolat-detail.webp",
        caption: "Gros plan sur les textures de ganache et les perles de fruits rouges contrastantes",
        angle: "Zoom Gourmand"
      }
    ],
    composition: {
      biscuit: "Molly cake cacao intense, ultra moelleux et fondant",
      creme: "Crème légère mascarpone & vanille, ganache montée chocolat au lait",
      insert: "Praliné croustillant noisettes du Piémont & brisures de crêpes dentelles",
      glacage: "Drip coulant au chocolat noir 64% pur beurre de cacao",
      decorations: [
        "Barres de Kinder Bueno lait & blanc croustillantes",
        "Barres de chocolat au lait & KitKat blanc",
        "Pochage festonné à la ganache montée",
        "Calligraphie d'âge ou prénom au caramel au beurre salé",
        "Touche de baies rouges fraîches pour la fraîcheur"
      ]
    },
    allergens: ["Gluten", "Œufs", "Lait", "Soja", "Noisettes"],
    leadTimeHours: 72
  }
];

export const reviewsList: Review[] = [
  {
    id: "1",
    author: "Sophie M.",
    event: "Anniversaire 30 ans",
    rating: 5,
    comment: "L'entremets aux fruits rouges et figues a fait sensation ! Le glaçage miroir était aussi beau qu'en boutique étoilée et l'équilibre entre la douceur de la mousse et l'acidité des fruits était magique. Un vrai travail d'artiste.",
    cakeName: "L'Écrin Miroir Fruits Rouges",
    date: "Il y a 2 semaines"
  },
  {
    id: "2",
    author: "Julien & Camille",
    event: "Anniversaire 34 ans",
    rating: 5,
    comment: "Le Drip Cake Kinder Bueno était tout simplement grandiose ! Nos invités ont pris des photos avant de tout dévorer. Le Molly cake au chocolat était ultra moelleux et pas du tout écoeurant grâce au croustillant praliné. On recommande à 1000% !",
    cakeName: "Le Drip Cake Kinder Bueno",
    date: "Il y a 3 semaines"
  },
  {
    id: "3",
    author: "Élodie B.",
    event: "Fête de famille",
    rating: 5,
    comment: "Communication au top, livraison ponctuelle et gâteau impeccable. On sent l'amour du détail et la qualité des ingrédients dans chaque bouchée. Bravo !",
    cakeName: "Création Personnalisée",
    date: "Il y a 1 mois"
  }
];

export const faqList: FaqItem[] = [
  {
    question: "Combien de temps à l'avance dois-je passer ma commande ?",
    answer: "Nous vous conseillons de réserver votre gâteau au minimum 48h à 72h à l'avance pour les entremets et drip cakes standards. Pour les pièces montées ou événements importants (plus de 20 personnes), un délai d'une à deux semaines est recommandé afin de réserver votre créneau de confection."
  },
  {
    question: "Puis-je personnaliser le gâteau (prénom, âge, couleurs, thème) ?",
    answer: "Absolument ! Chaque création est unique. Vous pouvez choisir l'inscription (plaque chocolat ou calligraphie caramel), les chiffres d'âge, les saveurs de biscuits et crèmes, ainsi que les éléments décoratifs."
  },
  {
    question: "Comment conserver mon gâteau avant la dégustation ?",
    answer: "Tous nos gâteaux sont frais et sans conservateurs. Ils doivent être conservés au réfrigérateur entre 2°C et 4°C dans leur boîte. Pour apprécier toutes les saveurs, nous vous conseillons de sortir les Layer Cakes et Drip Cakes 20 minutes avant la dégustation, tandis que les Entremets Miroir se dégustent bien frais."
  },
  {
    question: "Comment se déroule la livraison ou le retrait ?",
    answer: "Le retrait se fait directement à l'atelier (Paris / Île-de-France) sur rendez-vous fixé ensemble. Une livraison personnalisée en véhicule réfrigéré ou adapté est également possible sur devis selon votre localité."
  },
  {
    question: "Gérez-vous les allergies et régimes alimentaires ?",
    answer: "Nous pouvons adapter certaines recettes (options sans fruits à coque, sans alcool, options végétariennes). Cependant, nos créations étant réalisées dans un atelier utilisant farine de blé, œufs et produits laitiers, nous ne pouvons garantir une absence totale de traces d'allergènes."
  }
];
