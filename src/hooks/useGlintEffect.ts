"use client";

import { useEffect, useRef } from "react";
import { lerp } from "@/lib/math";

export function useGlintEffect() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const state = useRef({ x: 0.5, tx: 0.5, hover: 0, thover: 0 });

  useEffect(() => {
    const tick = () => {
      const s = state.current;
      s.x = lerp(s.x, s.tx, 0.09);
      s.hover = lerp(s.hover, s.thover, 0.08);

      if (glintRef.current) {
        const left = s.x * 115 - 92;
        const falloff = Math.max(0, 1 - Math.pow(Math.abs(s.x - 0.5) * 1.65, 2));
        glintRef.current.style.left = `${left}%`;
        glintRef.current.style.opacity = `${s.hover * falloff * 0.68}`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    state.current.tx = (e.clientX - rect.left) / rect.width;
  };

  const onMouseEnter = () => {
    state.current.thover = 1;
  };

  const onMouseLeave = () => {
    state.current.thover = 0;
  };

  return { wrapRef, glintRef, onMouseMove, onMouseEnter, onMouseLeave };
}
