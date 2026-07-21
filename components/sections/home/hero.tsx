"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

import { CountStat } from "@/components/shared/count-stat";
import { LogoMarquee } from "@/components/shared/logo-marquee";
import { FilmGrain } from "@/components/ui/film-grain";
import { StarField } from "@/components/ui/star-field";
import { RotatingText } from "@/components/ui/rotating-text";

const EMPRESAS = [
  { src: "/logos/ifood-logo-png_seeklogo-463141.png", alt: "iFood" },
  { src: "/logos/bradesco-logo-novo-2018-2.png", alt: "Bradesco" },
  { src: "/logos/mercado-livre-87.png", alt: "Mercado Livre" },
  { src: "/logos/microsoft-logo.png", alt: "Microsoft" },
  { src: "/logos/intel-logo.svg", alt: "Intel" },
  { src: "/logos/google-logo-transparent.png", alt: "Google" },
];

const AVATARES = [
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&crop=faces",
    alt: "Aluno DevClub",
    fallback: "RM",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&crop=faces",
    alt: "Aluno DevClub",
    fallback: "HE",
  },
  {
    src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop&crop=faces",
    alt: "Aluno DevClub",
    fallback: "AG",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&crop=faces",
    alt: "Aluna DevClub",
    fallback: "FE",
  },
];

const HEADLINE = "Transforme sua carreira com Programação, IA, Dados e Automações";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const el = titleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="inicio"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16 text-center sm:px-6 "
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <StarField className="absolute inset-0 size-full mask-fade-b" />
        {/* <div className="absolute inset-0 bg-background/50" /> */}
      </div>

      {/* <FilmGrain className="opacity-40" /> */}

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-border glass-surface px-4 py-1.5 font-heading text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary shadow-glow-primary" />
          Escola de Programação &amp; IA
        </motion.span>

        <motion.h1
          ref={titleRef}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative text-3xl font-light leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
          aria-label={HEADLINE}
        >
          <span aria-hidden className="text-foreground/80">
            Transforme sua
            <br />
            carreira com{" "}
            <RotatingText
              words={["Programação", "IA", "Dados", "Automações"]}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              splitBy="characters"
              auto
              loop
              className="italic"
            />
          </span>
          <span aria-hidden className="spotlight-text absolute inset-0">
            Transforme sua
            <br />
            carreira com{" "}
            <RotatingText
              words={["Programação", "IA", "Dados", "Automações"]}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              splitBy="characters"
              auto
              loop
            />
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Programação, Gestão de IA, automações e análise de dados do zero ao
          avançado, com mentoria semanal e uma comunidade que não te deixa parar.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="#matricula"
            className="group relative inline-flex items-center justify-center rounded-full p-px transition-transform duration-300 hover:scale-[1.03]"
          >
            <span
              aria-hidden
              className="btn-glow-ring absolute inset-0 rounded-full opacity-90"
            />
            <span
              aria-hidden
              className="absolute inset-px rounded-full bg-background/85 backdrop-blur-xl"
            />
            <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40 transition-transform duration-300 group-hover:scale-110">
                <Play className="size-3 fill-primary text-primary" />
              </span>
              Quero ser aluno
            </span>
          </Link>

          <Link
            href="#formacoes"
            className="inline-flex items-center gap-1.5 rounded-full border border-border glass-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Ver formações
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show">
          <CountStat
            value="+25 mil"
            label="alunos já passaram por aqui"
            avatars={AVATARES}
          />
        </motion.div>
      </div>

      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 mt-16 flex w-full max-w-4xl flex-col items-center gap-5"
      >
        <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Alunos nas maiores empresas do Brasil e do mundo
        </span>
        <LogoMarquee items={EMPRESAS} className="[--marquee-duration:36s]" />
      </motion.div>
    </section>
  );
}
