import type { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieConsent } from "@/components/CookieConsent";

const siteUrl = "https://e-dzwigi.pl";
const ogImageUrl = `${siteUrl}/Hydromont_red.png`;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "e-dzwigi.pl",
  url: siteUrl,
  inLanguage: "pl-PL",
  publisher: {
    "@type": "Organization",
    name: "HYDROMONT S.C.",
  },
};

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
  metadataBase: new URL(siteUrl),
  title: "HYDROMONT | Usługi Dźwigowe Tychy",
  description:
    "Wynajem żurawi samojezdnych i podnośników koszowych. 30 lat doświadczenia, flota Liebherr, dostępność 24/7. Tychy, Śląsk.",
  keywords: [
    "dźwigi Tychy",
    "usługi dźwigowe Śląsk",
    "wynajem dźwigów",
    "wynajem podnośników koszowych",
    "żurawie samojezdne",
    "Hydromont",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "e-dzwigi.pl",
    title: "HYDROMONT | Usługi Dźwigowe Tychy",
    description:
      "Wynajem żurawi samojezdnych i podnośników koszowych. 30 lat doświadczenia, flota Liebherr, dostępność 24/7. Tychy, Śląsk.",
    images: [
      {
        url: ogImageUrl,
        width: 512,
        height: 512,
        alt: "HYDROMONT - usługi dźwigowe i podnośniki koszowe na Śląsku",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HYDROMONT | Usługi Dźwigowe Tychy",
    description:
      "Wynajem żurawi samojezdnych i podnośników koszowych. 30 lat doświadczenia, flota Liebherr, dostępność 24/7. Tychy, Śląsk.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: googleSiteVerification,
  },
  category: "business",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {googleTagManagerId ? (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
            >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`}</Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}</Script>
          </>
        ) : null}
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
