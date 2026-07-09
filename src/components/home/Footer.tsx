import { Globe, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Brand: ["About", "Collections", "Careers", "Press"],
  Visit: ["Store Locator", "New Openings", "Events"],
  Support: ["Contact", "FAQ", "Privacy"],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F172A]">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-xl bg-white px-3 py-2">
              <div className="relative h-10 w-[190px]">
                <Image src="/srijan-style-logo-clean.png" alt="Srijan Style" fill className="object-contain object-left" />
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              A modern fashion brand for young India — style, culture, and community in every thread.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Mail, MapPin].map((Icon, i) => (
                <button
                  key={i}
                  className="rounded-full border border-white/15 p-2.5 text-white/60 transition hover:border-white/30 hover:text-white"
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold text-white">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Srijan Style. All rights reserved.</p>
          <p className="text-xs text-white/40">Designed for awareness. Built for culture.</p>
        </div>
      </div>
    </footer>
  );
}
