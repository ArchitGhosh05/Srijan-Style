"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { collections } from "@/components/home/data";

export function CollectionsEditorial() {
  return (
    <section id="collections" className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">Collections</p>
            <h2 className="mt-3 font-[family-name:var(--font-jakarta)] text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Curated drops
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            Seasonal edits designed to inspire — visit our stores to experience the full collection.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {collections.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-[420px] sm:h-[520px]" : "h-[360px]"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span
                        className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.season}
                      </span>
                      <h3 className="mt-3 font-[family-name:var(--font-jakarta)] text-2xl font-bold text-white sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">{item.tagline}</p>
                    </div>
                    <button className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-[#0F172A]">
                      <ArrowUpRight className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
