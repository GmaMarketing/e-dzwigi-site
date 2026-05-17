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
    <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#1e2535'}} id="dla-kogo">

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">Obsługujemy każde zlecenie</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-6 text-white">
                DLA KOGO <br />
                <span className="text-amber-500">PRACUJEMY?</span>
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                Nieważne czy to duża inwestycja przemysłowa czy budowa domu jednorodzinnego — przyjeżdżamy, wyceniamy i działamy tego samego dnia.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((item, i) => (
                <Link
                    key={i}
                    href="/kontakt#formularz"
                    className="group p-8 rounded-2xl border transition-all duration-300 hover:border-amber-500/50"
                    style={{backgroundColor: '#2d3748', borderColor: '#4a5568'}}
                >
                    <div className="mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-300 bg-amber-500/10 w-16 h-16 rounded-xl flex items-center justify-center">
                        {item.icon}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">
                        {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: '#cbd5e0'}}>
                        {item.desc}
                    </p>
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Zapytaj o wycenę →
                    </span>
                </Link>
            ))}
        </div>

      </div>
    </section>
  );
}
