import { Container, Eyebrow } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { MaskReveal, Reveal } from "@/components/shared/Reveal";

export function CareersTeaser() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Careers</Eyebrow>
            <h2 className="font-display mt-4 text-4xl text-graphite md:text-5xl lg:text-[3.4rem]">
              Help build India’s defence enterprises.
            </h2>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-stone">
              Trugro consultants sit between deep-tech companies and the armed
              forces: market entry, GSQR, trials, procurement and the
              partnerships that carry a product into service. If that is the
              work you want, start here.
            </p>
            <div className="mt-10">
              <ArrowLink href="/careers">Explore careers →</ArrowLink>
            </div>
          </Reveal>
          <MaskReveal className="lg:col-span-7">
            <EditorialImage
              src="/images/careers.jpg"
              alt="Colleagues moving through a contemporary office atrium"
              className="aspect-[16/10] w-full"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </MaskReveal>
        </div>
      </Container>
    </section>
  );
}
