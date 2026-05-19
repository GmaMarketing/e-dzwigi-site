import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FleetHorizontal } from "@/components/FleetHorizontal";
import { NewEquipment } from "@/components/NewEquipment";
import { Footer } from "@/components/Footer";

const ForWhom = dynamic(() => import("@/components/ForWhom").then((m) => m.ForWhom));
const GalleryPreview = dynamic(() => import("@/components/GalleryPreview").then((m) => m.GalleryPreview));
const ServiceMap = dynamic(() => import("@/components/ServiceMap").then((m) => m.ServiceMap));

export const metadata: Metadata = {
  title: "Wynajem Dźwigów Śląsk | e-dzwigi.pl - Tychy i okolice",
  description:
    "Wynajem dźwigów samojezdnych i podnośników koszowych na Śląsku. e-dzwigi.pl - Tychy, Katowice, Gliwice. Wycena tego samego dnia. Dyspozytor 24h: 508 313 906",
  alternates: {
    canonical: "https://e-dzwigi.pl/",
  },
  openGraph: {
    title: "Wynajem Dźwigów Śląsk | e-dzwigi.pl",
    description:
      "Dźwigi samojezdne i podnośniki koszowe - Śląsk. Wycena tego samego dnia. Tel: 508 313 906",
    url: "https://e-dzwigi.pl/",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "https://e-dzwigi.pl/Hydromont_logo.png",
        width: 512,
        height: 512,
        alt: "HYDROMONT - usługi dźwigowe i podnośniki koszowe na Śląsku",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wynajem Dźwigów Śląsk | e-dzwigi.pl",
    description:
      "Dźwigi samojezdne i podnośniki koszowe - Śląsk. Wycena tego samego dnia. Tel: 508 313 906",
    images: ["https://e-dzwigi.pl/Hydromont_logo.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "e-dzwigi.pl - Hydromont",
  description:
    "Wynajem dźwigów samojezdnych i podnośników koszowych na Śląsku",
  url: "https://e-dzwigi.pl",
  telephone: "+48-508-313-906",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Dojazdowa 7",
    addressLocality: "Tychy",
    postalCode: "43-100",
    addressRegion: "Śląskie",
    addressCountry: "PL",
  },
  areaServed: [
    "Tychy",
    "Katowice",
    "Gliwice",
    "Zabrze",
    "Bytom",
    "Rybnik",
    "Sosnowiec",
    "Chorzów",
  ],
  serviceType: [
    "Wynajem dźwigów samojezdnych",
    "Wynajem podnośników koszowych",
    "Usługi dźwigowe Śląsk",
  ],
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "$",
};

export default function Home() {
  return (
    <main className="bg-zinc-50 selection:bg-amber-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <Hero />
      <About />
      <NewEquipment />
      <FleetHorizontal />
      <ForWhom />
      <GalleryPreview />
      <ServiceMap />
      <Footer />
    </main>
  );
}
