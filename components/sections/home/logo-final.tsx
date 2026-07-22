"use client";

import Image from "next/image";

import { SparklesCore } from "@/components/ui/sparkles";

export function LogoFinal() {
  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden py-20
    bg-linear-to-b from-transparent to-backgound
    ">

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-md max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/12 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={70}
          particleColor="#ffffff"
          speed={0.6}
          className="h-full w-full mask-[linear-gradient(to_bottom,transparent,white_25%,white_75%,transparent)]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <span className="font-heading text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          do zero ao dev
        </span>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <Image
            src="/LOGO.webp"
            alt="DevClub"
            width={160}
            height={160}
            className="size-14 shrink-0 sm:size-20 lg:size-24"
          />
          <h2
            aria-label="DevClub"
            className="select-none font-heading text-[12vw] font-light leading-none tracking-tight text-foreground/80 sm:text-[9vw] lg:text-[6rem]"
          >
            DevClub
          </h2>
        </div>

        <div aria-hidden className="relative h-px w-full max-w-md">
          <div className="absolute inset-0 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent" />
          <div className="absolute inset-0 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent blur-sm" />
          <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-linear-to-r from-transparent via-primary to-transparent blur-md" />
        </div>

        <p className="max-w-md text-balance text-sm text-muted-foreground sm:text-base">
          Sua vaga como programador está mais perto do que você imagina. O
          chamado continua aqui.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 flex flex-col items-start justify-between gap-4 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DevClub. Todos os direitos reservados.</p>
          <p>Desenvolvido por Carlos Resende.</p>
      </div>
    </section>
  );
}
