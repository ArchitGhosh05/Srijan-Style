"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function NewsletterCTA() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F8FAFC] to-white p-8 sm:p-14"
        >
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#1E3A8A]/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#FF416C]/5 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">Stay Connected</p>
              <h2 className="mt-3 font-[family-name:var(--font-jakarta)] text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Be the first to know
              </h2>
              <p className="mt-3 text-slate-500">
                Get early access to new drops, store openings, and exclusive style edits.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm text-slate-800 outline-none transition focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]"
              >
                Subscribe <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
