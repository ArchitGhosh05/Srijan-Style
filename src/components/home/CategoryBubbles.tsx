"use client";

import { motion } from "framer-motion";
import { Backpack, Footprints, Gem, Shirt, Sparkles, Watch } from "lucide-react";
import { categories } from "@/components/home/data";
import { Magnetic } from "@/components/ui/Magnetic";

const icons = {
  Shirt,
  Watch,
  Sparkles,
  Footprints,
  Gem,
  Backpack,
};

export function CategoryBubbles() {
  return (
    <section className="mx-auto mt-14 w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h3 className="text-2xl font-semibold text-slate-900">Discover by vibe</h3>
          <a href="#" className="text-sm font-medium text-[#1E3A8A]">
            View all categories
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-center"
              >
                <Magnetic className="w-full">
                  <button className="group flex w-full flex-col items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 py-5 transition hover:border-slate-300 hover:bg-white hover:shadow-lg">
                    <span
                      className={`flex size-16 items-center justify-center rounded-full bg-gradient-to-br ${category.color} text-white shadow-lg transition duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-7 transition duration-300 group-hover:rotate-12" />
                    </span>
                    <span className="text-sm font-medium text-slate-800">{category.title}</span>
                  </button>
                </Magnetic>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
