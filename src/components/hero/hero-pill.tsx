export function HeroPill() {
  return (
    <div className="relative z-1 inline-flex items-center gap-2 bg-card border border-border-mid rounded-full px-2 py-1.25 pr-3.5 text-[13px] text-muted-foreground mb-7 animate-[fade-in_0.6s_ease_both]">
      <span className="size-1.75 bg-success-l rounded-full shadow-[0_0_6px_var(--success-glow)] animate-pulse shrink-0" />
      Now in beta &nbsp;·&nbsp;{" "}
      <span className="text-foreground font-medium">v0.1.0</span>
      &nbsp;·&nbsp;{" "}
      <span className="text-brand-l font-medium">Free during beta →</span>
    </div>
  );
}
