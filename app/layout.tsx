import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYDROMONT | Usługi Dźwigowe Tychy",
  description: "Wynajem żurawi samojezdnych i podnośników koszowych. 30 lat doświadczenia, flota Liebherr, dostępność 24/7. Tychy, Śląsk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${barlow.variable} ${manrope.variable} antialiased bg-slate-950 text-slate-200 font-body overflow-x-hidden`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
