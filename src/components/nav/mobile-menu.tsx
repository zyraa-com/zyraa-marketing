"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  function handleClick(href: string) {
    setOpen(false);
    if (!href.startsWith("#")) return;
    setTimeout(() => {
      document
        .getElementById(href.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="size-8.5 rounded-lg"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
        <span className="sr-only">Menu</span>
      </Button>

      <div
        className={cn(
          "absolute top-15 left-0 right-0 bg-background/95 backdrop-blur-[20px] border-b border-border px-6 py-4 flex flex-col gap-1 transition-all duration-200",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            type="button"
            onClick={() => handleClick(link.href)}
            className="text-[15px] text-muted-foreground hover:text-foreground transition-colors text-left py-2.5 bg-transparent border-none font-sans cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}
