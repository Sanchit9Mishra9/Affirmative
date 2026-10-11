import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { insights } from "@/lib/content";
import { cn } from "@/lib/utils";

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
          <Breadcrumbs items={[{ name: "Our Insights", href: "/insights" }]} />
          <Eyebrow>Our Insights</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl text-graphite md:text-6xl lg:text-7xl">
            Defence engagements and what they teach.
          </h1>
        </Container>
      </section>
      <Section className="pt-8">
        <Container>
          <div className="space-y-0">
            {insights.map((item, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="group grid items-center gap-8 border-t border-line py-12 lg:grid-cols-12"
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
                    <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                      {item.category}
                    </p>
                    <h2 className="editorial mt-3 text-3xl text-graphite md:text-4xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-md text-stone">{item.dek}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
      <ConnectBlock />
    </>
  );
}
