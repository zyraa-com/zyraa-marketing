import { Fragment } from "react";
import { HERO_STATS } from "@/lib/constants";

export function HeroStats() {
  return (
    <div className="relative z-1 flex flex-wrap gap-x-12 gap-y-6 justify-center items-center mt-14 pt-7 border-t border-border max-w-170 w-full animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.65s_both]">
      {HERO_STATS.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && (
            <span className="hidden sm:block w-px h-7.5 bg-border shrink-0" />
          )}
          <div className="text-center">
            <div className="text-[22px] font-extrabold tracking-tight leading-none text-foreground">
              {stat.prefix && (
                <em className="not-italic text-brand-l">{stat.prefix}</em>
              )}
              {stat.num}
              {stat.suffix && (
                <em className="not-italic text-brand-l">{stat.suffix}</em>
              )}
            </div>
            <div className="font-mono text-[10px] text-fg-subtle tracking-[0.08em] uppercase mt-1.75">
              {stat.label}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
