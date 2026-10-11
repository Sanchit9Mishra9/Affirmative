"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { capabilities, nav, technologies } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SearchDialog } from "@/components/layout/SearchDialog";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [navPath, setNavPath] = useState(pathname);

  if (pathname !== navPath) {
    setNavPath(pathname);
    setOpen(false);
    setExpanded(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = isHome && !open;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-growth focus:px-4 focus:py-2 focus:text-graphite"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          open || !isHome ? "bg-paper/95" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[92rem] items-center gap-4 px-5 md:h-[5rem] md:px-10 xl:px-16">
          <button
            type="button"
            className={cn("p-1", inverted ? "text-paper" : "text-graphite")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-6" strokeWidth={1.5} />
            ) : (
              <Menu className="size-6" strokeWidth={1.5} />
            )}
          </button>

          <Logo inverted={inverted} className="[&_img]:h-8 md:[&_img]:h-9" />

          <div className="ml-auto flex items-center gap-5">
            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                setOpen(false);
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
              Connect
            </Link>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-paper pt-[4.5rem] md:pt-[5rem]">
          <nav
            aria-label="Site"
            className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 py-10 md:grid-cols-12 md:px-10 md:py-16 xl:px-16"
          >
            <div className="md:col-span-7">
              <ul>
                {nav.menu.map((item) => {
                  const hasChildren = "children" in item && item.children;
                  const isOpen = expanded === item.label;
                  const childItems =
                    item.children === "capabilities"
                      ? capabilities.map((cap) => ({
                          title: cap.title,
                          href: `/capabilities/${cap.slug}`,
                        }))
                      : item.children === "technologies"
                        ? technologies.map((tech) => ({
                            title: tech.title,
                            href: `/technology/${tech.slug}`,
                          }))
                        : [];

                  return (
                    <li key={item.label} className="border-b border-line">
                      <div className="flex items-center justify-between gap-4">
                        <Link
                          href={item.href}
                          className="flex-1 py-4 font-display text-3xl text-graphite md:text-4xl"
                        >
                          {item.label}
                          {"soon" in item && item.soon ? (
                            <span className="ml-3 align-middle text-[0.65rem] tracking-[0.18em] uppercase text-stone">
                              Coming soon
                            </span>
                          ) : null}
                        </Link>
                        {hasChildren ? (
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} pages`}
                            onClick={() =>
                              setExpanded((current) =>
                                current === item.label ? null : item.label
                              )
                            }
                            className="px-2 py-4 text-sm text-stone"
                          >
                            {isOpen ? "–" : "+"}
                          </button>
                        ) : null}
                      </div>
                      {hasChildren && isOpen ? (
                        <ul className="grid gap-x-8 pb-6 sm:grid-cols-2">
                          {childItems.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-2 text-sm text-stone hover:text-graphite"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-stone">
                Connect with us
              </p>
              <p className="editorial mt-4 text-2xl text-graphite">
                Tell us about the product and the service you want to reach.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex text-sm tracking-wide text-graphite"
              >
                <span className="link-underline">Write to Trugro</span>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
