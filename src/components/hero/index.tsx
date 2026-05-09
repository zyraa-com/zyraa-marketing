import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { HeroBgGrid } from "./hero-bg-grid";
import { HeroCmd } from "./hero-cmd";
import { HeroPill } from "./hero-pill";
import { HeroStats } from "./hero-stats";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-30 pb-20 text-center overflow-hidden">
      <HeroBgGrid />

      <GlowOrb
        className="w-[min(780px,100vw)] h-115 -top-30 left-1/2 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(217,114,24,0.16) 0%, transparent 70%)",
        }}
      />
      <GlowOrb
        className="w-85 h-85 bottom-15 left-[8%]"
        delay="2s"
        style={{
          background:
            "radial-gradient(ellipse, rgba(240,146,42,0.06) 0%, transparent 70%)",
        }}
      />
      <GlowOrb
        className="w-75 h-75 bottom-10 right-[6%]"
        delay="1s"
        style={{
          background:
            "radial-gradient(ellipse, rgba(217,114,24,0.09) 0%, transparent 70%)",
        }}
      />

      <HeroPill />

      <h1 className="relative z-1 text-[clamp(38px,6vw,74px)] font-extrabold tracking-[-0.035em] leading-[1.05] mb-5.5 max-w-230 animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
        Build full-stack apps
        <br />
        from your{" "}
        <span className="text-brand-l [text-shadow:0_0_48px_var(--brand-glow)]">
          terminal.
        </span>
      </h1>

      <p className="relative z-1 text-[18px] text-muted-foreground leading-[1.65] max-w-130 mb-9 animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.22s_both]">
        Type a prompt. Zyra picks the stack, generates every file, and installs
        dependencies — without leaving your terminal.
      </p>

      <div className="relative z-1 flex gap-3 justify-center flex-wrap mb-13 animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.36s_both]">
        <Button variant="brand" size="xl">
          Get started free
        </Button>
        <Button variant="outline" size="xl" asChild>
          <a href="#how">See how it works</a>
        </Button>
      </div>

      <div className="relative z-1 animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
        <HeroCmd />
      </div>

      <HeroStats />
    </section>
  );
}
