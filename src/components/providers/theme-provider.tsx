"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useCookieThemeSync } from "@/hooks/useCookieThemeSync";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useCookieThemeSync();
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
