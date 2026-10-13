import { Container } from "@/components/shared/Layout";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { GreenRule } from "@/components/shared/GreenRule";
import { cn } from "@/lib/utils";

export function ConnectBlock({
  topic,
  compact = false,
  className,
}: {
  topic?: string;
  compact?: boolean;
  className?: string;
}) {
  const headline = topic
    ? `Connect with us about ${topic}.`
    : "Connect with us.";

  if (compact) {
    return (
      <div
        className={cn(
          "flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between",
          className
        )}
      >
        <p className="text-sm text-stone">{headline}</p>
        <ArrowLink href="/contact">Write to Trugro →</ArrowLink>
      </div>
    );
  }

  return (
    <section className={cn("border-t border-line bg-paper py-12 md:py-16", className)}>
      <Container>
        <GreenRule className="mb-8 w-14" />
        <h2 className="font-display max-w-4xl text-4xl text-graphite md:text-6xl">
          {headline}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-stone">
          Tell us about the product, the company, and the service you want to
          reach. We will respond with the right partners from the firm.
        </p>
        <div className="mt-10">
          <ArrowLink href="/contact">Connect with us →</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
