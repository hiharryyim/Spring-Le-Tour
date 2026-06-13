/* ---------------------------------------------------------------------------
 * Solutions data — each demo is presented as a build journey:
 *   1. Start with the Foundation Kit (the bare structural platform), then
 *   2. add the systems you need (modules, customizable within limits), or
 *   3. take it turn-key (the finished showroom — browse the gallery).
 * ------------------------------------------------------------------------- */

export interface ModuleSpec {
  icon: string; // key into the icon map in ConfigurableSolution.tsx
  name: string;
  benefit: string;
  standard: string;
  swap: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export interface Foundation {
  badge: string;
  name: string;
  tagline: string;
  includes: string[];
  cta: string;
  image: Photo;
}

export interface TurnKey {
  badge: string;
  name: string;
  tagline: string;
  description: string;
  cta: string;
  gallery: Photo[]; // real photos + layout/sample renders
}

export interface DemoLine {
  id: string;
  tabLabel: string;
  headline: string;
  blurb: string;
  foundation: Foundation;
  modules: ModuleSpec[];
  turnkey: TurnKey;
}

/* ----------------------------- Demo 1: Camper ---------------------------- */
const camper: DemoLine = {
  id: "camper",
  tabLabel: "Adventure Camper",
  headline: 'The "Avocado" Mercedes 144 Series',
  blurb:
    "Start from the bare Foundation Kit and build it your way, customize any module to taste, or take the complete adventure van turn-key.",
  foundation: {
    badge: "Start Here",
    name: "The 144 Foundation Kit",
    tagline: "The bare structural platform you finish your way",
    includes: [
      "Floor, wall & ceiling panels",
      "Premium 4-season insulation",
      "Integrated L-track mounting",
      "Pre-cut & pre-drilled for fast build-out",
    ],
    cta: "Start from the Foundation Kit",
    image: {
      src: "/images/foundation-interior.png",
      alt: "144 Foundation Kit interior with panelled walls, floor and L-track",
    },
  },
  modules: [
    {
      icon: "structure",
      name: "Structure & Surfaces",
      benefit: "Built to last, four seasons",
      standard: "Marine-grade panels, 4-season insulation, L-track mounting",
      swap: "Custom finishes, colors & laminates",
    },
    {
      icon: "power",
      name: "Off-Grid Power & Water",
      benefit: "Stay out longer, off the grid",
      standard: "4 kWh battery, solar + inverter, 25-gal hot & cold water",
      swap: "Scale battery capacity, add water",
    },
    {
      icon: "kitchen",
      name: "Galley Kitchen",
      benefit: "Cook anywhere",
      standard: "Refrigerator, microwave, sink with high-arc faucet",
      swap: "Layout & appliance options",
    },
    {
      icon: "climate",
      name: "Climate & Bath",
      benefit: "Comfortable in any weather",
      standard: "A/C & heater, indoor shower, private toilet",
      swap: "Configuration to taste",
    },
    {
      icon: "living",
      name: "Living & Outdoor",
      benefit: "Sleep two, lounge anywhere",
      standard: "Convertible seating & bed for two, manual awning",
      swap: "Seating & bed layout",
    },
    {
      icon: "lighting",
      name: "Lighting & Electronics",
      benefit: "Cozy light, charge everything",
      standard: "Dimmable LED lighting, USB & 12V outlets",
      swap: "Add audio, extra outlets",
    },
  ],
  turnkey: {
    badge: "Turn-Key Build",
    name: "The 144 Deluxe Build",
    tagline: "Market-proven, ready to roll",
    description:
      "Our all-inclusive camper van, fully equipped and rigorously tested. Take it as-is, or swap any module above to fit your trips.",
    cta: "Ready to Hit the Road?",
    gallery: [
      { src: "/images/deluxe-interior.jpg", alt: "Deluxe Build finished camper van interior" },
      { src: "/images/deluxe-2.jpg", alt: "Deluxe Build interior view" },
      { src: "/images/deluxe-3.jpg", alt: "Deluxe Build interior view" },
      { src: "/images/deluxe-3d.png", alt: "Deluxe Build cutaway layout render" },
    ],
  },
};

/* ----------------------------- Demo 2: Grooming -------------------------- */
const grooming: DemoLine = {
  id: "grooming",
  tabLabel: "Mobile Pet Grooming Van",
  headline: "The Mobile Pet Grooming Van",
  blurb:
    "Start from the Foundation Kit and build up your salon, customize any module within limits, or take the complete turn-key salon. A proven build you make your own.",
  foundation: {
    badge: "Start Here",
    name: "The Grooming Foundation Kit",
    tagline: "The bare structural platform to build up your salon",
    includes: [
      "Floor, wall & ceiling panels",
      "Marine-grade, fire-rated boards",
      "Integrated L-track mounting",
      "Power & plumbing rough-in ready",
    ],
    cta: "Start from the Foundation Kit",
    image: {
      src: "/images/grooming-foundation.svg",
      alt: "Grooming Foundation Kit bare structural platform",
    },
  },
  modules: [
    {
      icon: "power",
      name: "Power & Electrical",
      benefit: "A full day of grooming, fully electric, no generator",
      standard: "20+ kWh battery bank, inverter/charger, 120V tool outlets",
      swap: "Scale battery capacity, add solar",
    },
    {
      icon: "water",
      name: "Water & Plumbing",
      benefit: "Hot wash, fewer refill stops",
      standard: "Hot & cold water, large fresh + grey tanks, pressure fill",
      swap: "Instant water heater, larger tanks",
    },
    {
      icon: "grooming",
      name: "Grooming Station",
      benefit: "Less strain, faster turnaround",
      standard: "Electric lift tub & table, high-velocity dryer, vacuum",
      swap: "Size up the tub, upgrade the dryer",
    },
    {
      icon: "structure",
      name: "Cabinetry & Structure",
      benefit: "Commercial-grade, daily-use-proof",
      standard: "Marine-grade fire-rated boards, floor / wall / ceiling, L-track",
      swap: "Custom finishes, colors & layout",
    },
    {
      icon: "climate",
      name: "Climate & Ventilation",
      benefit: "Comfortable through a SoCal summer",
      standard: "Roof A/C with strong airflow, powered vents",
      swap: "Heating add-on, A/C upgrade",
    },
    {
      icon: "lighting",
      name: "Lighting & Controls",
      benefit: "See clearly, switch simply, stay safe",
      standard: "LED work lighting, labeled switch panel, CO & smoke alarms",
      swap: "Add light zones, extra outlets",
    },
  ],
  turnkey: {
    badge: "Turn-Key Salon",
    name: "The Turn-Key Mobile Salon",
    tagline: "Wag'n Tails-class, ready to earn",
    description:
      "A complete, revenue-ready mobile salon, fully electric, California-assembled and tested. Take your first booking the day you get the keys, or swap any module above.",
    cta: "Get a Turn-Key Quote",
    gallery: [
      { src: "/images/grooming-turnkey.svg", alt: "Turn-key mobile pet salon" },
      { src: "/images/grooming-modular.svg", alt: "Mobile salon module layout" },
    ],
  },
};

export const demos: DemoLine[] = [camper, grooming];
