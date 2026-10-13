import { cn } from "@/lib/utils";

export function GreenRule({
  className,
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "bg-growth",
        vertical ? "inline-block h-4 w-px" : "block h-px w-10",
        className
      )}
    />
  );
}

export function ValueLine({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  const tone = inverted ? "text-growth" : "text-stone";
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.6875rem] tracking-[0.28em] uppercase",
        tone,
        className
      )}
    >
      <span>Growth</span>
      <span aria-hidden="true">|</span>
      <span>Trust</span>
      <span aria-hidden="true">|</span>
      <span>Commitment</span>
    </p>
  );
}
