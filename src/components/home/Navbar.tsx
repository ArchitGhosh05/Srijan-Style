"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/components/home/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#0F172A]/80 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12">
          <a href="#" className="relative h-10 w-[180px] sm:h-12 sm:w-[210px]">
            <Image
              src="/srijan-style-logo-clean.png"
              alt="Srijan Style"
              fill
              className={`object-contain object-left transition-all duration-500 ${scrolled ? "brightness-0 invert" : ""}`}
              priority
            />
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-sm font-medium tracking-wide text-white/80 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#FF416C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#stores"
              className="hidden rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10 sm:inline-flex"
            >
              Find a Store
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-full border border-white/30 p-2.5 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0F172A]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-sm font-medium tracking-[0.2em] text-white/60">MENU</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="size-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 px-6 pt-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-semibold text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
