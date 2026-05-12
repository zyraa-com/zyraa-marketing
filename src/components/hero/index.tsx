import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { AUTH_URL } from "@/lib/env";
import { InstallCmd } from "../shared/install-cmd";
import { HeroBgGrid } from "./hero-bg-grid";
import { HeroPill } from "./hero-pill";
import { HeroStats } from "./hero-stats";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-30 pb-20 text-center overflow-hidden">
      <HeroBgGrid />

      <GlowOrb className="w-[min(780px,100vw)] h-115 -top-30 left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(217,114,24,0.16)_0%,transparent_70%)]" />
      <GlowOrb
        className="w-85 h-85 bottom-15 left-[8%] bg-[radial-gradient(ellipse,rgba(240,146,42,0.06)_0%,transparent_70%)]"
        delayClass="[animation-delay:2s]"
      />
      <GlowOrb
        className="w-75 h-75 bottom-10 right-[6%] bg-[radial-gradient(ellipse,rgba(217,114,24,0.09)_0%,transparent_70%)]"
        delayClass="[animation-delay:1s]"
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
        dependencies - without leaving your terminal.
      </p>

      <div className="relative z-1 flex gap-3 justify-center flex-wrap mb-13 animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.36s_both]">
        <Button variant="brand" size="xl" asChild>
          <Link href={`${AUTH_URL}/register`}>Get started free</Link>
        </Button>
        <Button variant="outline" size="xl" asChild>
          <Link href="#how">See how it works</Link>
        </Button>
      </div>

      <div className="relative z-1 animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
        <InstallCmd />
      </div>

      <HeroStats />
    </section>
  );
}
