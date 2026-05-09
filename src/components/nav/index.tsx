import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

import { AUTH_URL } from "@/lib/env";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-15 flex items-center justify-between px-6 md:px-13 bg-background/80 backdrop-blur-[20px] border-b border-border">
      <Logo />
      <NavLinks />
      <div className="flex gap-2.5 items-center">
        <ThemeToggle />
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:inline-flex"
          asChild
        >
          <Link href={`${AUTH_URL}/login`}>Sign in</Link>
        </Button>
        <Button variant="brand" size="sm" asChild>
          <Link href={`${AUTH_URL}/register`}>Get started</Link>
        </Button>
        <MobileMenu />
      </div>
    </nav>
  );
}
