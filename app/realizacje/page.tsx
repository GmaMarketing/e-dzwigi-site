"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useEffectEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";


type ImgEntry = { file: string; folder?: string; category: string; overlay: string; alt: string };

const allImages: ImgEntry[] = [

  // ── PODNOŚNIK 21M ──────────────────────────────────────────────────────────
  { file: "budowa-obiektu-przemyslowego-2-slask-21m.webp",       category: "m21 przemysl",              overlay: "Budowa obiektu przemysłowego · Śląsk",         alt: "Podnośnik koszowy 21m budowa obiektu przemysłowego Śląsk – e-dzwigi.pl" },
  { file: "budowa-obiektu-przemyslowego-slask-21m.webp",         category: "m21 przemysl",              overlay: "Budowa obiektu przemysłowego · Śląsk",         alt: "Podnośnik koszowy 21m budowa obiektu przemysłowego Śląsk – e-dzwigi.pl" },
  { file: "elewacja-obiekt-handlowy-21m.webp",                   category: "m21 elewacje",              overlay: "Elewacja obiektu handlowego · Śląsk",          alt: "Podnośnik koszowy 21m elewacja obiekt handlowy Śląsk – e-dzwigi.pl" },
  { file: "instalacji-przemyslowej-slask-21m.webp",              category: "m21 przemysl montaz",       overlay: "Instalacja przemysłowa · Śląsk",               alt: "Podnośnik koszowy 21m instalacja przemysłowa Śląsk – e-dzwigi.pl" },
  { file: "montaz-reklamy-nocna-realizacja-21m.webp",            category: "m21 montaz nocne",          overlay: "Montaż reklamy – nocna realizacja",            alt: "Podnośnik koszowy 21m montaż reklamy nocna realizacja Śląsk – e-dzwigi.pl" },
  { file: "montaz-reklamy-obiekt-handlowy-21m.webp",             category: "m21 montaz",                overlay: "Montaż reklamy obiekt handlowy · Śląsk",      alt: "Podnośnik koszowy 21m montaż reklamy obiekt handlowy Śląsk – e-dzwigi.pl" },
  { file: "montaz-rynny-dom-slask-21m.webp",                     category: "m21 montaz budownictwo",    overlay: "Montaż rynny · dom · Śląsk",                  alt: "Podnośnik koszowy 21m montaż rynny dom Śląsk – e-dzwigi.pl" },
  { file: "montaz-slupa-oswietleniowego-droga-21m.webp",         category: "m21 montaz",                overlay: "Montaż słupa oświetleniowego · Śląsk",        alt: "Podnośnik koszowy 21m montaż słupa oświetleniowego droga Śląsk – e-dzwigi.pl" },
  { file: "mycie-okien-i-elewacji-21m.webp",                     category: "m21 elewacje",              overlay: "Mycie okien i elewacji · Śląsk",              alt: "Podnośnik koszowy 21m mycie okien elewacja Śląsk – e-dzwigi.pl" },
  { file: "nocne-prace-przy-oswietleniu-21m.webp",               category: "m21 nocne montaz",          overlay: "Nocne prace przy oświetleniu · Śląsk",        alt: "Podnośnik koszowy 21m nocne prace oświetlenie Śląsk – e-dzwigi.pl" },
  { file: "prace-elewacyjne-21m.webp",                           category: "m21 elewacje",              overlay: "Prace elewacyjne · Śląsk",                    alt: "Podnośnik koszowy 21m prace elewacyjne Śląsk – e-dzwigi.pl" },
  { file: "prace-elewacyjne-hala-niebieska-21m.webp",            category: "m21 elewacje przemysl",     overlay: "Prace elewacyjne hala · Śląsk",               alt: "Podnośnik koszowy 21m prace elewacyjne hala przemysłowa Śląsk – e-dzwigi.pl" },
  { file: "prace-elewacyjne-obiekt-komercyjny-21m.webp",         category: "m21 elewacje",              overlay: "Prace elewacyjne obiekt komercyjny · Śląsk",  alt: "Podnośnik koszowy 21m prace elewacyjne obiekt komercyjny Śląsk – e-dzwigi.pl" },
  { file: "prace-instalacyjne-hala-przemyslowa-21m.webp",        category: "m21 przemysl montaz",       overlay: "Prace instalacyjne hala przemysłowa · Śląsk", alt: "Podnośnik koszowy 21m prace instalacyjne hala przemysłowa Śląsk – e-dzwigi.pl" },
  { file: "prace-instalacyjne-wnetrze-hali-21m.webp",            category: "m21 przemysl montaz",       overlay: "Prace instalacyjne wnętrze hali · Śląsk",     alt: "Podnośnik koszowy 21m prace instalacyjne wnętrze hali Śląsk – e-dzwigi.pl" },
  { file: "prace-konserwacyjne-blok-21m.webp",                   category: "m21 budownictwo",           overlay: "Prace konserwacyjne blok · Śląsk",            alt: "Podnośnik koszowy 21m prace konserwacyjne blok mieszkalny Śląsk – e-dzwigi.pl" },
  { file: "prace-przy-markecie-slask-21m.webp",                  category: "m21",                       overlay: "Prace przy markecie · Śląsk",                 alt: "Podnośnik koszowy 21m prace przy markecie Śląsk – e-dzwigi.pl" },
  { file: "prace-przy-słupah-energetycznych-21m.webp",           category: "m21 montaz przemysl",       overlay: "Prace przy słupach energetycznych · Śląsk",   alt: "Podnośnik koszowy 21m prace słupy energetyczne Śląsk – e-dzwigi.pl" },
  { file: "remont-dachu-zabudowa-mieszkalna-21m.webp",           category: "m21 elewacje budownictwo",  overlay: "Remont dachu zabudowa mieszkalna · Śląsk",    alt: "Podnośnik koszowy 21m remont dachu zabudowa mieszkalna Śląsk – e-dzwigi.pl" },

  // ── PODNOŚNIK 26M ──────────────────────────────────────────────────────────
  { file: "dzwig-26m.webp",          folder: "sprzet",           category: "m26",                       overlay: "Dźwig 26m · Śląsk",                           alt: "Dźwig 26m realizacja Śląsk – e-dzwigi.pl" },
  { file: "prace-na-budowie-26m.webp",                           category: "m26 budownictwo",           overlay: "Prace na budowie · Śląsk",                    alt: "Podnośnik koszowy 26m prace na budowie Śląsk – e-dzwigi.pl" },
  { file: "prace-na-wysokosci-fasada-slask-26m.webp",            category: "m26 elewacje",              overlay: "Prace na wysokości fasada · Śląsk",           alt: "Podnośnik koszowy 26m prace na wysokości fasada Śląsk – e-dzwigi.pl" },
  { file: "prace-obiekt-uzytecznosci-slask-26m.webp",            category: "m26",                       overlay: "Prace obiekt użyteczności · Śląsk",           alt: "Podnośnik koszowy 26m prace obiekt użyteczności Śląsk – e-dzwigi.pl" },
  { file: "prace-przy-zbiorniku-przemyslowego-26m.webp",         category: "m26 przemysl",              overlay: "Prace przy zbiorniku przemysłowym · Śląsk",   alt: "Podnośnik koszowy 26m prace zbiornik przemysłowy Śląsk – e-dzwigi.pl" },
  { file: "remont-dachu-bloku-slask-26m.webp",                   category: "m26 elewacje budownictwo",  overlay: "Remont dachu bloku · Śląsk",                  alt: "Podnośnik koszowy 26m remont dachu blok Śląsk – e-dzwigi.pl" },

  // ── PODNOŚNIK 27M — RUTHMANN TB 270.2 ────────────────────────────────────
  { file: "podnosnik-25m-pokazowe1.webp",  category: "m27",                      overlay: "Podnośnik koszowy Ruthmann TB 270.2 · Śląsk",    alt: "Podnośnik koszowy 27m Ruthmann TB 270.2 Nissan NT400 Śląsk – e-dzwigi.pl" },
  { file: "podnosnik-25m-pokazowe2.webp",  category: "m27",                      overlay: "Podnośnik koszowy Ruthmann TB 270.2 · Śląsk",    alt: "Podnośnik koszowy 27m Ruthmann TB 270.2 Nissan NT400 Śląsk – e-dzwigi.pl" },
  { file: "podnosnik-25m-pokazowe3.webp",  category: "m27",                      overlay: "Podnośnik koszowy Ruthmann TB 270.2 · Śląsk",    alt: "Podnośnik koszowy 27m Ruthmann TB 270.2 Śląsk – e-dzwigi.pl" },
  { file: "podnosnik-25m-pokazowe4.webp",  category: "m27",                      overlay: "Kosz roboczy Ruthmann TB 270.2 · 230 kg",        alt: "Kosz roboczy podnośnika 27m Ruthmann TB 270.2 udźwig 230kg – e-dzwigi.pl" },
  { file: "podnosnik-25m-pokazowe5.webp",  category: "m27",                      overlay: "Podnośnik koszowy Ruthmann TB 270.2 · Śląsk",    alt: "Podnośnik koszowy 27m Ruthmann TB 270.2 Nissan NT400 Śląsk – e-dzwigi.pl" },
  { file: "podnosnik-25m-prace-dach.webp", category: "m27 elewacje budownictwo", overlay: "Prace na dachu domu jednorodzinnego · Śląsk",   alt: "Podnośnik koszowy 27m Ruthmann prace dach dom jednorodzinny Śląsk – e-dzwigi.pl" },
  { file: "podnosnik-25m-prace-dach2.webp",category: "m27 elewacje budownictwo", overlay: "Prace przy elewacji domu jednorodzinnego · Śląsk", alt: "Podnośnik koszowy 27m Ruthmann prace elewacja dom jednorodzinny Śląsk – e-dzwigi.pl" },
  { file: "podnosnik-25m-prace-dach3.webp",category: "m27 elewacje budownictwo", overlay: "Prace przy dachu budynku mieszkalnego · Śląsk", alt: "Podnośnik koszowy 27m Ruthmann prace dach budynek mieszkalny Śląsk – e-dzwigi.pl" },

  // ── ŻURAW 30M ──────────────────────────────────────────────────────────────
  { file: "dzwig30m-uslugi-zdjecie_z_drona.webp",  category: "m30 budownictwo",  overlay: "Budowa fundamentów z lotu ptaka · Żuraw 30m",  alt: "Żuraw samojezdny 30m budowa fundamentów z drona Śląsk – e-dzwigi.pl" },
  { file: "dzwig30m-uslugi-zdjecie_z_drona2.webp", category: "m30 budownictwo",  overlay: "Budowa z lotu ptaka · Żuraw samojezdny 30m",   alt: "Żuraw samojezdny 30m budowa z drona widok z góry Śląsk – e-dzwigi.pl" },
  { file: "budowa-hali-przemyslowej-slask-30m.webp",             category: "m30 przemysl budownictwo",  overlay: "Budowa hali przemysłowej · Śląsk",            alt: "Żuraw samojezdny 30m budowa hali przemysłowej Śląsk – e-dzwigi.pl" },
  { file: "budowa-zakladu-przemyslowego-slask-30m.webp",         category: "m30 przemysl budownictwo",  overlay: "Budowa zakładu przemysłowego · Śląsk",        alt: "Żuraw samojezdny 30m budowa zakładu przemysłowego Śląsk – e-dzwigi.pl" },
  { file: "dzwig-30m.webp",           folder: "sprzet",           category: "m30",                       overlay: "Żuraw samojezdny 30m · Śląsk",                alt: "Żuraw samojezdny 30m realizacja Śląsk – e-dzwigi.pl" },
  { file: "dzwig-30m-2.webp",         folder: "sprzet",           category: "m30",                       overlay: "Żuraw samojezdny 30m · Śląsk",                alt: "Żuraw samojezdny 30m realizacja Śląsk – e-dzwigi.pl" },
  { file: "montaz-elementow-budynek-tychy-30m.webp",             category: "m30 budownictwo montaz",    overlay: "Montaż elementów budynek · Tychy",            alt: "Żuraw samojezdny 30m montaż elementów budynek Tychy – e-dzwigi.pl" },
  { file: "montaz-elementow-stalowych-slask-30m.webp",           category: "m30 przemysl montaz",       overlay: "Montaż elementów stalowych · Śląsk",          alt: "Żuraw samojezdny 30m montaż elementów stalowych Śląsk – e-dzwigi.pl" },
  { file: "montaz-konstrukcji-stalowej-slask-30m.webp",          category: "m30 przemysl montaz",       overlay: "Montaż konstrukcji stalowej · Śląsk",         alt: "Żuraw samojezdny 30m montaż konstrukcji stalowej Śląsk – e-dzwigi.pl" },
  { file: "nocny-montaz-maszyny-przemyslowej-slask-30m.webp",    category: "m30 przemysl montaz nocne", overlay: "Nocny montaż maszyny przemysłowej · Śląsk",   alt: "Żuraw samojezdny 30m nocny montaż maszyny przemysłowej Śląsk – e-dzwigi.pl" },
  { file: "nocny-montaz-urzadzenia-ciezkiego-slask-30m.webp",    category: "m30 przemysl montaz nocne", overlay: "Nocny montaż urządzenia ciężkiego · Śląsk",   alt: "Żuraw samojezdny 30m nocny montaż urządzenia ciężkiego Śląsk – e-dzwigi.pl" },
  { file: "prace-budynek-mieszkalny-slask-30m.webp",             category: "m30 budownictwo",           overlay: "Prace budynek mieszkalny · Śląsk",            alt: "Żuraw samojezdny 30m prace budynek mieszkalny Śląsk – e-dzwigi.pl" },
  { file: "prace-na-budowie-30m.webp",                           category: "m30 budownictwo",           overlay: "Prace na budowie · Śląsk",                    alt: "Żuraw samojezdny 30m prace na budowie Śląsk – e-dzwigi.pl" },
  { file: "prace-przy-bloku-mieszkalnym-tychy-30m.webp",         category: "m30 budownictwo",           overlay: "Prace przy bloku mieszkalnym · Tychy",        alt: "Żuraw samojezdny 30m prace przy bloku mieszkalnym Tychy – e-dzwigi.pl" },
  { file: "prace-stacja-energetyczna-slask-30m.webp",            category: "m30 przemysl",              overlay: "Prace stacja energetyczna · Śląsk",           alt: "Żuraw samojezdny 30m prace stacja energetyczna Śląsk – e-dzwigi.pl" },
  { file: "przygotowanie_rusztowania-30m.webp",                  category: "m30 budownictwo",           overlay: "Przygotowanie rusztowania · Śląsk",           alt: "Żuraw samojezdny 30m przygotowanie rusztowania Śląsk – e-dzwigi.pl" },
  { file: "rozbiórka-starego-budynku-przemyslowego-30m.webp",    category: "m30 przemysl",              overlay: "Rozbiórka budynku przemysłowego · Śląsk",     alt: "Żuraw samojezdny 30m rozbiórka budynku przemysłowego Śląsk – e-dzwigi.pl" },
  { file: "rozladunek-zbiornika-przemyslowego-slask-30m.webp",   category: "m30 przemysl",              overlay: "Rozładunek zbiornika przemysłowego · Śląsk",  alt: "Żuraw samojezdny 30m rozładunek zbiornika przemysłowego Śląsk – e-dzwigi.pl" },
  { file: "specjalistyczne-prace-dzwigowe-slask-30m.webp",       category: "m30",                       overlay: "Specjalistyczne prace dźwigowe · Śląsk",      alt: "Żuraw samojezdny 30m specjalistyczne prace dźwigowe Śląsk – e-dzwigi.pl" },

  // ── DŹWIG 52M ──────────────────────────────────────────────────────────────
  { file: "dzwig-52m.webp",          folder: "sprzet", category: "m52 przemysl", overlay: "Dźwig samojezdny 52m · Śląsk", alt: "Dźwig samojezdny 52m realizacja ciężka Śląsk – e-dzwigi.pl" },
  { file: "dzwig-zdjecie2-52m.webp", folder: "sprzet", category: "m52 przemysl", overlay: "Dźwig samojezdny 52m · Śląsk", alt: "Dźwig samojezdny 52m realizacja ciężka Śląsk – e-dzwigi.pl" },
  { file: "dzwig-zdjecie3-52m.webp", folder: "sprzet", category: "m52 przemysl", overlay: "Dźwig samojezdny 52m · Śląsk", alt: "Dźwig samojezdny 52m realizacja ciężka Śląsk – e-dzwigi.pl" },

  // ── DŹWIG / PODNOŚNIK 40M ──────────────────────────────────────────────────
  { file: "montaz-urzadzen-dach-hali-slask-40m.webp",            category: "m40 przemysl montaz",       overlay: "Montaż urządzeń dach hali · Śląsk",           alt: "Żuraw 40m montaż urządzeń dach hali przemysłowej Śląsk – e-dzwigi.pl" },
  { file: "nocna-realizacja-podnosnik-tychy-40m.webp",           category: "m40 nocne",                 overlay: "Nocna realizacja podnośnik · Tychy",          alt: "Podnośnik koszowy 40m nocna realizacja Tychy – e-dzwigi.pl" },
  { file: "nocne-prace-elewacyjne-slask-40m.webp",               category: "m40 elewacje nocne",        overlay: "Nocne prace elewacyjne · Śląsk",              alt: "Podnośnik koszowy 40m nocne prace elewacyjne Śląsk – e-dzwigi.pl" },
  { file: "prace-dach-budynku-tychy-40m.webp",                   category: "m40 elewacje",              overlay: "Prace dach budynku · Tychy",                  alt: "Żuraw / podnośnik 40m prace dach budynku Tychy – e-dzwigi.pl" },
  { file: "prace-konserwacyjne-na-wysokosci-slask-40m.webp",     category: "m40",                       overlay: "Prace konserwacyjne na wysokości · Śląsk",    alt: "Podnośnik koszowy 40m prace konserwacyjne na wysokości Śląsk – e-dzwigi.pl" },
  { file: "prace-na-budowie-40m.webp",                           category: "m40 budownictwo",           overlay: "Prace na budowie · Śląsk",                    alt: "Żuraw 40m prace na budowie Śląsk – e-dzwigi.pl" },
  { file: "prace-przy-budowie-40m.webp",                         category: "m40 budownictwo",           overlay: "Prace przy budowie · Śląsk",                  alt: "Żuraw 40m prace przy budowie Śląsk – e-dzwigi.pl" },
  { file: "prace-przy-budowie-slask-40m.webp",                   category: "m40 budownictwo",           overlay: "Prace przy budowie · Śląsk",                  alt: "Żuraw 40m prace przy budowie Śląsk – e-dzwigi.pl" },
  { file: "prace-wysokosciowe-podnosnik-slask-40m.webp",         category: "m40",                       overlay: "Prace wysokościowe podnośnik · Śląsk",        alt: "Podnośnik koszowy 40m prace wysokościowe Śląsk – e-dzwigi.pl" },
  { file: "pomoc-przy-budowie-40m.webp",                         category: "m40 budownictwo",           overlay: "Pomoc przy budowie · Śląsk",                  alt: "Żuraw 40m pomoc przy budowie Śląsk – e-dzwigi.pl" },
  { file: "przenoszenie-cieźkiego-sprzętu-40m.webp",             category: "m40 przemysl",              overlay: "Przenoszenie ciężkiego sprzętu · Śląsk",      alt: "Żuraw 40m przenoszenie ciężkiego sprzętu Śląsk – e-dzwigi.pl" },
  { file: "remont-elewacji-budynku-slask-40m.webp",              category: "m40 elewacje budownictwo",  overlay: "Remont elewacji budynku · Śląsk",             alt: "Żuraw / podnośnik 40m remont elewacji budynku Śląsk – e-dzwigi.pl" },
];

