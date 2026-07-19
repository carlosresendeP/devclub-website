import { Play, Quote } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  track: string;
  quote: string;
  initials: string;
  featured?: boolean;
}

// Depoimentos placeholder — stars.devclub.com.br é uma SPA sem conteúdo
// extraível via fetch; trocar por depoimentos reais assim que houver API
// ou conteúdo colado manualmente.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mateus Costa",
    track: "Formação Full Stack",
    quote: "Troquei de área e consegui minha primeira vaga em 6 meses.",
    initials: "MC",
    featured: true,
  },
  {
    name: "Juliana Ferreira",
    track: "Análise de Dados",
    quote:
      "Fui promovida a analista sênior 4 meses depois de terminar a trilha de Power BI.",
    initials: "JF",
  },
  {
    name: "Rodrigo Almeida",
    track: "Programação Back End",
    quote: "Saí do freelance instável para um CLT em uma fintech nacional.",
    initials: "RA",
  },
  {
    name: "Fernanda Lima",
    track: "Gestor de IA",
    quote:
      "Montei uma pequena agência de automações usando o que aprendi na trilha de IA.",
    initials: "FL",
  },
  {
    name: "Henrique Souza",
    track: "Programação Front End",
    quote: "Fui de júnior a pleno em 8 meses com as mentorias semanais.",
    initials: "HS",
  },
  {
    name: "Márcio Teixeira",
    track: "IA e Automações",
    quote:
      "Automatizei 3 processos inteiros da empresa onde trabalho — virei referência interna.",
    initials: "MT",
  },
  {
    name: "Agustinho Rocha",
    track: "Programação Mobile",
    quote: "Publiquei meu primeiro app na Play Store antes de terminar o curso.",
    initials: "AR",
  },
  {
    name: "Camila Duarte",
    track: "PowerBI",
    quote: "Hoje lidero o time de BI da fintech onde comecei como estagiária.",
    initials: "CD",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Milhares de vidas TRANSFORMADAS dentro da nossa Comunidade"
          align="center"
          className="mx-auto"
        />

        <Tabs defaultValue="grid" className="mt-12 items-center">
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="mosaico">Mosaico</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="w-full">
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mosaico" className="w-full">
            <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  className={cn(
                    index === 0 && "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
                    index === 1 && "lg:col-span-2"
                  )}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-6 rounded-2xl border bg-card p-6 shadow-sm",
        testimonial.featured && "bg-gradient-brand-soft",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <Quote className="size-6 text-primary" />
        {testimonial.featured ? (
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Play className="size-4" />
          </span>
        ) : null}
      </div>
      <p className="text-base text-foreground">{testimonial.quote}</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-gradient-brand text-xs font-semibold text-foreground">
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.track}</p>
        </div>
      </div>
    </div>
  );
}
