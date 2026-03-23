"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">
        
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-600 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={16} />
            Powrót do strony głównej
        </Link>

        <div className="mb-12">
            <span className="text-red-600 font-bold tracking-widest uppercase mb-4 block">Informacje Prawne</span>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight mb-6">
                POLITYKA PRYWATNOŚCI
            </h1>
        </div>

        <div className="prose prose-zinc max-w-4xl text-zinc-600">
            <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług poprzez serwis internetowy <strong>e-dzwigi.pl</strong>.
            </p>

            <h3>1. Administrator Danych Osobowych</h3>
            <p>
                Administratorem danych osobowych zawartych w serwisie jest firma <strong>HYDROMONT S.C.</strong> z siedzibą w Tychach przy ul. Dojazdowej 7, NIP: 6462780604, REGON: 240669349.
            </p>

            <h3>2. Zakres zbierania danych</h3>
            <p>
                Serwis zbiera informacje podane dobrowolnie przez użytkownika poprzez formularze kontaktowe oraz w sposób automatyczny (pliki cookies). Dane te mogą obejmować: imię i nazwisko, adres e-mail, numer telefonu oraz inne informacje niezbędne do realizacji usługi.
            </p>

            <h3>3. Cel przetwarzania danych</h3>
            <p>
                Dane osobowe przetwarzane są w celu:
            </p>
            <ul>
                <li>Udzielenia odpowiedzi na zapytania przesłane przez formularz kontaktowy lub e-mail.</li>
                <li>Realizacji zamówień i usług dźwigowych.</li>
                <li>Przesyłania ofert handlowych (tylko w przypadku wyrażenia zgody).</li>
            </ul>

            <h3>4. Pliki Cookies</h3>
            <p>
                Serwis korzysta z plików cookies w celu realizacji usług i zgodnie z Polityką Plików Cookies. Możesz określić warunki przechowywania lub dostępu do plików cookies w Twojej przeglądarce.
            </p>

            <h3>5. Kontakt</h3>
            <p>
                W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem e-mail: <strong>biuro@e-dzwigi.pl</strong>.
            </p>
        </div>

      </div>

      <Footer />
    </main>
  );
}
