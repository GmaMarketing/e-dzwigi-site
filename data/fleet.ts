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
    seoH1: "Wynajem Żurawia Samojezdnego 52m - Śląsk",
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
    description: "Żuraw 90 ton na Śląsku - największy w naszej flocie. Wysięgnik 52m, podnoszenie do 75m. Jak trzeba coś ciężkiego przenieść tam gdzie inne żurawie nie dają rady - tu jest odpowiedź."
  },
  {
    slug: "zuraw-samojezdny-50t",
    model: "Liebherr LTM 1050",
    seoH1: "Wynajem Żurawia Samojezdnego 40m - Śląsk",
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
    description: "Żuraw 50 ton, 3-osiowy, wchodzi tam gdzie większy nie wjedzie. Dobry do miasta, ciasnych placów i budów z ograniczonym dojazdem. Wysięgnik 40m, sprawdzony na Śląsku."
  },
  {
    slug: "zuraw-samojezdny-35t",
    model: "Liebherr LTM 1030/2",
    seoH1: "Wynajem Żurawia Samojezdnego 30m - Śląsk",
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
    description: "Żuraw 35 ton na 2 osiach - zwrotny i szybki w ustawieniu. Dobrze sprawdza się przy halach, średnich budowach i montażach konstrukcji. Wysięgnik 30m."
  },
  {
    slug: "zuraw-samojezdny-25t",
    model: "Liebherr LTM 1025",
    seoH1: "Wynajem Żurawia Samojezdnego 26m - Śląsk",
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
    description: "Najmniejszy żuraw z floty, ale nie mniej ważny. 25 ton udźwigu, wjeżdża wszędzie. Ulubiony przy budowach domów i ciasnych zabudowaniach gdzie większy by nie stanął."
  },
  {
    slug: "podnosnik-koszowy-21m",
    model: "GSR E 209 PX",
    seoH1: "Wynajem Podnośnika Koszowego 21m - Śląsk",
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
    description: "Podnośnik koszowy 21m na Nissanie - lekki, zwrotny, wejdzie w wąski przejazd. Sprawdza się przy elewacjach, myciu okien, wycince drzew i montażu reklam na Śląsku."
  },
  {
    slug: "podnosnik-koszowy-ruthmann-27m",
    model: "Ruthmann TB 270.3",
    seoH1: "Wynajem Podnośnika Koszowego 27m - Śląsk",
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
    description: "Ruthmann TB 270.3 na Nissanie NT400 - nasz najnowszy podnośnik koszowy. 27m wysokości roboczej, zasięg boczny do 14,8m. Dociera do elewacji, dachów i koron drzew bez żadnych rusztowań. Do 9 pięter bez problemu. Dostępny na Śląsku."
  }
];
