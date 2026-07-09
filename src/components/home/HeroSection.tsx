"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop"
          alt="Srijan Style hero"
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/40 to-[#0F172A]/90" />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end px-4 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-medium uppercase tracking-[0.35em] text-white/70"
          >
            Srijan Style — Fashion for the New India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-4 max-w-4xl font-[family-name:var(--font-jakarta)] text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Wear the
            <span className="block bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] bg-clip-text text-transparent">
              Movement.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            A modern fashion house blending street energy with premium design — built for creators who move fast and dress louder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#collections"
              className="sheen-button rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:shadow-2xl hover:shadow-white/20"
            >
              Explore Collections
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition hover:text-white"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="size-4 animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  );
}
