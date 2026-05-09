import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  items: readonly string[];
  featured?: boolean;
  disabled?: boolean;
  ctaLabel: string;
  ctaVariant?: "brand" | "brand-outline";
  ctaHref?: string;
}

export function PlanCard({
  name,
  price,
  period,
  items,
  featured,
  disabled,
  ctaLabel,
  ctaVariant = "brand-outline",
  ctaHref,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "relative bg-card rounded-[14px] p-9",
        featured
          ? "border border-brand shadow-[0_0_0_1px_var(--brand-d),0_0_48px_var(--brand-glow)]"
          : "border border-border-mid",
      )}
    >
      {featured && (
        <span className="absolute -top-2.75 left-1/2 -translate-x-1/2 bg-[linear-gradient(135deg,var(--brand-d),var(--brand-l))] text-white text-[10px] font-bold font-mono px-3 py-0.75 rounded-full tracking-[0.06em] uppercase whitespace-nowrap">
          Most Popular
        </span>
      )}

      <p
        className={cn(
          "font-mono text-[12px] font-semibold tracking-[0.08em] uppercase mb-2.5",
          featured ? "text-brand-l" : "text-fg-subtle",
        )}
      >
        {name}
      </p>
      <p className="text-[44px] font-extrabold tracking-[-0.04em] leading-none mb-0.5">
        {price}
      </p>
      <p className="text-[12px] text-fg-subtle mb-7">{period}</p>

      <ul className="flex flex-col gap-2.75 mb-7 list-none p-0">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-[14px] text-muted-foreground"
          >
            <span className="text-success-l font-bold shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <Button variant={ctaVariant} size="xl" className="w-full" disabled={disabled} asChild={!!ctaHref && !disabled}>
        {ctaHref && !disabled ? (
          <Link href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </Link>
        ) : disabled ? "Coming soon" : ctaLabel}
      </Button>
    </div>
  );
}
