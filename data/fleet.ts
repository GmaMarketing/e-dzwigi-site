export type FleetMachine = {
  slug: string;
  model: string;
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
    displayName: "CIĘŻKIE MONTAŻE",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "52m",
    specs: {
      liftingCapacity: "90T",
      boomLength: "52m + 19m",
      liftingHeight: "75m",
      drive: "8x8x8",
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
    displayName: "MIASTO I CIASNE PLACE",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "40m",
    specs: {
      liftingCapacity: "50T",
      boomLength: "40m + 16m",
      liftingHeight: "56m",
      drive: "6x6x6",
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
    displayName: "HALE I PLACE BUDOWY",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "30m",
    specs: {
      liftingCapacity: "35T",
      boomLength: "30m + 15m",
      liftingHeight: "45m",
      drive: "4x4x4",
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
    displayName: "DOMY I CIASNE ZABUDOWY",
    type: "Żuraw Samojezdny",
    displayType: "Żuraw samojezdny – Śląsk",
    meter: "26m",
    specs: {
      liftingCapacity: "25T",
      boomLength: "26m",
      liftingHeight: "26m",
      drive: "4x4x4",
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
    displayName: "ELEWACJE I WYCINKA",
    type: "Podnośnik Koszowy",
    displayType: "Podnośnik koszowy – Śląsk",
    meter: "21m",
    specs: {
      liftingCapacity: "220kg",
      boomLength: "21m (wysokość)",
      liftingHeight: "21m",
      drive: "Samochód 3.5t",
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
    displayName: "FASADY I WYCINKA",
    type: "Podnośnik Koszowy",
    displayType: "Podnośnik koszowy – Śląsk",
    meter: "27m",
    specs: {
      workingHeight: "27m",
      lateralReach: "18m",
      liftingCapacity: "230kg",
      drive: "Nissan NT400",
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
    description: "Podnośnik koszowy Ruthmann TB 270.2 na podwoziu Nissana NT400. Wysokość robocza 27m i zasięg boczny 18m umożliwiają dotarcie do najtrudniejszych punktów na elewacji, dachu czy koronie drzewa – bez rusztowań i bez kompromisów. Idealny do prac elewacyjnych przy wysokich budynkach, wycinki i pielęgnacji drzew, montażu reklam i oświetlenia oraz wszelkich prac na wysokości do 9 kondygnacji."
  }
];
