"use client";

import Image from "next/image";
import { ShieldCheck, Users, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCountUp(from: number, target: number, duration: number) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          observer.disconnect();

          const start = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.round(from + easeOut(progress) * (target - from)));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, target, duration]);

  return { count, ref };
}

export function About() {
  const { count, ref } = useCountUp(5, 20, 2000);

  const highlights = [
    { icon: <Users size={18} />, text: "Certyfikowani operatorzy dźwigów" },
    { icon: <ShieldCheck size={18} />, text: "Pełne ubezpieczenie OC" },
    { icon: <Clock size={18} />, text: "Dźwig dostępny 24h / 7 dni" },
  ];

  return (
    <section id="o-firmie" className="py-32 bg-white text-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                    <span className="h-[1px] w-12 bg-amber-500" />
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">DLACZEGO KLIENCI NAM UFAJĄ</span>
                </div>
                
                <h2 className="font-heading font-black text-5xl md:text-7xl leading-[0.9] mb-12 tracking-tight">
                    DŹWIG NA MIEJSCU <br />
                    <span className="text-zinc-900 italic">DZIAŁAMY</span>
                </h2>
                
                <div className="space-y-8 text-lg text-zinc-900 leading-relaxed max-w-xl">
                    <p>
                        Wynajem dźwigów samojezdnych i podnośników koszowych na Śląsku - to nasza robota.
                        Zadzwoń, powiemy cenę, przyjedziemy i zrobimy.
                    </p>
                    <p>
                        Budowy, hale, trudne miejsca - nie odmawiamy. Tychy, Katowice, Gliwice, Zabrze
                        i cały Śląsk. Ponad 20 lat w branży i dobrze wiemy co robimy.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {highlights.map((item, i) => (
                        <div key={i} className="flex flex-col gap-4 p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                            <div className="text-amber-500">
                                {item.icon}
                            </div>
                            <span className="font-bold text-zinc-900 text-[10px] uppercase tracking-widest leading-tight">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Visuals */}
            <div className="lg:w-1/2 relative min-h-[500px]">
                <div className="absolute inset-0 bg-zinc-100 rounded-sm overflow-hidden shadow-2xl">
                    <Image 
                        src="https://images.unsplash.com/photo-1653315918982-4afe82e450a6?q=80&w=1200&auto=format&fit=crop"
                        alt="Żuraw samojezdny na budowie – Hydromont Tychy Śląsk"
                        fill
                        className="object-cover grayscale-[60%] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10" />
                </div>
                
                {/* Floating Stats Card - Positioned better */}
                <div ref={ref} className="absolute -bottom-8 -left-8 bg-amber-500 text-white p-10 shadow-2xl rounded-sm z-20">
                    <div className="font-heading font-black text-6xl mb-2">
                        {count}+
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 leading-snug">
                        Lat w branży <br /> dźwigowej
                    </div>
                </div>

                {/* Decorative border */}
                <div className="absolute top-8 right-8 bottom-8 left-8 border border-white/20 pointer-events-none z-10" />
            </div>

        </div>

      </div>
    </section>
  );
}
