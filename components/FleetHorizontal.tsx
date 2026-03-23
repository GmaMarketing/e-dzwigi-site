"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useLenis } from "./SmoothScroll";
import { fleet } from "@/data/fleet";
import Link from "next/link";

const AUTO_INTERVAL = 4000;

export function FleetHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % fleet.length) + fleet.length) % fleet.length);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fleet.length);
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  // Snap + lock scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !lenis) return;

    let phase: "idle" | "snapping" | "locked" = "idle";
    let canExit = false;

    const snapToSection = () => {
      phase = "snapping";
      canExit = false;
      lenis.scrollTo(section.getBoundingClientRect().top + window.scrollY, {
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: () => {
          phase = "locked";
          lenis.stop();
          window.dispatchEvent(new CustomEvent("fleet-active", { detail: true }));
          setTimeout(() => { canExit = true; }, 700);
        },
      });
    };

    const handleLenisScroll = ({ direction }: { direction: number }) => {
      if (phase !== "idle") return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const entering =
        (direction === 1 && rect.top > 4 && rect.top < vh * 0.9) ||
        (direction === -1 && rect.bottom > vh * 0.1 && rect.bottom < vh - 4);
      if (entering) snapToSection();
    };

    const handleWheel = (e: WheelEvent) => {
      if (phase === "idle") return;
      e.preventDefault();
      e.stopImmediatePropagation();
      if (phase === "snapping") return;
      if (!canExit) return;
      phase = "idle";
      lenis.start();
      window.dispatchEvent(new CustomEvent("fleet-active", { detail: false }));
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      lenis.scrollTo(
        e.deltaY > 0 ? sectionTop + window.innerHeight + 1 : Math.max(0, sectionTop - window.innerHeight),
        { duration: 1.1, easing: (t: number) => 1 - Math.pow(1 - t, 3) }
      );
    };

    lenis.on("scroll", handleLenisScroll);
    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });

    return () => {
      lenis.off("scroll", handleLenisScroll);
      window.removeEventListener("wheel", handleWheel, { capture: true });
      if (phase === "locked") {
        lenis.start();
        window.dispatchEvent(new CustomEvent("fleet-active", { detail: false }));
      }
    };
  }, [lenis]);

  const machine = fleet[current];

  return (
    <>
      {/* Mobile Version */}
      <section className="bg-zinc-950 py-20 md:hidden" id="flota">
        <div className="container mx-auto px-6 mb-12">
          <span className="text-red-600 font-bold tracking-widest uppercase mb-4 block">Park Maszynowy</span>
          <h2 className="text-4xl font-heading font-black text-white leading-none">FLOTA</h2>
        </div>
        <div className="flex flex-col gap-0">
          {fleet.map((m) => (
            <div key={m.slug} className="relative group border-t border-white/10">
              <div className="aspect-video relative w-full overflow-hidden">
                <Image src={m.image} alt={m.model} fill sizes="100vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-zinc-900/40" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-heading font-black text-white mb-2">{m.displayName}</h3>
                <p className="text-lg text-zinc-400 font-medium mb-2">{m.displayType}</p>
                <p className="text-4xl font-heading font-black text-white/30 mb-4 leading-none">{m.meter}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="px-3 py-1 border border-white/20 rounded-full text-white font-mono text-xs">{m.shortSpecs}</div>
                  <div className="px-3 py-1 border border-red-600 bg-red-600/10 text-red-500 rounded-full font-mono text-xs uppercase tracking-wider">Dostępny</div>
                </div>
                <Link href={`/flota/${m.slug}`} title={`Szczegóły: ${m.model}`} className="block w-full py-4 border border-white/20 rounded-xl text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center">
                  Szczegóły
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Version */}
      <section ref={sectionRef} className="bg-zinc-950 hidden md:block relative h-screen overflow-hidden" id="flota">

        {/* Background slides */}
        {fleet.map((m, i) => (
          <motion.div
            key={m.slug}
            className="absolute inset-0"
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image src={m.image} alt={m.model} fill sizes="100vw" priority={i === 0} className="object-cover" />
            <div className="absolute inset-0 bg-zinc-950/65" />
          </motion.div>
        ))}

        {/* Content */}
        <AnimatePresence mode="wait">
          <div key={current} className="absolute inset-0 flex items-end pb-36 px-20">
            <div className="grid grid-cols-2 gap-6 w-full max-w-6xl">
              <motion.div
                className="bg-zinc-950/30 backdrop-blur-md rounded-2xl p-10 flex flex-col justify-end"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-8xl font-black text-white/20 font-heading mb-2 select-none leading-none">
                  {machine.meter}
                </div>
                <h3 className="text-6xl font-heading font-black text-white mb-3 leading-none">{machine.displayName}</h3>
                <p className="text-xl text-zinc-400">{machine.displayType}</p>
              </motion.div>
              <motion.div
                className="bg-zinc-950/30 backdrop-blur-md rounded-2xl p-10 flex flex-col justify-end gap-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              >
                <p className="text-zinc-400 leading-relaxed">{machine.description}</p>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 border border-white/20 rounded-full text-white font-mono text-sm">{machine.shortSpecs}</span>
                  <span className="px-4 py-2 border border-red-600 bg-red-600/10 text-red-500 rounded-full font-mono text-sm uppercase tracking-wider">Dostępny</span>
                </div>
                <Link href={`/flota/${machine.slug}`} title={`Szczegóły: ${machine.model}`} className="inline-flex items-center gap-3 text-white hover:text-red-500 transition-colors group/btn w-fit">
                  <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all">
                    <Plus size={16} />
                  </span>
                  <span className="font-bold uppercase tracking-widest text-sm">Szczegóły</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>

        {/* Bottom controls */}
        <div className="absolute bottom-10 left-20 right-20 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            {fleet.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); startInterval(); }}
                className={`h-[2px] rounded-full transition-all duration-500 ${i === current ? "w-8 bg-red-600" : "w-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={() => { goTo(current - 1); startInterval(); }} className="w-18 h-18 border-2 border-white/20 rounded-full flex items-center justify-center text-white hover:border-red-600 hover:bg-red-600 transition-all duration-300" style={{width:"72px",height:"72px"}}>
              <ArrowLeft size={28} />
            </button>
            <button onClick={() => { goTo(current + 1); startInterval(); }} className="w-18 h-18 border-2 border-white/20 rounded-full flex items-center justify-center text-white hover:border-red-600 hover:bg-red-600 transition-all duration-300" style={{width:"72px",height:"72px"}}>
              <ArrowRight size={28} />
            </button>
          </div>
        </div>

        {/* Auto-progress bar */}
        <motion.div
          key={current}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
          style={{ transformOrigin: "left" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600/40 z-10"
        />
      </section>
    </>
  );
}
