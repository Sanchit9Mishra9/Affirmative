import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/shared/Layout";
import { ConnectBlock } from "@/components/shared/ConnectBlock";
import { GreenRule } from "@/components/shared/GreenRule";
import { ImpactStats } from "@/components/shared/ImpactStats";
import { Reveal } from "@/components/shared/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { capabilities } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Defence Consulting Capabilities",
  description:
    "How Trugro Advisors helps defence clients: aftermarket, digital, M&A, marketing and sales, productivity, strategy, talent and transformation.",
  path: "/capabilities",
  keywords: [
    "defence consulting capabilities",
    "aftermarket defence India",
    "defence M&A advisory",
    "GSQR marketing and sales",
  ],
});

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-graphite pt-32 pb-20 text-paper md:pt-40 md:pb-28">
        <Container>
          <Breadcrumbs
            inverted
            items={[{ name: "Capabilities", href: "/capabilities" }]}
          />
          <Eyebrow className="text-growth">How we help clients</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
            Capabilities that take products into the forces.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/75">
            Eight practices. One operating idea: stay with a defence enterprise
            from product readiness through procurement, sustainment and scale.
          </p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <GreenRule />
              <h2 className="font-display mt-6 text-3xl text-graphite md:text-4xl">
                Choose a capability.
              </h2>
              <p className="mt-4 max-w-sm text-stone">
                Each heading opens a dedicated page — industry context, how we
                work, and the impact of the engagement.
              </p>
            </div>
            <div className="lg:col-span-8">
              {capabilities.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.03}>
                  <Link
                    href={`/capabilities/${item.slug}`}
                    className="group block border-t border-line py-8 last:border-b"
                  >
                    <h3 className="text-2xl text-graphite md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-stone">{item.short}</p>
                    <p className="mt-5 text-sm tracking-wide text-graphite">
                      <span className="link-underline">Open this capability</span>
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <Container>
          <ImpactStats />
        </Container>
      </section>
      <ConnectBlock />
    </>
  );
}
