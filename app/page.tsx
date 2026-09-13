import type { Metadata } from "next";
import { BrandStatement } from "@/components/home/BrandStatement";
import { Capabilities } from "@/components/home/Capabilities";
import { CareersTeaser } from "@/components/home/CareersTeaser";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Impact } from "@/components/home/Impact";
import { Industries } from "@/components/home/Industries";
import { Insights } from "@/components/home/Insights";
import { Perspective } from "@/components/home/Perspective";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { pageMetadata } from "@/lib/seo";

const homeSeo = pageMetadata({
  title: "Defence Strategy Consulting in India",
  description:
    "Trugro Advisors LLP helps enterprises enter India’s defence ecosystem — market entry, GSQR positioning, iDEX and MAKE procurement, and OEM–DPSU partnerships.",
  path: "/",
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
      <Hero />
      <BrandStatement />
      <Capabilities />
      <FeaturedStory />
      <Industries />
      <Impact />
      <Insights />
      <Perspective />
      <Faq />
      <CareersTeaser />
      <ClosingCta />
    </>
  );
}
