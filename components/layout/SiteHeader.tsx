"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/shared/Layout";
import { capabilities, industries, nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SearchDialog } from "@/components/layout/SearchDialog";

type Mega = "capabilities" | "industries" | null;

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getScrolled() {
  return window.scrollY > 24;
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, () => false);
  const [mega, setMega] = useState<Mega>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [industryPreview, setIndustryPreview] = useState(industries[0].slug);
  const [navPath, setNavPath] = useState(pathname);

  if (pathname !== navPath) {
    setNavPath(pathname);
    setMega(null);
    setMobileOpen(false);
  }

  const inverted = isHome && !scrolled && !mega && !mobileOpen;
  const solid = !inverted;

  const preview = useMemo(
    () => industries.find((item) => item.slug === industryPreview) ?? industries[0],
    [industryPreview]
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-growth focus:px-4 focus:py-2 focus:text-graphite"
      >
        Skip to content
      </a>
      <header
        onMouseLeave={() => setMega(null)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid ? "bg-paper/95" : "bg-transparent"
        )}
      >
        <Container className="flex h-[4.5rem] items-center gap-8 lg:h-[5rem]">
          <Logo inverted={inverted} />

          <nav
            className="hidden flex-1 items-center justify-center gap-9 lg:flex"
            aria-label="Primary"
          >
            {nav.primary.map((item) => {
              const isMega = "mega" in item && item.mega;
              const current =
                item.href !== "/" && pathname.startsWith(item.href);
              if (isMega) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={cn(
                      "nav-link",
                      inverted ? "text-paper" : "text-graphite"
                    )}
                    data-open={mega === item.mega}
                    aria-expanded={mega === item.mega}
                    aria-haspopup="true"
                    onMouseEnter={() => setMega(item.mega as Mega)}
                    onFocus={() => setMega(item.mega as Mega)}
                    onClick={() =>
                      setMega((open) =>
                        open === item.mega ? null : (item.mega as Mega)
                      )
                    }
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "nav-link",
                    inverted ? "text-paper" : "text-graphite"
                  )}
                  onMouseEnter={() => setMega(null)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-5 lg:ml-0">
            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                setMega(null);
                setSearchOpen(true);
              }}
              className={cn(
                "p-1 transition-opacity hover:opacity-70",
                inverted ? "text-paper" : "text-graphite"
              )}
            >
              <Search className="size-[1.15rem]" strokeWidth={1.5} />
            </button>
            <Link
              href="/contact"
              className={cn(
                "nav-link hidden sm:inline-flex",
                inverted ? "text-paper" : "text-graphite"
              )}
            >
              Contact Us
            </Link>
            <button
              type="button"
              className={cn(
                "p-1 lg:hidden",
                inverted ? "text-paper" : "text-graphite"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => {
                setMega(null);
                setMobileOpen((open) => !open);
              }}
            >
              {mobileOpen ? (
                <X className="size-5" strokeWidth={1.5} />
              ) : (
                <Menu className="size-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </Container>

        {mega ? (
          <div className="border-t border-line bg-paper">
            {mega === "capabilities" ? (
              <Container className="grid grid-cols-12 gap-10 py-12">
                <div className="col-span-4 max-w-sm">
                  <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-stone">
                    What we do
                  </p>
                  <p className="editorial mt-4 text-3xl leading-tight text-graphite">
                    From market entry to a procurement win.
                  </p>
                  <Link
                    href="/what-we-do"
                    className="mt-8 inline-flex text-sm tracking-wide text-graphite"
                  >
                    <span className="link-underline">
                      Explore all capabilities
                    </span>
                  </Link>
                </div>
                <div className="col-span-8 grid grid-cols-2 gap-x-10 gap-y-1">
                  {capabilities.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/what-we-do/${item.slug}`}
                      className="group flex gap-4 border-t border-line py-5"
                    >
                      <span className="text-xs text-stone">{item.number}</span>
                      <span>
                        <span className="block text-[0.95rem] text-graphite">
                          {item.title}
                        </span>
                        <span className="mt-1 block max-w-xs text-sm text-stone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {item.short}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </Container>
            ) : (
              <Container className="grid grid-cols-12 gap-10 py-10">
                <div className="col-span-5">
                  <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-stone">
                    Domains
                  </p>
                  <ul className="mt-6">
                    {industries.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/domains/${item.slug}`}
                          onMouseEnter={() => setIndustryPreview(item.slug)}
                          className={cn(
                            "flex items-center justify-between border-t border-line py-3.5 text-[0.95rem] transition-colors",
                            preview.slug === item.slug
                              ? "text-graphite"
                              : "text-stone hover:text-graphite"
                          )}
                        >
                          {item.title}
                          <span
                            className={cn(
                              "size-1.5 bg-growth transition-opacity",
                              preview.slug === item.slug
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-7">
                  <div className="relative aspect-[16/9] overflow-hidden bg-graphite">
                    <Image
                      src={preview.image}
                      alt={preview.alt}
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-graphite/25" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-paper">
                      <p className="editorial text-xl">{preview.title}</p>
                      <p className="mt-2 max-w-md text-sm text-paper/80">
                        {preview.short}
                      </p>
                    </div>
                  </div>
                </div>
              </Container>
            )}
          </div>
        ) : null}

        {mobileOpen ? (
          <nav
            className="mx-auto w-full max-w-[92rem] border-t border-line bg-paper px-5 py-6 md:px-10 lg:hidden xl:px-16"
            aria-label="Mobile"
          >
            {nav.primary.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block border-b border-line py-4 text-lg text-graphite"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="block py-4 text-lg text-graphite">
              Contact Us
            </Link>
          </nav>
        ) : null}
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
