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
        "flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4",
        className
      )}
    >
      {impactStats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-8">
          {index > 0 ? (
            <GreenRule
              vertical
              className="hidden h-10 sm:inline-block"
            />
          ) : null}
          <p>
            <span
              className={cn(
                "block font-display text-4xl md:text-5xl",
                inverted ? "text-paper" : "text-graphite"
              )}
            >
              {stat.value}
            </span>
            <span
              className={cn(
                "mt-2 block max-w-[12rem] text-sm",
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
