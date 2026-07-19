"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { cn } from "@/lib/utils";

interface BeamOptions {
  initialX?: number;
  translateX?: number;
  initialY?: number;
  translateY?: number;
  rotate?: number;
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

const BEAMS: BeamOptions[] = [
  { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
  { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
  { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
  { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
  { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
  { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
  { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
];

interface BackgroundBeamsWithCollisionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function BackgroundBeamsWithCollision({
  children,
  className,
  id,
}: BackgroundBeamsWithCollisionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={id}
      ref={parentRef}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden bg-linear-to-b from-background via-background to-muted",
        className
      )}
    >
      {BEAMS.map((beam, index) => (
        <CollisionBeam
          key={index}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full bg-card shadow-md"
      />
    </div>
  );
}

function CollisionBeam({
  parentRef,
  containerRef,
  beamOptions,
}: {
  parentRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  beamOptions: BeamOptions;
}) {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        !beamRef.current ||
        !containerRef.current ||
        !parentRef.current ||
        cycleCollisionDetected
      ) {
        return;
      }

      const beamRect = beamRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();

      if (beamRect.bottom >= containerRect.top) {
        setCollision({
          detected: true,
          coordinates: {
            x: beamRect.left - parentRect.left + beamRect.width / 2,
            y: beamRect.bottom - parentRect.top,
          },
        });
        setCycleCollisionDetected(true);
      }
    };

    const interval = window.setInterval(checkCollision, 50);
    return () => window.clearInterval(interval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (!collision.detected) return;

    const resetTimeout = window.setTimeout(() => {
      setCollision({ detected: false, coordinates: null });
      setCycleCollisionDetected(false);
    }, 2000);
    const nextBeamTimeout = window.setTimeout(() => {
      setBeamKey((current) => current + 1);
    }, 2000);

    return () => {
      window.clearTimeout(resetTimeout);
      window.clearTimeout(nextBeamTimeout);
    };
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY ?? -200,
          translateX: beamOptions.initialX ?? 0,
          rotate: beamOptions.rotate ?? 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY ?? 1800,
            translateX: beamOptions.translateX ?? 0,
            rotate: beamOptions.rotate ?? 0,
          },
        }}
        transition={{
          duration: beamOptions.duration ?? 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay ?? 0,
          repeatDelay: beamOptions.repeatDelay ?? 0,
        }}
        className={cn(
          "absolute top-20 left-0 m-auto h-14 w-px rounded-full bg-linear-to-t from-primary via-secondary to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates ? (
          <Explosion
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

interface ExplosionSpan {
  id: number;
  directionX: number;
  directionY: number;
  duration: number;
}

function Explosion({ style }: { style: React.CSSProperties }) {
  const [spans] = useState<ExplosionSpan[]>(() =>
    Array.from({ length: 20 }, (_, index) => ({
      id: index,
      directionX: Math.floor(Math.random() * 80 - 40),
      directionY: Math.floor(Math.random() * -50 - 10),
      duration: Math.random() * 1.5 + 0.5,
    }))
  );

  return (
    <div style={style} className="absolute z-50 h-2 w-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-linear-to-r from-transparent via-primary to-transparent blur-xs"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: span.duration, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-linear-to-b from-primary to-secondary"
        />
      ))}
    </div>
  );
}
