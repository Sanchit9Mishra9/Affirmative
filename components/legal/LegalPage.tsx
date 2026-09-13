import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/shared/Layout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export function LegalPage({
  title,
  eyebrow,
  path,
  children,
}: {
  title: string;
  eyebrow: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-paper pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <Breadcrumbs items={[{ name: title, href: path }]} />
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display mt-5 max-w-3xl text-5xl text-graphite md:text-6xl">
          {title}
        </h1>
        <div className="mt-12 max-w-2xl space-y-5 text-[1.02rem] leading-relaxed text-stone">
          {children}
        </div>
      </Container>
    </section>
  );
}

export function legalMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return pageMetadata({
    title,
    description,
    path,
  });
}
