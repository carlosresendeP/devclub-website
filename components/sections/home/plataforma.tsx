import Image from "next/image";
import { Check } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltedCard } from "@/components/ui/tilted-card";

const FEATURES = [
  "Plataforma de Ensino",
  "Cursos Organizados por Trilhas e Formações",
  "Comunidade de alunos",
  "Club Agents",
  "Playground de Treinamento",
  "Mural da Fama dos Alunos Destaques",
];

export function Plataforma() {
  return (
    <section id="plataforma" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 size-128 -translate-y-1/2 rounded-full bg-gradient-brand-soft blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Plataforma"
              title={
                <>
                  Você terá acesso a uma{" "}
                  <span className="text-primary">plataforma moderna</span> de
                  aulas, comunidade e vagas, com{" "}
                  <span className="text-secondary">IAs para acelerar</span>{" "}
                  seu progresso
                </>
              }
              lede="Tudo com suporte dos professores, do primeiro login até a sua primeira vaga."
            />

            <ul className="flex flex-col gap-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm text-foreground sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal
            delayMs={120}
            className="relative perspective-distant"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full bg-primary/20 blur-3xl"
            />

            <TiltedCard className="relative overflow-hidden">
              <Image
                src="/notebook-plataform.webp"
                alt="Plataforma DevClub — trilhas, comunidade e progresso do aluno"
                width={1503}
                height={1080}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full object-contain shadow-2xl shadow-primary"
              />
            </TiltedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
