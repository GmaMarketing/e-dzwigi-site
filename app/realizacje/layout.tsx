import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizacje Dźwigowe Śląsk – Żurawie i Podnośniki w Akcji | e-dzwigi.pl",
  description:
    "Zobacz realizacje Hydromont – wynajem żurawi samojezdnych i podnośników koszowych na Śląsku. Tychy, Katowice, Gliwice i okolice. Zadzwoń: 508 313 906",
  alternates: {
    canonical: "https://e-dzwigi.pl/realizacje",
  },
};

export default function RealizacjeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
