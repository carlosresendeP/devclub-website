import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarItem {
  src: string;
  alt: string;
  fallback: string;
}

interface CountStatProps {
  value: string;
  label: string;
  avatars?: AvatarItem[];
  className?: string;
}

export function CountStat({
  value,
  label,
  avatars = [],
  className,
}: CountStatProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {avatars.length > 0 ? (
        <AvatarGroup>
          {avatars.map((avatar, index) => (
            <Avatar key={`${avatar.fallback}-${index}`} size="lg">
              <AvatarImage src={avatar.src} alt={avatar.alt} />
              <AvatarFallback className="bg-gradient-brand text-xs font-semibold text-foreground">
                {avatar.fallback}
              </AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      ) : null}
      <p className="text-sm text-muted-foreground sm:text-base">
        <span className="font-semibold text-foreground">{value}</span> {label}
      </p>
    </div>
  );
}
