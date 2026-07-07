"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { heroTiles } from "@/components/home/data";
import { Magnetic } from "@/components/ui/Magnetic";

export function HeroSection() {
  return (
    <section className="mx-auto mt-6 w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
      <div className="grid auto-rows-[240px] grid-cols-12 gap-4 lg:auto-rows-[290px]">
        {heroTiles.map((tile, index) => (
          <motion.article
            key={tile.title}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className={`group relative overflow-hidden rounded-3xl ${tile.className}`}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1.16 }}
              transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <Image src={tile.image} alt={tile.title} fill unoptimized className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">{tile.subtitle}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{tile.title}</h2>
              {index === 0 && (
                <Magnetic className="mt-5 inline-flex">
                  <button className="sheen-button rounded-full bg-gradient-to-r from-[#1E3A8A] via-[#2547a8] to-[#FF416C] px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:shadow-2xl">
                    Explore Collection <ArrowRight className="ml-2 inline size-4" />
                  </button>
                </Magnetic>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
