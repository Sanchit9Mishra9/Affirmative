import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ClosingCta } from "@/components/shared/ClosingCta";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { roles } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Careers in Defence Consulting",
  description:
    "Join Trugro Advisors in Gurugram, Pune, Mumbai or Hyderabad. Help technology companies and industrial groups enter India’s defence ecosystem.",
  path: "/careers",
  image: "/images/careers.jpg",
  imageAlt: "Trugro team in a contemporary atrium",
  keywords: ["defence consulting jobs India", "Trugro careers"],
});

export default function CareersPage() {
  return (
    <>
      <section className="bg-paper pt-32 pb-16 md:pt-40">
        <Container>
          <Breadcrumbs items={[{ name: "Careers", href: "/careers" }]} />
          <Eyebrow>Careers</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl text-graphite md:text-6xl lg:text-7xl">
            Help build India’s defence enterprises.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            Trugro hires people who can sit with a founder, a colonel and an OEM
            programme lead in the same week — and still care about the trial
            protocol on a Thursday afternoon. The problems are national. The
            teams are deliberately small.
          </p>
        </Container>
      </section>
      <EditorialImage
        src="/images/careers.jpg"
        alt="Team moving through a contemporary atrium"
        className="aspect-[21/8] w-full"
        sizes="100vw"
        priority
      />
      <Section>
        <Container>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl text-graphite">Open roles</h2>
            <p className="max-w-md text-sm text-stone">
              Roles shown here are representative of the practice. Apply even if
              the title is imperfect; we hire for range across Gurugram, Bhopal,
              Pune, Mumbai and Hyderabad.
            </p>
          </div>
          <ul>
            {roles.map((role) => (
              <li key={role.id} className="border-t border-line py-8 last:border-b">
                <div className="grid gap-4 md:grid-cols-12 md:items-baseline">
                  <h3 className="text-2xl text-graphite md:col-span-5">
                    {role.title}
                  </h3>
                  <p className="text-sm text-stone md:col-span-3">
                    {role.practice}
                    <br />
                    {role.location}
                  </p>
                  <p className="text-sm leading-relaxed text-stone md:col-span-4">
                    {role.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ArrowLink href="/contact">Talk to recruiting →</ArrowLink>
          </div>
        </Container>
      </Section>
      <ClosingCta headline="If this is the work you want, start a conversation." />
    </>
  );
}
