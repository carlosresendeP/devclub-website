import {
  UserSearch,
  HeartPulse,
  GraduationCap,
  Bot,
  Headset,
  Users,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface Beneficio {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  className: string;
  accent: "primary" | "secondary";
  featured?: boolean;
  metric?: string;
}

const BENEFICIOS: Beneficio[] = [
  {
    icon: UserSearch,
    tag: "semanal",
    title: "Acompanhamento da nossa Recrutadora, toda semana",
    description:
      "Revisão de currículo, portfólio e simulados de entrevista até você estar pronto para as vagas reais.",
    className: "lg:col-span-4",
    accent: "primary",
    featured: true,
  },
  {
    icon: GraduationCap,
    tag: "mentoria",
    title: "Mentorias semanais com os melhores do mercado",
    description: "Tire dúvidas direto com profissionais que já vivem o mercado.",
    className: "lg:col-span-2",
    accent: "secondary",
  },
  {
    icon: HeartPulse,
    tag: "mente",
    title: "Terapeuta focado em alta performance",
    description: "Suporte emocional para sustentar a rotina de estudos.",
    className: "lg:col-span-2",
    accent: "primary",
  },
  {
    icon: Bot,
    tag: "24h",
    title: "Dezenas de Agentes de IA",
    description: "Assistentes disponíveis 24h por dia para acelerar tudo.",
    className: "lg:col-span-2",
    accent: "secondary",
  },
  {
    icon: Headset,
    tag: "7 dias",
    title: "Suporte humano 7 dias por semana",
    description: "Nunca fique travado sozinho — sempre tem alguém pra te ajudar.",
    className: "lg:col-span-2",
    accent: "primary",
  },
  {
    icon: Users,
    tag: "comunidade",
    title: "A maior e melhor comunidade de tecnologia do Brasil",
    description: "Milhares de profissionais trocando experiência e se cobrando junto.",
    className: "lg:col-span-4",
    accent: "secondary",
    metric: "+25 mil",
  },
  {
    icon: Briefcase,
    tag: "vagas",
    title: "Vagas de emprego exclusivas",
    description: "Oportunidades que chegam direto pra quem está na comunidade.",
    className: "lg:col-span-2",
    accent: "primary",
  },
];

export function AlemDoCodigo() {
  return (
    <section id="alem-do-codigo" className="relative overflow-hidden py-24 sm:py-32">
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

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {BENEFICIOS.map((item, index) => {
            const Icon = item.icon;
            const isSecondary = item.accent === "secondary";
            return (
              <ScrollReveal
                key={item.title}
                delayMs={index * 70}
                className={cn("h-full", item.className)}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 sm:p-7",
                    isSecondary
                      ? "hover:border-secondary/50 hover:shadow-glow-secondary"
                      : "hover:border-primary/50 hover:shadow-glow-primary",
                    item.featured && "bg-gradient-brand-soft"
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
                    {item.metric ? (
                      <span className="font-heading text-4xl font-light text-foreground sm:text-5xl">
                        {item.metric}
                      </span>
                    ) : null}
                    <h3
                      className={cn(
                        "font-semibold text-foreground",
                        item.featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
