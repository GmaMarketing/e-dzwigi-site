import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria Realizacji - Dźwigi i Podnośniki w Akcji | e-dzwigi.pl",
  description:
    "Zdjęcia z realizacji usług dźwigowych na Śląsku. Żurawie Liebherr i podnośniki koszowe GSR w akcji. Tychy, Katowice, Gliwice i okolice.",
  alternates: {
    canonical: "https://e-dzwigi.pl/galeria",
  },
  openGraph: {
    title: "Galeria Realizacji - e-dzwigi.pl",
    description:
      "Zdjęcia z realizacji usług dźwigowych na Śląsku. Żurawie Liebherr i podnośniki koszowe w akcji.",
    url: "https://e-dzwigi.pl/galeria",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "https://e-dzwigi.pl/Hydromont_red.png",
        width: 512,
        height: 512,
        alt: "Galeria realizacji HYDROMONT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeria Realizacji - e-dzwigi.pl",
    description:
      "Zdjęcia z realizacji usług dźwigowych na Śląsku. Żurawie Liebherr i podnośniki koszowe w akcji.",
    images: ["https://e-dzwigi.pl/Hydromont_red.png"],
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
