"use client";

import Image from "next/image";
import { type RefObject } from "react";
import { cn } from "@/lib/utils";

interface LaptopRevealProps {
  lidRef: RefObject<HTMLDivElement | null>;
  glowRef: RefObject<HTMLDivElement | null>;
  screenARef: RefObject<HTMLDivElement | null>;
  screenBRef: RefObject<HTMLDivElement | null>;
  className?: string;
}

export function LaptopReveal({
  lidRef,
  glowRef,
  screenARef,
  screenBRef,
  className,
}: LaptopRevealProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        className
      )}
    >
      <div className="relative w-[88%] max-w-4xl perspective-distant sm:w-[80%]">
        <div
          ref={glowRef}
          className="absolute -inset-x-6 bottom-0 h-1/2 rounded-full bg-gradient-brand-soft opacity-0 blur-3xl sm:-inset-x-12"
        />

        <div ref={lidRef} className="relative mx-auto origin-bottom will-change-transform">
          <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl sm:rounded-[3rem]">
            <div className="absolute inset-0 bg-gradient-brand-soft" />

            <div ref={screenARef} className="absolute inset-0 opacity-0">
              <Image
                src="/print-plataforma.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 800px, 90vw"
                className="object-cover object-top"
              />
            </div>

            <div ref={screenBRef} className="absolute inset-0 opacity-0">
              <Image
                src="/image_42.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 800px, 90vw"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/70" />
            <span className="absolute top-3 left-1/2 z-10 size-1.5 -translate-x-1/2 rounded-full bg-muted-foreground/60 sm:top-4" />
          </div>
        </div>

        <div className="relative mx-auto -mt-1 h-3 w-[85%] rounded-b-2xl border border-t-0 border-border bg-linear-to-b from-card to-background shadow-lg sm:h-4" />
      </div>
    </div>
  );
}
