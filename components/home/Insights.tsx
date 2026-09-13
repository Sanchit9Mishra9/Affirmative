import Link from "next/link";
import { Container, Eyebrow } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Reveal } from "@/components/shared/Reveal";
import { insights } from "@/lib/content";

export function Insights() {
  const [featured, ...rest] = insights;

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <h2 className="font-display mt-4 text-4xl text-graphite md:text-5xl lg:text-6xl">
                Selected client engagements.
              </h2>
            </div>
            <ArrowLink href="/insights">View all insights →</ArrowLink>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Link href={`/insights/${featured.slug}`} className="group block">
              <EditorialImage
                src={featured.image}
                alt={featured.alt}
                className="aspect-[16/10] w-full"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <p className="mt-6 text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                {featured.category}
              </p>
              <h3 className="editorial mt-3 text-3xl leading-tight text-graphite md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-stone">{featured.dek}</p>
            </Link>
          </Reveal>

          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            {rest.map((item, index) => (
              <Reveal key={item.slug} delay={0.08 * (index + 1)}>
                <Link
                  href={`/insights/${item.slug}`}
                  className="group grid grid-cols-5 gap-5 border-t border-line pt-8"
                >
                  <EditorialImage
                    src={item.image}
                    alt={item.alt}
                    className="col-span-2 aspect-[4/3]"
                    sizes="200px"
                  />
                  <div className="col-span-3">
                    <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                      {item.category}
                    </p>
                    <h3 className="editorial mt-2 text-xl leading-snug text-graphite md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
