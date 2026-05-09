"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { CLI_INSTALL_CMD } from "@/lib/constants";

export function InstallCmd() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CLI_INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-flex items-center gap-3 bg-surface border border-border-mid rounded-[9px] px-5.5 py-3 font-mono text-[13px] animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
      <span className="text-brand font-bold">$</span>
      <span className="text-foreground">{CLI_INSTALL_CMD}</span>
      <button
        type="button"
        onClick={handleCopy}
        className="ml-1 flex items-center justify-center size-6 rounded-md text-fg-subtle hover:text-foreground hover:bg-border transition-all cursor-pointer"
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
