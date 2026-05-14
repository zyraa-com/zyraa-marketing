"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { toggle } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-8.5 rounded-lg shrink-0 cursor-pointer"
      onClick={toggle}
    >
      <Sun className="size-3.75 dark:hidden" />
      <Moon className="size-3.75 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
