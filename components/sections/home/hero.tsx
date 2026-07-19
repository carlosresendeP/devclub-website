"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { SpecularButton } from "@/components/ui/specular-button";
import { CountStat } from "@/components/shared/count-stat";
import { LogoMarquee } from "@/components/shared/logo-marquee";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const TOTAL_FRAMES = 161;
const SCROLL_DISTANCE = 3200;

const ROTATING_WORDS = [
  "Full Stack",
  "Back End",
  "Front End",
  "Especialista em IA",
  "Analista de Dados",
];

const PARTNER_LOGOS = [
  { src: "/logos/ifood-logo-png_seeklogo-463141.png", alt: "iFood" },
  { src: "/logos/bradesco-logo-novo-2018-2.png", alt: "Bradesco" },
  { src: "/logos/mercado-livre-87.png", alt: "Mercado Livre" },
  { src: "/logos/microsoft-logo.png", alt: "Microsoft" },
  { src: "/logos/intel-logo.svg", alt: "Intel" },
  { src: "/logos/google-logo-transparent.png", alt: "Google" },
];

function frameSrc(index: number) {
  return `/imagens-scroll/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number
) {
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = width / height;
  let drawWidth: number;
  let drawHeight: number;

  if (imgRatio > canvasRatio) {
    drawHeight = height;
    drawWidth = drawHeight * imgRatio;
  } else {
    drawWidth = width;
    drawHeight = drawWidth / imgRatio;
  }

  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(1);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = true;
    video.muted = true;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    let cancelled = false;
    const images: HTMLImageElement[] = [];

    Promise.all(
      Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = frameSrc(i + 1);
          images[i] = img;
        });
      })
    ).then(() => {
      if (cancelled) return;
      imagesRef.current = images;
    });

    return () => {
      cancelled = true;
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    if (!section || !canvas) return;

    const FADE_OUT_PROGRESS = 0.12;

    gsap.registerPlugin(ScrollTrigger);
    const ctx2d = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx2d?.setTransform(dpr, 0, 0, dpr, 0, 0);
      const img = imagesRef.current[currentFrameRef.current - 1];
      if (ctx2d && img?.complete) drawCover(ctx2d, img, rect.width, rect.height);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${SCROLL_DISTANCE}`,
        pin: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const framesReady = imagesRef.current.length > 0;

          if (content) {
            const contentOpacity = Math.max(
              0,
              1 - self.progress / FADE_OUT_PROGRESS
            );
            content.style.opacity = String(contentOpacity);
            content.style.pointerEvents = contentOpacity < 0.05 ? "none" : "auto";
          }

          if (self.progress > 0 && framesReady) {
            canvas.style.opacity = "1";
            if (video && !video.paused) video.pause();
          } else {
            canvas.style.opacity = "0";
            if (video?.paused) video.play().catch(() => {});
          }

          if (!framesReady) return;

          const rect = section.getBoundingClientRect();
          const frame = Math.min(
            TOTAL_FRAMES,
            Math.max(1, Math.round(self.progress * (TOTAL_FRAMES - 1)) + 1)
          );

          if (frame !== currentFrameRef.current) {
            currentFrameRef.current = frame;
            const img = imagesRef.current[frame - 1];
            if (ctx2d && img?.complete) drawCover(ctx2d, img, rect.width, rect.height);
          }
        },
      });
    }, section);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      context.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh w-full overflow-hidden bg-background"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video_hero.mp4"
        poster={reducedMotion ? undefined : "/imagens-scroll/ezgif-frame-001.jpg"}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {reducedMotion ? null : (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200"
        />
      )}

      <div className="hero-vignette pointer-events-none absolute inset-0" />

      <div
        ref={contentRef}
        className="absolute inset-0 z-10 flex flex-col items-center px-4 pt-24 pb-8 text-center sm:px-6 sm:pb-10"
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            O início do chamado
          </span>

          <h1 className="max-w-4xl text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            É a sua vez. Vire Dev{" "} <br />
            <RotatingText words={ROTATING_WORDS} className="text-primary" />
          </h1>

          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Pensado pra quem quer trocar de área ou dar o primeiro passo em
            tecnologia: trilha completa do zero ao avançado, mentoria toda
            semana e uma comunidade que cobra sua evolução até você conseguir
            a vaga.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <SpecularButton
              size="lg"
              render={<Link href="#matricula" />}
              nativeButton={false}
            >
              Quero ser aluno
            </SpecularButton>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="#formacoes" />}
              nativeButton={false}
            >
              Ver formações
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <CountStat
            value="+25 mil alunos"
            label="já passaram por aqui"
            avatars={[
              {
                src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluno DevClub",
                fallback: "MC",
              },
              {
                src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluna DevClub",
                fallback: "JS",
              },
              {
                src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluno DevClub",
                fallback: "AR",
              },
              {
                src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluna DevClub",
                fallback: "FT",
              },
            ]}
          />
          <div className="w-full max-w-md">
            <p className="mb-2 text-center text-xs text-muted-foreground">
              Alunos nas maiores empresas do Brasil e do mundo
            </p>
            <LogoMarquee items={PARTNER_LOGOS} />
          </div>
        </div>
      </div>
    </section>
  );
}
