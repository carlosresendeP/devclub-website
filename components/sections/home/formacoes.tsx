"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Formacao {
  name: string;
  spec: string;
  img: string;
  wide?: boolean;
}

const FORMACOES: Formacao[] = [
  { name: "Inicio do zero", spec: "programção para iniciantes", img: "/cards-fomacoes/image_44_1x.webp" },
  { name: "Html", spec: "html basico ao avançado", img: "/cards-fomacoes/image_45_1x.webp" },
  { name: "Css", spec: "do básico ao avançado", img: "/cards-fomacoes/image_46_1x.webp" },
  { name: "JavaScript Completo", spec: "do básico ao avançado", img: "/cards-fomacoes/image_47_1x.webp" },
  { name: "Typescript", spec: "completo", img: "/cards-fomacoes/image_50_1x.webp" },
  { name: "Back End", spec: "node · apis · banco de dados", img: "/cards-fomacoes/image_49_1x.webp" },
  { name: "Full Stack", spec: "front + back integrados", img: "/cards-fomacoes/card-largo-1.webp", wide: true },
  { name: "Carreira Dev", spec: "Como de posicionar no mercado", img: "/cards-fomacoes/image_48_1x.webp" },
  { name: "Gestor de IA", spec: "estratégia com IA", img: "/cards-fomacoes/card-largo-2.webp", wide: true },
  { name: "Engenharia de Prompts", spec: "fluxos inteligentes", img: "/cards-fomacoes/image_51_1x.webp" },
  { name: "Claude & ClaudeCode", spec: "agentes de código", img: "/cards-fomacoes/image_52_1x.webp" },
  { name: "Análise de Dados", spec: "sql · pandas · insights", img: "/cards-fomacoes/card-largo-3.webp", wide: true },
  { name: "Power BI", spec: "dashboards executivos", img: "/cards-fomacoes/image.png" },
  { name: "MBA em IA", spec: "gestão · estratégia", img: "/cards-fomacoes/card-largo-4.webp", wide: true },
];

function Card({ formacao, index }: { formacao: Formacao; index: number }) {
  return (
    <Link
      href="#matricula"
      className={cn(
        "group relative flex h-72 shrink-0 overflow-hidden rounded-3xl border border-border transition-colors duration-300 hover:border-primary/50 md:h-80",
        formacao.wide ? "w-104 md:w-136" : "w-56 md:w-64"
      )}
    >
      {/* imagem full */}
      <Image
        src={formacao.img}
        alt={formacao.name}
        fill
        sizes={formacao.wide ? "(min-width: 768px) 34rem, 26rem" : "(min-width: 768px) 256px, 224px"}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* gradiente inferior */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
      />

      {/* badge número */}
      <span className="absolute left-4 top-4 flex size-7 items-center justify-center rounded-full border border-white/20 bg-black/50 font-heading text-xs tabular-nums text-primary backdrop-blur">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* texto sobre a imagem */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold leading-tight text-white">
            {formacao.name}
          </span>
          <span className="font-heading text-[10px] uppercase tracking-[0.14em] text-white/60">
            {formacao.spec}
          </span>
        </div>
        <ArrowUpRight className="size-4 shrink-0 text-white/50 transition-all duration-300 group-hover:text-primary motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

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
        arraste para o lado <ArrowRight className="size-3.5 text-primary" />
      </p>
    </div>
  );
}

export function Formacoes() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start","end 10%"],
  });
  const x = useTransform(scrollYProgress, [0.12, 0.92], [0, -maxScroll]);

  useEffect(() => {
    const measure = () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isDesktop = window.innerWidth >= 768;
      const active = isDesktop && !reduced;
      setEnabled(active);
      const track = trackRef.current;
      if (active && track) {
        setMaxScroll(Math.max(0, track.scrollWidth - window.innerWidth + 48));
      } else {
        setMaxScroll(0);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      ref={containerRef}
      id="formacoes"
      className={cn(
        "relative scroll-mt-24 h-full overflow-x-clip",
        enabled ? "h-[420vh] pt-24" : "py-24"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-10 md:gap-14",
          enabled && "sticky top-0 h-svh justify-center pt-16"
        )}
      >
        <Header />

        <div className="relative">
          {/* fade esquerda */}
          {enabled && (
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
          )}
          {/* fade direita */}
          {enabled && (
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />
          )}

          <motion.div
            ref={trackRef}
            style={enabled ? { x } : undefined}
            className={cn(
              "flex gap-4 px-4 sm:px-6 md:px-16",
              !enabled && "no-scrollbar overflow-x-auto pb-4"
            )}
          >
            {FORMACOES.map((formacao, index) => (
              <Card key={formacao.name} formacao={formacao} index={index} />
            ))}
            {/* espaço extra no final para o último card não ficar colado */}
            {enabled && <div className="w-16 shrink-0" />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
