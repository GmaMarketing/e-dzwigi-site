"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLoader } from "@/contexts/LoaderContext";

export function PageLoader() {
  const [show, setShow] = useState(true);
  const { markDone } = useLoader();

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={markDone}>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-80 h-28"
          >
            <Image
              src="/e-dzwigi-white.png"
              alt="Hydromont"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Progress bar */}
          <div className="mt-10 w-80 h-[3px] bg-slate-800 overflow-hidden">
            <motion.div
              className="h-full bg-amber-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mt-4 text-[11px] uppercase tracking-[0.4em] text-slate-400 font-bold"
          >
            Wczytuje
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
