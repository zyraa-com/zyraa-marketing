import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

export function FeatureCard({ icon: Icon, title, body }: FeatureCardProps) {
  return (
    <div className="group relative bg-card p-8 transition-colors hover:bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,114,24,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="mb-3.5">
        <Icon className="size-5 text-brand-l" />
      </div>
      <h3 className="text-[16px] font-bold mb-1.5">{title}</h3>
      <p className="text-[14px] text-muted-foreground leading-[1.6]">{body}</p>
    </div>
  );
}
