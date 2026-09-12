import { ScrollScene } from "@/components/ui/scroll-scene";
import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type MediaFrameProps = {
  image: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export function MediaFrame({
  image,
  alt,
  caption,
  className,
  priority = false,
}: MediaFrameProps) {
  const frame = (
    <figure className={cn("space-y-3", className)}>
      <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-card">
        <Image
          src={image}
          alt={alt}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
          className="h-full w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
  return priority ? frame : <ScrollScene>{frame}</ScrollScene>;
}
