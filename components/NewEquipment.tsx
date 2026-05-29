"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const specs = [
  { value: "27m", label: "Wysokość robocza" },
  { value: "14,8m", label: "Zasięg boczny" },
  { value: "230kg", label: "Udźwig kosza" },
  { value: "Nissan NT400", label: "Podwozie" },
];

export function NewEquipment() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/sprzet/podnosnik-25m.webp"
          alt="Ruthmann TB 270.3 podnośnik koszowy na Nissanie NT400 – e-dzwigi.pl Śląsk"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
      </div>

      {/* Decorative background number */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(120px,20vw,240px)] font-heading font-black text-white/[0.04] leading-none select-none pointer-events-none pr-8 hidden lg:block"
      >
        27m
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-12 md:px-20 lg:px-32 xl:px-44">

          {/* NOWOŚĆ badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1.5">
              NOWOŚĆ
            </span>
          </motion.div>

          {/* Label + heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-amber-500" />
              <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs">ROZWIJAMY FLOTĘ</span>
            </div>

            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-white mb-3">
              NOWY PODNOŚNIK <br />
              <span className="text-zinc-400 italic">KOSZOWY</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-400 font-medium mt-3 mb-7">
              Ruthmann TB 270.3 &nbsp;·&nbsp; Nissan NT400
            </p>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-7 max-w-lg"
          >
            {specs.map((spec, i) => (
              <div key={spec.label} className={`border-t border-white/10 pt-4 pb-1 ${i < specs.length - 1 ? "md:pr-6" : ""}`}>
                <div className="text-xl md:text-2xl font-heading font-black text-white leading-none mb-1.5">
                  {spec.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold leading-tight">
                  {spec.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="text-zinc-400 max-w-md leading-relaxed text-sm mb-8 border-l-2 border-amber-500 pl-5"
          >
            Mamy nowy podnośnik koszowy Ruthmann TB 270.3 na Nissanie NT400 - wyżej, dalej i bardziej dostępny.
            Klienci na Śląsku wiedzą już, że warto zadzwonić.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.36 }}
          >
            <Link
              href="/kontakt#formularz"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-heading font-bold tracking-widest uppercase text-xs px-6 py-3 transition-colors duration-200"
            >
              ZAPYTAJ O DOSTĘPNOŚĆ
              <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
