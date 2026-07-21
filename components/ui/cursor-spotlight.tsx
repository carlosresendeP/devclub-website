"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CursorSpotlightProps {
  children: ReactNode;
  className?: string;
  size?: string;
  from?: string;
}

export function CursorSpotlight({
  children,
  className,
  size = "26rem",
  from = "color-mix(in oklch, var(--primary) 16%, transparent)",
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={cn("group/spot relative", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(${size} ${size} at var(--spot-x, 50%) var(--spot-y, 50%), ${from}, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
