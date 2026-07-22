"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { FORMACOES } from "@/lib/formacoes";

const AUTO_PLAY_INTERVAL = 3500;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % FORMACOES.length) + FORMACOES.length) % FORMACOES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FORMACOES.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardStatus = (index: number) => {
    const diff = wrap(-(FORMACOES.length / 2), FORMACOES.length / 2, index - activeIndex);
    if (diff === 0) return "active";
    if (diff === -1) return "prev";
    if (diff === 1) return "next";
    return "hidden";
  };

  const active = FORMACOES[activeIndex];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="grid gap-12 rounded-[2.5rem] border border-border bg-card/30 p-6 sm:p-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16 lg:p-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ol className="relative flex flex-col lg:max-h-150 lg:overflow-y-auto lg:pr-2">
          {FORMACOES.map((feature, index) => {
            const isActive = index === activeIndex;
            const isLast = index === FORMACOES.length - 1;

            return (
              <li key={feature.id} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => goTo(index)}
                    aria-current={isActive}
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full border font-heading text-xs transition-colors duration-300",
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                  {!isLast && (
                    <span
                      aria-hidden
                      className={cn(
                        "mt-1 w-px flex-1 transition-colors duration-500",
                        isActive ? "bg-foreground/40" : "bg-border"
                      )}
                    />
                  )}
                </div>

                <button
                  onClick={() => goTo(index)}
                  className="flex flex-1 items-center gap-2 pb-8 text-left text-sm font-medium uppercase tracking-wide transition-colors duration-300"
                >
                  <span className={cn(isActive ? "text-foreground" : "text-muted-foreground")}>
                    <HugeiconsIcon icon={feature.icon} size={16} strokeWidth={2} />
                  </span>
                  <span className={cn(isActive ? "text-foreground" : "text-muted-foreground")}>
                    {feature.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-col gap-6 self-start">
          <div className="relative mx-auto aspect-3/4 w-full max-w-100">
            {FORMACOES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -60 : isNext ? 60 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  className="absolute inset-0 origin-center overflow-hidden rounded-[2rem] border-4 border-background bg-background md:rounded-[2.8rem] md:border-8"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "size-full object-cover transition-all duration-700",
                      isActive ? "grayscale-0 blur-0" : "blur-[2px] brightness-75 grayscale"
                    )}
                  />

                  <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="size-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                      Matrículas abertas
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mx-auto flex w-full max-w-100 flex-col gap-3"
            >
              <Link
                href="#matricula"
                className="w-fit rounded-full border border-border px-4 py-1.5 text-[11px] font-normal uppercase tracking-[0.2em] text-muted-foreground shadow-lg transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                {String(activeIndex + 1).padStart(2, "0")} • {active.label}
              </Link>
              <p className="text-xl font-normal leading-tight tracking-tight text-foreground sm:text-2xl">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
