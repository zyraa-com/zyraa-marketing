"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-8.5 rounded-lg shrink-0 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-3.75 rotate-0 scale-100 opacity-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <Moon className="absolute size-3.75 rotate-90 scale-0 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
