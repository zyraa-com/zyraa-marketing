"use client";

import { NAV_LINKS } from "@/lib/constants";

export function NavLinks() {
  function handleClick(href: string) {
    if (!href.startsWith("#")) return;
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul className="hidden md:flex gap-7.5 list-none m-0 p-0">
      {NAV_LINKS.map((link) => (
        <li key={link.label}>
          <button
            type="button"
            onClick={() => handleClick(link.href)}
            className="text-[14px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0 font-sans"
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
