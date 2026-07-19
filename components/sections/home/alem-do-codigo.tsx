import {
  UserSearch,
  HeartPulse,
  GraduationCap,
  Bot,
  Headset,
  Globe,
  Briefcase,
  Check,
  CalendarCheck,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const AGENDA = [
  { label: "Revisão de currículo e portfólio", done: true },
  { label: "Simulado de entrevista técnica", done: true },
  { label: "Match com vagas abertas", done: false },
];

const SUPPORT_BENEFITS = [
  {
    icon: HeartPulse,
    title: "Terapeuta focado em alta performance",
    description: "Suporte emocional para sustentar sua rotina de estudos.",
  },
  {
    icon: GraduationCap,
    title: "Mentorias semanais com os melhores do mercado",
    description:
      "Tire dúvidas direto com profissionais atuantes em tecnologia.",
  },
  {
    icon: Bot,
    title: "Dezenas de Agentes de IA",
    description:
      "Assistentes disponíveis 24h por dia para acelerar seu aprendizado.",
  },
  {
    icon: Headset,
    title: "Suporte humano 7 dias por semana",
    description:
      "Nunca fique travado sozinho — sempre tem alguém pra te ajudar.",
  },
  {
    icon: Globe,
    title: "A maior comunidade de tecnologia do Brasil",
    description: "Milhares de alunos trocando experiência e se cobrando junto.",
  },
  {
    icon: Briefcase,
    title: "Vagas de emprego exclusivas",
    description: "Oportunidades que chegam direto pra quem está na comunidade.",
  },
];

export function AlemDoCodigo() {
  return (
    <section id="alem-do-codigo" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-128 w-5xl -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-brand-soft blur-3xl"
      />

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
          lede="Programar é só uma parte da jornada. Por isso construímos uma estrutura completa de suporte, mentoria e comunidade ao seu redor."
          align="center"
          className="mx-auto"
        />

        <ScrollReveal className="relative mt-16 overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-lg">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#6418c752] blur-3xl"
          />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-14">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <UserSearch className="size-3.5" />
                Recrutadora DevClub
              </span>

              <h3 className="max-w-md text-2xl text-foreground sm:text-3xl lg:text-4xl">
                Acompanhamento com nossa Recrutadora, toda semana
              </h3>

              <p className="max-w-md text-sm text-muted-foreground sm:text-base">
                Encontros semanais individuais para revisar seu currículo,
                treinar entrevistas e te conectar com vagas reais assim que você
                estiver pronto.
              </p>
            </div>

            <div className="relative rounded-2xl border border-border bg-background/60 p-5 shadow-md backdrop-blur">
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-primary/60" />
                <span className="size-2.5 rounded-full bg-secondary/60" />
                <span className="ml-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarCheck className="size-3.5" />
                  Sua próxima reunião · Sexta, 10h
                </span>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {AGENDA.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span
                      className={
                        item.done
                          ? "flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                          : "flex size-5 shrink-0 items-center justify-center rounded-full border border-border"
                      }
                    >
                      {item.done ? <Check className="size-3" /> : null}
                    </span>
                    <span
                      className={
                        item.done
                          ? "text-sm text-muted-foreground line-through"
                          : "text-sm text-foreground"
                      }
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/3 rounded-full bg-gradient-brand" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_BENEFITS.map(({ icon: Icon, title, description }, index) => (
            <ScrollReveal
              key={title}
              delayMs={index * 70}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-glow-primary"
            >
              <div
                aria-hidden
                className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-5" />
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
