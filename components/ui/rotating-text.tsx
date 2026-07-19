"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

export function RotatingText({
  words,
  intervalMs = 2000,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className={cn("inline-block align-baseline", className)}>
      <span
        key={words[index]}
        className="inline-block animate-in fade-in slide-in-from-bottom-2 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent duration-500 ease-out"
      >
        {words[index]}
      </span>
    </span>
  );
}
