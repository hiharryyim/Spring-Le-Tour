import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/images/hero-desert.jpg"
        alt="Spring Le Tour Sprinter Van in the desert"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src="/images/logo-circle.png"
          alt="Spring Le Tour"
          width={120}
          height={120}
          className="mx-auto mb-8 opacity-90"
          priority
        />
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Mobilizing Your Vision.
          <br />
          <span className="text-primary-light">Empowering Your Business.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium turn-key mobile solutions — engineered in California, built to
          move.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Explore Our Solutions
          </a>
          <a
            href="#about"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
