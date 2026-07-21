import Image from "next/image";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

interface Mentor {
  name: string;
  role: string;
  photo?: string;
  initials: string;
}

const MENTORES: Mentor[] = [
  {
    name: "Rodolfo Mori",
    role: "Fundador & Mentor de Programação",
    photo: "/professores/Rodolfo Mori.webp",
    initials: "RM",
  },
  {
    name: "Fernanda",
    role: "Recrutadora & Carreira",
    photo: "/professores/Fernanda - Carreira.webp",
    initials: "FE",
  },
  {
    name: "Agustinho",
    role: "Mentor de Back End",
    photo: "/professores/Agustinho.webp",
    initials: "AG",
  },
  {
    name: "Henrique",
    role: "Mentor de Front End",
    photo: "/professores/Henrique.webp",
    initials: "HE",
  },
  {
    name: "Márcio",
    role: "Terapeuta de Alta Performance",
    photo: "/professores/Marcio - Terapelta.webp",
    initials: "MA",
  },
  {
    name: "Juliana",
    role: "Mentora de Dados & Automações",
    initials: "JU",
  },
  {
    name: "Mateus",
    role: "Especialista em IA",
    photo: "/professores/Mateus - Especialista em IA.webp",
    initials: "MT",
  },
];

export function Mentores() {
  return (
    <section id="mentores" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mentores"
          title={
            <>
              Aprenda com os <span className="text-primary">melhores</span>
            </>
          }
          lede="Um time formado por quem já viveu o mercado — programação, carreira, performance mental e IA, todos na mesma comunidade."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 lg:gap-3">
          {MENTORES.map((mentor, index) => (
            <ScrollReveal
              key={mentor.name}
              delayMs={index * 70}
              className={cn(index % 2 === 1 && "lg:translate-y-8")}
            >
              <article className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/50">
                {mentor.photo ? (
                  <Image
                    src={mentor.photo}
                    alt={`${mentor.name} — ${mentor.role}`}
                    fill
                    sizes="(min-width: 1024px) 14vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <Avatar className="size-14">
                      <AvatarFallback className="bg-gradient-brand text-base font-semibold text-foreground">
                        {mentor.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                />

                <div className="relative z-10 flex flex-col gap-0.5 p-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="font-heading text-lg font-light leading-tight text-foreground">
                    {mentor.name}
                  </span>
                  <span className="text-[11px] leading-tight text-muted-foreground">
                    {mentor.role}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
