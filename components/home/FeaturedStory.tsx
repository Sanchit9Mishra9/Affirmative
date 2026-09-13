import { Container, Eyebrow } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { MaskReveal, Reveal } from "@/components/shared/Reveal";
import { insights } from "@/lib/content";

export function FeaturedStory() {
  const story = insights[0];

  return (
    <section className="bg-graphite py-0 text-paper">
      <div className="grid lg:grid-cols-2">
        <MaskReveal className="relative min-h-[420px] lg:min-h-[720px]">
          <EditorialImage
            src={story.image}
            alt={story.alt}
            className="absolute inset-0 h-full min-h-[420px] w-full lg:min-h-[720px]"
            sizes="50vw"
          />
        </MaskReveal>
        <div className="relative z-10 flex items-center">
          <Container className="py-16 lg:py-24">
            <Reveal>
              <Eyebrow className="text-growth">Selected engagement</Eyebrow>
              <h2 className="font-display mt-5 max-w-lg text-4xl md:text-5xl lg:text-[3.4rem]">
                {story.title}
              </h2>
              <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-paper/70">
                {story.dek}
              </p>
              <div className="mt-10">
                <ArrowLink href={`/insights/${story.slug}`} inverted>
                  Read the story →
                </ArrowLink>
              </div>
            </Reveal>
          </Container>
        </div>
      </div>
    </section>
  );
}
