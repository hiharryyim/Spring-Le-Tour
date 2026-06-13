import ModelStrip from "@/components/ModelStrip";
import DemoShowcase from "@/components/DemoShowcase";
import { demos } from "@/data/solutions";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            What We Build
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-dark mb-4">
            Modular Mobile Business Solutions
          </h2>
          <p className="text-dark-light text-lg max-w-2xl mx-auto">
            We give you a proven platform and a clear big direction, and you
            customize within it. Modular kits scale from a professional
            foundation all the way to a turn-key, revenue-ready vehicle,
            assembled in California.
          </p>
        </div>

        {/* The modular model, explained once */}
        <ModelStrip />

        {/* Two demos prove one platform */}
        <div className="text-center mb-10">
          <p className="text-accent font-medium tracking-wide uppercase text-sm">
            One Platform, Proven Across Industries
          </p>
        </div>
        <DemoShowcase demos={demos} />
      </div>
    </section>
  );
}
