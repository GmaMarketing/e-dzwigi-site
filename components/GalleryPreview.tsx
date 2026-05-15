"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  {
    id: "budownictwo",
    label: "Budownictwo",
    desc: "Bloki mieszkalne, domy jednorodzinne, osiedla – dźwig na każdym etapie budowy.",
    count: 14,
    images: [
      { src: "/gallery/prace-przy-bloku-mieszkalnym-tychy-30m.webp",  alt: "Dźwig samojezdny prace przy bloku mieszkalnym Tychy – e-dzwigi.pl" },
      { src: "/gallery/prace-budynek-mieszkalny-slask-30m.webp",      alt: "Dźwig samojezdny prace budynek mieszkalny Śląsk – e-dzwigi.pl" },
      { src: "/gallery/montaz-elementow-budynek-tychy-30m.webp",      alt: "Dźwig samojezdny montaż elementów budynek Tychy – e-dzwigi.pl" },
      { src: "/gallery/remont-dachu-bloku-slask-26m.webp",            alt: "Podnośnik koszowy remont dachu bloku Śląsk – e-dzwigi.pl" },
    ],
  },
  {
    id: "przemysl",
    label: "Przemysł i hale",
    desc: "Montaże w halach, zakładach i przy stacjach energetycznych.",
    count: 16,
    images: [
      { src: "/gallery/montaz-konstrukcji-stalowej-slask-30m.webp",         alt: "Dźwig samojezdny montaż konstrukcji stalowej Śląsk – e-dzwigi.pl" },
      { src: "/gallery/budowa-hali-przemyslowej-slask-30m.webp",            alt: "Dźwig samojezdny budowa hali przemysłowej Śląsk – e-dzwigi.pl" },
      { src: "/gallery/rozladunek-zbiornika-przemyslowego-slask-30m.webp",  alt: "Dźwig samojezdny rozładunek zbiornika przemysłowego Śląsk – e-dzwigi.pl" },
      { src: "/gallery/prace-stacja-energetyczna-slask-30m.webp",           alt: "Dźwig samojezdny prace stacja energetyczna Śląsk – e-dzwigi.pl" },
    ],
  },
  {
    id: "elewacje",
    label: "Elewacje i dachy",
    desc: "Remonty elewacji, mycie fasad, prace przy dachach i kominach.",
    count: 13,
    images: [
      { src: "/gallery/prace-elewacyjne-hala-niebieska-21m.webp",  alt: "Podnośnik koszowy prace elewacyjne hala Śląsk – e-dzwigi.pl" },
      { src: "/gallery/remont-elewacji-budynku-slask-40m.webp",    alt: "Podnośnik koszowy remont elewacji budynku Śląsk – e-dzwigi.pl" },
      { src: "/gallery/mycie-okien-i-elewacji-21m.webp",           alt: "Podnośnik koszowy mycie okien elewacja Śląsk – e-dzwigi.pl" },
      { src: "/gallery/prace-dach-budynku-tychy-40m.webp",         alt: "Podnośnik koszowy prace dach budynku Tychy – e-dzwigi.pl" },
    ],
  },
  {
    id: "montaz",
    label: "Montaże specjalistyczne",
    desc: "Urządzenia przemysłowe, reklamy, słupy oświetleniowe, klimatyzacje.",
    count: 11,
    images: [
      { src: "/gallery/montaz-slupa-oswietleniowego-droga-21m.webp",  alt: "Podnośnik koszowy montaż słupa oświetleniowego Śląsk – e-dzwigi.pl" },
      { src: "/gallery/montaz-reklamy-obiekt-handlowy-21m.webp",      alt: "Podnośnik koszowy montaż reklamy obiekt handlowy Śląsk – e-dzwigi.pl" },
      { src: "/gallery/montaz-urzadzen-dach-hali-slask-40m.webp",     alt: "Dźwig montaż urządzeń dach hali Śląsk – e-dzwigi.pl" },
      { src: "/gallery/prace-instalacyjne-wnetrze-hali-21m.webp",     alt: "Podnośnik koszowy prace instalacyjne wnętrze hali Śląsk – e-dzwigi.pl" },
    ],
  },
  {
    id: "nocne",
    label: "Prace nocne",
    desc: "Realizacje 24h – tam gdzie liczy się czas i brak utrudnień w ruchu.",
    count: 7,
    images: [
      { src: "/gallery/nocny-montaz-maszyny-przemyslowej-slask-30m.webp",  alt: "Dźwig samojezdny nocna realizacja montaż maszyny przemysłowej Śląsk – e-dzwigi.pl" },
      { src: "/gallery/nocna-realizacja-podnosnik-tychy-40m.webp",         alt: "Podnośnik koszowy nocna realizacja Tychy – e-dzwigi.pl" },
      { src: "/gallery/nocne-prace-elewacyjne-slask-40m.webp",             alt: "Podnośnik koszowy nocne prace elewacyjne Śląsk – e-dzwigi.pl" },
      { src: "/gallery/montaz-reklamy-nocna-realizacja-21m.webp",          alt: "Podnośnik koszowy montaż reklamy nocna realizacja Śląsk – e-dzwigi.pl" },
    ],
  },
];

export function GalleryPreview() {
  const [indices, setIndices] = useState(categories.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) =>
        prev.map((idx, i) => (idx + 1) % categories[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block text-xs">
              REALIZACJE
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-zinc-900 leading-tight mb-4">
              CO ROBIMY<br />NA CO DZIEŃ
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Kilkaset zleceń rocznie w każdych warunkach –
              od bloków mieszkalnych po nocne montaże w halach przemysłowych.
            </p>
          </div>
          <Link
            href="/realizacje"
            className="group inline-flex items-center gap-3 px-7 py-3.5 border border-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 shrink-0"
          >
            Wszystkie realizacje
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid kart kategorii */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4">
          {categories.map((cat, i) => {
            const current = cat.images[indices[i]];
            return (
              <Link
                key={cat.id}
                href="/realizacje"
                className={`group relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer ${
                  i === 0
                    ? "col-span-2 row-span-2 aspect-square md:aspect-auto min-h-[280px] md:min-h-[480px]"
                    : "col-span-1 row-span-1 aspect-[4/3]"
                }`}
              >
                {/* Crossfade między zdjęciami */}
                <AnimatePresence mode="sync">
                  <motion.div
                    key={current.src}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                      className="object-cover transition-transform duration-[7000ms] group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                {/* Treść */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 z-20">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-amber-300 mb-2">
                    <span className="w-3 h-[1.5px] bg-amber-400" />
                    {cat.count} realizacji
                  </span>
                  <h3 className={`font-heading font-black text-white leading-tight mb-2 ${i === 0 ? "text-2xl md:text-3xl" : "text-base md:text-lg"}`}>
                    {cat.label}
                  </h3>
                  <p className={`text-zinc-400 text-sm leading-relaxed transition-all duration-300 ${
                    i === 0
                      ? "opacity-100 max-h-20"
                      : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20"
                  }`}>
                    {cat.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/0 group-hover:text-white/80 transition-all duration-300">
                    <span>Zobacz</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Wskaźniki zdjęć */}
                <div className="absolute top-4 right-4 flex gap-1 z-20">
                  {cat.images.map((_, j) => (
                    <span
                      key={j}
                      className={`block h-[3px] rounded-full transition-all duration-500 ${
                        j === indices[i] ? "w-5 bg-white" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
