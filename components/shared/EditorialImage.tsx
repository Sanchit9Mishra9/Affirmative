import Image from "next/image";
import { cn } from "@/lib/utils";

export function EditorialImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 60vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("image-zoom relative overflow-hidden bg-graphite/10", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        data-image
        className="object-cover"
      />
    </div>
  );
}
