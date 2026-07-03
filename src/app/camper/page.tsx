import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "@/components/ContactUs";

const gallery = [
  {
    src: "/images/deluxe-interior.jpg",
    alt: "Finished camper van sleeping area, galley, and storage",
    caption: "Finished Cabin",
  },
  {
    src: "/images/deluxe-2.jpg",
    alt: "Finished camper van galley and front cabin view",
    caption: "Galley And Work Surface",
  },
  {
    src: "/images/deluxe-3.jpg",
    alt: "Finished camper van rear storage and cabinet view",
    caption: "Storage And Cabinetry",
  },
  {
    src: "/images/foundation-interior.png",
    alt: "Camper van foundation interior platform",
    caption: "Foundation Platform",
    fit: "contain",
  },
  {
    src: "/images/deluxe-3d.png",
    alt: "Camper van turn-key layout render",
    caption: "Turn-Key Layout",
    fit: "contain",
  },
];

const pathCards = [
  {
    number: "01",
    title: "Foundation Kit",
    body: "Start with the clean base: floor, walls, ceiling, insulation, and mounting points ready for your own build.",
  },
  {
    number: "02",
    title: "Modular Kit",
    body: "Add the systems you want: bed, galley, storage, power, water, lighting, climate, and finish options.",
  },
  {
    number: "03",
    title: "Turn-Key Build",
    body: "Let us assemble the complete cabin and hand it over ready for travel, rental use, or dealer delivery.",
  },
];

const turnkeyPoints = [
  "Finished cabin layout you can understand at a glance.",
  "DIY-friendly path if you want to build part of it yourself.",
  "California assembly and handoff when you want it completed.",
];

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Camper Van | Spring Le Tour",
  description:
    "Spring Le Tour camper van builds, modular kits, and foundation platforms, assembled in California for travel, rental, and DIY build paths.",
  openGraph: {
    title: "Camper Van | Spring Le Tour",
    description:
      "Camper van builds from foundation kit to finished cabin, assembled in California for travel, rental, and DIY paths.",
    type: "website",
    url: "/camper",
    images: [
      {
        url: "/images/og/og-camper.jpg",
        width: 1200,
        height: 630,
        alt: "Spring Le Tour camper van in the desert",
      },
    ],
  },
};

export default function CamperPage() {
  return (
    <>
      <section className="relative flex min-h-[86svh] items-center overflow-hidden bg-dark pt-28 pb-12">
        <Image
          src="/images/hero-desert.jpg"
          alt="Spring Le Tour camper van in the desert"
          fill
          className="object-cover -scale-x-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/84 to-dark/15" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-bg to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-light">
              Adventure Camper Build
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Camper Van
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-xl">
              A flexible adventure van path, from DIY-friendly foundation to a finished cabin ready for travel.
            </p>
            <div className="mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Plan A Camper Build
                <ArrowIcon />
              </a>
              <a
                href="#gallery"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                View Gallery
              </a>
            </div>
            <div className="mt-9 grid max-w-md grid-cols-1 gap-3 sm:max-w-3xl sm:grid-cols-3">
              {["Foundation", "Kit", "Turn-Key"].map((item) => (
                <div key={item} className="border-l border-white/25 pl-4">
                  <p className="text-2xl font-bold text-white">{item}</p>
                  <p className="mt-1 text-sm text-white/65">Choose Your Path</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg pt-10 pb-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              Finished First
            </p>
            <h2 className="max-w-lg text-3xl font-bold leading-tight text-dark sm:text-4xl">
              Start With The Van You Can Actually Travel In.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-dark-light">
            <p>
              Camper buyers usually want to see the life inside the van first: where they sleep, cook, store gear, and relax after a drive.
            </p>
            <p>
              After that, the build can go in different directions. Some buyers want a turn-key cabin. Others want a foundation or kit they can finish themselves.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                Turn-Key Gallery
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-dark sm:text-5xl">
                A Finished Adventure Interior.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-dark-light">
              The gallery focuses on the finished cabin first, then shows how the same platform can support foundation and kit conversations.
            </p>
          </div>

          <div className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="min-w-[84%] snap-start overflow-hidden rounded-2xl border border-dark/10 bg-bg shadow-sm sm:min-w-[46%] lg:min-w-[32%]"
              >
                <div className="relative aspect-[16/10] bg-bg-alt">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={item.fit === "contain" ? "object-contain p-4" : "object-cover"}
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-semibold text-dark">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              What Matters
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-dark sm:text-4xl">
              Choose How Much You Want To Build Yourself.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-dark-light">
              Compared with a work van, camper buyers often want more creative control. We keep the path flexible: buy the base, add a kit, or let us finish the whole cabin.
            </p>
            <div className="mt-7 space-y-4">
              {turnkeyPoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckIcon />
                  <p className="text-base leading-relaxed text-dark-light">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-dark p-7 text-white shadow-xl shadow-dark/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-light">
                Prefer It Finished?
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Start With The Turn-Key Camper.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72">
                If you want the fastest path to the road, we can assemble the cabin and deliver it ready for travel. If you want to build, the same design can step back to foundation or kit.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {pathCards.map((path) => (
                <div key={path.title} className="rounded-2xl border border-dark/10 bg-white p-6">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {path.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-dark">{path.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-dark-light">{path.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/20 bg-bg p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  Not A Grooming Van?
                </p>
                <h2 className="text-2xl font-bold text-dark sm:text-3xl">
                  Compare The Camper Path With Our Mobile Business Builds.
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-dark-light">
                  If your real goal is a revenue-ready work van, the grooming page is the better starting point. If your goal is travel, rental, or DIY build planning, stay here.
                </p>
              </div>
              <Link
                href="/grooming"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark-light"
              >
                View Grooming Vans
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
}
