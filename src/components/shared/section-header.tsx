import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  sub,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(className)}>
      <p className="font-mono text-[11px] font-semibold text-brand-l tracking-widest uppercase mb-3.5">
        {label}
      </p>
      <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-3.5">
        {title}
      </h2>
      {sub && (
        <p className="text-[17px] text-muted-foreground leading-[1.65] max-w-135">
          {sub}
        </p>
      )}
    </div>
  );
}
