import type { Metadata } from "next";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";

const comparisonPoints = [
  {
    label: "Your salon build",
    value: "As low as $38,999",
    note: "A grooming-ready salon build. Chassis separate.",
  },
  {
    label: "Typical premium build",
    value: "$63k+",
    note: "A common high-end build before the van itself.",
  },
  {
    label: "Cash kept for launch",
    value: "$24k+ lower",
    note: "More room for supplies, marketing, and your first months on the road.",
  },
];

const pricePaths = [
  {
    title: "Lowest-entry path",
    value: "Low $70k range",
    line: "$38,999 salon build + inspected used van",
  },
  {
    title: "Bring your own van",
    value: "From $38,999",
    line: "Use your suitable chassis and focus the quote on the salon.",
  },
  {
    title: "New van build",
    value: "Custom quote",
    line: "Same salon build on a new Sprinter or Transit.",
  },
];

const workflowPoints = [
  "Enough power for a full workday, including A/C and grooming tools.",
  "A quiet salon that can work in neighborhoods without generator noise.",
  "A lift table, tub, dryer, vacuum, water, storage, and lighting in one ready layout.",
  "One team for sourcing, build, testing, and handoff in California.",
];

const workVanFeatures = [
  {
    title: "Easy to work in",
    body: "A practical solo-groomer layout with table, tub, storage, and clear movement space.",
  },
  {
    title: "Quiet, all-day power",
    body: "Designed to run the salon essentials without asking clients to listen to a generator.",
  },
  {
    title: "Ready to book",
    body: "Built as a finished work van, not a pile of parts that you still need to coordinate.",
  },
  {
    title: "Simple to start",
    body: "Choose the chassis path, confirm the build, and get a van designed to start earning.",
  },
];

const buildPreviewImages = [
  {
    src: "/images/grooming-card-white-overview.png",
    alt: "White-background overview of the mobile grooming van layout",
    caption: "Product Overview",
  },
  {
    src: "/images/grooming-open-overview.png",
    alt: "Open-view mobile grooming van with visible salon interior",
    caption: "Open Salon View",
  },
  {
    src: "/images/grooming-hero-front-right.png",
    alt: "Mobile grooming van angled view with visible salon workspace",
    caption: "Angled Salon View",
  },
  {
    src: "/images/grooming-product-render.png",
    alt: "Mobile grooming van full product render with salon interior",
    caption: "Full Vehicle View",
  },
  {
    src: "/images/grooming-interior.png",
    alt: "Mobile grooming van interior build render",
    caption: "Interior Workflow",
  },
  {
    src: "/images/grooming-topdown.png",
    alt: "Mobile grooming van top-down layout",
    caption: "Top-Down Layout",
  },
  {
    src: "/images/grooming-waterelectric-render.png",
    alt: "Mobile grooming van support systems render",
    caption: "Power And Water Systems",
  },
];