const sprzet = [
  { id: "m21", label: "Podnośnik 21m" },
  { id: "m26", label: "Dźwig 26m" },
  { id: "m27", label: "Podnośnik 27m" },
  { id: "m30", label: "Dźwig 30m" },
  { id: "m40", label: "Dźwig / Podnośnik 40m" },
  { id: "m52", label: "Dźwig 52m" },
];

const uslugi = [
  { id: "budownictwo", label: "Budownictwo" },
  { id: "przemysl",    label: "Przemysł" },
  { id: "montaz",      label: "Montaże" },
  { id: "elewacje",    label: "Elewacje i dachy" },
  { id: "nocne",       label: "Prace nocne" },
];

const allLabels: Record<string, string> = {
  all:          "Wszystkie realizacje",
  m21:          "Podnośnik koszowy 21m",
  m26:          "Dźwig 26m",
  m27:          "Podnośnik koszowy 27m — Ruthmann TB 270.2",
  m30:          "Dźwig samojezdny 30m",
  m40:          "Dźwig / Podnośnik 40m",
  m52:          "Dźwig samojezdny 52m",
  budownictwo:  "Budownictwo",
  przemysl:     "Przemysł i hale",
  montaz:       "Montaże specjalistyczne",
  elewacje:     "Elewacje i dachy",
  nocne:        "Prace nocne",
};

