"use client";

import { useRef } from "react";
import Image from "next/image";

import { FilmGrain } from "@/components/ui/film-grain";

export function LogoFinal() {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      <FilmGrain className="opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/12 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <div className="flex items-center gap-3">
          <Image src="/LOGO.webp" alt="DevClub" width={44} height={44} className="size-9 sm:size-11" />
          <span className="font-heading text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            do zero ao dev
          </span>
        </div>

        <h2
          ref={ref}
          className="relative select-none font-heading font-light leading-none tracking-tight"
          aria-label="DevClub"
        >
          <span aria-hidden className="block text-[19vw] text-foreground/10">
            DevClub
          </span>
          <span
            aria-hidden
            className="spotlight-text absolute inset-0 block text-[19vw]"
          >
            DevClub
          </span>
        </h2>

        <p className="max-w-md text-balance text-sm text-muted-foreground sm:text-base">
          Sua vaga como programador está mais perto do que você imagina. O
          chamado continua aqui.
        </p>
      </div>
    </section>
  );
}
