import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { GreenRule } from "@/components/shared/GreenRule";
import { ImpactStats } from "@/components/shared/ImpactStats";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { capabilitySeo, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { capabilities, getCapability, technologies } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return capabilities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCapability(slug);
  if (!item) return { robots: { index: false } };
  const seo = capabilitySeo[slug];
  return pageMetadata({
    title: seo?.title ?? item.title,
    description: seo?.description ?? item.short,
    path: `/capabilities/${item.slug}`,
    image: item.image,
    imageAlt: item.alt,
    keywords: seo?.keywords,
  });
}

export default async function CapabilityPage({ params }: Props) {
  const { slug } = await params;
  const item = getCapability(slug);
  if (!item) notFound();

  const others = capabilities.filter((cap) => cap.slug !== item.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd(item)} />
      <section className="relative min-h-[46vh] overflow-hidden bg-graphite text-paper">
        <EditorialImage
          src={item.image}
          alt={item.alt}
          className="absolute inset-0 h-full w-full"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/88 via-graphite/55 to-graphite/20" />
        <Container className="relative flex min-h-[46vh] flex-col justify-end pb-10 pt-28 md:pb-12 md:pt-32">
          <Breadcrumbs
            inverted
            items={[
              { name: "Capabilities", href: "/capabilities" },
              {
                name: item.heroTitle ?? item.title,
                href: `/capabilities/${item.slug}`,
              },
            ]}
          />
          <Eyebrow className="text-growth">Capabilities</Eyebrow>
          <h1 className="font-display mt-3 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
            {item.heroTitle ?? item.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/80">
            {item.tagline}
          </p>
        </Container>
      </section>
      <Section className="py-10 md:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <GreenRule />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
                {item.overview}
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <section className="border-t border-line bg-paper py-12 md:py-16">
        <Container>
          <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>The industry context</Eyebrow>
              <h2 className="font-display mt-4 text-3xl text-graphite md:text-4xl">
                Why this work exists now.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-stone lg:col-span-7 lg:col-start-6">
              {item.context}
            </p>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            How Trugro works this capability.
          </h2>
          <ul className="mt-16 grid gap-10 md:grid-cols-2">
            {item.work.map((step) => (
              <li key={step.title} className="border-t border-line pt-8">
                <h3 className="text-xl text-graphite">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {step.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <section className="border-t border-line bg-paper py-12 md:py-16">
        <Container>
          <Eyebrow>Impact spotlight</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            What the work changes.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {item.impact.map((spot) => (
              <article key={spot.title} className="border-t border-line pt-8">
                <h3 className="text-xl text-graphite">{spot.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {spot.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <ImpactStats />
        </Container>
      </section>
      <section className="border-t border-line py-20">
        <Container>
          <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
            Related technology
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {technologies.slice(0, 5).map((tech) => (
              <Link
                key={tech.slug}
                href={`/technology/${tech.slug}`}
                className="text-graphite"
              >
                <span className="link-underline">{tech.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-16 grid gap-8 border-t border-line pt-12 md:grid-cols-3">
            {others.map((cap) => (
              <Link key={cap.slug} href={`/capabilities/${cap.slug}`}>
                <p className="editorial mt-2 text-2xl text-graphite">
                  {cap.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink href="/capabilities">All capabilities →</ArrowLink>
          </div>
        </Container>
      </section>
      <ConnectBlock topic={item.heroTitle ?? item.title} />
    </>
  );
}
