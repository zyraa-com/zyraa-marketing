import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: string;
}

export function GlowOrb({ className, style, delay }: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full pointer-events-none blur-[80px] animate-glow-pulse",
        className,
      )}
      style={{ animationDelay: delay, ...style }}
    />
  );
}
