import { Container } from "@/components/shared/Layout";
import { Reveal } from "@/components/shared/Reveal";

export function BrandStatement() {
  return (
    <section className="bg-paper py-28 md:py-36 lg:py-44">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-[2.35rem] text-graphite md:text-5xl lg:text-[4.1rem] lg:leading-[0.98]">
              Great products. Wrong playbook. We close the gap between
              innovation and the armed forces.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-[1.05rem] leading-relaxed text-stone lg:ml-auto">
              Companies arrive with technology the forces could use — and
              without GSQR literacy, military specifications, or a path to MoD,
              DPSUs and OEMs. Trugro was founded by entrepreneurs, defence
              veterans and technocrats to stay with clients from product
              refinement to a procurement win.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
