import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { GreenRule } from "@/components/shared/GreenRule";
import { ClientMarks } from "@/components/about/ClientMarks";
import { IndiaMap } from "@/components/about/IndiaMap";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { differentiators, engagementPhases, offices } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "About Trugro Advisors",
  description:
    "Trugro Advisors LLP is an India defence strategy consulting firm founded by entrepreneurs, veterans and technocrats. Offices in Gurugram, Bhopal, Pune, Mumbai and Hyderabad.",
  path: "/about",
  image: "/images/about.jpg",
  imageAlt: "Quiet contemporary interior at Trugro Advisors",
  keywords: [
    "Trugro Advisors LLP",
    "defence consulting firm India",
    "Gurugram defence consultants",
  ],
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper pt-32 pb-16 md:pt-40">
        <Container>
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <Eyebrow>About Trugro</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl text-graphite md:text-6xl lg:text-7xl">
            Operators bridging innovation and the armed forces.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            Trugro was founded by serial entrepreneurs, defence veterans and
            technocrats who saw a critical gap in India’s defence ecosystem —
            companies and startups with the right products, but no exposure to
            how defence procurement actually works.
          </p>
        </Container>
      </section>
      <EditorialImage
        src="/images/about.jpg"
        alt="Quiet office interior overlooking an Indian city at dusk"
        className="aspect-[21/8] w-full"
        sizes="100vw"
        priority
      />
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <GreenRule />
              <h2 className="font-display mt-6 text-4xl text-graphite md:text-5xl">
                Why clients choose Trugro
              </h2>
            </div>
            <div className="lg:col-span-7">
              {differentiators.map((item) => (
                <article key={item.title} className="border-t border-line py-8">
                  <h3 className="text-xl text-graphite">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-stone">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <section className="border-t border-line bg-paper py-24 md:py-32">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            A four-phase engagement, from Discovery to Scale.
          </h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {engagementPhases.map((phase) => (
              <article key={phase.title} className="border-t border-line pt-8">
                <GreenRule className="mb-5 w-8" />
                <h3 className="editorial text-2xl text-graphite">{phase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {phase.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-line py-24 md:py-32">
        <Container>
          <Eyebrow>Clients we work with</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            The companies we take into the ecosystem.
          </h2>
          <div className="mt-16">
            <ClientMarks />
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-paper py-24 md:py-32">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Presence in India</Eyebrow>
              <h2 className="font-display mt-4 text-4xl text-graphite md:text-5xl">
                Offices across the country.
              </h2>
              <ul className="mt-10">
                {offices.map((office) => (
                  <li
                    key={office.city}
                    className="flex items-baseline justify-between border-t border-line py-4"
                  >
                    <span className="text-lg text-graphite">{office.city}</span>
                    <span className="text-sm text-stone">{office.line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <IndiaMap />
            </div>
          </div>
        </Container>
      </section>
      <ConnectBlock />
    </>
  );
}
