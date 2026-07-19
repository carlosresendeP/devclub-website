import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type SpecularButtonProps = ComponentProps<typeof Button>;

export function SpecularButton({
  className,
  children,
  ...props
}: SpecularButtonProps) {
  return (
    <span className="btn-glow-ring inline-flex rounded-full p-0.5 shadow-glow-primary">
      <Button
        className={cn(
          "rounded-full bg-background px-6 text-foreground hover:bg-background/90",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </span>
  );
}
