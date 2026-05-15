import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formularz Zamówienia Dźwigu – e-dzwigi.pl Tychy, Śląsk",
  description:
    "Pobierz i wypełnij formularz zamówienia dźwigu lub podnośnika koszowego. Wynajem Liebherr na Śląsku. Tel: 508 313 906",
  alternates: {
    canonical: "https://e-dzwigi.pl/zamowienie",
  },
};

export default function ZamowienieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
