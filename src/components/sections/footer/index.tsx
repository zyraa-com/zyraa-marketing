import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-13 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <span className="font-sans font-extrabold tracking-[-0.03em] leading-none text-[18px]">
        <span className="text-brand-l">Z</span>
        <span className="text-foreground">yraa</span>
      </span>

      <ul className="flex gap-6 list-none p-0 m-0">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[13px] text-fg-subtle hover:text-muted-foreground transition-colors no-underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="font-mono text-[12px] text-fg-subtle">
        © {new Date().getFullYear()} Zyraa
      </p>
    </footer>
  );
}
