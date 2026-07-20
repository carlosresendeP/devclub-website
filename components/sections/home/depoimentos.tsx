"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const STARS_URL = "https://stars.devclub.com.br/#historias";

interface Testimonial {
  name: string;
  handle: string;
  role: string;
  quote: string;
  initials: string;
  photo: string;
}

// Histórias resumidas a partir dos depoimentos publicados em stars.devclub.com.br.
// As fotos são placeholders do Unsplash — trocar pelas fotos reais dos alunos.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Bruno Barbosa",
    handle: "@brunobarbosa",
    role: "Formação Full Stack",
    quote:
      "Estava sob uma pressão enorme no trabalho, sem valorização e com um salário baixo. Comprei o curso, fui demitido logo depois e usei isso para focar 100% nos estudos. Ainda não terminei a formação e o emprego já veio.",
    initials: "BB",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=600&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Yasmim Aparecida",
    handle: "@yasmimap",
    role: "Desenvolvedora Full Stack Jr.",
    quote:
      "Com menos de 3 meses de DevClub Full Stack passei na primeira entrevista que fiz, sem nenhum teste técnico. Não aprendi quase nada na faculdade — foram os projetos do curso no meu GitHub que fizeram a diferença.",
    initials: "YA",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Beatriz Pereira",
    handle: "@beapereira",
    role: "Desenvolvedora Mobile",
    quote:
      "Estudei muito, fiz network e me candidatei a mais de 700 vagas até conseguir meu primeiro emprego fixo como Desenvolvedora Mobile. O DevClub me deu toda a base que tenho hoje — tecnologia, entrevistas e autoconfiança.",
    initials: "BP",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Leonardo Moraes",
    handle: "@leomoraes",
    role: "Programação Front End",
    quote:
      "Cheguei a parar com a programação por questões pessoais, mas voltei e comecei a me candidatar de novo. Na primeira entrevista de emprego eu recebi o meu sim — depois de quase ter desistido de vez.",
    initials: "LM",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Anderson Santos",
    handle: "@andersonsantos",
    role: "Programação Back End",
    quote:
      "Pedi demissão do emprego onde trabalhei por 4 anos e entrei no DevClub. A base que aprendi aqui me possibilitou buscar mais, passar no teste técnico e conquistar a vaga de estágio.",
    initials: "AS",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=600&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Italo Rafael",
    handle: "@italorafael",
    role: "Acelerador de Carreira",
    quote:
      "Estudei 9 meses enviando currículo sem retorno. Depois das mentorias com o RH no Acelerador de Carreira comecei a ser chamado para entrevistas — hoje sou responsável pela área de TI de uma empresa.",
    initials: "IR",
    photo:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const [FEATURED, ...REST] = TESTIMONIALS;

export function Depoimentos() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateSelection = () => setCurrent(api.selectedScrollSnap());
    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);
    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);

  return (
    <section id="depoimentos" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Milhares de vidas TRANSFORMADAS dentro da nossa Comunidade"
          align="center"
          className="mx-auto"
        />

        <Tabs defaultValue="carrossel" className="mt-12 w-full items-center">
          <TabsList>
            <TabsTrigger value="carrossel">Carrossel</TabsTrigger>
            <TabsTrigger value="mosaico">Mosaico</TabsTrigger>
          </TabsList>

          <TabsContent value="carrossel" className="w-full">
            <Carousel
              setApi={setApi}
              opts={{ align: "center", loop: true }}
              className="mt-10 w-full"
            >
              <CarouselContent>
                {TESTIMONIALS.map((testimonial) => (
                  <CarouselItem key={testimonial.name}>
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex items-center justify-center gap-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => api?.scrollPrev()}
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft />
                </Button>

                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      type="button"
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Ver depoimento de ${testimonial.name}`}
                      aria-current={index === current}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        index === current
                          ? "w-6 bg-primary"
                          : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground"
                      )}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => api?.scrollNext()}
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight />
                </Button>
              </div>
            </Carousel>
          </TabsContent>

          <TabsContent value="mosaico" className="w-full">
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                testimonial={FEATURED}
                className="sm:col-span-2"
              />
              {REST.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  layout="stacked"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            className="gap-2"
            render={
              <a href={STARS_URL} target="_blank" rel="noreferrer noopener" />
            }
          >
            Ver todas as histórias
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  layout = "split",
  className,
}: {
  testimonial: Testimonial;
  layout?: "split" | "stacked";
  className?: string;
}) {
  const isSplit = layout === "split";

  return (
    <article
      className={cn(
        "group flex h-full flex-col gap-5 rounded-3xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30",
        isSplit &&
          "sm:min-h-72 sm:flex-row sm:items-stretch sm:gap-6 lg:min-h-80",
        className
      )}
    >
      <a
        href={STARS_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Assistir ao depoimento de ${testimonial.name}`}
        className={cn(
          "relative w-full shrink-0 overflow-hidden rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
          isSplit
            ? "aspect-4/3 sm:order-last sm:aspect-auto sm:w-[46%]"
            : "aspect-16/10"
        )}
      >
        <Image
          src={testimonial.photo}
          alt=""
          fill
          sizes={
            isSplit ? "(min-width: 640px) 46vw, 90vw" : "(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110",
              isSplit ? "size-14" : "size-11"
            )}
          >
            <Play
              className={cn("translate-x-px fill-current", isSplit ? "size-5" : "size-4")}
            />
          </span>
        </span>
      </a>

      <div
        className={cn(
          "flex flex-1 flex-col justify-between gap-6",
          isSplit && "sm:py-3"
        )}
      >
        <blockquote
          className={cn(
            "text-balance leading-snug text-foreground",
            isSplit ? "text-base sm:text-lg" : "text-sm"
          )}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarImage src={testimonial.photo} alt={testimonial.name} />
            <AvatarFallback className="bg-gradient-brand text-xs font-semibold text-foreground">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              {testimonial.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {testimonial.handle} · {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
