import { Container } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { Reveal } from "@/components/shared/Reveal";

export function ClosingCta({
  headline = "Let’s build India’s defence together.",
  cta = "Talk to Trugro",
  href = "/contact",
}: {
  headline?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="border-t border-line bg-paper py-28 md:py-36">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            <h2 className="font-display text-[2.5rem] md:text-6xl lg:text-7xl text-graphite">
              {headline}
            </h2>
            <div className="mt-12">
              <ArrowLink href={href}>{cta} →</ArrowLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
