import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0F172A]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-12 text-slate-300 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <div className="inline-flex rounded-xl bg-white px-3 py-2 shadow-lg shadow-black/20">
            <div className="relative h-11 w-[212px]">
              <Image src="/srijan-style-logo-clean.png" alt="Srijan Style" fill className="object-contain object-left" />
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            High-conversion premium fashion destination built for modern lifestyle shoppers.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>Men</li>
            <li>Women</li>
            <li>Footwear</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Support</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>Track Order</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Connect</p>
          <div className="mt-3 flex gap-3">
            {[Mail, Phone, MapPin].map((Icon, i) => (
              <button key={i} className="rounded-full border border-slate-700 p-2.5 transition hover:border-slate-500">
                <Icon className="size-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
