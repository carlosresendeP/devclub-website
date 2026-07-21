"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Transition, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitBy = "characters" | "words" | "lines" | string;
type StaggerFrom = "first" | "last" | "center" | "random" | number;

interface RotatingTextProps {
  words: string[];
  splitBy?: SplitBy;
  staggerFrom?: StaggerFrom;
  staggerDuration?: number;
  rotationInterval?: number;
  auto?: boolean;
  loop?: boolean;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
  transition?: Transition;
  className?: string;
  mainClassName?: string;
  splitLevelClassName?: string;
}

interface SplitSegment {
  characters: string[];
  needsSpace: boolean;
}

function splitIntoSegments(text: string, splitBy: SplitBy): SplitSegment[] {
  if (splitBy === "characters") {
    const words = text.split(" ");
    return words.map((word, i) => ({
      characters: word.split(""),
      needsSpace: i !== words.length - 1,
    }));
  }
  if (splitBy === "lines") {
    const lines = text.split("\n");
    return lines.map((line) => ({ characters: [line], needsSpace: false }));
  }
  const separator = splitBy === "words" ? " " : splitBy;
  const parts = text.split(separator);
  return parts.map((part, i) => ({
    characters: [part],
    needsSpace: separator === " " && i !== parts.length - 1,
  }));
}

function getStaggerDelay(
  index: number,
  total: number,
  from: StaggerFrom,
  duration: number
): number {
  if (from === "first") return index * duration;
  if (from === "last") return (total - 1 - index) * duration;
  if (from === "center") {
    const center = (total - 1) / 2;
    return Math.abs(center - index) * duration;
  }
  if (from === "random") return Math.floor(Math.random() * total) * duration;
  return Math.abs(from - index) * duration;
}

export function RotatingText({
  words,
  splitBy = "characters",
  staggerFrom = "first",
  staggerDuration = 0.025,
  rotationInterval = 2000,
  auto = true,
  loop = true,
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-120%", opacity: 0 },
  transition = { type: "spring", damping: 30, stiffness: 400 },
  className,
  mainClassName,
  splitLevelClassName,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((current) => {
      const atEnd = current === words.length - 1;
      if (!atEnd) return current + 1;
      return loop ? 0 : current;
    });
  }, [words.length, loop]);

  useEffect(() => {
    if (!auto || words.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(next, rotationInterval);
    return () => window.clearInterval(id);
  }, [auto, rotationInterval, next, words.length]);

  const segments = useMemo(
    () => splitIntoSegments(words[index] ?? "", splitBy),
    [words, index, splitBy]
  );
  const totalCharacters = useMemo(
    () => segments.reduce((sum, segment) => sum + segment.characters.length, 0),
    [segments]
  );

  let charCursor = 0;

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={index} className={cn("inline-flex flex-wrap", mainClassName)}>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex} className={cn("inline-flex", splitLevelClassName)}>
              {segment.characters.map((char, charIndex) => {
                const globalIndex = charCursor++;
                return (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        globalIndex,
                        totalCharacters,
                        staggerFrom,
                        staggerDuration
                      ),
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
              {segment.needsSpace && <span className="whitespace-pre"> </span>}
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
