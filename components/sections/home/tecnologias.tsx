import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPostgresql,
  SiN8N,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { BarChart3 } from "lucide-react";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { DecryptedText } from "@/components/ui/decrypted-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpecularButton } from "@/components/ui/specular-button";
import { SectionHeading } from "@/components/shared/section-heading";

interface Tech {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const STACKS: { label: string; techs: Tech[] }[] = [
  {
    label: "Front End",
    techs: [
      { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", Icon: DiCss3, color: "#2965f1" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f0db4f" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
      { name: "React", Icon: SiReact, color: "#61dafb" },
    ],
  },
  {
    label: "Back End",
    techs: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#3c873a" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
    ],
  },
  {
    label: "Dados e Automações",
    techs: [
      { name: "Power BI", Icon: BarChart3, color: "#f2c811" },
      { name: "N8N", Icon: SiN8N, color: "#ea4b71" },
    ],
  },
];

export function Tecnologias() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-24">
      <BackgroundBeams className="-z-10" />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 size-128 rounded-full bg-gradient-brand-soft blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Tecnologias"
              title={
                <DecryptedText text="Aprenda as PRINCIPAIS tecnologias do mercado" />
              }
              lede="Do zero, de forma didática, com os melhores profissionais do mercado — a trilha te leva até o primeiro emprego na prática."
            />

            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-foreground">
                  9 tecnologias
                </span>
                <span className="text-sm text-muted-foreground">
                  do front ao back, dados e automações
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-foreground">
                  100% na prática
                </span>
                <span className="text-sm text-muted-foreground">
                  projetos reais desde a primeira aula
                </span>
              </div>
            </div>

            <span className="h-1 w-10 rounded-full bg-secondary" />

            <SpecularButton
              size="lg"
              render={<Link href="#matricula" />}
              nativeButton={false}
              className="w-fit"
            >
              Quero Fazer Parte
            </SpecularButton>
          </ScrollReveal>

          <ScrollReveal
            delayMs={120}
            className="relative rounded-3xl border bg-card/60 p-5 shadow-lg backdrop-blur-sm sm:p-7"
          >
            <div className="flex items-center gap-3 border-b pb-4">
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-[#f2c811]/70" />
                <span className="size-2.5 rounded-full bg-primary/70" />
              </span>
              <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                stack_devclub
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-7">
              {STACKS.map(({ label, techs }) => (
                <div key={label} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                      {label}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {techs.map(({ name, Icon, color }) => (
                      <div
                        key={name}
                        className="group flex items-center gap-3 rounded-xl border bg-background/40 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span
                          className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${color}1a` }}
                        >
                          <Icon
                            className="size-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color }}
                          />
                        </span>
                        <span className="truncate text-sm font-medium text-foreground">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 border-t pt-5 text-sm text-muted-foreground">
              Você não precisa saber programar hoje.{" "}
              <span className="font-semibold text-foreground">
                Começamos do absoluto zero.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
