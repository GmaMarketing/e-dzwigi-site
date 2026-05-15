"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          Powrót do strony głównej
        </Link>

        <div className="mb-12">
          <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">
            Informacje prawne
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight mb-6">
            POLITYKA PRYWATNOSCI
          </h1>
        </div>

        <div className="prose prose-zinc max-w-4xl text-zinc-600">
          <p>
            Niniejsza Polityka Prywatnosci okresla zasady przetwarzania i ochrony danych
            osobowych przekazanych przez uzytkownikow w zwiazku z korzystaniem przez nich
            z uslug poprzez serwis internetowy <strong>e-dzwigi.pl</strong>.
          </p>

          <h2>1. Administrator Danych Osobowych</h2>
          <p>
            Administratorem danych osobowych zawartych w serwisie jest firma{" "}
            <strong>HYDROMONT S.C.</strong> z siedziba w Tychach przy ul. Dojazdowej 7,
            NIP: 6462780604, REGON: 240669349.
          </p>

          <h2>2. Zakres zbierania danych</h2>
          <p>
            Serwis zbiera informacje podane dobrowolnie przez uzytkownika poprzez
            formularze kontaktowe oraz w sposob automatyczny w zakresie niezbednym do
            zapamietania ustawien prywatnosci. Dane te moga obejmowac: imie i nazwisko,
            adres e-mail, numer telefonu oraz inne informacje niezbedne do realizacji
            uslugi.
          </p>

          <h2>3. Cel przetwarzania danych</h2>
          <p>Dane osobowe przetwarzane sa w celu:</p>
          <ul>
            <li>udzielenia odpowiedzi na zapytania przeslane przez formularz kontaktowy lub e-mail,</li>
            <li>realizacji zamowien i uslug dzwigowych,</li>
            <li>przesylania ofert handlowych, tylko w przypadku wyrazenia zgody.</li>
          </ul>

          <h2>4. Pliki Cookies</h2>
          <p>
            Serwis wykorzystuje plik cookie techniczny do zapamietania decyzji o zgodzie na
            cookies oraz moze ladowac zewnetrzne tresci, takie jak mapa Google, dopiero po
            akceptacji. Mozesz zarzadzac ustawieniami cookies w swojej przegladarce.
          </p>

          <h2>5. Kontakt</h2>
          <p>
            W sprawach zwiazanych z ochrona danych osobowych prosimy o kontakt pod adresem
            e-mail: <strong>biuro@e-dzwigi.pl</strong>.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
