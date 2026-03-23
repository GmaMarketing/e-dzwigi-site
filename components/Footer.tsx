"use client";

import { MapPin, Phone, Mail, Clock, Facebook, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900" id="kontakt">
      <div className="container mx-auto px-6 pt-24 pb-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
             <div className="relative h-32 w-full max-w-md">
                <Image
                    src="/Hydromont_white.png"
                    alt="Hydromont"
                    fill
                    className="object-contain object-left"
                />
             </div>
             
            <p className="text-slate-400 leading-relaxed max-w-sm">
                Lider usług dźwigowych na Śląsku od 1993 roku. 
                Specjalizujemy się w trudnych zleceniach inżynieryjnych, 
                oferując nowoczesną flotę i doświadczonych operatorów.
            </p>
            
            <div className="flex gap-4">
                 <a 
                    href="https://www.facebook.com/people/Us%C5%82ugi-D%C5%BAwigowe-Hydromont-SC/61556393884660/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 group shadow-lg"
                 >
                    <Facebook size={24} />
                 </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
            <h4 className="text-white font-bold text-lg">Nawigacja</h4>
            <ul className="space-y-4">
                <li>
                    <Link href="/#o-firmie" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-red-500 transition-colors" />
                        O Firmie
                    </Link>
                </li>
                <li>
                    <Link href="/oferta" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-red-500 transition-colors" />
                        Oferta
                    </Link>
                </li>
                <li>
                    <Link href="/#flota" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-red-500 transition-colors" />
                        Flota
                    </Link>
                </li>
                <li>
                    <Link href="/realizacje" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-red-500 transition-colors" />
                        Realizacje
                    </Link>
                </li>
                <li>
                    <Link href="/#zasieg" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-red-500 transition-colors" />
                        Zasięg
                    </Link>
                </li>
                <li>
                    <Link href="/kontakt" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-red-500 transition-colors" />
                        Kontakt
                    </Link>
                </li>
            </ul>
          </div>

          {/* Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-bold text-lg">Kontakt 24/7</h4>
            
            <div className="space-y-6">
                <a href="tel:+48508313906" className="block group">
                    <div className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1 group-hover:text-red-500 transition-colors">Dyspozytor</div>
                    <div className="text-3xl font-heading font-black text-white group-hover:text-red-500 transition-colors">+48 508 313 906</div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-900">
                    <MapPin className="text-red-600 shrink-0 mt-1" size={24} />
                    <div>
                        <span className="block text-white font-bold text-lg mb-1">Baza Sprzętowa</span>
                        <span className="block">ul. Dojazdowa 7</span>
                        <span className="block">43-100 Tychy</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                    <Mail className="text-red-600" size={16} />
                    <a href="mailto:biuro@e-dzwigi.pl" className="hover:text-white transition-colors">biuro@e-dzwigi.pl</a>
                </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} HYDROMONT S.C. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-6">
                <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka Prywatności</Link>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <a href="https://www.revogma.pl/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Projekt i realizacja: <span className="text-white font-bold">RevoGMA</span>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
