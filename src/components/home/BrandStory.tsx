"use client";

import { motion } from "framer-motion";
import { brandPillars, stats } from "@/components/home/data";

export function BrandStory() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">About Us</p>
            <h2 className="mt-4 font-[family-name:var(--font-jakarta)] text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
              Fashion that feels
              <span className="text-[#FF416C]"> alive.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Srijan Style is more than clothing — it&apos;s a cultural pulse. We design for young India: bold, expressive, and unapologetically modern. Every collection is a statement, every store is an experience.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Inspired by global trends and rooted in local energy, we bring runway aesthetics to everyday wardrobes — without the runway price tag.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {brandPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 transition hover:border-[#1E3A8A]/20 hover:shadow-lg"
              >
                <span className="text-xs font-bold text-[#FF416C]">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-[#0F172A]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-6 rounded-3xl bg-[#0F172A] p-8 sm:p-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-jakarta)] text-3xl font-bold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
