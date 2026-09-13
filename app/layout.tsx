import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { firm } from "@/lib/content";
import { organizationJsonLd, SITE_URL } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Defence Strategy Consulting in India | Trugro Advisors",
    template: "%s | Trugro",
  },
  description:
    "Trugro Advisors LLP consults enterprises into India’s defence ecosystem — from product readiness to procurement.",
  applicationName: firm.legal,
  authors: [{ name: firm.legal, url: SITE_URL }],
  creator: firm.legal,
  publisher: firm.legal,
  category: "consulting",
  keywords: [
    "defence strategy consulting",
    "defence procurement India",
    "Trugro Advisors",
    "GSQR",
    "iDEX",
    "MAKE",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Defence Strategy Consulting in India | Trugro Advisors",
    description:
      "Defence strategy consulting: market entry, product positioning, procurement and business development.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: firm.legal,
  },
  twitter: {
    card: "summary_large_image",
    title: "Defence Strategy Consulting in India | Trugro Advisors",
    description:
      "Trugro Advisors LLP consults enterprises into India’s defence ecosystem — from product readiness to procurement.",
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
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col bg-paper font-sans text-graphite"
        suppressHydrationWarning
      >
        <JsonLd data={organizationJsonLd()} />
        <Suspense fallback={<div className="h-[4.5rem] lg:h-[5rem]" />}>
          <SiteHeader />
        </Suspense>
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
