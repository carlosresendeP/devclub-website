"use client";

import Image from "next/image";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface TechChip {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const HUB_TECHS: TechChip[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: DiCss3, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
];

const VIEW_W = 1000;
const VIEW_H = 480;
const ICON_X = [55, 143, 231, 319, 407, 495, 583, 671, 759, 847, 935];
const ICON_Y = 90;
const HUB_X = 500;
const HUB_Y = 400;

const LINE_CONFIG = [
  { duration: 4.2, delay: 0 },
  { duration: 3.6, delay: 0.6 },
  { duration: 5, delay: 1.2 },
  { duration: 4.6, delay: 0.3 },
  { duration: 3.9, delay: 0.9 },
  { duration: 4.4, delay: 1.5 },
  { duration: 3.7, delay: 0.2 },
  { duration: 4.8, delay: 1.1 },
  { duration: 4.1, delay: 1.7 },
  { duration: 3.5, delay: 0.5 },
  { duration: 4.5, delay: 1.4 },
];

function pathFor(x: number) {
  const curveX = HUB_X + (x - HUB_X) * 0.22;
  return `M ${x} ${ICON_Y + 25} C ${x} 230, ${curveX} 260, ${HUB_X} 355`;
}

function toPercent(value: number, axis: "x" | "y") {
  return `${(value / (axis === "x" ? VIEW_W : VIEW_H)) * 100}%`;
}

function TechHub() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto aspect-1000/480 w-full max-w-4xl">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
        aria-hidden
      >
        {ICON_X.map((x, index) => {
          const d = pathFor(x);
          const { duration, delay } = LINE_CONFIG[index];
          return (
            <g key={x}>
              <path d={d} fill="none" stroke="var(--primary)" strokeOpacity={0.28} strokeWidth={1.5} />
              {!reducedMotion && (
                <>
                  <circle r={3.5} fill="var(--primary)">
                    <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" path={d} />
                  </circle>
                  <circle r={3.5} fill="var(--primary)" opacity={0.55}>
                    <animateMotion
                      dur={`${duration}s`}
                      begin={`${delay + duration / 2}s`}
                      repeatCount="indefinite"
                      path={d}
                    />
                  </circle>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {HUB_TECHS.map(({ name, Icon, color }, index) => (
        <div
          key={name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: toPercent(ICON_X[index], "x"), top: toPercent(ICON_Y, "y") }}
        >
          <span
            title={name}
            className="group flex size-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 hover:-translate-y-1 sm:size-11 sm:rounded-2xl lg:size-14"
            style={{
              backgroundColor: `color-mix(in oklch, ${color} 16%, transparent)`,
              borderColor: `color-mix(in oklch, ${color} 30%, transparent)`,
            }}
          >
            <Icon
              className="size-3.5 transition-transform duration-300 group-hover:scale-110 sm:size-5 lg:size-6"
              style={{ color }}
            />
            <span className="sr-only">{name}</span>
          </span>
        </div>
      ))}

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: toPercent(HUB_X, "x"), top: toPercent(HUB_Y, "y") }}
      >
        <div className="relative flex size-16 items-center justify-center rounded-3xl border border-primary/40 bg-primary/10 shadow-glow-primary sm:size-20 lg:size-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-primary/25 blur-2xl"
          />
          <div className="relative size-8 sm:size-10 lg:size-12">
            <Image src="/LOGO.webp" alt="DevClub" fill sizes="48px" className="object-contain" />
          </div>
          <span className="sr-only">DevClub</span>
        </div>
      </div>
    </div>
  );
}

export function Tecnologias() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-12 sm:py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
          tecnologias_
        </span>
        <h2 className="max-w-3xl font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Aprenda as <span className="text-primary">Principais</span> tecnologias do mercado
        </h2>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Do zero, de forma didática, com os melhores profissionais do mercado
          a trilha te leva até o primeiro emprego na prática.
        </p>
      </div>

      <div className="mt-16 px-4">
        <TechHub />
      </div>
    </section>
  );
}
