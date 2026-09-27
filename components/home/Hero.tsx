import Image from "next/image";
import { Container } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAHAAbAAD//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgYGBwYHCEhISEhISckJygoKCcnJycoKCgrKyszMzMrKysoKCsrMDAzMzc5NzQ0MzQ5OTw8PEhIRUVUVFdnZ3z/xABhAAEAAwEBAAAAAAAAAAAAAAAGAAIFAwcBAQEBAAAAAAAAAAAAAAAAAAADBBAAAwABBAMBAAAAAAAAAAAAAAECURMUUhESQSEEEQACAwEAAAAAAAAAAAAAAAAAEWEBEqH/wAARCAAOABgDASIAAhEAAxEA/9oADAMBAAIRAxEAPwDx6Y+pdmpP52wr28nbzpe2a9k0MdneCuyvAU1b5MmrfJjVx0KpP//Z";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-graphite text-paper">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Radar radome and satellite dishes at dusk"
          fill
          priority
          fetchPriority="high"
          unoptimized
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          sizes="100vw"
          className="hero-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/88 via-graphite/60 to-graphite/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-graphite/35" />
      </div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24">
        <div className="reveal max-w-5xl">
          <p className="text-[0.6875rem] tracking-[0.28em] uppercase text-growth">
            Growth · Trust · Commitment
          </p>
          <h1 className="font-display mt-6 text-[3.25rem] text-paper sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Building defence
            <br className="hidden sm:block" /> enterprises today.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
            Trugro consults enterprises into India’s defence ecosystem — from
            product readiness to procurement.
          </p>
          <div className="mt-12">
            <ArrowLink href="/what-we-do" inverted>
              Explore what we do →
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
