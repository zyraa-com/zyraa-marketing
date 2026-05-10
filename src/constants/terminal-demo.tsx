export const TERMINAL_LINES = [
  {
    delayClass: "[animation-delay:0.3s]",
    content: (
      <>
        <span className="text-success-l font-bold">✓</span>{" "}
        <span className="text-muted-foreground">built </span>
        todo app with auth
        <span className="text-fg-subtle"> · 14 files · 18.4s</span>
      </>
    ),
  },
  {
    delayClass: "[animation-delay:0.8s]",
    topBorder: true,
    content: (
      <>
        <span className="text-brand animate-pulse">○</span>{" "}
        <span className="text-brand-l">Detecting framework…</span>
        <span className="text-fg-subtle"> nextjs · SSR required</span>
      </>
    ),
  },
  {
    delayClass: "[animation-delay:1.3s]",
    content: (
      <>
        <span className="text-success-l font-bold">✓</span>
        <span className="text-muted-foreground"> scaffolded · 0.9s</span>
      </>
    ),
  },
  {
    delayClass: "[animation-delay:1.8s]",
    content: (
      <>
        <span className="text-brand animate-pulse">○</span>{" "}
        <span className="text-brand-l">Writing files…</span>
        <span className="text-fg-subtle"> src/app/dashboard/page.tsx</span>
      </>
    ),
  },
] as const;
