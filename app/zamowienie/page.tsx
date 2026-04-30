"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLenis } from "@/components/SmoothScroll";
import { Download, FileText, ArrowLeft, Printer, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function OrderPage() {
  const [pdfSrc, setPdfSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const lenis = useLenis();
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const unlockScrollTimeoutRef = useRef<number | null>(null);

  function lockPageScrollTemporarily() {
    if (!lenis) {
      return;
    }

    lenis.stop();

    if (unlockScrollTimeoutRef.current !== null) {
      window.clearTimeout(unlockScrollTimeoutRef.current);
    }

    unlockScrollTimeoutRef.current = window.setTimeout(() => {
      lenis.start();
      unlockScrollTimeoutRef.current = null;
    }, 250);
  }

  useEffect(() => {
    const el = pdfContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          setPdfSrc("/Zlecenie.pdf#view=FitH");
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (unlockScrollTimeoutRef.current !== null) {
        window.clearTimeout(unlockScrollTimeoutRef.current);
      }

      lenis?.start();
    };
  }, [lenis]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const raw = new FormData(form);

    const data = new FormData();
    data.append("access_key", "c4af4d83-88ef-461c-afef-63613f6d4541");
    data.append("subject", "Nowe zlecenie ze strony e-dzwigi.pl");
    data.append("from_name", "Formularz Zamówień e-dzwigi.pl");
    data.append("Imię i nazwisko / Firma", raw.get("name") as string);
    data.append("Telefon", raw.get("phone") as string);
    data.append("Email", raw.get("email") as string);
    const message = raw.get("message") as string;
    if (message) data.append("Uwagi", message);
    const file = raw.get("attachment") as File;
    if (file && file.size > 0) data.append("attachment", file);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
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

      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">

        {/* Breadcrumb / Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-600 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} />
          Powrót do strony głównej
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="text-red-600 font-bold tracking-widest uppercase mb-4 block">Dokumenty</span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight mb-6">
            FORMULARZ ZAMÓWIENIA
          </h1>
          <p className="text-zinc-500 max-w-2xl text-lg">
            Pobierz, wypełnij i odeślij formularz zamówienia, aby zarezerwować termin.<br />
            Formularz jest interaktywny – możesz go wypełnić bezpośrednio w przeglądarce przed wysłaniem.
          </p>
        </div>

        {/* ── ŚCIEŻKI WYBORU ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">

          {/* Karta 1 – pobierz i wyślij mailem */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-8 flex flex-col">
            <div className="p-3 bg-zinc-100 text-zinc-700 rounded-xl w-fit mb-5">
              <Download size={24} />
            </div>
            <h2 className="font-heading font-black text-xl text-zinc-900 mb-3">Pobierz i wyślij mailem</h2>
            <p className="text-zinc-500 text-sm leading-relaxed flex-grow mb-6">
              Pobierz formularz PDF, wypełnij i odeślij na team.gmamarketing@gmail.com
            </p>
            <a
              href="/Zlecenie.pdf"
              download="Zlecenie_hydromont.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-zinc-900 text-zinc-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-900 hover:text-white transition-all duration-300"
            >
              <Download size={16} />
              POBIERZ FORMULARZ
            </a>
          </div>

          {/* Karta 2 – wyślij online (wyróżniona) */}
          <div className="bg-white rounded-2xl border-2 border-red-600 p-8 flex flex-col relative shadow-lg shadow-red-600/10">
            <span className="absolute -top-3 left-6 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              SZYBCIEJ
            </span>
            <div className="p-3 bg-red-100 text-red-600 rounded-xl w-fit mb-5">
              <FileText size={24} />
            </div>
            <h2 className="font-heading font-black text-xl text-zinc-900 mb-3">Wyślij formularz online</h2>
            <p className="text-zinc-500 text-sm leading-relaxed flex-grow mb-6">
              Wypełnij PDF w przeglądarce i wyślij bezpośrednio ze strony
            </p>
            <a
              href="#formularz-wysylki"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-900 transition-all duration-300 shadow-lg shadow-red-600/25"
            >
              WYŚLIJ ONLINE
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

        {/* ── PDF EMBED – bez zmian ── */}
        <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">

          {/* Toolbar */}
          <div className="border-b border-zinc-100 p-4 bg-zinc-50/50 flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                <FileText size={24} />
              </div>
              <div>
                <span className="block font-bold text-zinc-900 text-sm">Zlecenie.pdf</span>
                <span className="text-xs text-zinc-500 font-medium">PDF Interaktywny • 67 KB</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/Zlecenie.pdf"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 text-xs font-bold uppercase tracking-widest rounded-xl transition-all"
              >
                <Printer size={16} />
                <span className="hidden sm:inline">Drukuj</span>
              </a>
              <a
                href="/Zlecenie.pdf"
                download="Zlecenie_hydromont.pdf"
                className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white hover:bg-red-600 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-red-600/20"
              >
                <Download size={16} />
                <span>Pobierz</span>
              </a>
            </div>
          </div>

          {/* Viewer */}
          <div
            ref={pdfContainerRef}
            className="w-full h-[800px] bg-zinc-100 relative overflow-hidden"
          >
            {pdfSrc && (
              <div
                data-lenis-prevent-wheel
                className={`absolute inset-0 z-10 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
                onWheelCapture={lockPageScrollTemporarily}
              >
                <iframe
                src={pdfSrc}
                className="w-full h-full bg-white"
                title="Formularz Zamówienia PDF"
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                />
              </div>
            )}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-20 h-full w-[76px] bg-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute left-[76px] top-0 z-20 h-[44px] w-[calc(100%-76px)] bg-transparent"
            />
            <div className={`absolute inset-0 z-30 flex flex-col items-center justify-center transition-opacity duration-300 ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              {pdfSrc ? (
                <>
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600 mb-4" />
                  <span className="text-zinc-500 font-bold mb-2">Ładowanie podglądu...</span>
                  <span className="text-zinc-400 text-sm">Jeśli podgląd się nie wyświetla, użyj przycisku Pobierz.</span>
                </>
              ) : (
                <>
                  <div className="p-4 bg-red-100 text-red-600 rounded-2xl mb-4">
                    <FileText size={32} />
                  </div>
                  <span className="text-zinc-500 font-bold mb-1">Przewiń, aby załadować podgląd</span>
                  <span className="text-zinc-400 text-sm">lub użyj przycisku Pobierz powyżej</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── FORMULARZ WYSYŁKI ONLINE ── */}
        <section id="formularz-wysylki" className="mt-14 scroll-mt-28">

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-zinc-900 mb-4">
              Wyślij wypełniony formularz
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl">
              Wypełnij formularz powyżej, następnie podaj dane kontaktowe i wyślij –
              oddzwonimy tego samego dnia.
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="bg-white border border-green-200 rounded-2xl p-8 flex items-start gap-5 shadow-sm">
              <div className="text-green-500 shrink-0 mt-0.5">
                <CheckCircle size={28} />
              </div>
              <div>
                <p className="font-bold text-zinc-900 text-lg mb-1">Zlecenie wysłane!</p>
                <p className="text-zinc-500">
                  Oddzwonimy do Ciebie tego samego dnia. W pilnych sprawach:{" "}
                  <a href="tel:+48508313906" className="text-red-600 font-bold hover:underline">508 313 906</a>
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8"
            >
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                {/* Imię i nazwisko / Firma */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-zinc-700 mb-2">
                    Imię i nazwisko / Firma <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 mb-2">
                    Telefon kontaktowy <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    placeholder="np. 500 100 200"
                  />
                </div>
              </div>

              {/* E-mail */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-bold text-zinc-700 mb-2">
                  E-mail <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                  placeholder="na który wyślemy potwierdzenie"
                />
              </div>

              {/* Załącz PDF */}
              <div className="mb-5">
                <label htmlFor="attachment" className="block text-sm font-bold text-zinc-700 mb-2">
                  Załącz wypełniony formularz PDF
                </label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  accept=".pdf"
                  className="w-full cursor-pointer rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-zinc-900 file:px-4 file:py-1.5 file:text-xs file:font-bold file:uppercase file:tracking-wider file:text-white file:transition-all hover:file:bg-red-600 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                />
                <p className="text-xs text-zinc-400 mt-1.5">
                  Jeśli wypełniłeś PDF offline – możesz go tutaj załączyć
                </p>
              </div>

              {/* Uwagi */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-zinc-700 mb-2">
                  Uwagi dodatkowe
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                  placeholder="Dodatkowe informacje do zlecenia"
                />
              </div>

              {/* Checkbox RODO */}
              <div className="mb-7">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="rodo"
                    required
                    className="mt-0.5 w-5 h-5 shrink-0 accent-red-600 cursor-pointer"
                  />
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-700 transition-colors leading-relaxed">
                    Wyrażam zgodę na przetwarzanie danych osobowych w celu realizacji zlecenia.
                    <span className="text-red-600 ml-1">*</span>
                  </span>
                </label>
              </div>

              {formStatus === "error" && (
                <p className="mb-5 text-sm text-red-600 font-bold bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 508 313 906
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="inline-flex items-center gap-2 bg-red-600 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:bg-zinc-900 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-red-600/25"
              >
                {formStatus === "sending" ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    WYŚLIJ ZLECENIE →
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* ── KROKI ── */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-zinc-100">
            <span className="text-4xl font-black text-red-600 mb-4 block">01</span>
            <h3 className="font-bold text-zinc-900 mb-2">Wypełnij formularz</h3>
            <p className="text-sm text-zinc-500">Uzupełnij dane w dokumencie bezpośrednio w przeglądarce.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-100">
            <span className="text-4xl font-black text-red-600 mb-4 block">02</span>
            <h3 className="font-bold text-zinc-900 mb-2">Wyślij dane kontaktowe</h3>
            <p className="text-sm text-zinc-500">Podaj telefon i mail – skontaktujemy się tego samego dnia.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-100">
            <span className="text-4xl font-black text-red-600 mb-4 block">03</span>
            <h3 className="font-bold text-zinc-900 mb-2">Dźwig jedzie do Ciebie</h3>
            <p className="text-sm text-zinc-500">Ustalamy szczegóły i przyjeżdżamy na miejsce realizacji.</p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
