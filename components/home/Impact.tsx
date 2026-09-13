import { Container, Eyebrow } from "@/components/shared/Layout";
import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";
import { stats } from "@/lib/content";

export function Impact() {
  return (
    <section className="border-t border-line bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Eyebrow>India’s defence sector</Eyebrow>
            <h2 className="font-display mt-4 text-4xl text-graphite md:text-5xl">
              A $26B+ theatre of opportunity.
            </h2>
            <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-stone">
              India is in the largest defence-modernisation push in its history.
              Indigenisation, exports and emerging-technology procurement are
              converging into a once-in-a-generation window.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <article className="border-t border-line pt-8">
                <p className="font-serif text-6xl tracking-[-0.05em] text-graphite md:text-7xl">
                  <CountUp
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  {item.label}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
