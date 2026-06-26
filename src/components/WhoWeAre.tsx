import Image from "next/image";

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
              turn-key mobile solutions. We don&apos;t just build vehicles. We
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
                <p className="text-sm text-dark-light mt-1">Operator Focused</p>
              </div>
            </div>
          </div>

          {/* Lifestyle photo */}
          <div className="relative rounded-2xl aspect-[4/3] overflow-hidden border border-primary/10">
            <Image
              src="/images/lifestyle-twilight.jpg"
              alt="Spring Le Tour van at twilight campsite"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
