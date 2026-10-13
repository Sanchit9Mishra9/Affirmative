import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { leaders, type Leader } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Partners",
  description:
    "Meet the Trugro Advisors partners — entrepreneurs, veterans and technocrats across strategy, technology, operations, finance and defence sales.",
  path: "/partners",
  keywords: ["Trugro partners", "defence consulting leadership India"],
});

function PersonCard({ person }: { person: Leader }) {
  return (
    <article className="flex flex-col items-center bg-paper px-6 py-10 text-center">
      <div className="flex size-28 items-center justify-center rounded-full bg-graphite text-paper">
        <span className="text-sm tracking-[0.16em]">{person.initials}</span>
      </div>
      <h3 className="mt-6 text-lg text-graphite">{person.name}</h3>
      <p className="mt-1 text-sm text-stone">{person.role}</p>
      {person.credential ? (
        <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-stone">
          {person.credential}
        </p>
      ) : null}
    </article>
  );
}

function PeopleGroup({
  title,
  people,
}: {
  title: string;
  people: Leader[];
}) {
  return (
    <div>
      <h2 className="text-center font-display text-3xl text-graphite md:text-4xl">
        {title}
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
}

export default function PartnersPage() {
  const practiceLeaders = leaders.filter((person) =>
    person.role.includes("Partner")
  );
  const practiceTeam = leaders.filter(
    (person) => !person.role.includes("Partner")
  );

  return (
    <>
      <section className="bg-paper pt-28 pb-8 md:pt-32">
        <Container>
          <Breadcrumbs items={[{ name: "Partners", href: "/partners" }]} />
          <Eyebrow>Partners</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl text-graphite md:text-6xl lg:text-7xl">
            Partners
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            Trugro’s partners bring entrepreneurial, military and deep-tech
            experience to the same table. The work is institutional. The teams
            stay small.
          </p>
        </Container>
      </section>
      <Section className="bg-secondary py-8 md:py-12">
        <Container className="space-y-20">
          <PeopleGroup title="Practice leaders" people={practiceLeaders} />
          <PeopleGroup title="Leaders" people={practiceTeam} />
        </Container>
      </Section>
      <ConnectBlock />
    </>
  );
}
