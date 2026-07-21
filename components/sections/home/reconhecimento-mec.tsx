import Image from "next/image";
import { BadgeCheck, ShieldCheck, GraduationCap, Award } from "lucide-react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltedCard } from "@/components/ui/tilted-card";

const SELOS = [
  { icon: ShieldCheck, label: "Reconhecido pelo MEC" },
  { icon: BadgeCheck, label: "Diploma com validade nacional" },
  { icon: GraduationCap, label: "Carga horária certificada" },
];

export function ReconhecimentoMec() {
  return (
    <section id="faculdade" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <ScrollReveal className="flex flex-col gap-6">
          <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
            faculdade_
          </span>
          <h2 className="max-w-lg font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Escola reconhecida pelo MEC e com{" "}
            <span className="text-gradient-brand">diplomas oficiais</span>
          </h2>
          <p className="max-w-md text-base text-muted-foreground">
            Ao concluir sua formação, você recebe um certificado com validade
            nacional — prova concreta da sua qualificação para o mercado e para
            qualquer processo seletivo.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {SELOS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delayMs={100} className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-4xl bg-secondary/20 blur-3xl"
          />
          <TiltedCard className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary/10 p-8 shadow-elevated">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"
            />

            <div className="flex items-start justify-between">
              <Image src="/LOGO.webp" alt="DevClub" width={36} height={36} className="rounded" />
              <Award className="size-6 text-primary" />
            </div>

            <div className="mt-16 flex flex-col gap-2">
              <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Certificado de Conclusão
              </span>
              <span className="font-heading text-3xl font-light leading-tight text-foreground sm:text-4xl">
                Programação Full Stack
              </span>
              <span className="text-xs text-muted-foreground">
                Reconhecido pelo MEC · Diploma oficial com validade nacional
              </span>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-border pt-6">
              {[
                { k: "Carga", v: "480h" },
                { k: "Nível", v: "Nacional" },
                { k: "Registro", v: "MEC" },
              ].map((stat) => (
                <div key={stat.k} className="flex flex-col gap-0.5">
                  <span className="font-heading text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.k}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{stat.v}</span>
                </div>
              ))}
            </div>
          </TiltedCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
