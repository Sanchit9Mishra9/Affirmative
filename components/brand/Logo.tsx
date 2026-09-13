import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Trugro home"
      className={cn("inline-flex items-center outline-none", className)}
    >
      <Image
        src={
          inverted
            ? "/brand/trugro-logo-white.png"
            : "/brand/trugro-logo.png"
        }
        alt="Trugro"
        width={466}
        height={161}
        priority
        className="h-7 w-auto md:h-8"
      />
    </Link>
  );
}
