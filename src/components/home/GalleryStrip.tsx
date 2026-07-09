"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/components/home/data";

export function GalleryStrip() {
  const doubled = [...galleryImages, ...galleryImages];

  return (
    <section className="overflow-hidden bg-white py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF416C]">#SrijanStyle</p>
        <h2 className="mt-2 font-[family-name:var(--font-jakarta)] text-3xl font-bold text-[#0F172A] sm:text-4xl">
          Styled by you
        </h2>
      </motion.div>

      <div className="gallery-track flex w-max gap-4 px-4">
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-64 w-48 shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-60"
          >
            <Image src={src} alt="Srijan Style look" fill unoptimized className="object-cover" sizes="240px" />
          </div>
        ))}
      </div>
    </section>
  );
}
