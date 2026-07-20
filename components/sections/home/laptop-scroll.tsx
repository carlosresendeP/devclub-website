"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StarField } from "@/components/ui/star-field";
import { LaptopReveal } from "@/components/ui/laptop-reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const CLOSED_ROTATE_X = -100;
const SCREEN_CROSSFADE_CENTER = 0.6;
const SCREEN_FADE_WINDOW = 0.22;

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function LaptopScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const screenARef = useRef<HTMLDivElement>(null);
  const screenBRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const pinEl = pinRef.current;
    const lid = lidRef.current;
    const glow = glowRef.current;
    const screenA = screenARef.current;
    const screenB = screenBRef.current;
    if (!section || !pinEl || !lid) return;

    if (reducedMotion) {
      lid.style.transform = "rotateX(0deg)";
      if (glow) glow.style.opacity = "1";
      if (screenA) screenA.style.opacity = "0";
      if (screenB) screenB.style.opacity = "1";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    lid.style.transform = `rotateX(${CLOSED_ROTATE_X}deg)`;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: pinEl,
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;
          const rotateX = CLOSED_ROTATE_X + -CLOSED_ROTATE_X * progress;
          lid.style.transform = `rotateX(${rotateX}deg)`;

          if (glow) glow.style.opacity = String(Math.min(1, progress / 0.6));

          const screenAOpacity =
            progress < SCREEN_CROSSFADE_CENTER
              ? clamp01((progress - 0.15) / 0.25)
              : clamp01(1 - (progress - SCREEN_CROSSFADE_CENTER) / SCREEN_FADE_WINDOW);
          const screenBOpacity = clamp01(
            (progress - SCREEN_CROSSFADE_CENTER) / SCREEN_FADE_WINDOW
          );

          if (screenA) screenA.style.opacity = String(screenAOpacity);
          if (screenB) screenB.style.opacity = String(screenBOpacity);
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="relative h-[360dvh] w-full bg-background">
      <div
        ref={pinRef}
        className="relative h-dvh w-full overflow-hidden bg-background"
      >
        <StarField className="absolute inset-0 h-full w-full" />

        <LaptopReveal
          lidRef={lidRef}
          glowRef={glowRef}
          screenARef={screenARef}
          screenBRef={screenBRef}
        />

        <div className="hero-vignette pointer-events-none absolute inset-0" />
      </div>
    </section>
  );
}
