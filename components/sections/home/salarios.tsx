"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

interface Faixa {
  role: string;
  min: number;
  max: number;
  media: number;
}

const FAIXAS: Faixa[] = [
  { role: "Front End", min: 3500, max: 8000, media: 5800 },
  { role: "Back End", min: 4000, max: 10000, media: 6900 },
  { role: "Full Stack", min: 4500, max: 12000, media: 7800 },
  { role: "Mobile", min: 4000, max: 11000, media: 7200 },
  { role: "Dados & BI", min: 4500, max: 13000, media: 8100 },
];

const ESCALA = 13000;

function formatBRL(value: number) {
  return `R$ ${Math.round(value).toLocaleString("pt-BR")}`;
}

function Bar({ item, active, delay }: { item: Faixa; active: boolean; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(item.media);
      return;
    }
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
  }, [active, item.media, delay]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-foreground sm:text-base">
          {item.role}
        </span>
        <span className="font-heading text-xl font-light tabular-nums text-foreground sm:text-2xl">
          {formatBRL(value)}
          <span className="ml-1 text-xs text-muted-foreground">/mês</span>
        </span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-muted">
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
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
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
          <div className="flex items-center gap-3 rounded-2xl border border-border glass-surface p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
              <TrendingUp className="size-5" />
            </span>
            <p className="text-sm text-muted-foreground">
              Sênior ultrapassa{" "}
              <span className="font-semibold text-foreground">R$ 25.000</span> —
              e a trilha te leva do zero até lá.
            </p>
          </div>
        </div>

        <div ref={ref} className="flex flex-col gap-7 rounded-3xl border border-border bg-card/50 p-7 backdrop-blur-sm sm:p-9">
          {FAIXAS.map((item, index) => (
            <Bar key={item.role} item={item} active={active} delay={index * 140} />
          ))}
          <p className="border-t border-border pt-5 text-xs text-muted-foreground">
            Valores de referência com base em pesquisas de mercado do setor de
            tecnologia no Brasil — variam por região, empresa e stack.
          </p>
        </div>
      </div>
    </section>
  );
}
