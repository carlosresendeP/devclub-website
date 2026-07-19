import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltedCard } from "@/components/ui/tilted-card";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    name: "DevBills",
    category: "Finanças",
    description:
      "Controle de receitas, despesas e relatórios financeiros com dashboards em tempo real.",
    image: "/Projeto-Devbills.png",
    alt: "Dashboard do DevBills mostrando saldo, receitas, despesas e gráficos financeiros",
    fan: "lg:translate-y-6 lg:rotate-[-6deg] lg:hover:translate-y-2",
  },
  {
    name: "DevBurguer",
    category: "Delivery",
    description:
      "Cardápio digital com carrinho, checkout e painel administrativo para gestão de pedidos.",
    image: "/projeto-devburger.png",
    alt: "Tela de cardápio e pedidos do DevBurguer, um app de delivery de hamburgueria",
    fan: "lg:-translate-y-4 lg:rotate-[4deg] lg:hover:-translate-y-8",
  },
  {
    name: "Elite Tracker",
    category: "Produtividade",
    description:
      "App de foco com ciclos de produtividade, histórico de sessões e calendário de progresso.",
    image: "/Projeto-EliteTracker.png",
    alt: "Tela do Elite Tracker com temporizador de foco e estatísticas de produtividade",
    fan: "lg:-translate-y-2 lg:rotate-[-4deg] lg:hover:-translate-y-6",
  },
  {
    name: "Elite Home",
    category: "Imóveis",
    description:
      "Plataforma de busca de imóveis com filtros por cidade, bairro, valor e tipo de imóvel.",
    image: "/Projeto-eliteHome.png",
    alt: "Página inicial do Elite Home, plataforma de busca de imóveis para alugar ou comprar",
    fan: "lg:translate-y-8 lg:rotate-[6deg] lg:hover:translate-y-4",
  },
];

export function ProjetosPraticos() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projetos práticos e reais"
          title="O nível que essa formação prepara"
          lede="Veja o tipo de projeto que os alunos DevClub constroem — do primeiro deploy ao portfólio que abre portas."
          align="center"
          className="mx-auto items-center text-center"
        />
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 sm:gap-x-8 sm:px-6 lg:grid-cols-4 lg:items-center lg:gap-x-4 lg:px-8">
        {PROJECTS.map((project, index) => (
          <ScrollReveal
            key={project.name}
            delayMs={index * 100}
            className={cn(
              "relative",
              index === 1 || index === 2 ? "z-20" : "z-10"
            )}
          >
            <div
              className={cn(
                "relative transition-transform duration-500 ease-out hover:z-30 hover:rotate-0",
                project.fan
              )}
            >
              <TiltedCard className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/80 to-transparent p-4 pt-10">
                  <Badge variant="outline" className="mb-1.5 bg-background/60">
                    {project.category}
                  </Badge>
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </TiltedCard>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          render={<Link href="#" />}
          nativeButton={false}
          className="gap-2"
        >
          Ver todos os projetos
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
