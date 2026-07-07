import { CategoryBubbles } from "@/components/home/CategoryBubbles";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/home/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { Navbar } from "@/components/home/Navbar";
import { ProductGrid } from "@/components/home/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryBubbles />
        <ProductGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
