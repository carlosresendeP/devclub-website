"use client";

import { useEffect, type RefObject } from "react";
import { cn } from "@/lib/utils";

interface VideoScrubProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  src: string;
  className?: string;
}

export function VideoScrub({ videoRef, src, className }: VideoScrubProps) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    let objectUrl: string | null = null;
    let cancelled = false;

    // blob-seek: fetch as a Blob and seek the object URL, so scrubbing
    // doesn't depend on the server/CDN supporting HTTP range requests.
    fetch(src)
      .then((res) => res.blob())
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        video.src = objectUrl;
      })
      .catch(() => {
        if (!cancelled) video.src = src;
      });

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [videoRef, src]);

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full object-cover", className)}
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
