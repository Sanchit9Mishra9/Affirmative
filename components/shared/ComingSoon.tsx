import { Container } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { GreenRule } from "@/components/shared/GreenRule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export function ComingSoon({
  title,
  kicker,
  description,
  href,
}: {
  title: string;
  kicker: string;
  description: string;
  href: string;
}) {
  return (
    <section className="flex min-h-[80vh] items-center bg-paper pt-24">
      <Container>
        <Breadcrumbs items={[{ name: title, href }]} />
        <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-stone">
          {kicker}
        </p>
        <GreenRule className="mt-6" />
        <h1 className="font-display mt-6 max-w-3xl text-5xl text-graphite md:text-7xl">
          {title}
        </h1>
        <p className="mt-2 text-sm tracking-[0.2em] uppercase text-stone">
          Coming soon
        </p>
        <p className="mt-8 max-w-xl text-lg text-stone">{description}</p>
        <div className="mt-12">
          <ArrowLink href="/contact">Connect with us →</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
