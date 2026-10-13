import { impactStats } from "@/lib/content";
import { cn } from "@/lib/utils";
import { GreenRule } from "@/components/shared/GreenRule";

export function ImpactStats({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 text-center sm:flex-row sm:gap-0",
        className
      )}
    >
      {impactStats.map((stat, index) => (
        <div
          key={stat.label}
          className="flex w-full flex-1 items-center justify-center gap-8 sm:gap-0"
        >
          {index > 0 ? (
            <GreenRule
              vertical
              className="hidden h-16 sm:inline-block"
            />
          ) : null}
          <p className="px-6">
            <span
              className={cn(
                "block font-display text-6xl md:text-7xl",
                inverted ? "text-paper" : "text-graphite"
              )}
            >
              {stat.value}
            </span>
            <span
              className={cn(
                "mx-auto mt-3 block max-w-[14rem] text-base md:text-lg",
                inverted ? "text-paper/70" : "text-stone"
              )}
            >
              {stat.label}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
