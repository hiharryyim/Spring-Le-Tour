import Image from "next/image";
import type { DemoLine } from "@/data/solutions";

const icons: Record<string, React.ReactNode> = {
  power: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  ),
  water: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a6.75 6.75 0 01-6.75-6.75c0-4.5 6.75-11.25 6.75-11.25s6.75 6.75 6.75 11.25A6.75 6.75 0 0112 21z" />
  ),
  grooming: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l6.557 3.785m0 0a3 3 0 105.196 3 3 3 0 00-5.196-3zm-7.518 0l6.557-3.785m0 0a3 3 0 105.196-3 3 3 0 00-5.196 3z" />
  ),
  structure: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
  ),
  climate: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  ),
  kitchen: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  ),
  living: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12a2.25 2.25 0 012.25-2.25h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12 2.12a1.5 1.5 0 01-1.061.44H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  ),
  lighting: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.508 1.333 1.508 2.316V18" />
  ),
};

function ModuleIcon({ name }: { name: string }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[name] ?? icons.structure}
    </svg>
  );
}

function StepLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">
        {n}
      </span>
      <p className="text-accent font-semibold tracking-wide uppercase text-sm">
        {text}
      </p>
    </div>
  );
}

export default function ConfigurableSolution({ demo }: { demo: DemoLine }) {
  const f = demo.foundation;
  const turnkeyId = `${demo.id}-turnkey`;
  return (
    <div className="max-w-6xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-6 max-w-2xl mx-auto">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-dark mb-3">
          {demo.headline}
        </h3>
        <p className="text-dark-light text-base sm:text-lg leading-relaxed">
          {demo.blurb}
        </p>
      </div>

      {/* Two ways to start */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-14 text-sm">
        <span className="text-dark-light">
          Like to design it yourself? Start below.
        </span>
        <span className="hidden sm:inline text-dark/20">|</span>
        <a
          href={`#${turnkeyId}`}
          className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          Prefer it done? Browse the Turn-Key Gallery &darr;
        </a>
      </div>

      {/* Step 1 — Foundation Kit (start here) */}
      <StepLabel n="1" text="Start with the base" />
      <div className="rounded-2xl bg-white border border-primary/25 overflow-hidden flex flex-col md:flex-row mb-16">
        <div className="relative md:w-2/5 aspect-[16/10] md:aspect-auto md:min-h-[320px]">
          <Image src={f.image.src} alt={f.image.alt} fill className="object-cover" />
        </div>
        <div className="p-7 sm:p-9 md:w-3/5 flex flex-col">
          <span className="inline-block self-start text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 bg-accent/10 text-accent">
            {f.badge}
          </span>
          <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-dark">
            {f.name}
          </h4>
          <p className="text-primary text-base mt-1 mb-6">{f.tagline}</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-7">
            {f.includes.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-base text-dark-light">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="self-start bg-dark text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-dark-light transition-colors"
          >
            {f.cta}
          </a>
        </div>
      </div>

      {/* Step 2 — Add modules */}
      <StepLabel n="2" text="Add the systems you need" />
      <p className="text-dark-light text-base mb-6 -mt-2">
        Keep the standard build, or swap a module within limits to fit your needs.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {demo.modules.map((m) => (
          <div
            key={m.name}
            className="p-6 rounded-xl bg-white border border-dark/5 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <ModuleIcon name={m.icon} />
              </div>
              <h5 className="font-semibold text-dark text-base leading-tight">
                {m.name}
              </h5>
            </div>
            <p className="text-dark-light text-sm mb-4">{m.benefit}</p>
            <p className="text-sm text-dark-light leading-relaxed">
              <span className="text-accent font-semibold">Standard&nbsp;</span>
              {m.standard}
            </p>
            <p className="text-sm text-dark-light leading-relaxed mt-1.5">
              <span className="text-primary font-semibold">Make it yours&nbsp;</span>
              {m.swap}
            </p>
          </div>
        ))}
      </div>

      {/* Step 3 — Turn-Key gallery (the finished showroom) */}
      <StepLabel n="3" text="Or take it turn-key" />
      <div id={turnkeyId} className="rounded-2xl bg-dark text-white p-7 sm:p-9 scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3 bg-primary text-white">
              {demo.turnkey.badge}
            </span>
            <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
              {demo.turnkey.name}
            </h4>
            <p className="text-primary-light text-base mt-1">
              {demo.turnkey.tagline}
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 self-start bg-primary text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            {demo.turnkey.cta}
          </a>
        </div>
        <p className="text-white/70 text-base leading-relaxed max-w-3xl mb-7">
          {demo.turnkey.description}
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {demo.turnkey.gallery.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-white/10"
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Pricing note */}
      <p className="text-center text-dark-light/60 text-sm mt-8">
        Pricing available upon request. Contact us for a custom quote.
      </p>
    </div>
  );
}
