import type { LucideIcon } from "lucide-react";

interface StepCardProps {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

export function StepCard({ num, icon: Icon, title, body }: StepCardProps) {
  return (
    <div className="group relative bg-card px-8 py-9 transition-colors hover:bg-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <p className="font-mono text-[11px] font-semibold text-fg-subtle tracking-[0.08em] uppercase mb-4.5">
        {num}
      </p>
      <div className="mb-3.5">
        <Icon className="size-7 text-brand-l" />
      </div>
      <h3 className="text-[18px] font-bold mb-2">{title}</h3>
      <p className="text-[14px] text-muted-foreground leading-[1.6]">{body}</p>
    </div>
  );
}
