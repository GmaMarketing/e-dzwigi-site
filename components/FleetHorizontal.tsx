"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fleet } from "@/data/fleet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AUTO_INTERVAL = 6000;

export function FleetHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isFirstRender = useRef(true);

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

  // Scroll-triggered entrance (one-time)
  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, textRef.current, imageRef.current], { opacity: 0, y: 40 });
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      })
        .to(headerRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
        .to(textRef.current, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.5")
        .to(imageRef.current, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.7");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Slide transition: text from left, image from right
  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!textRef.current || !imageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      gsap.fromTo(imageRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, [current]);

  // Auto-progress bar — restarts on each slide change
  useLayoutEffect(() => {
    if (!progressRef.current) return;
    const tween = gsap.fromTo(progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: AUTO_INTERVAL / 1000, ease: "none" }
    );
    return () => { tween.kill(); };
  }, [current]);

  const machine = fleet[current];

  return (
    <>
      {/* Mobile Version */}
      <section className="bg-zinc-50 py-20 md:hidden" id="flota">
        <div className="container mx-auto px-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">PARK MASZYNOWY</span>
          </div>
          <h2 className="text-4xl font-heading font-black text-zinc-900 leading-none">FLOTA</h2>
        </div>
        <div className="flex flex-col gap-0">
          {fleet.map((m) => (
            <div key={m.slug} className="relative group border-t border-zinc-200">
              <div className="aspect-video relative w-full overflow-hidden">
                <Image src={m.image} alt={m.model} fill sizes="100vw" className="object-cover transition-all duration-700" />
                <div className="absolute inset-0 bg-zinc-900/20" />
              </div>
              <div className="p-8">
                {m.isNew && (
                  <span className="inline-block bg-amber-500 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1 mb-3">
                    NOWOŚĆ
                  </span>
                )}
                <h3 className="text-3xl font-heading font-black text-zinc-900 mb-2">{m.displayName}</h3>
                <p className="text-lg text-zinc-500 font-medium mb-2">{m.displayType}</p>
                <p className="text-4xl font-heading font-black text-amber-500/80 mb-4 leading-none">{m.meter}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="px-3 py-1 border border-zinc-300 rounded-full text-zinc-700 font-mono text-xs">{m.shortSpecs}</div>
                  <div className="px-3 py-1 border border-amber-500 bg-amber-500/10 text-amber-500 rounded-full font-mono text-xs uppercase tracking-wider">Dostępny</div>
                </div>
                <Link href={`/flota/${m.slug}`} title={`Szczegóły: ${m.model}`} className="block w-full py-4 bg-amber-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors text-center">
                  Szczegóły
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Version — Split-screen, mieści się w viewport */}
      <section
        ref={sectionRef}
        className="bg-zinc-50 hidden md:flex relative overflow-hidden h-screen min-h-[700px] flex-col"
        id="flota"
      >
        <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col pt-24 lg:pt-28 pb-8 lg:pb-10 min-h-0">

          {/* Header */}
          <div ref={headerRef} className="shrink-0 flex items-end justify-between gap-6 mb-6 lg:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-12 bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">PARK MASZYNOWY</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-zinc-900 leading-none tracking-tight">
                FLOTA
              </h2>
            </div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest font-mono shrink-0 hidden lg:block">
              <span className="text-zinc-900">{String(current + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-zinc-300">/</span>
              {String(fleet.length).padStart(2, "0")}
            </p>
          </div>

          {/* Split-screen */}
          <div className="flex-1 grid grid-cols-2 gap-10 lg:gap-16 items-center min-h-0">

            {/* Left: text */}
            <div ref={textRef} className="flex flex-col max-w-xl">
              {machine.isNew && (
                <span className="inline-flex items-center bg-amber-500 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 mb-5 w-fit">
                  NOWOŚĆ
                </span>
              )}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-zinc-900 leading-[0.95] tracking-tight mb-2">
                {machine.displayName}
              </h3>
              <p className="text-sm lg:text-base text-amber-500 font-bold uppercase tracking-wider mb-5">
                {machine.displayType}
              </p>
              <p className="text-sm lg:text-[15px] text-zinc-600 leading-relaxed border-l-2 border-amber-500 pl-5 mb-6 line-clamp-3">
                {machine.description}
              </p>

              <div className="flex items-center gap-3 mb-7">
                <span className="px-3 py-1.5 border border-zinc-300 bg-white text-zinc-700 font-mono text-[11px] uppercase tracking-wider shadow-sm">
                  {machine.shortSpecs}
                </span>
                <span className="px-3 py-1.5 border border-amber-500 bg-amber-500/10 text-amber-500 font-mono text-[11px] uppercase tracking-wider">
                  Dostępny
                </span>
              </div>

              <div className="flex items-center gap-5">
                <Link
                  href={`/flota/${machine.slug}`}
                  title={`Szczegóły: ${machine.model}`}
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-heading font-bold tracking-widest uppercase text-xs px-6 py-3 transition-colors"
                >
                  ZOBACZ SZCZEGÓŁY
                  <ArrowRight size={14} />
                </Link>
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{machine.model}</span>
              </div>
            </div>

            {/* Right: horizontal image */}
            <div ref={imageRef} className="relative">
              <div className="relative w-full aspect-[16/10] max-h-full bg-zinc-200 rounded-sm overflow-hidden border border-zinc-200 shadow-2xl">
                <Image
                  src={machine.image}
                  alt={machine.model}
                  fill
                  sizes="(max-width: 1024px) 50vw, 720px"
                  priority={current === 0}
                  className="object-cover"
                />
                {/* Subtle gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                {/* Decorative inner border */}
                <div className="absolute top-5 left-5 right-5 bottom-5 border border-white/20 pointer-events-none" />
                {/* Top-left meter badge */}
                <div className="absolute top-6 left-6 bg-amber-500 text-white py-2 px-4 shadow-lg">
                  <div className="font-heading font-black text-xl lg:text-2xl leading-none">
                    {machine.meter}
                  </div>
                </div>
                {/* Bottom-right model name */}
                <div className="absolute bottom-6 right-6">
                  <p className="font-mono text-[10px] lg:text-xs tracking-widest uppercase text-white/90 drop-shadow-md">
                    {machine.model}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="shrink-0 mt-6 lg:mt-8">
            <div className="flex items-center justify-between gap-6">
              <div className="flex gap-2 items-center">
                {fleet.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { goTo(i); startInterval(); }}
                    aria-label={`Slajd ${i + 1}`}
                    className={`h-[2px] rounded-full transition-all duration-500 ${
                      i === current ? "w-10 bg-amber-500" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { goTo(current - 1); startInterval(); }}
                  aria-label="Poprzedni slajd"
                  className="w-11 h-11 lg:w-12 lg:h-12 border border-zinc-300 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:border-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => { goTo(current + 1); startInterval(); }}
                  aria-label="Następny slajd"
                  className="w-11 h-11 lg:w-12 lg:h-12 border border-zinc-300 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:border-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="mt-4 lg:mt-5 h-[1px] bg-zinc-200 relative overflow-hidden">
              <div
                ref={progressRef}
                className="absolute inset-0 bg-amber-500"
                style={{ transformOrigin: "left", transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
