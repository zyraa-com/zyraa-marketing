import { SectionHeader } from "@/components/shared/section-header";
import { STEPS } from "@/lib/constants";
import { StepCard } from "./step-card";

export function HowItWorks() {
  return (
    <section id="how" className="px-6 md:px-12 py-24 max-w-300 mx-auto w-full">
      <SectionHeader
        label="How it works"
        title={
          <>
            From prompt to production
            <br />
            in under a minute.
          </>
        }
        sub="Zyra handles the full scaffolding pipeline so you focus on what matters."
      />

      <div className="mt-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
        {STEPS.map((step) => (
          <StepCard key={step.num} {...step} />
        ))}
      </div>
    </section>
  );
}
