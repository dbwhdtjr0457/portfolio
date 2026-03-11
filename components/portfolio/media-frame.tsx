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
  return (
    <figure className={cn("space-y-3", className)}>
      <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-card">
        <Image
          src={image}
          alt={alt}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
