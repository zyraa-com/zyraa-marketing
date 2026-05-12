import Link from "next/link";
import { InstallCmd } from "@/components/shared/install-cmd";
import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { AUTH_URL } from "@/lib/env";

export function CtaBand() {
  return (
    <div className="mx-4 md:mx-12 mb-24 px-6 md:px-16 py-18 bg-card border border-border-mid rounded-[18px] text-center relative overflow-hidden">
      <GlowOrb className="w-175 h-50 -bottom-20 left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(217,114,24,0.18),transparent_70%)]" />
      <GlowOrb
        className="w-75 h-50 -top-15 left-[10%] bg-[radial-gradient(ellipse,rgba(217,114,24,0.05),transparent_70%)]"
        delayClass="[animation-delay:1.5s]"
      />

      <h2 className="relative text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-3.5">
        Stop writing boilerplate.
        <br />
        Start{" "}
        <span className="text-brand-l [text-shadow:0_0_48px_var(--brand-glow)]">
          shipping
        </span>{" "}
        products.
      </h2>
      <p className="relative text-[17px] text-muted-foreground mb-9">
        Install Zyra in seconds and generate your first complete app in under a
        minute.
      </p>

      <div className="relative flex gap-3 justify-center flex-wrap mb-9">
        <Button variant="brand" size="xl" asChild>
          <Link href={`${AUTH_URL}/register`}>Get started free</Link>
        </Button>
        {/* <Button variant="outline" size="xl">
          View docs
        </Button> */}
      </div>

      <InstallCmd />
    </div>
  );
}
