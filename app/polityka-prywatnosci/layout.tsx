import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności – e-dzwigi.pl",
  description:
    "Polityka prywatności serwisu e-dzwigi.pl. Informacje o przetwarzaniu danych osobowych, plikach cookies i prawach użytkowników.",
  alternates: {
    canonical: "https://e-dzwigi.pl/polityka-prywatnosci",
  },
};

export default function PolitykaPrywatnosciLayout({ children }: { children: React.ReactNode }) {
  return children;
}
