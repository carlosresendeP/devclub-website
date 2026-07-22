"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

import { CountStat } from "@/components/shared/count-stat";
import { LogoMarquee } from "@/components/shared/logo-marquee";
import { ShaderBackground } from "@/components/ui/shader-background";
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
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16 text-center sm:px-6 "
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-trasparent via-background to-background">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 size-full mask-fade-b"
        >
          <ShaderBackground className="size-full opacity-70 mix-blend-screen" />
        </motion.div>
        <StarField className="absolute inset-0 size-full mask-fade-b" />
      </div>

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
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-3xl font-light leading-[0.95] tracking-tight text-foreground/80 sm:text-4xl lg:text-5xl"
          aria-label={HEADLINE}
        >
          <span aria-hidden>
            Aprenda. Pratique e evolua
            <br />
            sua carreira com{" "}
            <RotatingText
              words={["Programação", "IA", "Dados", "Automações"]}
              mainClassName="px-2 sm:px-2 md:px-3 text-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 22, stiffness: 140 }}
              rotationInterval={2000}
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
          className="max-w-xl text-balance text-base text-muted-foreground sm:text-md"
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
