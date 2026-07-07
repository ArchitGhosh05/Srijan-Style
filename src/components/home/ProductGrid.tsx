"use client";

import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { products } from "@/components/home/data";

const sizes = ["S", "M", "L", "XL"];

export function ProductGrid() {
  return (
    <section className="mx-auto mt-14 w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#1E3A8A]">Curated for you</p>
          <h3 className="mt-2 text-3xl font-semibold text-slate-900">Trending now</h3>
        </div>
        <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white">
          See all products
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="relative h-[360px] overflow-hidden bg-slate-100">
              {product.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                  {product.badge}
                </span>
              )}

              <Image
                src={product.primaryImage}
                alt={product.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:opacity-0"
              />
              <Image
                src={product.alternateImage}
                alt={`${product.name} alternate angle`}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              />

              <div className="absolute inset-x-0 bottom-0 translate-y-full border-t border-white/70 bg-white/95 p-4 backdrop-blur-md transition duration-500 group-hover:translate-y-0">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">Quick Add Size</p>
                  <button className="rounded-full border border-slate-300 p-1.5 text-slate-600 transition hover:border-[#FF416C] hover:text-[#FF416C]">
                    <Heart className="size-4" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="rounded-xl border border-slate-200 py-2 text-sm font-medium text-slate-700 transition hover:border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{product.brand}</p>
              <h4 className="line-clamp-1 text-base font-semibold text-slate-900">{product.name}</h4>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-slate-900">INR {product.price}</span>
                <span className="text-slate-400 line-through">INR {product.originalPrice}</span>
              </div>
              <p className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                <Star className="size-3.5 fill-current" /> {product.rating}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
