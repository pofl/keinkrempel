export const business = {
  name: "kein-krempel",
  legalName: 'A&V "kein-krempel"',
  tagline: "Generalüberholte Haushaltsgeräte aus Chemnitz",
  phone: "0371 670557",
  phoneHref: "tel:+49371670557",
  address: {
    street: "Reichenhainer Straße 48",
    note: "Einfahrt über die Ebertstraße",
    zip: "09126",
    city: "Chemnitz",
    district: "Bernsdorf",
  },
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Reichenhainer+Stra%C3%9Fe+48%2C+09126+Chemnitz",
  hours: [
    { days: "Mo – Fr", time: "10 – 17 Uhr" },
    { days: "Sa", time: "10 – 12 Uhr" },
  ],
  warrantyMonths: 16,
  categories: [
    { name: "Waschmaschinen", short: "Waschen" },
    { name: "Trockner", short: "Trocknen" },
    { name: "Herde", short: "Kochen" },
    { name: "Geschirrspüler", short: "Spülen" },
    { name: "Kühlgeräte", short: "Kühlen" },
  ],
  refurbishSteps: [
    "Technisch überholt",
    "Komplett entkalkt",
    "Gereinigt und desinfiziert",
    "Mehrere Testläufe, auch unter Last",
    "Geprüft nach DIN VDE 0701",
  ],
  repair: {
    intro:
      "Gerät defekt? Bringen Sie es vorbei – wir testen es und erstellen auf Wunsch eine Fehlerdiagnose inklusive Kostenvoranschlag.",
    options: [
      {
        name: "Kleine Fehlerdiagnose",
        price: "12,50 €",
        text: "Testlauf und Sichtung des Geräts. Zeigt schnell, ob sich eine erweiterte Diagnose lohnt.",
      },
      {
        name: "Erweiterte Fehlerdiagnose",
        price: "38,50 €",
        text: "Fehler auslesen, Ursache genau eingrenzen, Kostenvoranschlag für die Reparatur.",
      },
    ],
    parts: "Großes Ersatzteillager für fast jede Marke – gebraucht oder neu, schnell und preiswert.",
  },
  delivery: {
    intro:
      "Ein Auto, ein Preis: Egal ob ein oder drei Geräte – solange ein Transporter reicht, zahlen Sie den Transport nur einmal.",
    options: [
      { name: "Bis vor die Haustür", detail: "frei Bordsteinkante", price: "15 €" },
      { name: "Bis in die Wohnung", detail: "bis einschl. 2. OG", price: "35 €" },
      { name: "Bis in die Wohnung", detail: "ab 3. OG", price: "40 €" },
    ],
    note: "Preise innerhalb von Chemnitz für Herde, Geschirrspüler, Kühlschränke, Waschmaschinen und Trockner. Sachsenweiter Versand auf Anfrage.",
  },
  pickup: {
    intro:
      "Altes Gerät loswerden? Wir kommen vorbei, machen ein Angebot, zahlen sofort und laden auf. Kostenfrei – auch wenn wir nicht ins Geschäft kommen.",
    checklist: [
      "Geräteart (z. B. Waschmaschine Toplader)",
      "Hersteller und Typ (Bedienblende oder Typenschild)",
      "Farbe",
      "Ungefähres Alter",
      "Preisvorstellung – oder kostenlose Abholung bei Defekt",
    ],
  },
};

export const designs = [
  {
    slug: "werkstatt",
    name: "Werkstatt",
    mood: "Industriell, ehrlich, Prüfprotokoll-Ästhetik. Anthrazit und Signalorange.",
  },
  {
    slug: "kreislauf",
    name: "Kreislauf",
    mood: "Warmes Editorial mit Nachhaltigkeits-Fokus. Creme, Tannengrün, Serifen.",
  },
  {
    slug: "waschsalon",
    name: "Waschsalon",
    mood: "Verspielt und lokal. Kräftige Farben, Sticker, eine drehende Trommel.",
  },
  {
    slug: "raster",
    name: "Raster",
    mood: "Schweizer Typografie. Weiß, Schwarz, ein Rot. Große Zahlen, strenges Raster.",
  },
  {
    slug: "ostmoderne",
    name: "Ostmoderne",
    mood: "Retro-Katalog der 70er, Karl-Marx-Stadt-Nostalgie. Senf, Petrol, Rundungen.",
  },
  {
    slug: "fassade",
    name: "Fassade",
    mood: "Die Ladenfront als Website: orange Wand, weite Versalien, Inhalte in weißen Fenstern.",
  },
  {
    slug: "maskottchen",
    name: "Maskottchen",
    mood: "Die Comic-Geräte von der Hauswand erzählen. Sprechblasen, Daumen hoch, viel Weiß.",
  },
  {
    slug: "signet",
    name: "Signet",
    mood: "Das KK-Zeichen als Markensystem. Muster, harte Orange-Schwarz-Teilung, klar und modern.",
  },
  {
    slug: "typenschild",
    name: "Typenschild",
    mood: "Geräte-Typenschilder in Aluminiumgrau, Markenorange als Prüfsiegel.",
  },
  {
    slug: "leuchtreklame",
    name: "Leuchtreklame",
    mood: "Die Fassade nach Feierabend: dunkelgraue Nacht, das Schild leuchtet orange.",
  },
] as const;
