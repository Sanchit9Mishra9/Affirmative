import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { capabilitySeo, pageMetadata, serviceJsonLd } from "@/lib/seo";
import {
  capabilities,
  getCapability,
  industries,
} from "@/lib/content";

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
    description: seo?.description ?? item.summary,
    path: `/what-we-do/${item.slug}`,
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
      <section className="bg-paper pt-32 pb-16 md:pt-40">
        <Container>
          <Breadcrumbs
            items={[
              { name: "What we do", href: "/what-we-do" },
              { name: item.title, href: `/what-we-do/${item.slug}` },
            ]}
          />
          <Eyebrow>What we do · {item.number}</Eyebrow>
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <h1 className="font-display col-span-full max-w-4xl text-5xl text-graphite md:text-6xl lg:col-span-8 lg:text-7xl">
              {item.title}
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-stone lg:col-span-4 lg:pt-4">
              {item.summary}
            </p>
          </div>
        </Container>
      </section>
      <EditorialImage
        src={item.image}
        alt={item.alt}
        className="aspect-[21/8] w-full"
        sizes="100vw"
        priority
      />
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-lg leading-relaxed text-graphite">
                {item.body}
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                How we work
              </p>
              <ul className="mt-6 space-y-8">
                {item.approach.map((step) => (
                  <li key={step.title} className="border-t border-line pt-6">
                    <h2 className="text-lg text-graphite">{step.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      <section className="border-t border-line py-20">
        <Container>
          <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
            Related domains
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {industries.slice(0, 5).map((industry) => (
              <Link
                key={industry.slug}
                href={`/domains/${industry.slug}`}
                className="text-graphite"
              >
                <span className="link-underline">{industry.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-16 grid gap-8 border-t border-line pt-12 md:grid-cols-3">
            {others.map((cap) => (
              <Link key={cap.slug} href={`/what-we-do/${cap.slug}`}>
                <p className="text-xs text-stone">{cap.number}</p>
                <p className="editorial mt-2 text-2xl text-graphite">
                  {cap.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink href="/what-we-do">All capabilities →</ArrowLink>
          </div>
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
