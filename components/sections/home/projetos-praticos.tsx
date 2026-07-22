import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltedCard } from "@/components/ui/tilted-card";
import { cn } from "@/lib/utils";

interface Projeto {
  name: string;
  category: string;
  url: string;
  description: string;
  image: string;
  alt: string;
  stack: string[];
}

const PROJETOS: Projeto[] = [
  {
    name: "DevBills",
    category: "Finanças",
    url: "devbills.app",
    description:
      "Controle de receitas, despesas e relatórios financeiros com dashboards em tempo real.",
    image: "/Projeto-Devbills.webp",
    alt: "Dashboard do DevBills com saldo, receitas, despesas e gráficos financeiros",
    stack: ["React", "Node", "PostgreSQL"],
  },
  {
    name: "DevBurguer",
    category: "Delivery",
    url: "devburguer.app",
    description:
      "Cardápio digital com carrinho, checkout e painel administrativo para gestão de pedidos.",
    image: "/projeto-devburger.webp",
    alt: "Tela de cardápio e pedidos do DevBurguer, app de delivery",
    stack: ["React", "TypeScript", "Stripe"],
  },
  {
    name: "Elite Tracker",
    category: "Produtividade",
    url: "elitetracker.app",
    description:
      "App de foco com ciclos de produtividade, histórico de sessões e calendário de progresso.",
    image: "/Projeto-EliteTracker.webp",
    alt: "Tela do Elite Tracker com temporizador de foco e estatísticas",
    stack: ["React", "Node", "MongoDB"],
  },
  {
    name: "Elite Home",
    category: "Imóveis",
    url: "elitehome.app",
    description:
      "Plataforma de busca de imóveis com filtros por cidade, bairro, valor e tipo de imóvel.",
    image: "/Projeto-eliteHome.webp",
    alt: "Página inicial do Elite Home, plataforma de busca de imóveis",
    stack: ["Next.js", "Tailwind", "Prisma"],
  },
];

export function ProjetosPraticos() {
  return (
    <section id="projetos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projetos práticos e reais"
          title={
            <>
              Mais de <span className="text-primary text-md">40 projetos</span> para{" "}
              <span className="text-primary">colocar no seu portfólio</span>
            </>
          }
          lede="Veja o tipo de aplicação que os alunos DevClub constroem,ao todo são mais de 40 projetos do primeiro deploy ao portfólio que abre portas."
          align="center"
          className="mx-auto"
        />

        <div className="mt-20 flex flex-col gap-20 sm:gap-28">
          {PROJETOS.map((projeto, index) => {
            const reverse = index % 2 === 1;
            return (
              <div
                key={projeto.name}
                className={cn(
                  "flex flex-col items-center gap-10 lg:gap-16",
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                <ScrollReveal className="w-full lg:w-3/5">
                  <TiltedCard className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
                    <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-3">
                      <span className="size-2.5 rounded-full bg-destructive/60" />
                      <span className="size-2.5 rounded-full bg-secondary/60" />
                      <span className="size-2.5 rounded-full bg-primary/60" />
                      <span className="ml-3 truncate rounded-md bg-muted px-3 py-1 font-heading text-[11px] text-muted-foreground">
                        {projeto.url}
                      </span>
                    </div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={projeto.image}
                        alt={projeto.alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </TiltedCard>
                </ScrollReveal>

                <ScrollReveal delayMs={120} className="flex w-full flex-col gap-5 lg:w-2/5">
                  <span className="font-heading text-6xl font-light text-foreground/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
                    {projeto.category}
                  </span>
                  <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">
                    {projeto.name}
                  </h3>
                  <p className="max-w-md text-base text-muted-foreground">
                    {projeto.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projeto.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 font-heading text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#matricula"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    Construir esse projeto
                    <ArrowUpRight className="size-4" />
                  </Link>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
