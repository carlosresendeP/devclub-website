"use client";

import Image from "next/image";
import { type RefObject } from "react";
import { cn } from "@/lib/utils";

interface LaptopFrameProps {
  lidRef: RefObject<HTMLDivElement | null>;
  glowRef: RefObject<HTMLDivElement | null>;
  seamGlowRef: RefObject<HTMLDivElement | null>;
  screenARef: RefObject<HTMLDivElement | null>;
  screenBRef: RefObject<HTMLDivElement | null>;
  className?: string;
}

export function LaptopFrame({
  lidRef,
  glowRef,
  seamGlowRef,
  screenARef,
  screenBRef,
  className,
}: LaptopFrameProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        className
      )}
    >
      <div className="relative w-[86%] max-w-3xl perspective-distant sm:w-[66%]">
        {/* Ambient light — brand glow + screen spill on the desk. Opacity is
            driven from JS via glowRef so it grows as the lid opens. */}
        <div ref={glowRef} className="absolute inset-0 opacity-0">
          <div className="absolute -inset-x-16 -top-8 bottom-4 rounded-[50%] bg-gradient-brand-soft blur-[90px]" />
          <div className="absolute inset-x-[6%] bottom-0 h-24 rounded-[50%] bg-primary/25 blur-3xl" />
        </div>

        {/* LID / screen — rotates on X, hinged at the bottom edge */}
        <div
          ref={lidRef}
          className="relative mx-auto origin-bottom will-change-transform"
        >
          <div className="relative aspect-16/10 w-full rounded-[1.15rem] bg-linear-to-b from-zinc-500 via-zinc-700 to-zinc-900 p-[0.6%] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.85)] sm:rounded-[1.4rem]">
            {/* bright top rim of the aluminium lid */}
            <div className="absolute inset-x-6 top-0 h-px rounded-full bg-white/40" />

            {/* black glass front face + thin bezel */}
            <div className="relative h-full w-full overflow-hidden rounded-[0.85rem] bg-neutral-950 p-[2%] ring-1 ring-white/5 ring-inset sm:rounded-[1.05rem]">
              {/* camera notch */}
              <span className="absolute top-[1.6%] left-1/2 z-20 h-[2.4%] w-[15%] -translate-x-1/2 rounded-b-lg bg-neutral-950">
                <span className="absolute top-1/2 left-1/2 size-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700 ring-1 ring-white/10" />
              </span>

              {/* the display */}
              <div className="relative h-full w-full overflow-hidden rounded-[0.5rem] bg-black">
                {/* boot / off-state brand wash */}
                <div className="absolute inset-0 bg-gradient-brand-soft" />

                <div ref={screenARef} className="absolute inset-0 opacity-0">
                  <Image
                    src="/print-plataforma.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 720px, 90vw"
                    className="object-cover object-top"
                  />
                </div>

                <div ref={screenBRef} className="absolute inset-0 opacity-0">
                  <Image
                    src="/image_42.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 720px, 90vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* bottom vignette to seat the image */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/55" />

                {/* glass: soft top reflection + diagonal glare sweep */}
                <div className="absolute inset-x-0 top-0 z-10 h-2/5 bg-linear-to-b from-white/10 to-transparent" />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(114deg,transparent_34%,rgba(255,255,255,0.14)_46%,rgba(255,255,255,0.03)_50%,transparent_58%)] mix-blend-screen" />
              </div>
            </div>

            {/* light leaking through the hinge seam while closed */}
            <div
              ref={seamGlowRef}
              className="absolute inset-x-[8%] -bottom-px z-20 h-[3px] rounded-full bg-primary opacity-0 blur-[2px]"
            />
          </div>
        </div>

        {/* hinge */}
        <div className="relative mx-auto h-[4px] w-[90%] rounded-b-sm bg-linear-to-b from-neutral-900 to-black" />

        {/* BASE / keyboard deck — trapezoid gives the deck a receding angle */}
        <div
          className="relative mx-auto h-9 w-full bg-linear-to-b from-zinc-600 via-zinc-800 to-zinc-950 shadow-[0_30px_50px_-20px_rgba(0,0,0,0.8)] sm:h-11"
          style={{ clipPath: "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)" }}
        >
          {/* deck top highlight */}
          <div className="absolute inset-x-[4%] top-0 h-px bg-white/20" />

          {/* keyboard well */}
          <div className="absolute inset-x-[10%] top-[16%] h-[34%] rounded-xs bg-neutral-950/70 shadow-inner">
            <div className="absolute inset-[8%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.10)_0px,rgba(255,255,255,0.10)_4px,transparent_4px,transparent_8px)] opacity-60" />
          </div>

          {/* trackpad */}
          <div className="absolute top-[60%] left-1/2 h-[26%] w-[16%] -translate-x-1/2 rounded-xs bg-white/5 ring-1 ring-white/5 ring-inset" />

          {/* front lip cutout notch */}
          <div className="absolute bottom-0 left-1/2 h-[10%] w-[10%] -translate-x-1/2 rounded-t-md bg-black/50" />
        </div>

        {/* floor reflection of the base */}
        <div
          className="relative mx-auto h-10 w-[94%] scale-y-[-1] bg-linear-to-b from-zinc-800/50 to-transparent blur-[2px]"
          style={{
            clipPath: "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)",
            maskImage: "linear-gradient(to bottom, black, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
