import Link from "next/link";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
};

export function ArrowLink({
  href,
  children,
  className,
  inverted = false,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-4 text-[0.9375rem] tracking-wide",
        inverted ? "text-paper" : "text-graphite",
        className
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-growth transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </span>
      <span
        aria-hidden="true"
        className="relative flex h-px w-8 items-center bg-growth transition-all duration-500 ease-out group-hover:w-12"
      >
        <span className="absolute -right-px h-1.5 w-1.5 rotate-45 border-r border-t border-growth" />
      </span>
    </Link>
  );
}
