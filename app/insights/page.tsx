import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { insights } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Defence Consulting Insights & Engagements",
  description:
    "Selected Trugro engagements and perspectives on AI for defence, combat platforms, secure LiFi and quantum data processing in India.",
  path: "/insights",
  keywords: [
    "defence consulting case studies",
    "GSQR AI defence",
    "Indian Army LiFi",
  ],
});

export default function InsightsPage() {
  return (
    <>
      <section className="bg-paper pt-32 pb-12 md:pt-40">
        <Container>
          <Breadcrumbs items={[{ name: "Insights", href: "/insights" }]} />
          <Eyebrow>Insights</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl text-graphite md:text-6xl lg:text-7xl">
            Defence engagements and what they teach.
          </h1>
        </Container>
      </section>
      <Section className="pt-8">
        <Container>
          <div className="space-y-0">
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="group grid items-center gap-8 border-t border-line py-12 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                    {item.category} · {item.read}
                  </p>
                  <h2 className="editorial mt-3 text-3xl text-graphite md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-md text-stone">{item.dek}</p>
                </div>
                <EditorialImage
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[16/9] lg:col-span-7"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <ClosingCta />
    </>
  );
}
