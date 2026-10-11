"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { Container } from "@/components/shared/Layout";
import { ValueLine } from "@/components/shared/GreenRule";
import { carousel } from "@/lib/content";
import { cn } from "@/lib/utils";

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAHAAbAAD//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgYGBwYHCEhISEhISckJygoKCcnJycoKCgrKyszMzMrKysoKCsrMDAzMzc5NzQ0MzQ5OTw8PEhIRUVUVFdnZ3z/xABhAAEAAwEBAAAAAAAAAAAAAAAGAAIFAwcBAQEBAAAAAAAAAAAAAAAAAAADBBAAAwABBAMBAAAAAAAAAAAAAAECURMUUhESQSEEEQACAwEAAAAAAAAAAAAAAAAAEWEBEqH/wAARCAAOABgDASIAAhEAAxEA/9oADAMBAAIRAxEAPwDx6Y+pdmpP52wr28nbzpe2a9k0MdneCuyvAU1b5MmrfJjVx0KpP//Z";

export function HomeCarousel() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const slide = carousel[active];

  const openSlide = useCallback(
    (index: number) => {
      router.push(carousel[index].href);
    },
    [router]
  );

  return (
    <section
      data-home-lock
      className="relative h-[100dvh] overflow-hidden bg-graphite text-paper"
    >
      {carousel.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === active ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={index !== active}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            unoptimized={item.image.endsWith(".jpg")}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/55 to-graphite/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/20 to-graphite/30" />

      <Container className="relative z-10 flex h-full flex-col pt-24 pb-0 md:pt-28">
        <div className="flex min-h-0 flex-1 flex-col justify-end pb-6 md:pb-8">
          <div className="max-w-4xl">
            <ValueLine inverted />
            {active === 0 ? (
              <h1 className="font-display mt-5 text-[2.6rem] leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-[5.1rem]">
                Building defence
                <br className="hidden sm:block" /> enterprise today
              </h1>
            ) : (
              <h1 className="font-display mt-5 text-[2.35rem] leading-[0.98] text-paper sm:text-5xl md:text-6xl lg:text-[4.4rem]">
                {slide.title}
              </h1>
            )}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/80 md:mt-7 md:text-lg">
              {active === 0
                ? "Trugro consults enterprises into India’s defence ecosystem — from product readiness to procurement."
                : slide.dek}
            </p>
            {slide.soon ? (
              <p className="mt-8 text-[0.6875rem] tracking-[0.22em] uppercase text-growth">
                Coming soon
              </p>
            ) : (
              <div className="mt-8 md:mt-10">
                <ArrowLink href={slide.href} inverted>
                  {slide.cta} →
                </ArrowLink>
              </div>
            )}
          </div>
        </div>

        <nav
          aria-label="Homepage sections"
          className="shrink-0 border-t border-white/15"
        >
          <ul className="flex overflow-x-auto">
            {carousel.map((item, index) => {
              const selected = index === active;
              return (
                <li
                  key={item.id}
                  className="min-w-[9.5rem] flex-1 border-r border-white/10 last:border-r-0"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => openSlide(index)}
                    aria-current={selected ? "true" : undefined}
                    className={cn(
                      "group flex h-full w-full flex-col items-start px-3 py-4 text-left transition-colors md:px-5 md:py-5",
                      selected ? "bg-white/8" : "hover:bg-white/5"
                    )}
                  >
                    <span
                      className={cn(
                        "h-0.5 w-full origin-left bg-growth transition-transform duration-500",
                        selected ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                    <span className="mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-paper/55">
                      {item.kicker}
                    </span>
                    <span className="mt-1 text-sm text-paper md:text-base">
                      {item.label}
                    </span>
                    {item.soon ? (
                      <span className="mt-1 text-[0.6rem] tracking-[0.16em] uppercase text-growth">
                        Coming soon
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="sr-only">
          Selected section: {slide.label}.{" "}
          <Link href={slide.href}>Open {slide.label}</Link>
        </p>
      </Container>
    </section>
  );
}
