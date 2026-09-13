import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Reveal } from "@/components/shared/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { industries } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Defence Technology Domains",
  description:
    "Trugro domain expertise across UAV and CUAS, micro and nano satellites, combat platforms, RCWS and electro-optics, quantum, and directed energy weapons.",
  path: "/domains",
  keywords: [
    "UAV CUAS consulting India",
    "combat platforms",
    "quantum defence",
    "directed energy weapons",
  ],
});

export default function DomainsPage() {
  return (
    <>
      <section className="bg-graphite pt-32 pb-20 text-paper md:pt-40 md:pb-28">
        <Container>
          <Breadcrumbs
            inverted
            items={[{ name: "Domains", href: "/domains" }]}
          />
          <Eyebrow className="text-growth">Domains</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
            Defence technology domains we operate in.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/75">
            ISR and surveillance, strike systems, secure communications,
            autonomy and AI, armament — taken into the forces through products
            the procurement system can actually buy.
          </p>
        </Container>
      </section>
      <Section className="pt-0">
        <Container>
          {industries.map((item, index) => (
            <Reveal key={item.slug}>
              <Link
                href={`/domains/${item.slug}`}
                className="group grid items-center gap-8 border-b border-line py-14 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <p className="text-xs text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="editorial mt-3 text-3xl text-graphite md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-md text-stone">{item.short}</p>
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
        </Container>
      </Section>
      <ClosingCta />
    </>
  );
}
