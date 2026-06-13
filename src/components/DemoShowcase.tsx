"use client";

import { useState } from "react";
import ConfigurableSolution from "@/components/ConfigurableSolution";
import type { DemoLine } from "@/data/solutions";

export default function DemoShowcase({ demos }: { demos: DemoLine[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
        {demos.map((d, i) => (
          <button
            key={d.id}
            onClick={() => setActive(i)}
            className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-colors ${
              i === active
                ? "bg-primary text-white"
                : "bg-white text-dark-light ring-1 ring-dark/10 hover:ring-primary/40"
            }`}
          >
            {d.tabLabel}
          </button>
        ))}
      </div>

      <ConfigurableSolution demo={demos[active]} />
    </div>
  );
}
