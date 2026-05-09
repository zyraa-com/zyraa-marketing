import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-13 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <Logo />

      <ul className="flex gap-6 list-none p-0 m-0">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13px] text-fg-subtle hover:text-muted-foreground transition-colors no-underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="font-mono text-[12px] text-fg-subtle">
        © {new Date().getFullYear()} Zyraa
      </p>
    </footer>
  );
}
