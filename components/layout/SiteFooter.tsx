"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/shared/Layout";
import { CookiePreferences } from "@/components/layout/CookiePreferences";
import { firm, nav } from "@/lib/content";

export function SiteFooter() {
  const [cookiesOpen, setCookiesOpen] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-graphite text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo inverted />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/65">
              {firm.tagline}. Defence strategy consulting for enterprises
              entering India’s defence ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8">
            <div>
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-paper/45">
                Firm
              </p>
              <ul className="mt-5 space-y-3">
                {nav.footer.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-paper/80 transition-colors hover:text-growth"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-paper/45">
                Connect
              </p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${firm.email}`}
                    className="text-sm text-paper/80 transition-colors hover:text-growth"
                  >
                    {firm.email}
                  </a>
                </li>
                <li>
                  <address className="text-sm not-italic leading-relaxed text-paper/65">
                    Gurugram · Bhopal · Pune
                    <br />
                    Mumbai · Hyderabad
                  </address>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-paper/45">
                Legal
              </p>
              <ul className="mt-5 space-y-3">
                {nav.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-paper/80 transition-colors hover:text-growth"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => setCookiesOpen(true)}
                    className="text-sm text-paper/80 transition-colors hover:text-growth"
                  >
                    Cookie Preferences
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs tracking-wide text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {firm.legal}. All rights reserved.
          </p>
          <p>{firm.descriptor}.</p>
        </div>
      </Container>
      <CookiePreferences open={cookiesOpen} onOpenChange={setCookiesOpen} />
    </footer>
  );
}
