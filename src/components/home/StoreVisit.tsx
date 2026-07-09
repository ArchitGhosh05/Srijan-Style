"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { stores } from "@/components/home/data";

export function StoreVisit() {
  return (
    <section id="stores" className="bg-[#0F172A] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF416C]">Visit Us</p>
            <h2 className="mt-4 font-[family-name:var(--font-jakarta)] text-4xl font-bold text-white sm:text-5xl">
              Experience Srijan
              <span className="block text-white/50">in person.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Step into our stores for immersive styling zones, new-season previews, and the full Srijan energy — designed to inspire, not just sell.
            </p>
            <button className="sheen-button mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#FF416C] px-7 py-3.5 text-sm font-semibold text-white transition hover:shadow-2xl hover:shadow-[#FF416C]/20">
              <Navigation className="size-4" />
              Find Nearest Store
            </button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stores.map((store, i) => (
              <motion.div
                key={store.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex items-start justify-between">
                  <MapPin className="size-5 text-[#FF416C]" />
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      store.status === "Open Now"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {store.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{store.city}</h3>
                <p className="mt-1 text-sm text-white/50">{store.area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
