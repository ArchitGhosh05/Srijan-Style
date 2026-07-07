"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export function CTASection() {
  return (
    <section className="mx-auto mb-16 mt-14 w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F2027] via-[#1E3A8A] to-[#FF416C] p-8 sm:p-12"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[#FF4B2B]/40 blur-2xl" />

        <p className="relative text-xs uppercase tracking-[0.2em] text-white/80">Members-only early access</p>
        <h3 className="relative mt-2 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          Unlock exclusive drops, instant wishlist alerts, and personalized style boards.
        </h3>
        <Magnetic className="relative mt-6 inline-flex">
          <button className="sheen-button rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] transition hover:shadow-xl">
            Join Srijan Circle <ArrowRight className="ml-2 inline size-4" />
          </button>
        </Magnetic>
      </motion.div>
    </section>
  );
}
