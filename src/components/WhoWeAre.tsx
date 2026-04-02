export default function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Who We Are
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">
              Engineering Purpose-Driven
              <br />
              Mobile Spaces
            </h2>
            <p className="text-dark-light text-lg leading-relaxed mb-6">
              Headquartered in California, Spring Le Tour is a forward-thinking
              design and manufacturing firm specializing in high-quality,
              turn-key mobile solutions. We don&apos;t just build vehicles — we
              engineer purpose-driven mobile spaces designed to move your
              lifestyle or business forward.
            </p>
            <p className="text-dark-light text-lg leading-relaxed mb-8">
              By bridging cutting-edge California industrial design with the
              unmatched efficiency of our vertically integrated global supply
              chain, we deliver commercial-grade, aesthetically stunning mobile
              spaces at a fraction of the cost and lead time of traditional
              builders.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary">
                  2025
                </p>
                <p className="text-sm text-dark-light mt-1">Established</p>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary">
                  CA
                </p>
                <p className="text-sm text-dark-light mt-1">Based in California</p>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary">
                  B2B
                </p>
                <p className="text-sm text-dark-light mt-1">Dealer Focused</p>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-bg-alt rounded-2xl aspect-[4/3] flex items-center justify-center border border-primary/10">
            <div className="text-center text-dark-light/50">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
              <p className="text-sm">Company / Facility Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
