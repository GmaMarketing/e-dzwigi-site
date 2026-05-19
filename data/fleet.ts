export type FleetMachine = {
  slug: string;
  model: string;
  seoH1: string;
  displayName: string;
  type: string;
  displayType: string;
  meter: string;
  specs: Record<string, string>;
  shortSpecs: string;
  image: string;
  gallery: string[];
  diagrams: string[];
  description: string;
  isNew?: boolean;
};

export const fleet: FleetMachine[] = [
  {
    slug: "zuraw-samojezdny-90t",
    model: "Liebherr LTM 1090",
    seoH1: "Wynajem Żurawia 90T – Montaże Przemysłowe i Ciężkie Przeładunki na Śląsku",
    displayName: "CIĘŻKIE MONTAŻE",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "52m",
    specs: {
      "Udźwig maksymalny": "90T",
      "Długość wysięgnika": "52m + 19m",
      "Wysokość podnoszenia": "75m",
      "Napęd / Osie": "8×8×8",
    },
    shortSpecs: "52m wysięgnik",
    image: "/sprzet/dzwig-52m.webp",
    gallery: [
      "/sprzet/dzwig-zdjecie2-52m.webp",
      "/sprzet/dzwig-zdjecie3-52m.webp",
    ],
    diagrams: [
      "https://e-dzwigi.pl/files/liebherr-1090-wymiary-001.webp",
      "https://e-dzwigi.pl/files/liebherr-1090-zasi-g-001.webp"
    ],
    description: "Żuraw szosowo-terenowy o udźwigu 90 ton. Charakteryzuje się długim wysięgnikiem teleskopowym oraz doskonałymi parametrami udźwigowymi w całym zakresie pracy. Idealny do ciężkich prac montażowych i przeładunkowych."
  },
  {
    slug: "zuraw-samojezdny-50t",
    model: "Liebherr LTM 1050",
    seoH1: "Wynajem Żurawia 50T – Budowa Hal, Montaż Stropów i Dachów na Śląsku",
    displayName: "MIASTO I CIASNE PLACE",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "40m",
    specs: {
      "Udźwig maksymalny": "50T",
      "Długość wysięgnika": "40m + 16m",
      "Wysokość podnoszenia": "56m",
      "Napęd / Osie": "6×6×6",
    },
    shortSpecs: "40m wysięgnik",
    image: "/sprzet/dzwig-40m.webp",
    gallery: [
      "/gallery/prace-przy-budowie-slask-40m.webp",
      "/gallery/pomoc-przy-budowie-40m.webp",
    ],
    diagrams: [
      "https://e-dzwigi.pl/files/diagram-ltm-1050.webp"
    ],
    description: "Ekonomiczny i mobilny żuraw 3-osiowy. Idealny do prac w miejskich warunkach dzięki kompaktowej budowie. Wyposażony w długi wysięgnik teleskopowy i bocianka."
  },
  {
    slug: "zuraw-samojezdny-35t",
    model: "Liebherr LTM 1030/2",
    seoH1: "Wynajem Żurawia 35T – Budowa Hal Produkcyjnych i Placów Budowy na Śląsku",
    displayName: "HALE I PLACE BUDOWY",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "30m",
    specs: {
      "Udźwig maksymalny": "35T",
      "Długość wysięgnika": "30m + 15m",
      "Wysokość podnoszenia": "45m",
      "Napęd / Osie": "4×4×4",
    },
    shortSpecs: "30m wysięgnik",
    image: "/sprzet/dzwig-30m.webp",
    gallery: [
      "/gallery/montaz-elementow-budynek-tychy-30m.webp",
      "/gallery/budowa-hali-przemyslowej-slask-30m.webp",
    ],
    diagrams: [
      "https://e-dzwigi.pl/files/liebherr-1030-wymiary-001_d.webp"
    ],
    description: "Sprawdzona konstrukcja 2-osiowa. Wysoka zwrotność i szybkość operacyjna. Doskonały do mniejszych placów budowy i hal produkcyjnych."
  },
  {
    slug: "zuraw-samojezdny-25t",
    model: "Liebherr LTM 1025",
    seoH1: "Wynajem Żurawia 25T – Budowa Domów Jednorodzinnych i Ciasna Zabudowa Śląsk",
    displayName: "DOMY I CIASNE ZABUDOWY",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "26m",
    specs: {
      "Udźwig maksymalny": "25T",
      "Długość wysięgnika": "26m",
      "Wysokość podnoszenia": "26m",
      "Napęd / Osie": "4×4×4",
    },
    shortSpecs: "26m wysięgnik",
    image: "/sprzet/dzwig-zdjecie2-26m.webp",
    gallery: [
      "/gallery/remont-dachu-bloku-slask-26m.webp",
      "/gallery/prace-na-wysokosci-fasada-slask-26m.webp",
    ],
    diagrams: [
      "https://e-dzwigi.pl/files/liebherr-1025-zasi-g-001_d.webp",
      "https://e-dzwigi.pl/files/liebherr-1025-wymiary-001_d.webp"
    ],
    description: "Kompaktowy żuraw do zadań specjalnych w ciasnych zabudowaniach. Niezastąpiony przy budowie domów jednorodzinnych."
  },
  {
    slug: "podnosnik-koszowy-21m",
    model: "GSR E 209 PX",
    seoH1: "Wynajem Podnośnika Koszowego 21m – Prace Elewacyjne, Wycinka Drzew i Montaż Reklam Śląsk",
    displayName: "ELEWACJE I WYCINKA",
    type: "Podnośnik Koszowy",
    displayType: "Podnośnik koszowy – Śląsk",
    meter: "21m",
    specs: {
      "Udźwig kosza": "220kg",
      "Wysokość robocza": "21m",
      "Zasięg boczny": "10m",
      "Podwozie": "Samochód 3,5t",
    },
    shortSpecs: "21m wysokość",
    image: "/gallery/mycie-okien-i-elewacji-21m.webp",
    gallery: [
      "/gallery/prace-elewacyjne-21m.webp",
      "/gallery/nocna-realizacja-podnosnik-tychy-40m.webp",
    ],
    diagrams: [],
    description: "Podnośnik koszowy na podwoziu Nissana. Lekki, zwrotny, idealny do prac elewacyjnych, wycinki drzew i montażu reklam."
  },
  {
    slug: "podnosnik-koszowy-ruthmann-27m",
    model: "Ruthmann TB 270.2",
    seoH1: "Wynajem Podnośnika Koszowego 27m – Prace Elewacyjne, Wycinka Drzew i Mycie Fasad Śląsk",
    displayName: "FASADY I WYCINKA",
    type: "Podnośnik Koszowy",
    displayType: "Podnośnik koszowy – Śląsk",
    meter: "27m",
    specs: {
      "Wysokość robocza": "27m",
      "Zasięg boczny": "14,8m",
      "Udźwig kosza": "230kg",
      "Podwozie": "Nissan NT400",
    },
    shortSpecs: "27m wysokość",
    image: "/sprzet/podnosnik-25m.webp",
    gallery: [
      "/gallery/podnosnik-25m-pokazowe1.webp",
      "/gallery/podnosnik-25m-pokazowe2.webp",
      "/gallery/podnosnik-25m-prace-dach.webp",
      "/gallery/podnosnik-25m-prace-dach2.webp",
    ],
    diagrams: [],
    isNew: true,
    description: "Podnośnik koszowy Ruthmann TB 270.2 na podwoziu Nissana NT400. Wysokość robocza 27m i zasięg boczny do 14,8m umożliwiają dotarcie do najtrudniejszych punktów na elewacji, dachu czy koronie drzewa – bez rusztowań i bez kompromisów. Idealny do prac elewacyjnych przy wysokich budynkach, wycinki i pielęgnacji drzew, montażu reklam i oświetlenia oraz wszelkich prac na wysokości do 9 kondygnacji."
  }
];
