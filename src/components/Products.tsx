const foundationFeatures = [
  {
    title: "Structure & Surfaces",
    items: [
      "Durable Flooring & Ceiling Panels",
      "Marine-Grade Materials",
      "Premium 4-Season Insulation",
    ],
  },
  {
    title: "Mounting System",
    items: [
      "Integrated L-Track System",
      "Secure Cargo Management",
      "Modular Furniture Attachment",
    ],
  },
  {
    title: "Rapid Build-Out",
    items: [
      "Pre-Cut & Pre-Drilled Components",
      "Streamlined Assembly Process",
      "Designed for Rapid Installation",
    ],
  },
  {
    title: "Customization",
    items: [
      "Custom Colors & Finishes",
      "Multiple Fabric & Laminate Options",
      "Tailored to Your Aesthetic",
    ],
  },
];

const deluxeFeatures = [
  {
    title: "Off-Grid Power & Utilities",
    items: [
      "Robust 4 kWh Battery System",
      "Solar Panels & Inverter",
      "25-Gallon Fresh Water (Hot & Cold)",
    ],
  },
  {
    title: "Kitchen Amenities",
    items: [
      "Refrigerator",
      "Built-in Microwave",
      "Kitchen Sink with High-Arc Faucet",
    ],
  },
  {
    title: "Comfort & Climate",
    items: [
      "Air Conditioning & Heater",
      "Indoor Bathroom with Shower",
      "Private Toilet",
    ],
  },
  {
    title: "Living & Outdoor",
    items: [
      "Comfortable Sleeping for Two",
      "Convertible Seating & Bed System",
      "Manual Awning for Outdoor Shade",
    ],
  },
];

function ProductCard({
  badge,
  name,
  subtitle,
  description,
  features,
  cta,
  featured,
}: {
  badge: string;
  name: string;
  subtitle: string;
  description: string;
  features: { title: string; items: string[] }[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 sm:p-10 flex flex-col h-full ${
        featured
          ? "bg-dark text-white ring-2 ring-primary"
          : "bg-white ring-1 ring-dark/10"
      }`}
    >
      {/* Badge */}
      <span
        className={`inline-block self-start text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6 ${
          featured
            ? "bg-primary text-white"
            : "bg-primary/10 text-primary"
        }`}
      >
        {badge}
      </span>

      {/* Header */}
      <h3
        className={`font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold mb-2 ${
          featured ? "text-white" : "text-dark"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-lg mb-4 ${
          featured ? "text-primary-light" : "text-primary"
        }`}
      >
        {subtitle}
      </p>
      <p
        className={`mb-8 leading-relaxed ${
          featured ? "text-white/70" : "text-dark-light"
        }`}
      >
        {description}
      </p>

      {/* Features grid */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8 flex-1">
        {features.map((group) => (
          <div key={group.title}>
            <h4
              className={`font-semibold text-sm tracking-wide uppercase mb-3 ${
                featured ? "text-accent-light" : "text-accent"
              }`}
            >
              {group.title}
            </h4>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`text-sm flex items-start gap-2 ${
                    featured ? "text-white/70" : "text-dark-light"
                  }`}
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">
                    &bull;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className={`block text-center py-3.5 rounded-full font-medium transition-colors ${
          featured
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-dark text-white hover:bg-dark-light"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Our Products
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-dark mb-4">
            The &ldquo;Avocado&rdquo; Mercedes 144 High Roof Series
          </h2>
          <p className="text-dark-light text-lg max-w-2xl mx-auto">
            Two tiers designed to meet you where you are — whether you&apos;re
            building from the ground up or ready to hit the road today.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          <ProductCard
            badge="Base Build"
            name="The 144 Foundation Package"
            subtitle="The Essential Kit for Custom Builders"
            description="The professional-grade core structure for a rapid and flexible build-out. We've handled insulation, sub-flooring, and wall paneling — so you can focus on bringing your unique layout to life."
            features={foundationFeatures}
            cta="Start Building Today"
          />
          <ProductCard
            badge="Turn-Key Ready"
            name="The 144 Deluxe Build"
            subtitle="The Ultimate Turn-Key Adventure Vehicle"
            description="Our market-proven, all-inclusive camper van built upon the Foundation Kit. Fully equipped and rigorously tested — ready to generate revenue or hit the road the moment you receive the keys."
            features={deluxeFeatures}
            cta="Ready to Hit the Road?"
            featured
          />
        </div>

        {/* Pricing note */}
        <p className="text-center text-dark-light/60 text-sm mt-8">
          Pricing available upon request. Contact us for a custom quote.
        </p>
      </div>
    </section>
  );
}
