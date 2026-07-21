import { cn } from "@/lib/utils";

interface FilmGrainProps {
  className?: string;
}

export function FilmGrain({ className }: FilmGrainProps) {
  return <div aria-hidden className={cn("film-grain", className)} />;
}
