"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, Weight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

const fleet = [
  {
    id: 1,
    name: "LIEBHERR LTM 1030",
    description: "Idealny do prac w ciasnej zabudowie miejskiej. Niezawodny, zwrotny i szybki w rozstawieniu.",
    specs: { load: "35T", boom: "30M", height: "44M" },
    image: "https://images.unsplash.com/photo-1579549303597-4001a1c93a0f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "LIEBHERR LTM 1050",
    description: "Król średnich dystansów. Wysoka wydajność i ogromny zasięg przy zachowaniu mobilności.",
    specs: { load: "50T", boom: "38M", height: "54M" },
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "PODNOŚNIK P-200",
    description: "Precyzyjne prace na wysokościach. Montaż reklam, wycinka drzew, konserwacja oświetlenia.",
    specs: { load: "250KG", boom: "20M", height: "20M" },
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
  },
];

export function Fleet() {
  return (
    <section className="bg-paper py-32 relative" id="fleet">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="font-heading text-5xl font-bold text-white mb-6">
          Nasz Arsenał
        </h2>
        <p className="text-ink-dim max-w-2xl text-lg">
          Od precyzyjnych podnośników po potężne dźwigi samojezdne. 
          Dysponujemy sprzętem do zadań specjalnych.
        </p>
      </div>

      <div className="flex flex-col gap-32 container mx-auto px-6">
        {fleet.map((item, index) => (
          <FleetCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function FleetCard({ item, index }: { item: typeof fleet[0], index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`group grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            {/* Image Side */}
            <div className={`relative h-[500px] bg-grid overflow-hidden border border-white/5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute top-0 left-0 p-4 z-10 bg-black/50 backdrop-blur-md border-b border-r border-white/10">
                    <span className="font-mono text-accent font-bold text-xl">0{item.id}</span>
                </div>
                
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Tech Overlay lines */}
                <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-accent/10 transition-colors pointer-events-none duration-500">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-accent/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-700" />
                </div>
            </div>

            {/* Info Side */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-accent transition-colors">
                    {item.name}
                </h3>
                <p className="text-ink-dim text-lg leading-relaxed mb-8 border-l-2 border-grid pl-4 group-hover:border-accent transition-colors duration-500">
                    {item.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-canvas p-4 border border-white/5">
                        <Weight className="text-accent mb-2" size={24} />
                        <div className="font-heading text-2xl font-bold text-white">{item.specs.load}</div>
                        <div className="text-xs text-ink-dim uppercase">Udźwig</div>
                    </div>
                    <div className="bg-canvas p-4 border border-white/5">
                        <Ruler className="text-accent mb-2" size={24} />
                        <div className="font-heading text-2xl font-bold text-white">{item.specs.boom}</div>
                        <div className="text-xs text-ink-dim uppercase">Wysięg</div>
                    </div>
                    <div className="bg-canvas p-4 border border-white/5">
                        <ArrowUpRight className="text-accent mb-2" size={24} />
                        <div className="font-heading text-2xl font-bold text-white">{item.specs.height}</div>
                        <div className="text-xs text-ink-dim uppercase">Wys. Podnoszenia</div>
                    </div>
                </div>

                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white w-full md:w-auto">
                    Zobacz Specyfikację PDF
                </Button>
            </div>
        </motion.div>
    )
}
