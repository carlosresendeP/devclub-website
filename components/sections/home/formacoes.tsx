"use client";

import { ArrowRight } from "lucide-react";

import { FeatureCarousel } from "@/components/ui/feacture-carrocel";

function Header() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
      <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
        formações_
      </span>
      <h2 className="max-w-3xl text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
        Formações completas para aprender tudo do{" "}
        <span className="text-primary">ZERO</span> ao{" "}
        <span className="text-secondary">Avançado</span>
      </h2>
      <p className="flex items-center gap-2 font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        clique para navegar <ArrowRight className="size-3.5 text-primary" />
      </p>
    </div>
  );
}

export function Formacoes() {
  return (
    <section id="formacoes" className="relative scroll-mt-12 py-12">
      <div className="flex flex-col gap-10 md:gap-14">
        <Header />
        <FeatureCarousel />
      </div>
    </section>
  );
}
