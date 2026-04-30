"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Smartphone, Facebook, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  hasAcceptedCookieConsent,
  writeCookieConsent,
} from "@/lib/cookieConsent";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [isMapEnabled, setIsMapEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => setIsMapEnabled(hasAcceptedCookieConsent());

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);

    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const raw = new FormData(form);

    const body: Record<string, string> = {
      access_key: "c4af4d83-88ef-461c-afef-63613f6d4541",
      subject: "Nowe zapytanie ze strony e-dzwigi.pl",
      from_name: "Formularz e-dzwigi.pl",
      "Imię i nazwisko": raw.get("name") as string,
      "Email": raw.get("email") as string,
      "Telefon": raw.get("phone") as string,
      "Wiadomość": raw.get("message") as string,
    };
    const company = raw.get("company") as string;
    if (company) body["Firma"] = company;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json();

      if (json.success) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      <Navbar />

      <div className="flex-grow pt-32 pb-0">
        <div className="container mx-auto px-6 mb-16">
          {/* Breadcrumb / Back */}
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-600 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
              <ArrowLeft size={16} />
              Powrót do strony głównej
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="text-red-600 font-bold tracking-widest uppercase mb-4 block">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight mb-6">
                ZAMÓW DŹWIG LUB ZAPYTAJ <br /> O WYCENĘ
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
                Zadzwoń, napisz lub wypełnij formularz – odpowiemy tego samego dnia.
                Dyspozytor dostępny całą dobę.
            </p>
          </div>

          {/* Top Row - Form & Map */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* Contact Form */}
            {formStatus === "success" ? (
              <div id="formularz" className="bg-white p-8 rounded-2xl border border-green-200 shadow-sm flex flex-col items-start gap-5">
                <div className="text-green-500 shrink-0">
                  <CheckCircle size={28} />
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-lg mb-1">Wiadomość wysłana!</p>
                  <p className="text-zinc-500">
                    Odpowiemy tego samego dnia. W pilnych sprawach:{" "}
                    <a href="tel:+48508313906" className="text-red-600 font-bold hover:underline">508 313 906</a>
                  </p>
                </div>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 text-sm font-bold text-red-600 hover:underline uppercase tracking-widest"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form
                id="formularz"
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col"
              >
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-red-600"></span>
                    Formularz kontaktowy
                </h3>
                <div className="space-y-4 flex-grow flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-zinc-700 mb-2">Imię i nazwisko</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                      placeholder="jan@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                      placeholder="508 313 906"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-zinc-700 mb-2">Firma <span className="text-zinc-400 font-normal">(opcjonalnie)</span></label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                      placeholder="Nazwa firmy"
                    />
                  </div>
                  <div className="flex-grow">
                    <label htmlFor="message" className="block text-sm font-bold text-zinc-700 mb-2">Wiadomość</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="h-full min-h-[120px] w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                      placeholder="Opisz zlecenie – rodzaj pracy, miasto, orientacyjny termin"
                    />
                  </div>
                  <div className="pt-6">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="rodo"
                        required
                        className="mt-[2px] h-4 w-4 shrink-0 accent-red-600 cursor-pointer"
                      />
                      <span className="text-xs leading-5 text-zinc-500 transition-colors group-hover:text-zinc-700">
                        Wyrażam zgodę na przetwarzanie danych osobowych w celu realizacji zapytania.
                        <span className="text-red-600 ml-1">*</span>
                      </span>
                    </label>
                  </div>

                  {formStatus === "error" && (
                    <p className="text-sm text-red-600 font-bold bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 508 313 906
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-red-600 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:bg-zinc-900 transition-all duration-300 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formStatus === "sending" ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        Wysyłanie...
                      </span>
                    ) : (
                      "Wyślij wiadomość"
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Map Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 group min-h-[400px]">
                {isMapEnabled ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.125763566453!2d18.9501348!3d50.1486536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716b7f0c4075e8d%3A0x7f2c6a6a63c0477c!2sUs%C5%82ugi%20D%C5%BAwigowe%20Hydromont%20s.c.!5e0!3m2!1spl!2spl!4v1706649000000!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-between bg-zinc-100 p-6">
                    <div className="max-w-md">
                      <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                        Zgoda na cookies
                      </span>
                      <h2 className="mt-4 text-2xl font-heading font-black text-zinc-900">
                        Mapa Google jest zablokowana do czasu akceptacji cookies
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        Ta sekcja korzysta z zewnetrznej uslugi Google Maps, ktora moze
                        zapisywac cookies. Zaakceptuj cookies, aby wlaczyc osadzona mape.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="button"
                        onClick={() => {
                          writeCookieConsent("accepted");
                          setIsMapEnabled(true);
                        }}
                        className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-900"
                      >
                        Akceptuj i pokaz mape
                      </button>
                      <a
                        href="https://www.google.com/maps/place/Us%C5%82ugi+D%C5%BAwigowe+Hydromont+s.c./@50.148654,18.950135,15z/data=!4m6!3m5!1s0x4716b7f0c4075e8d:0x7f2c6a6a63c0477c!8m2!3d50.1486536!4d18.9501348!16s%2Fg%2F1q6b677dx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900"
                      >
                        Otworz w Google Maps <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                )}

                {/* Overlay Card on Map */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                    <div className="flex items-start gap-3">
                        <div className="bg-red-600 text-white p-2 rounded-lg shrink-0">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <span className="block font-bold text-zinc-900 text-sm">Baza Sprzętowa</span>
                            <span className="text-xs text-zinc-500">ul. Dojazdowa 7, Tychy</span>
                            <a
                                href="https://www.google.com/maps/place/Us%C5%82ugi+D%C5%BAwigowe+Hydromont+s.c./@50.148654,18.950135,15z/data=!4m6!3m5!1s0x4716b7f0c4075e8d:0x7f2c6a6a63c0477c!8m2!3d50.1486536!4d18.9501348!16s%2Fg%2F1q6b677dx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-red-600 uppercase tracking-wider hover:underline"
                            >
                                Jak dojechać? <ArrowRight size={10} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

          </div>

          {/* Bottom Row - Company Details & Contact Blocks */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">

            {/* Company Details */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-red-600"></span>
                    Dane Firmy
                </h3>
                <address className="not-italic text-zinc-600 space-y-2">
                    <strong className="block text-zinc-900 text-lg mb-2">HYDROMONT S.C.</strong>
                    <p>Wynajem dźwigów samojezdnych i podnośników koszowych – Śląsk</p>
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                         <p>ul. Dojazdowa 7</p>
                         <p>43-100 Tychy</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-4 text-sm font-mono text-zinc-500">
                        <div>
                            <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400">NIP</span>
                            646-278-06-04
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400">REGON</span>
                            240669349
                        </div>
                    </div>
                </address>
            </div>

            {/* Contact Blocks */}
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                   {/* Phone */}
                   <a href="tel:+48508313906" className="group bg-zinc-900 text-white p-6 rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-600/30">
                      <div className="mb-4 text-white/50 group-hover:text-white transition-colors">
                          <Phone size={24} />
                      </div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest opacity-60 mb-1">Telefon 24/7</span>
                      <span className="block text-2xl font-heading font-black tracking-tight">508 313 906</span>
                   </a>

                   {/* WhatsApp */}
                   <a href="https://api.whatsapp.com/send?phone=48508313906" target="_blank" rel="noopener noreferrer" className="group bg-[#25D366] text-white p-6 rounded-2xl hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30">
                      <div className="mb-4 text-white/80">
                          <Smartphone size={24} />
                      </div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">WhatsApp</span>
                      <span className="block text-xl font-heading font-bold tracking-tight">Napisz do nas</span>
                   </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                  <a href="mailto:team.gmamarketing@gmail.com" className="group bg-white border border-zinc-200 p-6 rounded-2xl hover:border-red-600/50 hover:bg-red-50/50 transition-all duration-300">
                       <div className="mb-4 text-red-600">
                          <Mail size={24} />
                      </div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1">Email</span>
                      <span className="block text-lg font-bold text-zinc-900 group-hover:text-red-600 transition-colors">team.gmamarketing@gmail.com</span>
                  </a>

                  <a href="https://www.facebook.com/people/Us%C5%82ugi-D%C5%BAwigowe-Hydromont-SC/61556393884660/" target="_blank" rel="noopener noreferrer" className="group bg-[#1877F2] text-white p-6 rounded-2xl hover:bg-[#166fe5] transition-all duration-300 shadow-lg hover:shadow-[#1877F2]/30">
                       <div className="mb-4 text-white/80">
                          <Facebook size={24} />
                      </div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">Social Media</span>
                      <span className="block text-lg font-bold">Facebook</span>
                  </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
