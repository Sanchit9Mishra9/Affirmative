import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Reveal } from "@/components/shared/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { howToJsonLd, pageMetadata } from "@/lib/seo";
import { capabilities, procurementSteps } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Defence Consulting Services in India",
  description:
    "Strategic advisory, GSQR product positioning, defence procurement (iDEX, MAKE, RFP) and OEM–DPSU business development from Trugro Advisors LLP.",
  path: "/what-we-do",
  keywords: [
    "defence consulting services",
    "defence procurement advisory",
    "iDEX MAKE consulting",
  ],
});

export default function WhatWeDoPage() {
  return (
    <>
      <JsonLd
        data={howToJsonLd(
          "From product readiness to defence procurement in India",
          "Trugro’s operational sequence for taking a product from TRL audit through certification, trials and contract award.",
          procurementSteps
        )}
      />
      <section className="bg-graphite pt-32 pb-20 text-paper md:pt-40 md:pb-28">
        <Container>
          <Breadcrumbs
            inverted
            items={[{ name: "What we do", href: "/what-we-do" }]}
          />
          <Eyebrow className="text-growth">What we do</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
            Defence consulting from market entry to procurement.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/75">
            Four missions. One operating idea: take a defence-ready product from
            market fit through procurement, and stay for the order pipeline.
          </p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="space-y-0">
            {capabilities.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.04}>
                <Link
                  href={`/what-we-do/${item.slug}`}
                  className="group grid gap-8 border-t border-line py-12 lg:grid-cols-12 lg:py-16"
                >
                  <div className="lg:col-span-5">
                    <p className="text-xs text-stone">{item.number}</p>
                    <h2 className="editorial mt-3 text-3xl text-graphite md:text-4xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-md text-stone">{item.summary}</p>
                    <p className="mt-6 text-sm tracking-wide text-graphite">
                      <span className="link-underline">Explore this capability</span>
                    </p>
                  </div>
                  <EditorialImage
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[16/9] lg:col-span-7"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <section className="border-t border-line bg-paper py-24 md:py-32">
        <Container>
          <Eyebrow>Operational sequence</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            From product readiness to procurement.
          </h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {procurementSteps.map((step) => (
              <li key={step.number} className="border-t border-line pt-8">
                <p className="text-xs text-stone">{step.number}</p>
                <h3 className="mt-3 text-xl text-graphite">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
