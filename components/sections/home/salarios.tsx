"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart3, Code2, Crown, Layers, Server, Smartphone, TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface Faixa {
  role: string;
  icon: typeof Code2;
  min: number;
  max: number;
  media: number;
}

const FAIXAS: Faixa[] = [
  { role: "Front End", icon: Code2, min: 3500, max: 8000, media: 5800 },
  { role: "Back End", icon: Server, min: 4000, max: 10000, media: 6900 },
  { role: "Full Stack", icon: Layers, min: 4500, max: 12000, media: 7800 },
  { role: "Mobile", icon: Smartphone, min: 4000, max: 11000, media: 7200 },
  { role: "Dados & BI", icon: BarChart3, min: 4500, max: 13000, media: 8100 },
];

const ESCALA = 13000;
const TOP_MEDIA = Math.max(...FAIXAS.map((item) => item.media));

function formatBRL(value: number) {
  return `R$ ${Math.round(value).toLocaleString("pt-BR")}`;
}

function Bar({
  item,
  active,
  delay,
  reducedMotion,
}: {
  item: Faixa;
  active: boolean;
  delay: number;
  reducedMotion: boolean;
}) {
  const [value, setValue] = useState(0);
  const Icon = item.icon;
  const isTop = item.media === TOP_MEDIA;
  const displayValue = reducedMotion ? item.media : value;

  useEffect(() => {
    if (!active || reducedMotion) return;
    let raf = 0;
    let timeout = 0;
    const duration = 1400;
    const run = (start: number) => (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(item.media * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) raf = requestAnimationFrame(run(start));
    };
    timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(run(performance.now()));
    }, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [active, item.media, delay, reducedMotion]);

  return (
    <div className="group -m-2 flex flex-col gap-2 rounded-2xl p-2 transition-colors hover:bg-foreground/5">
      <div className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground sm:text-base">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
            <Icon className="size-3.5" />
          </span>
          {item.role}
          {isTop ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-secondary">
              <Crown className="size-3" />
              Top
            </span>
          ) : null}
        </span>
        <span className="flex items-baseline font-heading text-xl font-light tabular-nums text-foreground sm:text-2xl">
          {formatBRL(displayValue)}
          <span className="ml-1 text-xs text-muted-foreground">/mês</span>
        </span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-muted ring-1 ring-inset ring-border">
        <div
          className="h-full rounded-full bg-gradient-brand transition-[width] duration-1000 ease-out"
          style={{ width: active ? `${(item.media / ESCALA) * 100}%` : "0%" }}
        />
      </div>
      <span className="font-heading text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {formatBRL(item.min)} — {formatBRL(item.max)}
      </span>
    </div>
  );
}

export function Salarios() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="salarios" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-start justify-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <ScrollReveal className="flex flex-col items-start justify-start gap-6">
          <SectionHeading
            eyebrow="Mercado"
            title={
              <>
                Quanto ganha um{" "}
                <span className="text-primary">programador</span> no Brasil
              </>
            }
            lede="Faixas de referência de mercado por área — o salário sobe junto com sua evolução técnica, não com o tempo de faculdade."
          />
          <div className="flex items-center gap-3 rounded-2xl border border-primary/25 glass-surface p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary shadow-glow-primary">
              <TrendingUp className="size-5" />
            </span>
            <p className="text-sm text-muted-foreground">
              Sênior ultrapassa{" "}
              <span className="font-semibold text-foreground">R$ 25.000</span> —
              e a trilha te leva do zero até lá.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={100} className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-4xl bg-primary/20 blur-3xl"
          />
          <div
            ref={ref}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-linear-to-br from-card via-card to-primary/10 p-7 shadow-elevated sm:p-9"
          >
            {FAIXAS.map((item, index) => (
              <Bar
                key={item.role}
                item={item}
                active={active}
                delay={index * 140}
                reducedMotion={reducedMotion}
              />
            ))}
            <p className="border-t border-border pt-5 text-xs text-muted-foreground">
              Valores de referência com base em pesquisas de mercado do setor de
              tecnologia no Brasil — variam por região, empresa e stack.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
