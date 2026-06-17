"use client";

import { useState } from "react";
import ConfigurableSolution from "@/components/ConfigurableSolution";
import type { DemoLine } from "@/data/solutions";

export default function DemoShowcase({ demos }: { demos: DemoLine[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Solution selector — two clear, prominent options */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        {demos.map((d, i) => {
          const on = i === active;
          return (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`flex-1 sm:flex-none sm:min-w-[280px] px-7 py-5 rounded-2xl text-center sm:text-left transition-all ${
                on
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white ring-1 ring-dark/10 text-dark hover:ring-primary/50 hover:-translate-y-0.5"
              }`}
            >
              <span className="block font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold">
                {d.tabLabel}
              </span>
              <span
                className={`block text-sm mt-1 ${
                  on ? "text-white/85" : "text-dark-light"
                }`}
              >
                {d.tabSubtitle}
              </span>
            </button>
          );
        })}
      </div>

      <ConfigurableSolution demo={demos[active]} />
    </div>
  );
}
