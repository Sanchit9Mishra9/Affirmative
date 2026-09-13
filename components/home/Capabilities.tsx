"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/shared/Layout";
import { Reveal } from "@/components/shared/Reveal";
import { capabilities } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const [active, setActive] = useState(capabilities[0].slug);

  return (
    <section className="border-t border-line bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="font-display mt-4 text-4xl text-graphite md:text-5xl lg:text-6xl">
                How we help you win in defence.
              </h2>
            </div>
            <Link
              href="/what-we-do"
              className="text-sm tracking-wide text-graphite"
            >
              <span className="link-underline">View all capabilities</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {capabilities.map((item) => {
              const open = active === item.slug;
              return (
                <article
                  key={item.slug}
                  className="border-t border-line last:border-b"
                  onMouseEnter={() => setActive(item.slug)}
                >
                  <Link
                    href={`/what-we-do/${item.slug}`}
                    className="group block py-7 md:py-8"
                    onFocus={() => setActive(item.slug)}
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="w-8 text-xs text-stone">
                        {item.number}
                      </span>
                      <h3
                        className={cn(
                          "flex-1 text-2xl transition-colors duration-300 md:text-[2rem]",
                          open ? "text-graphite" : "text-graphite/70"
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-500 ease-out",
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-xl pl-14 text-[0.98rem] leading-relaxed text-stone">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                {capabilities.map((item) => (
                  <Image
                    key={item.slug}
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="40vw"
                    className={cn(
                      "object-cover transition-opacity duration-500",
                      item.slug === active ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
                <div className="absolute inset-0 bg-graphite/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-paper">
                  <p className="text-xs tracking-[0.18em] uppercase text-growth">
                    {capabilities.find((item) => item.slug === active)?.number}
                  </p>
                  <p className="editorial mt-2 text-2xl">
                    {capabilities.find((item) => item.slug === active)?.short}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
