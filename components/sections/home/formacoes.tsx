"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const PORTRAIT_CARDS = [
  { file: "image_44_1x.webp", alt: "Card de trilha DevClub 1" },
  { file: "image_45_1x.webp", alt: "Card de trilha DevClub 2" },
  { file: "image_46_1x.webp", alt: "Card de trilha DevClub 3" },
  { file: "image_47_1x.webp", alt: "Card de trilha DevClub 4" },
  { file: "image_48_1x.webp", alt: "Card de trilha DevClub 5" },
  { file: "image_49_1x.webp", alt: "Card de trilha DevClub 6" },
  { file: "image_50_1x.webp", alt: "Card de trilha DevClub 7" },
  { file: "image_51_1x.webp", alt: "Card de trilha DevClub 8" },
  { file: "image_52_1x.webp", alt: "Card de trilha DevClub 9" },
];

const WIDE_CARDS = [
  { file: "card-largo-1.webp", alt: "FullStack PRO — Front End, Back End e Full Stack" },
  { file: "card-largo-2.webp", alt: "IA Club — Gestor de IA e Automações" },
  { file: "card-largo-3.webp", alt: "DataClub — Análise de Dados e Power BI" },
  { file: "card-largo-4.webp", alt: "MBA em IA e Automações" },
];

const TOTAL_CARDS = PORTRAIT_CARDS.length + WIDE_CARDS.length;

export function Formacoes() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateSelection = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setCurrentSlide(api.selectedScrollSnap());
    };
    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);
    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);

  return (
    <BackgroundBeamsWithCollision className="py-16" id="formacoes">
      <div className="relative flex w-full flex-col">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex shrink-0 flex-col gap-8 lg:w-64">
              <Badge
                variant="outline"
                className="w-fit rounded-md border-primary/40 bg-primary/5 px-3 py-1.5 font-mono text-[11px] tracking-wide text-primary"
              >
                apresentação_
              </Badge>

              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback className="bg-gradient-brand text-sm font-semibold text-foreground">
                    RM
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    Rodolfo Mori
                  </span>
                  <span className="text-xs text-primary">
                    Fundador do DevClub
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <AvatarGroup>
                  {["MC", "JS", "AR", "FT"].map((initials) => (
                    <Avatar key={initials} size="sm">
                      <AvatarFallback className="bg-gradient-brand text-[10px] font-semibold text-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    +25 mil alunos e alunas
                  </span>{" "}
                  no Brasil e no mundo. Junte-se a eles.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="max-w-2xl text-2xl text-foreground sm:text-4xl lg:text-4xl">
                  Aprenda as <span className="text-primary">tecnologias</span>{" "}
                  + <span className="text-secondary">demandas do mercado</span>,
                  com método prático que gera resultados reais.
                </h2>

                <div className="hidden shrink-0 gap-2 sm:flex">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => api?.scrollPrev()}
                    disabled={!canScrollPrev}
                    aria-label="Trilha anterior"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => api?.scrollNext()}
                    disabled={!canScrollNext}
                    aria-label="Próxima trilha"
                  >
                    <ChevronRight />
                  </Button>
                </div>
              </div>

              <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                O DevClub é uma escola de tecnologia focada em formar
                programadores prontos para o mercado — do zero ao nível
                profissional. Aqui, o aprendizado é direto ao ponto, com uma
                metodologia prática desenvolvida para garantir domínio
                técnico, experiência real em projetos e preparo para
                conquistar as melhores oportunidades em tecnologia.
              </p>

              <span className="h-1 w-10 rounded-full bg-secondary" />
            </div>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", dragFree: true }}
          className="mt-10 w-full"
        >
          <CarouselContent className="px-4 sm:px-6 lg:px-8">
            {PORTRAIT_CARDS.map(({ file, alt }) => (
              <CarouselItem
                key={file}
                className="aspect-9/16 w-28 shrink-0 grow-0 basis-auto sm:w-32 lg:w-36"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-muted shadow-sm transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg">
                  <Image
                    src={`/cards-fomacoes/${file}`}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 144px, (min-width: 640px) 128px, 112px"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}

            {WIDE_CARDS.map(({ file, alt }) => (
              <CarouselItem
                key={file}
                className="aspect-16/9 w-72 shrink-0 grow-0 basis-auto sm:w-80 lg:w-96"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-muted shadow-sm transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg">
                  <Image
                    src={`/cards-fomacoes/${file}`}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 288px"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: TOTAL_CARDS }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir para o card ${index + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              )}
            />
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
