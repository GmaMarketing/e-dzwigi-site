import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi Dźwigowe Śląsk – Wynajem Dźwigów i Podnośników | e-dzwigi.pl",
  description:
    "Wynajem dźwigów samojezdnych i podnośników koszowych na Śląsku. Montaż konstrukcji, prace budowlane, zlecenia specjalne. Tychy, Katowice, Gliwice. Tel: 508 313 906",
  alternates: {
    canonical: "https://e-dzwigi.pl/oferta",
  },
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
