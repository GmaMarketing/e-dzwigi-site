"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [fleetActive, setFleetActive] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isSolid = !fleetActive && (isScrolled || !isHome || isMobileMenuOpen);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handler = (e: Event) => setFleetActive((e as CustomEvent).detail);
    window.addEventListener("fleet-active", handler);
    return () => window.removeEventListener("fleet-active", handler);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
      { name: "Strona główna", href: "/" },
      { name: "Oferta", href: "/oferta", badge: "Nowość" },
      { name: "Realizacje", href: "/realizacje" },
      { name: "Zamówienie", href: "/zamowienie" },
      { name: "Kontakt", href: "/kontakt" }
  ];

  return (
    <>
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-500 ease-in-out ${
        isSolid ? "py-2" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <div
          className={`relative flex items-center justify-between px-8 md:px-10 py-5 border transition-all duration-500 ${
            isSolid
              ? "bg-white/60 shadow-lg rounded-2xl border-white/30"
              : "bg-transparent border-transparent"
          }`}
          style={{
            backdropFilter: isSolid ? "blur(20px)" : "blur(0px)",
            WebkitBackdropFilter: isSolid ? "blur(20px)" : "blur(0px)",
          }}
        >
            
            {/* Logo Spacer */}
            <div className="w-32 lg:w-48 xl:w-64 h-8 pointer-events-none shrink-0" />

            {/* Logo */}
            <Link href="/" className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center h-20 lg:h-24 xl:h-28 w-40 lg:w-56 xl:w-72" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-full h-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSolid ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-start"
                    >
                        <Image
                            src="/Hydromont_red.png"
                            alt="Hydromont"
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 768px) 100vw, 384px"
                            priority
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isSolid ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-start"
                    >
                        <Image
                            src="/Hydromont_white.png"
                            alt="Hydromont"
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 768px) 100vw, 384px"
                            priority
                        />
                    </motion.div>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-0.5 transition-all duration-300 whitespace-nowrap ${
                isSolid ? "bg-zinc-100/50 p-0.5 rounded-full" : ""
            }`}>
                {navLinks.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`inline-flex items-center gap-1 px-2.5 xl:px-4 py-1.5 text-[9px] xl:text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                            isSolid
                                ? "text-zinc-600 hover:bg-white hover:text-red-600 hover:shadow-sm"
                                : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                        {item.name}
                        {item.badge && (
                            <span className="inline-flex items-center bg-red-600 text-white text-[6px] font-bold uppercase tracking-wide px-1 py-[2px] rounded-full leading-none shrink-0 self-center">
                                {item.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>

            {/* Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
                <a
                    href="tel:+48508313906"
                    className={`hidden xl:flex flex-col items-end shrink-0 group transition-colors duration-300 ${
                        isSolid ? "text-zinc-900" : "text-white"
                    }`}
                >
                    <span className="text-[8px] uppercase font-bold tracking-widest opacity-60 whitespace-nowrap">Dyspozytor 24h</span>
                    <span className="font-heading font-black text-sm group-hover:text-red-600 transition-colors tracking-tight whitespace-nowrap">
                        508 313 906
                    </span>
                </a>

                <Link href="/kontakt#formularz" className={`
                    group flex items-center gap-1.5 px-4 py-2
                    font-bold text-[10px] uppercase tracking-widest
                    transition-all duration-300 rounded-lg
                    ${isSolid
                        ? "bg-zinc-900 text-white hover:bg-red-600"
                        : "bg-white text-zinc-900 hover:bg-red-600 hover:text-white"
                    }
                `}>
                    <span>Kontakt</span>
                    <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="lg:hidden z-50 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? (
                    <X className={isSolid ? "text-zinc-900" : "text-white"} />
                ) : (
                    <Menu className={isSolid ? "text-zinc-900" : "text-white"} />
                )}
            </button>

        </div>
      </div>
    </motion.header>

    {/* Mobile Navigation Overlay */}
    <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-40 bg-white pt-32 px-6 pb-10 flex flex-col justify-between lg:hidden"
            >
                <nav className="flex flex-col gap-6">
                    {navLinks.map((item, i) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-heading font-black text-zinc-900 tracking-tight"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className="inline-flex items-center gap-3"
                            >
                                {item.name}
                                {item.badge && (
                                    <span className="bg-red-600 text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-1 rounded-full leading-none">
                                        {item.badge}
                                    </span>
                                )}
                            </motion.span>
                        </Link>
                    ))}
                </nav>

                <div className="space-y-6">
                    <div className="h-[1px] bg-zinc-100 w-full" />
                    
                    <a href="tel:+48508313906" className="block">
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">Dyspozytor 24h</span>
                        <span className="text-2xl font-heading font-black text-red-600 block">508 313 906</span>
                    </a>

                    <Link
                        href="/kontakt#formularz"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full py-4 bg-zinc-900 text-white text-center font-bold uppercase tracking-widest rounded-xl"
                    >
                        Skontaktuj się
                    </Link>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
    </>
  );
}