export default function RealizacjePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const filteredImages = activeFilter === "all"
    ? allImages
    : allImages.filter((img) => img.category.split(" ").includes(activeFilter));

  const openLightbox  = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev! + 1) % filteredImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft")  prevImage();
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">

        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} />
          Powrót do strony głównej
        </Link>

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">ZREALIZOWANE ZLECENIA</span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight mb-6">
            DŹWIGI W AKCJI NA ŚLĄSKU
          </h1>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            Ponad 50 realizacji rocznie – żurawie samojezdne i podnośniki koszowe przy budowach, montażach i pracach specjalnych w Tychach, Katowicach, Gliwicach i całym Śląsku.
          </p>
        </div>

        {/* ── PANEL FILTRÓW ── */}
        <div className="mb-10" ref={filterRef}>

          {/* Pasek – zawsze widoczny */}
          <button
            onClick={() => {
              setPanelOpen((o) => {
                const opening = !o;
                if (opening && filterRef.current) {
                  setTimeout(() => {
                    filterRef.current!.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 50);
                }
                return opening;
              });
            }}
            className="w-full flex items-center justify-between bg-zinc-900 text-white px-8 py-6 rounded-2xl hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center gap-5">
              <SlidersHorizontal size={24} className="text-amber-400 shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-black uppercase tracking-widest text-zinc-500 leading-none mb-1.5">
                  Filtrujesz
                </span>
                <span className="block text-lg font-bold text-white leading-none">
                  {allLabels[activeFilter]}
                </span>
              </div>
              {activeFilter !== "all" && (
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveFilter("all"); setSelectedImage(null); }}
                  className="ml-2 text-[10px] font-black uppercase tracking-widest text-amber-400 hover:text-amber-300 border border-amber-400/30 hover:border-amber-300 px-3 py-1 rounded-full transition-colors"
                >
                  Wyczyść
                </button>
              )}
            </div>
            <div className="flex items-center gap-3 text-zinc-400 group-hover:text-white transition-colors">
              <span className="text-sm font-bold uppercase tracking-widest hidden sm:block">
                {panelOpen ? "Zwiń" : "Zmień filtr"}
              </span>
              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${panelOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {/* Panel rozwijany */}
          {panelOpen && (
            <div className="mt-1 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">

              {/* Nagłówek panelu */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-800">
                <button
                  onClick={() => { setActiveFilter("all"); setSelectedImage(null); setPanelOpen(false); }}
                  className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeFilter === "all"
                      ? "bg-white text-zinc-900"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  Wszystkie
                </button>
                <span className="text-zinc-700 text-xs">
                  — lub wybierz filtr poniżej
                </span>
              </div>

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">

                {/* RODZAJ SPRZĘTU */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-[2px] bg-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                      Rodzaj sprzętu
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {sprzet.map((f) => {
                      const count = allImages.filter((img) => img.category.split(" ").includes(f.id)).length;
                      const active = activeFilter === f.id;
                      return (
                        <button
                          key={f.id}
                          onClick={() => { setActiveFilter(f.id); setSelectedImage(null); setPanelOpen(false); }}
                          className={`group relative flex flex-col items-start p-4 rounded-xl border text-left transition-all duration-200 ${
                            active
                              ? "bg-amber-500 border-amber-500 shadow-lg shadow-amber-500/20"
                              : "bg-zinc-800 border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-750"
                          }`}
                        >
                          <span className={`text-2xl font-black leading-none mb-2 ${active ? "text-white" : "text-zinc-600 group-hover:text-amber-500 transition-colors"}`}>
                            {f.id === "m21" && "21m"}
                            {f.id === "m26" && "26m"}
                            {f.id === "m27" && "27m"}
                            {f.id === "m30" && "30m"}
                            {f.id === "m40" && "40m"}
                            {f.id === "m52" && "52m"}
                          </span>
                          <span className={`text-xs font-bold leading-tight ${active ? "text-white" : "text-zinc-300"}`}>
                            {f.label}
                          </span>
                          <span className={`mt-2 text-[10px] font-black uppercase tracking-widest ${active ? "text-amber-200" : "text-zinc-600"}`}>
                            {count} zdjęć
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* RODZAJ USŁUGI */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-[2px] bg-zinc-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                      Rodzaj usługi
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {uslugi.map((f) => {
                      const count = allImages.filter((img) => img.category.split(" ").includes(f.id)).length;
                      const active = activeFilter === f.id;
                      return (
                        <button
                          key={f.id}
                          onClick={() => { setActiveFilter(f.id); setSelectedImage(null); setPanelOpen(false); }}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                            active
                              ? "bg-white border-white"
                              : "bg-zinc-800 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-750"
                          }`}
                        >
                          <span className={`text-sm font-bold ${active ? "text-zinc-900" : "text-zinc-300"}`}>
                            {f.label}
                          </span>
                          <span className={`text-xs font-black tabular-nums ${active ? "text-zinc-500" : "text-zinc-600"}`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.file}
                onClick={() => openLightbox(i)}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl bg-zinc-200 cursor-pointer"
                variants={{
                  hidden:  { opacity: 0, y: 24, scale: 0.97 },
                  visible: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Image
                  src={`/${img.folder ?? "gallery"}/${img.file}`}
                  alt={img.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <span className="text-white font-bold uppercase tracking-widest text-xs border border-white/60 px-4 py-2 rounded-full bg-black/30">
                    {img.overlay}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Banner */}
        <div className="mt-20 bg-zinc-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-heading font-black text-3xl md:text-4xl mb-6">
              MASZ PODOBNE ZLECENIE? ZADZWOŃ – WYCENIAMY TEGO SAMEGO DNIA.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Każde zlecenie wyceniamy bezpłatnie. Dyspozytor dostępny 24h – zadzwoń: 508 313 906
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-amber-500 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:bg-white hover:text-amber-500 transition-all"
            >
              ZAMÓW DŹWIG
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50">
              <X size={32} />
            </button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 z-50 hidden md:block">
              <ChevronLeft size={48} />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 z-50 hidden md:block">
              <ChevronRight size={48} />
            </button>
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/${filteredImages[selectedImage].folder ?? "gallery"}/${filteredImages[selectedImage].file}`}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-mono tracking-widest bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
