import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import {
  clientTypes,
  differentiators,
  engagementPhases,
  leaders,
  offices,
} from "@/lib/content";

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
        alt="Quiet contemporary interior overlooking the city"
        className="aspect-[21/8] w-full"
        sizes="100vw"
        priority
      />
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl text-graphite md:text-5xl">
                Why clients choose Trugro
              </h2>
            </div>
            <div className="lg:col-span-7">
              {differentiators.map((item) => (
                <article key={item.title} className="border-t border-line py-8">
                  <p className="text-xs text-stone">{item.number}</p>
                  <h3 className="mt-2 text-xl text-graphite">{item.title}</h3>
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
            A four-phase engagement, from discovery to scale.
          </h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {engagementPhases.map((phase) => (
              <article key={phase.number} className="border-t border-line pt-8">
                <p className="text-xs text-stone">Phase {phase.number}</p>
                <h3 className="editorial mt-3 text-2xl text-graphite">
                  {phase.title}
                </h3>
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
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            The companies we take into the ecosystem.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {clientTypes.map((item) => (
              <article key={item.title} className="border-t border-line pt-8">
                <h3 className="text-xl text-graphite">{item.title}</h3>
                <p className="mt-3 max-w-md text-stone">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-paper py-24 md:py-32">
        <Container>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl text-graphite md:text-5xl">
            Cross-domain operators across defence, technology, finance and the
            field.
          </h2>
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((person) => (
              <article key={person.name} className="border-t border-line pt-6">
                <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                  {person.initials}
                </p>
                <h3 className="mt-3 text-xl text-graphite">{person.name}</h3>
                <p className="mt-1 text-sm text-stone">{person.role}</p>
                {person.credential ? (
                  <p className="mt-1 text-xs tracking-wide text-stone/80">
                    {person.credential}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-line py-24">
        <Container>
          <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
            Offices
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((office) => (
              <li key={office.city} className="border-t border-line pt-5">
                <p className="text-lg text-graphite">{office.city}</p>
                <p className="mt-1 text-sm text-stone">{office.line}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
