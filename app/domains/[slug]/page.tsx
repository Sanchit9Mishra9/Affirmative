import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { domainSeo, pageMetadata } from "@/lib/seo";
import { capabilities, getIndustry, industries } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getIndustry(slug);
  if (!item) return { robots: { index: false } };
  const seo = domainSeo[slug];
  return pageMetadata({
    title: seo?.title ?? `${item.title} Defence Consulting`,
    description: seo?.description ?? item.summary,
    path: `/domains/${item.slug}`,
    image: item.image,
    imageAlt: item.alt,
    keywords: seo?.keywords,
  });
}

export default async function DomainPage({ params }: Props) {
  const { slug } = await params;
  const item = getIndustry(slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-graphite text-paper">
        <EditorialImage
          src={item.image}
          alt={item.alt}
          className="absolute inset-0 h-full w-full"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-graphite/65" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end pb-16 pt-36">
          <Breadcrumbs
            inverted
            items={[
              { name: "Domains", href: "/domains" },
              { name: item.title, href: `/domains/${item.slug}` },
            ]}
          />
          <Eyebrow className="text-growth">Domains</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
            {item.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/80">{item.short}</p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <p className="max-w-2xl text-lg leading-relaxed text-graphite lg:col-span-7">
              {item.body}
            </p>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                Where we focus
              </p>
              <ul className="mt-6">
                {item.issues.map((issue) => (
                  <li
                    key={issue}
                    className="border-t border-line py-4 text-graphite"
                  >
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-20 border-t border-line pt-12">
            <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
              Relevant capabilities
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {capabilities.slice(0, 3).map((cap) => (
                <Link key={cap.slug} href={`/what-we-do/${cap.slug}`}>
                  <p className="text-xs text-stone">{cap.number}</p>
                  <p className="editorial mt-2 text-2xl">{cap.title}</p>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <ArrowLink href="/domains">All domains →</ArrowLink>
            </div>
          </div>
        </Container>
      </Section>
      <ClosingCta />
    </>
  );
}
