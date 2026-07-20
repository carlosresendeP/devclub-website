"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BRAND_COLORS, hexToRgba } from "@/lib/brand-colors";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  driftY: number;
  color: string;
}

interface StarFieldProps {
  className?: string;
}

const DENSITY = 1 / 9000;
const MAX_STARS_DESKTOP = 140;
const MAX_STARS_MOBILE = 60;

function createStars(width: number, height: number): Star[] {
  const max = width < 640 ? MAX_STARS_MOBILE : MAX_STARS_DESKTOP;
  const count = Math.min(max, Math.round(width * height * DENSITY));
  const palette = [
    hexToRgba(BRAND_COLORS.foreground, 1),
    hexToRgba(BRAND_COLORS.primary, 1),
    hexToRgba(BRAND_COLORS.secondary, 1),
  ];

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.2 + 0.3,
    baseAlpha: Math.random() * 0.5 + 0.15,
    twinkleSpeed: Math.random() * 0.015 + 0.004,
    twinklePhase: Math.random() * Math.PI * 2,
    driftX: (Math.random() - 0.5) * 0.04,
    driftY: (Math.random() - 0.5) * 0.02,
    color: palette[Math.floor(Math.random() * palette.length)],
  }));
}

export function StarField({ className }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = createStars(width, height);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const twinkle = reducedMotion
          ? star.baseAlpha
          : star.baseAlpha *
            (0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase));

        if (!reducedMotion) {
          star.x = (star.x + star.driftX + width) % width;
          star.y = (star.y + star.driftY + height) % height;
        }

        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = twinkle;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    if (reducedMotion) {
      draw(0);
    } else {
      const loop = (time: number) => {
        if (visible) draw(time);
        frame = window.requestAnimationFrame(loop);
      };
      frame = window.requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    />
  );
}
