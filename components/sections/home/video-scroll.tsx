"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { VideoScrub } from "@/components/ui/video-scrub";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function VideoScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const pinEl = pinRef.current;
    const video = videoRef.current;
    if (!section || !pinEl || !video || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: pinEl,
        scrub: 0.4,
        onUpdate: (self) => {
          // seek coalescing: skip while the decoder is mid-seek so fast
          // scrolling doesn't pile up frame decodes
          if (video.seeking || !video.duration || Number.isNaN(video.duration)) return;
          video.currentTime = self.progress * video.duration;
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="relative h-[360dvh] w-full">
      <div
        ref={pinRef}
        className="relative h-dvh w-full overflow-hidden"
      >
        <VideoScrub videoRef={videoRef} src="/video-scroll2.mp4" className="absolute inset-0" />

        <div className="hero-vignette pointer-events-none absolute inset-0" />
      </div>
    </section>
  );
}
