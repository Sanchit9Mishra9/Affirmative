import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/shared/Layout";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Reveal } from "@/components/shared/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { technologies } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Defence Technology",
  description:
    "Trugro technology expertise across UAV and CUAS, satellite (micro and nano), combat platforms, RCWS, electro-optics, quantum, and directed energy weapons.",
  path: "/technology",
  keywords: [
    "UAV CUAS consulting India",
    "defence satellite consulting",
    "combat platforms",
    "RCWS",
    "electro optics",
    "quantum defence",
    "directed energy weapons",
  ],
});

export default function TechnologyPage() {
  return (
    <>
      <section className="bg-graphite pt-32 pb-20 text-paper md:pt-40 md:pb-28">
        <Container>
          <Breadcrumbs
            inverted
            items={[{ name: "Technology", href: "/technology" }]}
          />
          <Eyebrow className="text-growth">Technology</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
            Defence technology we take into programmes.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/75">
            ISR and surveillance, strike systems, secure communications,
            autonomy and AI, armament — taken into the forces through products
            the procurement system can actually buy.
          </p>
        </Container>
      </section>
      <div>
        {technologies.map((item, index) => {
          const imageFirst = index % 2 === 0;
          return (
            <Reveal key={item.slug}>
              <article className="border-b border-line">
                <Container className="py-16 md:py-20">
                  <Link
                    href={`/technology/${item.slug}`}
                    className="group grid items-center gap-10 lg:grid-cols-12"
                  >
                    <EditorialImage
                      src={item.image}
                      alt={item.alt}
                      className={cn(
                        "aspect-[16/9] lg:col-span-6",
                        imageFirst ? "lg:col-start-1" : "lg:col-start-7 lg:row-start-1"
                      )}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div
                      className={cn(
                        "lg:col-span-5",
                        imageFirst ? "lg:col-start-8" : "lg:col-start-1 lg:row-start-1"
                      )}
                    >
                      <h2 className="editorial text-3xl text-graphite md:text-4xl">
                        {item.title}
                      </h2>
                      <p className="mt-4 max-w-md text-stone">{item.short}</p>
                      <p className="mt-6 text-sm tracking-wide text-graphite">
                        <span className="link-underline">Open this technology</span>
                      </p>
                    </div>
                  </Link>
                  <ConnectBlock topic={item.title} compact className="mt-4" />
                </Container>
              </article>
            </Reveal>
          );
        })}
      </div>
      <ConnectBlock />
    </>
  );
}
