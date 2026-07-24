import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Mobile Grooming Van",
    label: "For Groomers",
    href: "/grooming",
    image: "/images/demo/grooming-demo-branded-front-card.webp",
    alt: "Spring Le Tour mobile grooming van shown with an example pet-wash brand wrap, front three-quarter view",
    badge: "California Demo",
    body: "A ready-to-work salon path for groomers who want to start taking appointments faster.",
    cta: "Explore Grooming Vans",
    fit: "cover",
    position: "object-[50%_50%]",
  },
  {
    title: "Camper Van",
    label: "For Travel, Rental, And DIY Builds",
    href: "/camper",
    image: "/images/deluxe-interior.jpg",
    alt: "Spring Le Tour finished camper van interior",
    badge: null,
    body: "A flexible adventure platform, from foundation kit to modular build to turn-key cabin.",
    cta: "Explore Camper Builds",
    fit: "cover",
    position: "",
  },
];

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            What We Build
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-dark mb-4">
            Choose Your Vehicle Path
          </h2>
          <p className="text-dark-light text-lg max-w-2xl mx-auto">
            Start with the path that matches your plan: a revenue-ready grooming
            van or a flexible camper platform for travel, rental, and DIY
            build-outs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group rounded-2xl border border-dark/5 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-bg-alt">
                <div className={`absolute overflow-hidden ${product.fit === "contain" ? "inset-4 rounded-lg sm:inset-5" : "inset-0 rounded-xl"}`}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`${product.fit === "contain" ? "object-contain" : "object-cover"} ${product.position ?? ""} transition-transform duration-500 group-hover:scale-[1.03]`}
                  />
                </div>
                {product.badge ? (
                  <span className="absolute left-4 top-4 rounded-full bg-dark/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <div className="px-5 py-6 sm:px-5 sm:py-7">
                <p className="text-primary font-semibold tracking-wide uppercase text-sm">
                  {product.label}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] mt-3 text-2xl sm:text-3xl font-bold text-dark">
                  {product.title}
                </h3>
                <p className="mt-3 text-dark-light leading-relaxed">
                  {product.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                  {product.cta}
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
