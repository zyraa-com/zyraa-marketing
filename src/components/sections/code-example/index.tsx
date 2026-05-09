import { SectionHeader } from "@/components/shared/section-header";

export function CodeExample() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-300 mx-auto w-full">
      <SectionHeader
        label="In practice"
        title={
          <>
            One prompt.
            <br />A complete application.
          </>
        }
        sub="Zyra generates every file — pages, APIs, auth, billing — in one shot."
      />

      <div className="mt-12 bg-card border border-border-mid rounded-xl overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 py-3 bg-surface border-b border-border">
          <span className="size-2.75 rounded-full bg-[#FF5F57]" />
          <span className="size-2.75 rounded-full bg-[#FFBD2E]" />
          <span className="size-2.75 rounded-full bg-[#28CA41]" />
          <span className="font-mono text-[11px] text-fg-subtle ml-2">
            terminal
          </span>
        </div>

        <div className="p-6 md:p-7 font-mono text-[13px] leading-[2.1] overflow-x-auto">
          <div>
            <span className="text-brand font-bold">$</span>{" "}
            <span className="text-foreground font-semibold">
              zyra &quot;Build a SaaS dashboard with auth, user management, and
              Stripe billing&quot;
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">detecting</span>
            <span className="text-fg-subtle">
              {" "}
              · nextjs · SSR required for auth session management · 0.6s
            </span>
          </div>
          <div>
            <span className="text-success-l font-bold">✓</span>
            <span className="text-muted-foreground"> scaffolded · 0.9s</span>
          </div>
          <div>
            <span className="text-muted-foreground">writing</span>
            <span className="text-fg-subtle"> · src/app/layout.tsx</span>
          </div>
          <div>
            <span className="text-muted-foreground">writing</span>
            <span className="text-fg-subtle">
              {" "}
              · src/app/dashboard/page.tsx
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">writing</span>
            <span className="text-fg-subtle">
              {" "}
              · src/app/api/stripe/webhook/route.ts
            </span>
          </div>
          <div className="text-fg-subtle">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; · · · 20 more
            files
          </div>
          <div>
            <span className="text-success-l font-bold">✓</span>
            <span className="text-muted-foreground">
              {" "}
              23 files generated · 11.2s
            </span>
          </div>
          <div>
            <span className="text-success-l font-bold">✓</span>
            <span className="text-muted-foreground">
              {" "}
              dependencies installed · 14.8s
            </span>
          </div>
          <div>
            <span className="text-success-l font-bold">✓ Build complete</span>
            <span className="text-muted-foreground"> · 26.1s total</span>
          </div>
          <div className="mt-2.5">
            <span className="text-brand font-bold">$</span>{" "}
            <span className="text-foreground font-semibold">pnpm dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}
