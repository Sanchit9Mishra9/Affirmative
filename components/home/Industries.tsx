"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/shared/Layout";
import { Reveal } from "@/components/shared/Reveal";
import { industries } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Industries() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((item) => item.slug === active) ?? industries[0];

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-graphite text-paper">
      {industries.map((item) => (
        <Image
          key={item.slug}
          src={item.image}
          alt={item.slug === current.slug ? item.alt : ""}
          fill
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-700",
            item.slug === current.slug ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <div className="absolute inset-0 bg-graphite/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-graphite/45 to-transparent" />

      <Container className="relative z-10 grid min-h-[720px] items-end gap-12 py-24 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <Eyebrow className="text-growth">Domains</Eyebrow>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl">
            Technology we take into the forces.
          </h2>
          <p className="mt-6 max-w-md text-paper/75">
            {current.summary}
          </p>
          <Link
            href={`/domains/${current.slug}`}
            className="mt-8 inline-flex text-sm tracking-wide"
          >
            <span className="link-underline text-paper">
              Explore {current.title}
            </span>
          </Link>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul>
            {industries.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/domains/${item.slug}`}
                  onMouseEnter={() => setActive(item.slug)}
                  onFocus={() => setActive(item.slug)}
                  className={cn(
                    "flex items-center justify-between border-t border-white/15 py-4 text-xl transition-colors duration-300 last:border-b md:text-2xl",
                    active === item.slug ? "text-paper" : "text-paper/50"
                  )}
                >
                  {item.title}
                  <span
                    className={cn(
                      "size-1.5 bg-growth transition-opacity",
                      active === item.slug ? "opacity-100" : "opacity-0"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
