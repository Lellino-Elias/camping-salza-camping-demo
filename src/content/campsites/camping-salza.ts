import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-salza";

const campingSalza: CampsiteConfig = {
  name: "Camping & Restaurant Saggraben",
  shortName: "Saggraben",
  slug: "camping-salza",
  ort: "Palfau",
  region: "Steiermark",
  brandKind: "Camping & Restaurant",
  regionLong: "Naturpark Steirische Eisenwurzen · Nationalparkregion Gesäuse · Steiermark",

  heroVariant: "center",

  claim: "Dein Basislager am Ufer der Salza",
  claimEmphasis: "am Ufer der Salza",
  emailDetail: "eure Lage direkt an der Ausstiegsstelle der Salza",
  intro:
    "Mitten im Naturpark Eisenwurzen, direkt an der Ausstiegsstelle der Salza: 37 Stellplätze, gemütliche Hütten und das Restaurant Sälzam — dein Quartier zwischen Wildwasser, Wald und Fels.",

  logo: { src: `${IMG}/logo-ea42bba67c.png`, alt: "Logo Sälzam am Campingplatz Saggraben" },

  statement: {
    text: "Wo die Raftingtour endet, beginnt der Lagerfeuerabend — direkt am Ufer der Salza.",
    emphasis: "Lagerfeuerabend",
  },

  pillars: [
    {
      title: "Direkt an der Salza",
      text: "Der Platz grenzt unmittelbar an die Salza — einen der wenigen Flüsse mit Trinkwasserqualität, befahrbar mit Raft und Kanu.",
      image: { src: `${IMG}/hero-dcef95b104.webp`, alt: "Türkises Wasser der Salza zwischen felsigen Ufern bei Palfau" },
    },
    {
      title: "Restaurant Sälzam",
      text: "Internationale Schmankerl, große überdachte Terrasse und abendlicher Pub-Betrieb — das Restaurant Sälzam liegt im Hauptgebäude des Platzes.",
      image: { src: `${IMG}/hero-6dd1afe69a.webp`, alt: "Hauptgebäude mit Restaurant Sälzam am Campingplatz Saggraben" },
    },
    {
      title: "Dein Wildwasser-Basislager",
      text: "Deep Roots Adventures ist seit 1998 auf der Salza unterwegs — der Campingplatz ist das Basislager direkt an der Hauptausstiegsstelle.",
      image: { src: `${IMG}/hero-ab55e32c6b.webp`, alt: "Raftingboot im Wildwasser der Salza" },
    },
  ],

  usps: [
    "Direkt an der Salza",
    "37 Stellplätze",
    "Eigene Feuerstellen",
    "Restaurant & Pub",
    "Boots- & Ausrüstungsverleih",
    "Hütten & Appartment",
  ],

  trust: {
    heading: "Hier wohnt der Rafting-Veranstalter selbst",
    headingEmphasis: "Rafting-Veranstalter",
    intro:
      "Deep Roots Adventures betreibt den Platz selbst — direkt an der Hauptausstiegsstelle der Salza. Kurze Wege ins Wildwasser, ein eigenes Restaurant am Platz und die Berge des Gesäuses ringsum.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-352d2c0e3d.webp`, alt: "Die Salza bei Palfau aus der Luft — türkises Wasser im bewaldeten Tal" },
  },

  camping: {
    heading: "Dein Platz an der Salza",
    intro:
      "Vom Zelt bis zur Hütte, vom Lagerfeuer bis zum Wildwasser — am Saggraben hast du den Fluss, die Berge und alles Nötige direkt am Platz.",
    features: [
      {
        title: "Wildromantische Salza",
        text: "Die Salza zählt zu den wenigen Flüssen mit Trinkwasserqualität — wildromantisch zwischen dichten Wäldern und Felswänden.",
        image: { src: `${IMG}/hero-06c439a562.webp`, alt: "Raft auf der Salza, eingerahmt von herbstlichem Wald" },
      },
      {
        title: "Schmankerl & Grillabende",
        text: "Internationale Küche, ausgiebige Grillabende für Gruppen und abendlicher Pub-Betrieb im Restaurant Sälzam mit überdachter Terrasse.",
        image: { src: `${IMG}/hero-adee305636.webp`, alt: "Burger mit Pommes im Restaurant Sälzam" },
      },
      {
        title: "Rafting auf der Salza",
        text: "Deep Roots Adventures bringt dich seit 1998 aufs Wildwasser — von der Familientour bis zur Ganztagestour auf der Salza.",
        image: { src: `${IMG}/hero-f5315817a8.webp`, alt: "Schlauchboot auf dem türkisen Wasser der Salza" },
      },
      {
        title: "Canyoning in den Schluchten",
        text: "Abseilen, Springen und Rutschen durch enge Schluchten — geführte Canyoning-Touren für Genießer wie Adrenalinfinder.",
        image: { src: `${IMG}/hero-d1574ec627.webp`, alt: "Person beim Canyoning in einer Schlucht" },
      },
      {
        title: "Idyllische Hütten am Platz",
        text: "Zwei komfortabel eingerichtete Hütten mit Stromanschluss bieten Platz für je fünf Personen — direkt am Campingplatz Saggraben.",
        image: { src: `${IMG}/kids-85e748d368.webp`, alt: "Hölzerne Familienhütte am Campingplatz Saggraben vor bewaldetem Hang" },
      },
    ],
  },

  mobilheime: {
    heading: "Schlafen mit festem Dach",
    intro:
      "Kein Zelt dabei? Hütte, Appartment und Bettenlager stehen direkt am Platz — alle mit Zugang zu Restaurant, Sanitäranlagen und Salza.",
    items: [
      {
        name: "Familienhütte",
        kind: "Hütte für bis zu 5 Personen",
        text: "Zwei komfortabel eingerichtete Hütten mit Stromanschluss, jeweils Platz für fünf Personen — und Zugang zu allen Services des Platzes.",
        image: { src: `${IMG}/gallery-a0e46fd192.webp`, alt: "Wohnraum der Familienhütte mit Kaminofen und Couch" },
        priceFrom: 32,
        features: ["Platz für 5 Personen", "Stromanschluss", "Gemütlicher Wohnraum"],
      },
      {
        name: "Appartment",
        kind: "Zimmer mit Küche",
        text: "Für bis zu 4 Erwachsene und 3 Kinder: voll ausgestattete Küche, Kaffeemaschine und eigene Dusche am Zimmer.",
        image: { src: `${IMG}/gallery-4fe623a33e.webp`, alt: "Modernes Appartment mit Bett, Regal und Esstisch" },
        priceFrom: 60,
        features: ["4 Erwachsene + 3 Kinder", "Voll ausgestattete Küche", "Kaffeemaschine", "Dusche am Zimmer"],
      },
      {
        name: "Bettenlager",
        kind: "Schlaflager für Gruppen",
        text: "Im Hauptgebäude: 10 Schlafstellen, alle Betten bezogen und die Zimmer beheizt — Schlafsäcke sind nicht nötig.",
        image: { src: `${IMG}/gallery-821929ff91.webp`, alt: "Bettenlager mit Stockbetten und Balkontür im Hauptgebäude" },
        priceFrom: 25,
        features: ["10 Schlafstellen", "Betten bezogen", "Beheizte Zimmer"],
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Palfau",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Ennstal Straße (B146) in die Nationalparkregion Gesäuse; der Platz liegt in Palfau direkt an der Hauptausstiegsstelle der Salza.",
      },
      {
        title: "Mit der Bahn",
        text: "Über die Gesäusebahn ins Ennstal, die letzten Kilometer nach Palfau am besten mit Auto oder Transfer.",
      },
    ],
  },

  galerie: {
    heading: "Drinnen am Saggraben",
    headingEmphasis: "Saggraben",
    intro:
      "Ein paar Eindrücke von Hütten, Appartment und Bettenlager — viel Holz, warmes Licht und gemütliche Plätze zum Ankommen.",
    tag: "Hütten & Appartment",
    moreCount: 6,
    images: [
      { src: `${IMG}/gallery-96b911bfea.webp`, alt: "Gemütlicher Wohnraum in der Familienhütte mit Holzwänden" },
      { src: `${IMG}/gallery-018a582aa7.webp`, alt: "Schlafplätze unter dem Dach der Familienhütte" },
      { src: `${IMG}/gallery-8308cfd228.webp`, alt: "Modernes Appartment mit Wohn- und Essbereich" },
      { src: `${IMG}/gallery-7a40cecf15.webp`, alt: "Küchenzeile und Essplatz im Appartment" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz an der Salza",
    headingEmphasis: "an der Salza",
    intro:
      "Wähle Unterkunft und Zeitraum — Siegfried Wiesenbauer und das Team melden sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise pro Übernachtung · Endpreis je nach Unterkunft, Belegung und Saison · zzgl. evtl. Ortstaxe",
    highlight: { title: "Mittendrin statt weit weg", text: "Vom Stellplatz sind es nur Schritte bis zur Ausstiegsstelle der Salza." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 12 },
      { id: "bettenlager", label: "Bettenlager", perNight: 25 },
      { id: "huette", label: "Familienhütte", perNight: 32 },
      { id: "appartment", label: "Appartment", perNight: 60 },
    ],
  },

  kontakt: {
    coords: { lat: 47.689058, lng: 14.776395 },
    tel: "+43 664 14 48 763",
    telHref: "tel:+436641448763",
    mail: "info@camping-salza.at",
    adresse: "Palfau 4 · 8923 Palfau · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Der Platz", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Restaurant", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingSalza;
