import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  inverted = false,
}: {
  items: { name: string; href: string }[];
  inverted?: boolean;
}) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol
          className={cn(
            "flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] tracking-[0.14em] uppercase",
            inverted ? "text-paper/55" : "text-stone"
          )}
        >
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span
                    aria-current="page"
                    className={inverted ? "text-growth" : "text-graphite"}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors",
                      inverted ? "hover:text-paper" : "hover:text-graphite"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
