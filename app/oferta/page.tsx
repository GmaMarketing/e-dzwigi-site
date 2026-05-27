"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, HardHat, Factory, Hammer, Wrench, Box, Package, Megaphone, Fan, Home, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    { label: "Wiadukty, mosty i kładki", icon: <HardHat size={24} />, image: "/services/prace-budowlano-drogowe.webp" },
    { label: "Hale i konstrukcje stalowe", icon: <Factory size={24} />, image: "/services/prace-montazowe.webp" },
    { label: "Montaż konstrukcji", icon: <Hammer size={24} />, image: "/services/montaz-konstrukcji.webp" },
    { label: "Ciepłownictwo i kanalizacja", icon: <Wrench size={24} />, image: "/services/prace-cieplownicze.webp" },
    { label: "Zaplecza budowy", icon: <Box size={24} />, image: "/services/montaz-zapleczy.webp" },
    { label: "Załadunek i rozładunek", icon: <Package size={24} />, image: "/services/zaladunek-rozladunek.webp" },
    { label: "Reklamy zewnętrzne", icon: <Megaphone size={24} />, image: "/services/montaz-reklam.png" },
    { label: "Klimatyzacja i HVAC", icon: <Fan size={24} />, image: "/services/montaz-klimatyzacji.webp" },
    { label: "Domy i osiedla", icon: <Home size={24} />, image: "/services/obsluga-budow.webp" },
    { label: "Zlecenia specjalne", icon: <Star size={24} />, image: "/services/zlecenia-specjalne.webp" },
];

export default function OfferPage() {
  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">
        
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={16} />
            Powrót do strony głównej
        </Link>

        {/* Equipment picker */}
        <div className="mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block text-xs">DOBIERZ SPRZĘT DO ZLECENIA</span>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-zinc-900 leading-tight mb-8">JAKI DŹWIG POTRZEBUJESZ?</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {[
              { meter: "52m", capacity: "do 90T",  name: "CIĘŻKIE MONTAŻE",       specs: "Żuraw samojezdny · zasięg 52m",        image: "/sprzet/dzwig-52m.webp",          href: "/flota/zuraw-samojezdny-90t"          },
              { meter: "40m", capacity: "do 50T",  name: "MIASTO I PLACE BUDOWY",  specs: "Żuraw samojezdny · zasięg 40m",        image: "/sprzet/dzwig-40m.webp",          href: "/flota/zuraw-samojezdny-50t"          },
              { meter: "30m", capacity: "do 35T",  name: "HALE I PRZEMYSŁ",        specs: "Żuraw samojezdny · zasięg 30m",        image: "/sprzet/dzwig-30m.webp",          href: "/flota/zuraw-samojezdny-35t"          },
              { meter: "26m", capacity: "do 25T",  name: "DOMY I OSIEDLA",         specs: "Żuraw samojezdny · zasięg 26m",        image: "/sprzet/dzwig-zdjecie2-26m.webp", href: "/flota/zuraw-samojezdny-25t"          },
              { meter: "27m", capacity: "230 kg",  name: "FASADY I WYCINKA",       specs: "Podnośnik koszowy · Ruthmann TB 270.2", image: "/sprzet/podnosnik-25m.webp",     href: "/flota/podnosnik-koszowy-ruthmann-27m", isNew: true },
              { meter: "21m", capacity: "220 kg",  name: "ELEWACJE I WYCINKA",     specs: "Podnośnik koszowy · GSR E 209 PX",       image: "/sprzet/podnosniki-21m.webp",     href: "/flota/podnosnik-koszowy-21m"         },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col bg-white border border-zinc-100 rounded-2xl shadow-sm cursor-pointer overflow-hidden
                  hover:-translate-y-1 hover:shadow-xl hover:border-amber-500 transition-all duration-300"
              >
                <div className="relative w-full h-40 bg-zinc-100">
                  <Image
                    src={card.image}
                    alt={`${card.name} – zasięg ${card.meter}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white font-heading font-black text-lg px-3 py-1 rounded-lg shadow-lg">
                    {card.meter}
                  </div>
                  {card.isNew && (
                    <div className="absolute top-3 right-3 z-10 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-[5px] rounded-full shadow-lg leading-none whitespace-nowrap ring-2 ring-white">
                      NOWOŚĆ
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="font-heading font-black text-3xl text-amber-500 leading-none mb-3 select-none">
                    {card.capacity}
                  </div>
                  <h2 className="font-heading font-black text-sm text-zinc-900 uppercase leading-tight mb-2">
                    {card.name}
                  </h2>
                  <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider pt-3 border-t border-zinc-100 mb-4">
                    {card.specs}
                  </p>
                  <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-amber-500">
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16 max-w-4xl">
            <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">CO MOŻEMY DLA CIEBIE ZROBIĆ</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-zinc-900 leading-tight mb-8">
                USŁUGI DŹWIGOWE <br /> I PODNOŚNIKOWE
            </h2>
            <p className="text-zinc-900 text-lg leading-relaxed">
                Powiedz nam co chcesz zrobić - dobierzemy dźwig, przyjedziemy i zrobimy robotę. Budowy, montaże, zlecenia specjalne. Bez zbędnego gadania.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
                <Link
                    key={i}
                    href="/kontakt#formularz"
                    className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[200px]"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300" />

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                        <div className="mb-4 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-white text-lg leading-snug group-hover:text-amber-100 transition-colors">
                            {item.label}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>

        <div className="mt-16 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden" style={{backgroundColor: '#1e2535'}}>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="font-heading font-black text-3xl md:text-4xl mb-6">
                    MASZ ZLECENIE? ZADZWOŃ - WYCENIAMY TEGO SAMEGO DNIA.
                </h3>
                <p className="text-white text-lg leading-relaxed mb-8">
                    Każde zlecenie wyceniamy bezpłatnie. Dyspozytor dostępny 24h - zadzwoń: <span className="whitespace-nowrap">508 313 906</span>
                </p>
                <Link href="/kontakt" className="inline-block bg-amber-500 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:bg-white hover:text-amber-500 transition-all">
                    Zamów wycenę
                </Link>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        </div>

      </div>

      <Footer />
    </main>
  );
}
