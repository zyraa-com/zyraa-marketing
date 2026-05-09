import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

const authUrl = process.env.NEXT_PUBLIC_AUTH_URL ?? "http://localhost:3001";

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
          <a href={`${authUrl}/login`}>Sign in</a>
        </Button>
        <Button variant="brand" size="sm" asChild>
          <a href={`${authUrl}/register`}>Get started</a>
        </Button>
        <MobileMenu />
      </div>
    </nav>
  );
}
