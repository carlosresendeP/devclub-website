"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BRAND_COLORS, hexToRgba } from "@/lib/brand-colors";

const LINES = [
  "> aprender.iniciar('front-end')",
  "> aprender.iniciar('back-end')",
  "> mentoria.semanal.on('ready')",
  "> salario.projetar({ nivel: 'pleno' })",
  "> comunidade.conectar(+25000)",
  "> vaga.buscar({ area: 'dev' })",
  "> ia.treinar('agentes')",
  "> dados.analisar('powerbi')",
];
const FONT_SIZE = 13;
const LINE_HEIGHT = 20;

/** Fundo de terminal com glitch sutil — inspirado no Faulty Terminal (react-bits), em canvas 2D para manter a mesma técnica do Letter Glitch. */
export function FaultyTerminal({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let offset = 0;

    const render = () => {
      ctx.fillStyle = hexToRgba(BRAND_COLORS.background, 1);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.textBaseline = "top";

      const rows = Math.ceil(canvas.height / LINE_HEIGHT) + 1;
      const glitchRow = Math.floor(Math.random() * rows);

      for (let row = 0; row < rows; row++) {
        const line = LINES[(row + Math.floor(offset / 400)) % LINES.length];
        const y = row * LINE_HEIGHT - (offset % LINE_HEIGHT);
        const isGlitch = row === glitchRow && Math.random() > 0.55;
        const x = isGlitch ? (Math.random() - 0.5) * 12 : 0;

        ctx.fillStyle = hexToRgba(
          BRAND_COLORS.primary,
          isGlitch ? 0.35 : 0.12
        );
        ctx.fillText(line, 24 + x, y);

        if (isGlitch) {
          ctx.fillStyle = hexToRgba(BRAND_COLORS.secondary, 0.25);
          ctx.fillText(line, 24 - x * 1.5, y);
        }
      }

      offset += 0.6;
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
