"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CLI_INSTALL_CMD } from "@/lib/constants";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function InstallCmd() {
  const [copied, setCopied] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const state = useRef({
    x: 0.5,
    tx: 0.5,
    hover: 0,
    thover: 0,
  });

  useEffect(() => {
    const tick = () => {
      const s = state.current;

      s.x = lerp(s.x, s.tx, 0.09);
      s.hover = lerp(s.hover, s.thover, 0.08);

      if (glintRef.current) {
        const left = s.x * 115 - 92;

        const falloff = Math.max(
          0,
          1 - Math.pow(Math.abs(s.x - 0.5) * 1.65, 2),
        );

        const opacity = s.hover * falloff * 0.68;

        glintRef.current.style.left = `${left}%`;
        glintRef.current.style.opacity = `${opacity}`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();

    if (!rect) return;

    state.current.tx = (e.clientX - rect.left) / rect.width;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CLI_INSTALL_CMD);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        state.current.thover = 1;
      }}
      onMouseLeave={() => {
        state.current.thover = 0;
      }}
      className="
        relative
        inline-flex
        items-center
        gap-3
        overflow-hidden
        rounded-[10px]
        border border-white/[0.04]
        bg-white/[0.015]
        backdrop-blur-xl
        px-5.5
        py-3
        font-mono
        text-[13px]
        shadow-[0_0_0_1px_rgba(255,255,255,0.01)_inset]
        transition-colors
        duration-300
        cursor-pointer
        animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]
      "
    >
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/[0.015]
          to-transparent
        "
      />

      <div
        ref={glintRef}
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-y-[-140%]
          w-[340px]
        "
        style={{
          opacity: 0,
          transform: "rotate(24deg)",
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.02) 30%,
              rgba(255,255,255,0.075) 50%,
              rgba(255,255,255,0.02) 70%,
              transparent 100%
            )
          `,
          filter: "blur(42px)",
          mixBlendMode: "soft-light",
          willChange: "left, opacity",
        }}
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[10px]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]
        "
      />

      <span className="relative z-10 font-bold text-brand">$</span>

      <span className="relative z-10 text-foreground">{CLI_INSTALL_CMD}</span>

      <button
        type="button"
        onClick={handleCopy}
        className="
          relative
          z-10
          ml-1
          flex
          size-6
          items-center
          justify-center
          rounded-md
          text-fg-subtle
          transition-all
          duration-200
          hover:bg-white/[0.04]
          hover:text-foreground
        "
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
