import {
  UserSearch,
  HeartPulse,
  GraduationCap,
  Bot,
  Headset,
  Users,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { EMPRESAS } from "@/lib/empresas";

interface Beneficio {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  accent: "primary" | "secondary";
}

const BENEFICIOS: Beneficio[] = [
  {
    icon: GraduationCap,
    tag: "mentoria",
    title: "Mentorias semanais com os melhores do mercado",
    description: "Tire dúvidas direto com profissionais que já vivem o mercado.",
    accent: "secondary",
  },
  {
    icon: HeartPulse,
    tag: "mente",
    title: "Terapeuta focado em alta performance",
    description: "Suporte emocional para sustentar a rotina de estudos.",
    accent: "primary",
  },
  {
    icon: Bot,
    tag: "24h",
    title: "Dezenas de Agentes de IA",
    description: "Assistentes disponíveis 24h por dia para acelerar tudo.",
    accent: "secondary",
  },
  {
    icon: Headset,
    tag: "7 dias",
    title: "Suporte humano 7 dias por semana",
    description: "Nunca fique travado sozinho — sempre tem alguém pra te ajudar.",
    accent: "primary",
  },
  {
    icon: Briefcase,
    tag: "vagas",
    title: "Vagas de emprego exclusivas",
    description: "Oportunidades que chegam direto pra quem está na comunidade.",
    accent: "secondary",
  },
];

export function AlemDoCodigo() {
  return (
    <section id="alem-do-codigo" className="relative overflow-hidden py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Além do código"
          title={
            <>
              Tudo que você precisa{" "}
              <span className="text-primary">além do código</span> para{" "}
              <span className="text-secondary">evoluir mais rápido</span>
            </>
          }
          lede="Programar é só uma parte da jornada. Construímos uma estrutura completa de suporte, mentoria e comunidade ao seu redor."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {/* Bloco visual — comunidade */}
          <ScrollReveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-sm">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,var(--color-border)_1.5px,transparent_1.5px)] [background-size:18px_18px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-secondary/25 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <span className="relative flex size-11 items-center justify-center rounded-2xl bg-secondary/12 text-secondary transition-transform duration-300 group-hover:scale-110">
                <Users className="size-5" />
              </span>

              <div className="relative flex flex-col gap-2">
                <span className="font-heading text-4xl font-light text-foreground sm:text-5xl">
                  +25 mil
                </span>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  A maior e melhor comunidade de tecnologia do Brasil
                </h3>
                <p className="text-sm text-muted-foreground">
                  Milhares de profissionais trocando experiência e se cobrando junto.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card em destaque — recrutadora */}
          <ScrollReveal delayMs={70} className="lg:col-span-4">
            <article className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-brand-soft p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                  <UserSearch className="size-5" />
                </span>
                <span className="rounded-full border border-primary/30 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.16em] text-primary">
                  semanal
                </span>
              </div>

              <div className="relative flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Acompanhamento da nossa Recrutadora, toda semana
                </h3>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Revisão de currículo, portfólio e simulados de entrevista até você estar
                  pronto para as vagas reais.
                </p>
              </div>

              <a
                href="#matricula"
                className="relative inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Falar com a recrutadora
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          </ScrollReveal>

          {/* Card secundário — mentoria */}
          <ScrollReveal delayMs={140} className="lg:col-span-4">
            <article className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:shadow-glow-secondary sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-secondary/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary/12 text-secondary transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap className="size-5" />
                </span>
                <span className="rounded-full border border-secondary/30 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.16em] text-secondary">
                  mentoria
                </span>
              </div>

              <div className="relative flex flex-col gap-2">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  Mentorias semanais com os melhores do mercado
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tire dúvidas direto com profissionais que já vivem o mercado.
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Cards menores restantes */}
          {BENEFICIOS.slice(1).map((item, index) => {
            const Icon = item.icon;
            const isSecondary = item.accent === "secondary";
            return (
              <ScrollReveal
                key={item.title}
                delayMs={210 + index * 70}
                className="lg:col-span-2"
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300",
                    isSecondary
                      ? "hover:border-secondary/50 hover:shadow-glow-secondary"
                      : "hover:border-primary/50 hover:shadow-glow-primary"
                  )}
                >
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                      isSecondary ? "bg-secondary/25" : "bg-primary/25"
                    )}
                  />

                  <div className="relative flex items-center justify-between">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                        isSecondary
                          ? "bg-secondary/12 text-secondary"
                          : "bg-primary/12 text-primary"
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 font-heading text-[10px] uppercase tracking-[0.16em]",
                        isSecondary
                          ? "border-secondary/30 text-secondary"
                          : "border-primary/30 text-primary"
                      )}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="relative flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delayMs={280} className="mt-16 border-t border-border pt-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Empresas que contratam nossos alunos
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-10 sm:gap-y-6">
            {EMPRESAS.map((empresa) => (
              <div
                key={empresa.alt}
                className="flex h-7 w-20 shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-28"
              >
                <Image
                  src={empresa.src}
                  alt={empresa.alt}
                  width={112}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
