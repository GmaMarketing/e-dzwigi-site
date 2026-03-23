"use client";

import { Building2, Factory, Home, Briefcase } from "lucide-react";
import Link from "next/link";

export function ForWhom() {
  const sectors = [
    {
      icon: <Factory size={32} />,
      title: "Renomowane Firmy",
      desc: "Kompleksowa obsługa dużych inwestycji przemysłowych i infrastrukturalnych. Współpracujemy z liderami rynku."
    },
    {
      icon: <Home size={32} />,
      title: "Klienci Indywidualni",
      desc: "Fachowa pomoc przy budowie domów, montażu elementów i pracach na wysokościach dla inwestorów prywatnych."
    },
    {
      icon: <Building2 size={32} />,
      title: "Place Budowy",
      desc: "Wsparcie deweloperów i firm budowlanych w zakresie transportu pionowego i montażu konstrukcji."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Zlecenia Specjalne",
      desc: "Nietypowe montaże, relokacje maszyn i zadania wymagające precyzji oraz indywidualnego planowania."
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="dla-kogo">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-red-600" />
                <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">Obsługujemy każde zlecenie</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-6">
                DLA KOGO <br />
                <span className="text-zinc-500">PRACUJEMY?</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                Nieważne czy to duża inwestycja przemysłowa czy budowa domu jednorodzinnego — przyjeżdżamy, wyceniamy i działamy tego samego dnia.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((item, i) => (
                <Link
                    key={i}
                    href="/kontakt#formularz"
                    className="group p-8 bg-zinc-800/50 border border-white/5 hover:border-red-600/50 hover:bg-zinc-800 transition-all duration-300 rounded-2xl"
                >
                    <div className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 bg-red-600/10 w-16 h-16 rounded-xl flex items-center justify-center">
                        {item.icon}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">
                        {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {item.desc}
                    </p>
                    <span className="text-red-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Zapytaj o wycenę →
                    </span>
                </Link>
            ))}
        </div>

      </div>
    </section>
  );
}
