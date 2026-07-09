import { BrandStory } from "@/components/home/BrandStory";
import { CollectionsEditorial } from "@/components/home/CollectionsEditorial";
import { Footer } from "@/components/home/Footer";
import { GalleryStrip } from "@/components/home/GalleryStrip";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeBand } from "@/components/home/MarqueeBand";
import { Navbar } from "@/components/home/Navbar";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { StoreVisit } from "@/components/home/StoreVisit";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBand />
        <BrandStory />
        <CollectionsEditorial />
        <GalleryStrip />
        <StoreVisit />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
