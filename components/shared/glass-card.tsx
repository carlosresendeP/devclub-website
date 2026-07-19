import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-surface rounded-2xl border shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
