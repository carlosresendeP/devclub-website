import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoMarqueeItem {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  items: LogoMarqueeItem[];
  className?: string;
}

export function LogoMarquee({ items, className }: LogoMarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className={cn("relative w-full overflow-hidden mask-fade-x", className)}>
      <div className="flex w-max items-center gap-1 animate-marquee">
        {track.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="flex h-8 w-28 shrink-0 items-center justify-center opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-32"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={128}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
