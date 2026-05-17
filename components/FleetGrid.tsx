"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const fleet = [
  {
    id: 1,
    name: "Liebherr LTM 1030",
    category: "Żuraw Samojezdny",
    description: "Kompaktowy żuraw dwuosiowy, idealny do pracy w ciasnej zabudowie miejskiej. Wysoka zwrotność i szybkość działania.",
    specs: [
      { label: "Udźwig Max", value: "35 Ton" },
      { label: "Wysięgnik", value: "30 m" },
      { label: "Wysokość Max", value: "44 m" }
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Liebherr LTM 1050",
    category: "Żuraw Samojezdny",
    description: "Ekonomiczny żuraw trzyosiowy o dużym udźwigu. Doskonały kompromis między mocą a mobilnością na placu budowy.",
    specs: [
      { label: "Udźwig Max", value: "50 Ton" },
      { label: "Wysięgnik", value: "38 m" },
      { label: "Wysokość Max", value: "54 m" }
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Podnośnik P-200",
    category: "Podnośnik Koszowy",
    description: "Montowany na podwoziu samochodu dostawczego (do 3.5t). Idealny do prac dekarskich, wycinki drzew i montażu reklam.",
    specs: [
      { label: "Udźwig Kosza", value: "200 kg" },
      { label: "Wysięg Boczny", value: "Max" },
      { label: "Wysokość", value: "20 m" }
    ],
    image: "https://images.unsplash.com/photo-1616428383833-28c0d164506c?auto=format&fit=crop&q=80&w=800",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function FleetGrid() {
  return (
    <section id="oferta" className="py-32 bg-canvas relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading font-black text-4xl md:text-6xl text-slate-900 mb-6"
            >
                Nasza Flota
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-zinc-900 leading-relaxed"
            >
                Dysponujemy nowoczesnym i regularnie serwisowanym sprzętem. 
                Dobieramy maszynę idealnie do potrzeb Twojego zlecenia, optymalizując koszty.
            </motion.p>
        </div>

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
            {fleet.map((machine) => (
                <motion.div 
                    variants={item}
                    key={machine.id} 
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-2"
                >
                    {/* Image */}
                    <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                        <Image 
                            src={machine.image} 
                            alt={machine.name} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-0 right-0 p-4">
                             <div className="bg-white/90 backdrop-blur shadow-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
                                {machine.category}
                             </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <h3 className="font-heading font-bold text-3xl text-slate-900 mb-4 group-hover:text-accent transition-colors">
                            {machine.name}
                        </h3>
                        <p className="text-zinc-900 text-sm leading-relaxed mb-8 border-b border-slate-100 pb-8">
                            {machine.description}
                        </p>

                        <div className="space-y-4">
                            {machine.specs.map((spec, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                    <span className="text-zinc-700 font-medium uppercase text-xs tracking-wider">{spec.label}</span>
                                    <span className="font-bold text-slate-900 text-lg">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-accent font-bold text-sm cursor-pointer group/link">
                            <span>Zobacz specyfikację</span>
                            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                                <ChevronRight size={16} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <div className="mt-20 text-center">
            <a href="tel:+48508313906" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-accent transition-colors text-lg">
                <span className="border-b-2 border-accent/20 hover:border-accent transition-colors">Potrzebujesz innej maszyny? Skontaktuj się z nami</span>
                <ChevronRight size={20} className="text-accent" />
            </a>
        </div>

      </div>
    </section>
  );
}
