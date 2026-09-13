import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { getInsight, getRelatedInsights, insights } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) return { robots: { index: false } };
  return pageMetadata({
    title: item.title,
    description: item.dek,
    path: `/insights/${item.slug}`,
    image: item.image,
    imageAlt: item.alt,
    type: "article",
    publishedTime: item.dateISO,
    authors: ["Trugro Advisors LLP"],
    section: item.category,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();
  const related = getRelatedInsights(item.slug);

  return (
    <>
      <JsonLd data={articleJsonLd(item)} />
      <article className="bg-paper pt-32 md:pt-40">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Insights", href: "/insights" },
              { name: item.title, href: `/insights/${item.slug}` },
            ]}
          />
          <Eyebrow>
            {item.category} ·{" "}
            <time dateTime={item.dateISO}>{item.date}</time> · {item.read}
          </Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-4xl text-graphite md:text-6xl lg:text-7xl">
            {item.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone">
            {item.dek}
          </p>
        </Container>
        <div className="mt-16">
          <EditorialImage
            src={item.image}
            alt={item.alt}
            className="aspect-[21/9] w-full"
            sizes="100vw"
            priority
          />
        </div>
        <Container className="py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-12">
            <blockquote className="editorial text-3xl leading-snug text-graphite lg:col-span-4">
              {item.pullQuote}
            </blockquote>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-graphite lg:col-span-7 lg:col-start-6">
              {item.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          {related.length > 0 ? (
            <aside className="mt-20 border-t border-line pt-12">
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                Related engagements
              </p>
              <ul className="mt-8 grid gap-8 md:grid-cols-2">
                {related.map((relatedItem) => (
                  <li key={relatedItem.slug}>
                    <Link href={`/insights/${relatedItem.slug}`}>
                      <p className="text-xs text-stone">{relatedItem.category}</p>
                      <p className="editorial mt-2 text-2xl text-graphite">
                        {relatedItem.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
          <div className="mt-16">
            <ArrowLink href="/insights">All insights →</ArrowLink>
          </div>
        </Container>
      </article>
      <ClosingCta />
    </>
  );
}
