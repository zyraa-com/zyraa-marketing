import { SectionHeader } from "@/components/shared/section-header";
import { FEATURES } from "@/lib/constants";
import { FeatureCard } from "./feature-card";

export function Features() {
  return (
    <section
      id="features"
      className="px-6 md:px-12 py-24 max-w-300 mx-auto w-full"
    >
      <SectionHeader
        label="Features"
        title={
          <>
            Built for developers
            <br />
            who move fast.
          </>
        }
        sub="No boilerplate. No context switching. Just complete applications from your terminal."
      />

      <div className="mt-13 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-[14px] overflow-hidden">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
