"use client";

import { marqueeItems } from "@/components/home/data";

export function MarqueeBand() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-[#1E3A8A]/10 bg-[#1E3A8A] py-4">
      <div className="marquee-track flex w-max gap-12">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-12 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            {item}
            <span className="size-1.5 rounded-full bg-[#FF416C]" />
          </span>
        ))}
      </div>
    </div>
  );
}
