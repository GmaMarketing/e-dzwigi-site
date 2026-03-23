"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={container} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-zinc-900">
      
      {/* Background Image - Real Crane */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Wynajem dźwigów samojezdnych na budowie – e-dzwigi.pl Tychy Śląsk"
          fill
          className="object-cover object-center brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
        
        <div className="overflow-hidden mb-4">
            <motion.p 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm"
            >
                WYNAJEM DŹWIGÓW NA ŚLĄSKU · DOSTĘPNE 24H
            </motion.p>
        </div>

        <div className="overflow-hidden">
            <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-5xl md:text-8xl lg:text-[7.5rem] leading-[0.9] md:leading-[0.85] text-white tracking-tighter mb-8"
            >
                DŹWIGI NA ŚLĄSKU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 italic">DZIAŁAMY 24H</span>
            </motion.h1>
        </div>
        
        <div className="overflow-hidden max-w-2xl border-l-2 border-red-600 pl-4 md:pl-8">
             <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light"
            >
                Żurawie samojezdne i podnośniki koszowe – wycena tego samego dnia.
            </motion.p>
        </div>

        <div className="overflow-hidden mt-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/kontakt#formularz"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-heading font-bold tracking-widest uppercase text-sm px-8 py-4 transition-colors duration-200"
            >
              ZAMÓW DŹWIG
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-4"
      >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Przewiń</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent" />
      </motion.div>

    </section>
  );
}