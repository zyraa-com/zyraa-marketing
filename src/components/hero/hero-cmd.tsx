export function HeroCmd() {
  return (
    <div className="inline-flex items-center gap-2.5 bg-card border border-border-mid rounded-lg px-5 py-3 font-mono text-[13px] animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
      <span className="text-brand font-bold">$</span>
      <span className="text-foreground">npm install -g zyra-cli</span>
    </div>
  );
}
