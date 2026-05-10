"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;

function writeCookie(value: string) {
  const domain = COOKIE_DOMAIN ? `;Domain=${COOKIE_DOMAIN}` : "";
  document.cookie = `zyraa-theme=${value};path=/${domain};max-age=31536000;SameSite=Lax`;
}

export function useCookieThemeSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === "light" || resolvedTheme === "dark") {
      writeCookie(resolvedTheme);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);
}
