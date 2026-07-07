"use client";

import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { navLinks } from "@/components/home/data";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/60 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center gap-3 px-4 sm:px-8 lg:px-12">
        <a
          href="#"
          className="group flex shrink-0 items-center rounded-xl bg-white/70 px-1 py-1 transition"
        >
          <div className="relative h-[52px] w-[220px] sm:h-[56px] sm:w-[250px]">
            <Image src="/srijan-style-logo-clean.png" alt="Srijan Style" fill className="object-contain object-left" priority />
          </div>
        </a>

        <nav className="hidden flex-1 justify-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="group relative text-sm font-medium text-slate-700 transition-colors hover:text-[#1E3A8A]"
            >
              {item}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-[#FF416C] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <label className="group relative hidden h-11 w-[190px] overflow-hidden rounded-full border border-slate-200 bg-white/90 transition-all duration-500 focus-within:w-[260px] focus-within:border-[#1E3A8A] focus-within:shadow-lg focus-within:shadow-blue-500/20 md:flex">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1E3A8A]" />
            <input
              placeholder="Search brands, styles, trends"
              className="h-full w-full bg-transparent pl-11 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </label>

          {[Heart, ShoppingBag, User].map((Icon, index) => (
            <button
              key={index}
              className="relative rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <Icon className="size-4" />
              {index < 2 && (
                <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#FF416C] text-[10px] font-semibold text-white">
                  {index + 1}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
