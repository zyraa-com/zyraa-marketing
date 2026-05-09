import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline">
      <span className="font-sans font-extrabold tracking-[-0.03em] leading-none text-[18px]">
        <span className="text-brand-l">Z</span>
        <span className="text-foreground">yraa</span>
      </span>
    </Link>
  );
}
