import { TERMINAL_LINES } from "@/constants/terminal-demo";
import { cn } from "@/lib/utils";
import { TerminalWindow } from "./terminal-window";

interface TerminalDemoProps {
  className?: string;
}

export function TerminalDemo({ className }: TerminalDemoProps) {
  return (
    <TerminalWindow className={cn(className)}>
      <div className="flex items-center justify-between border border-brand rounded-md px-3.25 py-1.75 mb-3.5 shadow-[0_0_20px_rgba(217,114,24,0.08)]">
        <span>
          <span className="text-brand-l font-bold">Z&nbsp;&nbsp;Zyraa</span>
          <span className="text-muted-foreground text-xs">
            {" "}
            · AI-powered full-stack builder
          </span>
        </span>
        <span className="text-muted-foreground text-xs">v0.1.0</span>
      </div>

      {TERMINAL_LINES.map((line) => (
        <div
          key={line.delayClass}
          className={cn(
            "opacity-0 animate-slide-in",
            line.delayClass,
            "topBorder" in line && "border-t border-border mt-2 pt-2",
          )}
        >
          {line.content}
        </div>
      ))}

      <div className="opacity-0 animate-slide-in mt-2.5 [animation-delay:2.3s]">
        <div className="flex items-center gap-2.5 border border-border-mid rounded-md px-3.25 py-2">
          <span className="text-brand font-bold">❯</span>
          <span className="text-muted-foreground">
            describe your next change
          </span>
          <span className="text-brand animate-cursor-blink">▌</span>
        </div>
        <div className="text-fg-subtle text-[11px] mt-1.5 pl-0.5">
          describe your next change · enter to continue · ctrl+c to exit
        </div>
      </div>
    </TerminalWindow>
  );
}
