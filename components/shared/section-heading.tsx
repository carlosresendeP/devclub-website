import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-4xl",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="text-2xl text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "max-w-2xl text-base text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
