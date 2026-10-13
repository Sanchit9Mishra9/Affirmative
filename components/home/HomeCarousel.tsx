"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ValueLine } from "@/components/shared/GreenRule";
import { capabilities, capabilityExcerpt, carousel } from "@/lib/content";
import { cn } from "@/lib/utils";

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAHAAbAAD//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgYGBwYHCEhISEhISckJygoKCcnJycoKCgrKyszMzMrKysoKCsrMDAzMzc5NzQ0MzQ5OTw8PEhIRUVUVFdnZ3z/xABhAAEAAwEBAAAAAAAAAAAAAAAGAAIFAwcBAQEBAAAAAAAAAAAAAAAAAAADBBAAAwABBAMBAAAAAAAAAAAAAAECURMUUhESQSEEEQACAwEAAAAAAAAAAAAAAAAAEWEBEqH/wAARCAAOABgDASIAAhEAAxEA/9oADAMBAAIRAxEAPwDx6Y+pdmpP52wr28nbzpe2a9k0MdneCuyvAU1b5MmrfJjVx0KpP//Z";

const featured = carousel[0];
const mosaic = carousel.slice(1, 5);
const connect = carousel[5];

function TileImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized={src.endsWith(".jpg")}
      placeholder="blur"
      blurDataURL={HERO_BLUR}
      sizes="(min-width: 768px) 40vw, 100vw"
      className="object-cover"
    />
  );
}

export function HomeCarousel() {
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  return (
    <section
      data-home-lock
      className="relative bg-graphite text-paper md:h-[100dvh] md:overflow-hidden"
      onMouseLeave={() => setCapabilitiesOpen(false)}
    >
      <div className="grid gap-2 px-3 pt-[4.75rem] pb-3 md:h-full md:grid-cols-3 md:grid-rows-4 md:gap-3 md:px-4 md:pt-[5.25rem] md:pb-4">
        <div className="relative min-h-[22rem] overflow-hidden md:col-span-2 md:row-span-2 md:min-h-0">
          <TileImage
            src={featured.image}
            alt={featured.alt}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/88 via-graphite/55 to-graphite/15" />
          <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
            <ValueLine inverted />
            <h1 className="font-display mt-4 max-w-xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
              Building defence
              <br /> enterprise today
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/80 md:text-base">
              Trugro consults enterprises into India’s defence ecosystem — from
              product readiness to procurement.
            </p>
            <div className="mt-6">
              <ArrowLink href="/capabilities" inverted>
                Explore capabilities →
              </ArrowLink>
            </div>
          </div>
        </div>

        <Link
          href={featured.href}
          className="group relative min-h-52 overflow-hidden md:row-span-2 md:min-h-0"
          onMouseEnter={() => setCapabilitiesOpen(true)}
          onFocus={() => setCapabilitiesOpen(true)}
        >
          <TileImage
            src={capabilities[0].image}
            alt={capabilities[0].alt}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/25 to-graphite/10" />
          <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-paper/70">
              {featured.kicker}
            </p>
            <p className="mt-2 font-display text-3xl md:text-4xl">{featured.label}</p>
            <p className="mt-2 line-clamp-3 text-sm text-paper/75">{featured.dek}</p>
          </div>
        </Link>

        {mosaic.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            onMouseEnter={() => setCapabilitiesOpen(false)}
            className={cn(
              "group relative min-h-44 overflow-hidden md:min-h-0",
              index < 2 ? "md:row-start-3" : "md:row-start-4"
            )}
          >
            <TileImage src={item.image} alt={item.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/30 to-graphite/10" />
            <div className="relative flex h-full flex-col justify-end p-4 md:p-5">
              <p className="text-[0.62rem] tracking-[0.16em] uppercase text-paper/70">
                {item.kicker}
              </p>
              <p className="mt-1 text-xl md:text-2xl">{item.label}</p>
              {item.soon ? (
                <p className="mt-1 text-[0.62rem] tracking-[0.16em] uppercase text-growth">
                  Coming soon
                </p>
              ) : null}
            </div>
          </Link>
        ))}

        <Link
          href={connect.href}
          onMouseEnter={() => setCapabilitiesOpen(false)}
          className="flex min-h-44 flex-col justify-end bg-ink p-5 md:col-start-3 md:row-span-2 md:row-start-3 md:min-h-0 md:p-6"
        >
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-growth">
            Connect with us
          </p>
          <p className="font-display mt-3 text-2xl leading-tight md:text-3xl">
            {connect.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-paper/75">{connect.dek}</p>
          <p className="link-underline mt-5 text-sm">Connect with us →</p>
        </Link>
      </div>

      {capabilitiesOpen ? (
        <div
          className="absolute inset-x-3 top-[4.75rem] bottom-3 z-20 overflow-y-auto bg-paper p-5 text-graphite shadow-2xl md:inset-x-4 md:top-[5.25rem] md:bottom-4 md:p-8"
          onMouseEnter={() => setCapabilitiesOpen(true)}
        >
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-stone">
            Capabilities
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <li key={cap.slug}>
                <Link href={`/capabilities/${cap.slug}`} className="group block">
                  <span className="text-base text-graphite">
                    {cap.title}
                    <span aria-hidden="true"> →</span>
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-stone">
                    {capabilityExcerpt(cap.short)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
