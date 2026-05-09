import { SectionHeader } from "@/components/shared/section-header";
import { FREE_PLAN_ITEMS, PRO_PLAN_ITEMS } from "@/lib/constants";
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

      <div className="mt-13 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-190">
        <PlanCard
          name="Free"
          price="$0"
          period="No credit card required"
          items={FREE_PLAN_ITEMS}
          ctaLabel="Get started free"
          ctaVariant="brand-outline"
        />
        <PlanCard
          name="Pro"
          price="$20"
          period="Billed monthly · cancel anytime"
          items={PRO_PLAN_ITEMS}
          featured
          ctaLabel="Upgrade to Pro"
          ctaVariant="brand"
        />
      </div>
    </section>
  );
}
