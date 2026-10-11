import type { Metadata } from "next";
import { HomeCarousel } from "@/components/home/HomeCarousel";
import { pageMetadata } from "@/lib/seo";

const homeSeo = pageMetadata({
  title: "Defence Strategy Consulting in India",
  description:
    "Trugro Advisors LLP helps enterprises enter India’s defence ecosystem — market entry, GSQR positioning, iDEX and MAKE procurement, and OEM–DPSU partnerships.",
  path: "/",
  image: "/images/hero-india-gate.jpg",
  imageAlt: "Kartavya Path looking toward India Gate at dusk",
  keywords: [
    "defence strategy consulting India",
    "defence procurement consulting",
    "GSQR",
    "iDEX consulting",
    "MAKE in India defence",
    "Trugro Advisors",
  ],
});

export const metadata: Metadata = {
  ...homeSeo,
  title: {
    absolute: "Defence Strategy Consulting in India | Trugro Advisors",
  },
  openGraph: {
    ...homeSeo.openGraph,
    title: "Defence Strategy Consulting in India | Trugro Advisors",
  },
  twitter: {
    ...homeSeo.twitter,
    title: "Defence Strategy Consulting in India | Trugro Advisors",
  },
};

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/hero-india-gate.jpg"
        fetchPriority="high"
      />
      <HomeCarousel />
    </>
  );
}
