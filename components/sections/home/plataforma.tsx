import Image from "next/image";
import { Check } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const FEATURES = [
  "Plataforma de Ensino",
  "Cursos por Trilhas e Formações",
  "Comunidade de alunos",
  "Club Agents",
  "Playground de Treinamento",
  "Mural da Fama dos Destaques",
];

export function Plataforma() {
  return (
    <section id="plataforma" className="relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-5 px-4">
            <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              plataforma_
            </span>
            <h2 className="max-w-3xl font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Uma plataforma moderna para{" "}
              <span className="text-gradient-brand">acelerar</span> seu progresso
            </h2>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Aulas, comunidade, área de vagas e IAs para acelerar cada etapa —
              tudo com o suporte dos professores, do primeiro login até a sua vaga.
            </p>
          </div>
        }
      >
        <div className="relative size-full">
          <Image
            src="/print-plataforma.webp"
            alt="Plataforma DevClub — trilhas, comunidade e progresso do aluno"
            fill
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="rounded-xl object-cover object-top"
            priority
          />
        </div>
      </ContainerScroll>

      <div className="mx-auto -mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3 px-4 pb-24 sm:px-6 lg:px-8">
        {FEATURES.map((feature) => (
          <span
            key={feature}
            className="inline-flex items-center gap-2 rounded-full border border-border glass-surface px-4 py-2 text-sm text-foreground/80"
          >
            <Check className="size-3.5 text-primary" />
            {feature}
          </span>
        ))}
      </div>
    </section>
  );
}
