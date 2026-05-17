"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useEffectEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
"1025_01.webp", "1025_04.webp",
"1030_01.webp", "1030_02.webp", "1030_04.webp", "1030_08.webp", "1030_09.webp", "1030_11.webp", "1030_12.webp", "1030_13.webp", "1030_14.webp", "1030_15.webp", "1030_1.webp", "1030_2.webp", "1030_3.webp", "1030_4.webp", "1030_5.webp", "1030_6.webp",
"1050_04.webp", "1050_10.webp", "1050_11.webp", "1050_12.webp", "1050_13.webp", "1050_14.webp", "1050_15.webp", "1050_16.webp", "1050_17.webp", "1050_19.webp", "1050_1.webp", "1050_2.webp", "1050_3.webp", "1050_4.webp", "1050_6.webp", "1050_7.webp", "1050_8.webp", "1050_9.webp",
"GSR_01.webp", "GSR_02.webp", "GSR_03.webp", "GSR_04.webp", "GSR_05.webp", "GSR_06.webp", "GSR_07.webp", "GSR_08.webp", "GSR_09.webp", "GSR_10.webp", "GSR_11.webp", "GSR_12.webp", "GSR_13.webp", "GSR_14.webp", "GSR_15.webp", "GSR_16.webp", "GSR_17.webp"
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev! + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
  };

  const handleKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  // Keyboard navigation
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
                <ArrowLeft size={16} />
                Powrót do strony głównej
            </Link>
            
            <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">Realizacje</span>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight mb-6">
                NASZA GALERIA
            </h1>
            <p className="text-zinc-900 max-w-2xl text-lg">
                Zobacz nasze maszyny w akcji. Realizujemy zlecenia w trudnych warunkach i na wysokościach.
            </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
                <div 
                    key={i} 
                    onClick={() => openLightbox(i)}
                    className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-200 cursor-pointer"
                >
                    <Image
                        src={`https://e-dzwigi.pl/gallery/${img}`}
                        alt={`Realizacja Hydromont ${i + 1}`}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-bold uppercase tracking-widest text-xs border border-white px-4 py-2 rounded-full">Powiększ</span>
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage !== null && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center backdrop-blur-sm"
                onClick={closeLightbox}
            >
                
                {/* Close Button */}
                <button 
                    onClick={closeLightbox}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
                >
                    <X size={32} />
                </button>

                {/* Navigation Buttons */}
                <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 z-50 hidden md:block"
                >
                    <ChevronLeft size={48} />
                </button>
                <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 z-50 hidden md:block"
                >
                    <ChevronRight size={48} />
                </button>

                {/* Main Image */}
                <motion.div 
                    key={selectedImage}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                >
                    <Image
                        src={`https://e-dzwigi.pl/gallery/${images[selectedImage]}`}
                        alt={`Realizacja Hydromont ${selectedImage + 1}`}
                        fill
                        className="object-contain"
                        priority
                        sizes="100vw"
                    />
                    
                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-mono tracking-widest bg-black/50 px-4 py-2 rounded-full">
                        {selectedImage + 1} / {images.length}
                    </div>
                </motion.div>

            </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