function CheckIcon() {
  return (
    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Mobile Grooming Van | Spring Le Tour",
  description:
    "A ready-to-work mobile pet grooming van conversion from Spring Le Tour, built in California with a lower-capital used-chassis path.",
};

export default function GroomingPage() {
  return (
    <>
      <section className="relative flex min-h-[86svh] items-center overflow-hidden bg-dark pt-28 pb-10">
        <div className="absolute inset-y-0 right-0 w-full md:w-[76%] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_28%)] md:[mask-image:linear-gradient(to_right,transparent,black_28%)]">
          <Image
            src="/images/grooming-hero-front-right.png"
            alt="Spring Le Tour mobile grooming van with visible salon interior"
            fill
            className="object-cover object-[46%_center] opacity-85 md:object-left md:opacity-95"
            sizes="(min-width: 768px) 76vw, 100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/82 to-dark/15 md:via-dark/74 md:to-dark/0" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-bg to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-light">
              Mobile Grooming Business Package
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Mobile Grooming Van
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-xl">
              Start your own mobile grooming business with a ready-to-work salon and a lower-capital path to the road.
            </p>
            <div className="mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Get A Grooming Quote
                <ArrowIcon />
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                See The Savings
              </a>
            </div>
            <div className="mt-9 grid max-w-md grid-cols-1 gap-3 sm:max-w-3xl sm:grid-cols-3">
              <div className="border-l border-white/25 pl-4">
                <p className="text-2xl font-bold text-white">As Low As $38,999</p>
                <p className="mt-1 text-sm text-white/65">complete conversion</p>
              </div>
              <div className="border-l border-white/25 pl-4">
                <p className="text-2xl font-bold text-white">Low $70k range</p>
                <p className="mt-1 text-sm text-white/65">used-chassis path</p>
              </div>
              <div className="border-l border-white/25 pl-4">
                <p className="text-2xl font-bold text-white">Ready To Earn</p>
                <p className="mt-1 text-sm text-white/65">built as a work van</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg pt-10 pb-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              Built For Working Groomers
            </p>
            <h2 className="max-w-lg text-3xl font-bold leading-tight text-dark sm:text-4xl">
              A Clean Work Van Your Clients Can Trust.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-dark-light">
            <p>
              You do not need a complicated custom build. You need a quiet, comfortable salon that helps you show up professionally and start taking appointments.
            </p>
            <p>
              We keep the van choice flexible and focus the quote on what matters most: the finished grooming workspace.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                The Money Story
              </p>
              <h2 className="max-w-lg text-4xl font-bold leading-tight text-dark sm:text-5xl">
                <span className="block">Start Smaller.</span>
                <span className="block">Keep More Cash For Launch.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-dark-light lg:ml-auto">
              A mobile salon should help you get to customers, not lock all your cash into the vehicle. We separate the salon build from the van so you can choose the path that fits your budget.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {comparisonPoints.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-lg border p-6 ${
                  index === 2
                    ? "border-primary bg-primary text-white shadow-xl shadow-primary/20"
                    : "border-dark/10 bg-bg"
                }`}
              >
                <p className={index === 2 ? "text-sm font-semibold text-white/85" : "text-sm font-semibold text-dark-light"}>
                  {item.label}
                </p>
                <p className={index === 2 ? "mt-3 text-4xl font-bold tracking-normal" : "mt-3 text-4xl font-bold tracking-normal text-dark"}>
                  {item.value}
                </p>
                <p className={index === 2 ? "mt-3 text-sm leading-relaxed text-white/85" : "mt-3 text-sm leading-relaxed text-dark-light"}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              Choose Your Starting Path
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {pricePaths.map((path) => (
                <div key={path.title} className="rounded-lg border border-dark/10 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-dark-light">{path.title}</p>
                  <p className="mt-2 text-3xl font-bold text-dark">{path.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-dark-light">{path.line}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-dark-light/70">
            Planning figures only. Final quote depends on vehicle condition, final scope, taxes, registration, delivery, and financing choices.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 border-t border-dark/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-dark-light">
              Have a van, budget, or launch date in mind?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark-light"
            >
              Talk Through Your Path
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              What Matters
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-dark sm:text-4xl">
              Everything A Groomer Expects In A Daily Work Van.
            </h2>
            <div className="mt-7 space-y-4">
              {workflowPoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckIcon />
                  <p className="text-base leading-relaxed text-dark-light">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {workVanFeatures.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-dark/10 bg-white p-5">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-dark">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dark-light">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              Build Preview
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-dark sm:text-4xl">
              Real Salon Systems, Assembled Around The Grooming Workflow.
            </h2>
          </div>
          <div className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {buildPreviewImages.map((image) => (
              <figure
                key={image.src}
                className="min-w-[84%] snap-start overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-sm sm:min-w-[46%]"
              >
                <div className="relative aspect-[16/10] bg-bg-alt">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 46vw, 84vw"
                    className="object-contain p-4"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-semibold text-dark">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
}
