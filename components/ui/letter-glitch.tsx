"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BRAND_COLORS, hexToRgba } from "@/lib/brand-colors";

const CHARS = "01DEVCLUB</>{}#&";
const FONT_SIZE = 16;

interface LetterGlitchProps {
  className?: string;
}

export function LetterGlitch({ className }: LetterGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      columns = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * canvas.height) / FONT_SIZE)
      );
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const trailColor = hexToRgba(BRAND_COLORS.background, 0.15);

    const render = () => {
      ctx.fillStyle = trailColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.fillStyle = hexToRgba(BRAND_COLORS.primary, 0.5);

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * FONT_SIZE, y * FONT_SIZE);
        drops[i] = y * FONT_SIZE > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });

      frame = window.requestAnimationFrame(render);
    };
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
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
