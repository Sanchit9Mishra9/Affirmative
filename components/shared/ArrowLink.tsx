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
      <span className="link-underline">{children}</span>
    </Link>
  );
}
