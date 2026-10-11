import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { GreenRule } from "@/components/shared/GreenRule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { domainSeo, pageMetadata } from "@/lib/seo";
import { capabilities, getTechnology, technologies } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return technologies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getTechnology(slug);
  if (!item) return { robots: { index: false } };
  const seo = domainSeo[slug];
  return pageMetadata({
    title: seo?.title ?? `${item.title} Defence Consulting`,
    description: seo?.description ?? item.summary,
    path: `/technology/${item.slug}`,
    image: item.image,
    imageAlt: item.alt,
    keywords: seo?.keywords,
  });
}

export default async function TechnologyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getTechnology(slug);
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
              { name: "Technology", href: "/technology" },
              { name: item.title, href: `/technology/${item.slug}` },
            ]}
          />
          <Eyebrow className="text-growth">Technology</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
            {item.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/80">{item.short}</p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <GreenRule />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
                {item.body}
              </p>
            </div>
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
        </Container>
      </Section>
      {item.subsections ? (
        <section className="border-t border-line py-24 md:py-32">
          <Container>
            <Eyebrow>Dive deeper</Eyebrow>
            <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
              Micro Satellite and Nano Satellite.
            </h2>
            <div className="mt-16 space-y-20">
              {item.subsections.map((section, index) => {
                const imageFirst = index % 2 === 0;
                return (
                  <article
                    key={section.title}
                    className="grid items-center gap-10 lg:grid-cols-12"
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
                      <h3 className="editorial text-3xl text-graphite">
                        {section.title}
                      </h3>
                      <p className="mt-4 text-stone">{section.text}</p>
                      <ul className="mt-6">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="border-t border-line py-3 text-sm text-graphite"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}
      <section className="border-t border-line py-20">
        <Container>
          <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
            Relevant capabilities
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {capabilities.slice(0, 3).map((cap) => (
              <Link key={cap.slug} href={`/capabilities/${cap.slug}`}>
                <p className="editorial mt-2 text-2xl">{cap.title}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink href="/technology">All technology →</ArrowLink>
          </div>
        </Container>
      </section>
      <ConnectBlock topic={item.title} />
    </>
  );
}
