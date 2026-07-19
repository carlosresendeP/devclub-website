"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01</>";

interface DecryptedTextProps {
  text: string;
  className?: string;
}

export function DecryptedText({ text, className }: DecryptedTextProps) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRunRef.current) return;
        hasRunRef.current = true;
        observer.disconnect();

        let iteration = 0;
        const totalIterations = text.length * 3;
        const id = window.setInterval(() => {
          setDisplay(
            text
              .split("")
              .map((char, index) => {
                if (char === " ") return " ";
                if (index < iteration / 3) return char;
                return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
              })
              .join("")
          );
          iteration += 1;
          if (iteration >= totalIterations) {
            window.clearInterval(id);
            setDisplay(text);
          }
        }, 30);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
    </span>
  );
}
