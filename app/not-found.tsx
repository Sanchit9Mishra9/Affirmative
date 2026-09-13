import Link from "next/link";
import { Container } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-paper pt-24">
      <Container>
        <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-stone">
          404
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl text-graphite md:text-7xl">
          This page is not on our map.
        </h1>
        <p className="mt-6 max-w-md text-stone">
          The address may have changed, or the work has not been published yet.
        </p>
        <div className="mt-10 flex flex-wrap gap-8">
          <ArrowLink href="/">Return home →</ArrowLink>
          <Link href="/contact" className="text-sm tracking-wide text-graphite">
            <span className="link-underline">Contact Trugro</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
