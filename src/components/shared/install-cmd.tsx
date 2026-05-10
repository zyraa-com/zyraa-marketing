"use client";

import { Check, Copy } from "lucide-react";
import { CLI_INSTALL_CMD } from "@/lib/constants";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useGlintEffect } from "@/hooks/useGlintEffect";

export function InstallCmd() {
  const { copied, copy } = useCopyToClipboard();
  const { wrapRef, glintRef, onMouseMove, onMouseEnter, onMouseLeave } =
    useGlintEffect();

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative inline-flex items-center gap-3 overflow-hidden rounded-[10px] border border-white/4 bg-white/1.5 backdrop-blur-xl px-5.5 py-3 font-mono text-[13px] shadow-[0_0_0_1px_rgba(255,255,255,0.01)_inset] transition-colors duration-300 cursor-pointer animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/1.5 to-transparent"
      />

      <div
        ref={glintRef}
        aria-hidden
        className="pointer-events-none absolute inset-y-[-140%] w-85 opacity-0 rotate-24 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.02)_30%,rgba(255,255,255,0.075)_50%,rgba(255,255,255,0.02)_70%,transparent_100%)] blur-[42px] mix-blend-soft-light will-change-[left,opacity]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
      />

      <span className="relative z-10 font-bold text-brand">$</span>

      <span className="relative z-10 text-foreground">{CLI_INSTALL_CMD}</span>

      <button
        type="button"
        onClick={() => copy(CLI_INSTALL_CMD)}
        className="relative z-10 ml-1 flex size-6 items-center justify-center rounded-md text-fg-subtle transition-all duration-200 hover:bg-white/4 hover:text-foreground"
        aria-label="Copy install command"
      >
        {copied ? (
          <Check className="size-3.5 text-success-l" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );
}
