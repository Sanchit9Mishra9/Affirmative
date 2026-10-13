import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { GreenRule } from "@/components/shared/GreenRule";
import { Reveal } from "@/components/shared/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { howToJsonLd, pageMetadata } from "@/lib/seo";
import { capabilities, procurementSteps } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Defence Consulting Services in India",
  description:
    "Trugro’s operating sequence for defence market entry: Product Readiness, Strategic Positioning, Compliance & Certification, User Trials, Technical Evaluation, and Procurement & Scale.",
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
          "From Product Readiness to defence procurement in India",
          "Trugro’s operational sequence for taking a product from TRL audit through certification, trials and contract award.",
          procurementSteps
        )}
      />
      <section className="bg-graphite pt-28 pb-12 text-paper md:pt-32 md:pb-16">
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
            An operating sequence: take a defence-ready product from market fit
            through procurement, and stay for the order pipeline.
          </p>
        </Container>
      </section>
      <Section>
        <Container>
          <Eyebrow>Operational sequence</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            From Product Readiness to Procurement.
          </h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {procurementSteps.map((step) => (
              <li key={step.title} className="border-t border-line pt-8">
                <GreenRule className="mb-5 w-8" />
                <h3 className="text-xl text-graphite">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <section className="border-t border-line bg-paper py-12 md:py-16">
        <Container>
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            Pointers that open a dedicated page.
          </h2>
          <div className="mt-16 space-y-0">
            {capabilities.map((item, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <Reveal key={item.slug} delay={index * 0.03}>
                  <Link
                    href={`/capabilities/${item.slug}`}
                    className="group grid items-center gap-8 border-t border-line py-12 lg:grid-cols-12 lg:py-16"
                  >
                    <EditorialImage
                      src={item.image}
                      alt={item.alt}
                      className={cn(
                        "aspect-[16/9] lg:col-span-6",
                        imageFirst
                          ? "lg:col-start-1"
                          : "lg:col-start-7 lg:row-start-1"
                      )}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div
                      className={cn(
                        "lg:col-span-5",
                        imageFirst
                          ? "lg:col-start-8"
                          : "lg:col-start-1 lg:row-start-1"
                      )}
                    >
                      <h3 className="editorial text-3xl text-graphite md:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-md text-stone">{item.short}</p>
                      <p className="mt-6 text-sm tracking-wide text-graphite">
                        <span className="link-underline">
                          Explore capability
                        </span>
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
      <ConnectBlock />
    </>
  );
}
