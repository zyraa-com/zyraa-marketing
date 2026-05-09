import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { CtaBand } from "@/components/sections/cta-band";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Divider } from "@/components/shared/divider";
import { TerminalDemo } from "@/components/terminal/terminal-demo";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="px-6 md:px-12 pb-24 max-w-300 mx-auto w-full">
          <TerminalDemo className="animate-float" />
        </div>
        <Divider />
        <HowItWorks />
        <Divider />
        <Features />
        <Divider />
        <Divider />
        <Pricing />
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}
