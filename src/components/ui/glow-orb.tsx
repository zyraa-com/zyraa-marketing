import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  delayClass?: string;
}

export function GlowOrb({ className, delayClass }: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full pointer-events-none blur-[80px] animate-glow-pulse",
        delayClass,
        className,
      )}
    />
  );
}
