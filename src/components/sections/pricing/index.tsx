import { SectionHeader } from "@/components/shared/section-header";
import {
  ENTERPRISE_CALENDLY_URL,
  ENTERPRISE_PLAN_ITEMS,
  FREE_PLAN_ITEMS,
  PRO_PLAN_ITEMS,
} from "@/lib/constants";
import { PlanCard } from "./plan-card";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="px-6 md:px-12 py-24 max-w-300 mx-auto w-full"
    >
      <SectionHeader
        label="Pricing"
        title="Simple, honest pricing."
        sub="Start for free. Upgrade when you need unlimited builds."
      />

      <div className="mt-13 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-290">
        <PlanCard
          name="Free"
          price="$0"
          period="No credit card required"
          items={FREE_PLAN_ITEMS}
          featured
          ctaLabel="Get started free"
          ctaVariant="brand-outline"
        />
        <PlanCard
          name="Pro"
          price="$20"
          period="Billed monthly · cancel anytime"
          items={PRO_PLAN_ITEMS}
          disabled
          ctaLabel="Upgrade to Pro"
          ctaVariant="brand"
        />
        <PlanCard
          name="Enterprise"
          price="Custom"
          period="Tailored to your team"
          items={ENTERPRISE_PLAN_ITEMS}
          ctaLabel="Book a call"
          ctaVariant="brand-outline"
          ctaHref={ENTERPRISE_CALENDLY_URL}
        />
      </div>
    </section>
  );
}
