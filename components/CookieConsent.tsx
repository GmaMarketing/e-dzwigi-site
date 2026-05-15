"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  readCookieConsent,
  subscribeToCookieConsent,
  writeCookieConsent,
} from "@/lib/cookieConsent";

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeToCookieConsent,
    readCookieConsent,
    () => null
  );

  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-slate-950/95 p-6 text-slate-200 shadow-2xl backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-amber-400">
              Cookies i prywatnosc
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Strona korzysta z niezbednych plikow cookies do zapamietania Twojej decyzji
              oraz moze ladowac tresci zewnetrzne, takie jak mapa Google. Szczegoly
              znajdziesz w{" "}
              <Link href="/polityka-prywatnosci" className="font-bold text-white hover:text-amber-300">
                polityce prywatnosci
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => writeCookieConsent("declined")}
              className="rounded-xl border border-zinc-700 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Odrzuc
            </button>
            <button
              type="button"
              onClick={() => writeCookieConsent("accepted")}
              className="rounded-xl bg-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-amber-400"
            >
              Akceptuj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
