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
  // Detailed parameters (the turn-key standard build), shown in an expandable
  // "Full specifications" panel on the card. Each line gets an auto-picked icon.
  specs?: string[];
}

export interface Photo {
  src: string;
  alt: string;
  // "contain" shows the full image with no edge cropping (use for renders /
  // diagrams with content to the edges); defaults to "cover" (fills the frame,
  // good for photos).
  fit?: "cover" | "contain";
  // Small caption under the image (e.g. to clarify what a render shows).
  caption?: string;
}

export interface Foundation {
  badge: string;
  name: string;
  tagline: string;
  includes: string[];
  cta: string;
  gallery: Photo[]; // real photos and/or renders of the bare platform
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
  tabSubtitle: string;
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
  tabSubtitle: "Recreational van conversions",
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
    gallery: [
      { src: "/images/foundation-interior.png", alt: "144 Foundation Kit bare interior, real photo", fit: "contain", caption: "The bare platform, real build photo" },
      { src: "/images/camper-foundation-render.png", alt: "144 Foundation Kit bare structural platform render", fit: "contain", caption: "The bare platform, render" },
    ],
  },
  modules: [
    {
      icon: "structure",
      name: "Structure & Surfaces",
      benefit: "Built to last, four seasons",
      standard: "Marine-grade panels, 4-season insulation, L-track mounting",
      swap: "Custom finishes, colors & laminates",
      specs: [
        "Marine-grade floor, wall & ceiling panels",
        "Premium 4-season insulation",
        "Integrated L-track mounting",
        "Fridge, microwave & bathroom cabinetry modules",
        "Fold-out bed platform & wheel-well cabinets",
      ],
    },
    {
      icon: "power",
      name: "Off-Grid Power & Water",
      benefit: "Stay out longer, off the grid",
      standard: "4.8 kWh power, 200W solar, 25-gal fresh & 29-gal grey water",
      swap: "Scale battery capacity, add water",
      specs: [
        "Dual 2.4 kWh portable power stations (4.8 kWh total)",
        "200W rigid solar panel",
        "Shore-power inlet with 15m cord",
        "25-gallon onboard fresh water tank",
        "29-gallon external grey water tank",
        "12V FLOJET pump, hot & cold water lines",
      ],
    },
    {
      icon: "kitchen",
      name: "Galley Kitchen",
      benefit: "Cook anywhere",
      standard: "Refrigerator, sink, fold-out table, gas water heater",
      swap: "Layout & appliance options",
      specs: [
        "12V DC105 refrigerator",
        "Stainless flip-top sink with faucet",
        "Quick fold-out table",
        "Gas water heater",
        "Pre-fit space for a portable cooktop",
      ],
    },
    {
      icon: "climate",
      name: "Climate & Bath",
      benefit: "Comfortable in any weather",
      standard: "Diesel heater, roof vent, portable toilet & shower",
      swap: "Configuration to taste",
      specs: [
        "12V 5000W diesel heater",
        "12V powered roof vent",
        "Roof A/C (pre-fit, locally installed)",
        "Thetford portable toilet",
        "Shower head with curtain kit",
      ],
    },
    {
      icon: "living",
      name: "Living & Outdoor",
      benefit: "Sleep two, lounge anywhere",
      standard: "Convertible rear bed for two, manual awning",
      swap: "Seating & bed layout",
      specs: [
        "Rear lengthwise convertible bed platform",
        "Two bedside reading lights",
        "Manual awning for outdoor shade",
        "10m external water hose",
      ],
    },
    {
      icon: "lighting",
      name: "Lighting & Electronics",
      benefit: "Cozy light, charge everything",
      standard: "8 ceiling lights, US-spec outlets, panel switches",
      swap: "Add audio, extra outlets",
      specs: [
        "8 ceiling lights + 2 bedside reading lights",
        "US-spec outlets & panel switches",
        "LPG alarm & smoke alarm",
      ],
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
  tabSubtitle: "Turn-key mobile pet salons",
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
    gallery: [
      { src: "/images/grooming-foundation-render.png", alt: "Grooming Foundation Kit bare structural platform render", fit: "contain", caption: "The bare platform (Foundation Kit)" },
      { src: "/images/grooming-waterelectric-render.png", alt: "Grooming Foundation Kit with water and electrical systems", fit: "contain", caption: "Example: with Power & Water modules added" },
    ],
  },
  modules: [
    {
      icon: "power",
      name: "Power & Electrical",
      benefit: "A full day of grooming, fully electric, no generator",
      standard: "20+ kWh battery bank, dual inverters, 110V tool outlets",
      swap: "Scale battery capacity, add solar",
      specs: [
        "12V 1600Ah lithium bank (~20 kWh) with internal heating",
        "Two 3000W inverter/chargers, dual 110V output",
        "110V service with GFI protection throughout",
        "Independent control panels for water, battery & inverter",
        "Two 15m shore-power cords for dual-port charging",
      ],
    },
    {
      icon: "water",
      name: "Water & Plumbing",
      benefit: "Hot wash, fewer refill stops",
      standard: "180-gal tub, 48-gal fresh + 50-gal grey, instant hot water",
      swap: "Instant water heater, larger tanks",
      specs: [
        "180-gallon one-piece stainless steel pet tub",
        "48-gallon onboard fresh water tank",
        "50-gallon external grey water tank",
        "High-pressure 4 gal/min smart pump",
        "Dual adjustable shower heads",
        "2.5-gallon exchange water heater for quick hot water",
      ],
    },
    {
      icon: "grooming",
      name: "Grooming Station",
      benefit: "Less strain, faster turnaround",
      standard: "Electric lift table, high-velocity dryer, vacuum",
      swap: "Size up the tub, upgrade the dryer",
      specs: [
        "Electric foot-pedal lift table, rotating top",
        "Pull-out second tier 600 x 450mm, 304 stainless",
        "2000W variable-speed dryer, 62 m/s airflow",
        "5-gallon high-power vacuum",
        "Stainless step stool for small pets",
      ],
    },
    {
      icon: "structure",
      name: "Cabinetry & Structure",
      benefit: "Commercial-grade, daily-use-proof",
      standard: "Fire-rated boards, sealed cab wall, full cabinetry",
      swap: "Custom finishes, colors & layout",
      specs: [
        "Fully sealed safety wall with access door",
        "Pull-out towel, equipment & overhead cabinets",
        "Concealed pull-out trash cabinet",
        "Fire-rated multi-layer panels, insulated walls",
        "Chemical-resistant anti-slip flooring",
      ],
    },
    {
      icon: "climate",
      name: "Climate & Ventilation",
      benefit: "Comfortable through a SoCal summer",
      standard: "15,000 BTU roof A/C, powered vents",
      swap: "Heating add-on, A/C upgrade",
      specs: [
        "15,000 BTU roof A/C, no engine idling",
        "12V 5000W diesel heater with drying duct",
        "Pet tub exhaust fan for moisture control",
      ],
    },
    {
      icon: "lighting",
      name: "Lighting & Controls",
      benefit: "See clearly, switch simply, stay safe",
      standard: "LED work lighting, control panels, full safety kit",
      swap: "Add light zones, extra outlets",
      specs: [
        "LED work lighting + 12V ceiling lights",
        "Phone & laptop charging station (12V + USB)",
        "Independent control panel switches",
        "Fire extinguisher, CO & smoke alarms",
        "Human & pet first-aid kits",
      ],
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
      { src: "/images/grooming-exterior.png", alt: "Mobile grooming van exterior render", fit: "contain" },
      { src: "/images/grooming-interior.png", alt: "Mobile grooming van interior configuration render", fit: "contain" },
      { src: "/images/grooming-topdown.png", alt: "Mobile grooming van top-down layout with configuration details", fit: "contain" },
    ],
  },
};

export const demos: DemoLine[] = [camper, grooming];
