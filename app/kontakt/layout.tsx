import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Wynajem Dźwigów Śląsk | e-dzwigi.pl Tychy",
  description:
    "Skontaktuj się z Hydromont – wynajem dźwigów samojezdnych i podnośników koszowych na Śląsku. Dyspozytor 24h: 508 313 906. Baza: Tychy, ul. Dojazdowa 7.",
  alternates: {
    canonical: "https://e-dzwigi.pl/kontakt",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
