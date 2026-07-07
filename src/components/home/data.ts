export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  primaryImage: string;
  alternateImage: string;
  badge?: string;
};

export type Category = {
  id: number;
  title: string;
  icon: "Shirt" | "Watch" | "Sparkles" | "Footprints" | "Gem" | "Backpack";
  color: string;
};

export const navLinks = [
  "New In",
  "Men",
  "Women",
  "Sneakers",
  "Accessories",
  "Studio Edit",
  "Sale",
];

export const categories: Category[] = [
  { id: 1, title: "Streetwear", icon: "Shirt", color: "from-blue-500 to-indigo-600" },
  { id: 2, title: "Watches", icon: "Watch", color: "from-slate-800 to-slate-600" },
  { id: 3, title: "Beauty", icon: "Sparkles", color: "from-rose-500 to-orange-500" },
  { id: 4, title: "Footwear", icon: "Footprints", color: "from-cyan-500 to-blue-600" },
  { id: 5, title: "Jewelry", icon: "Gem", color: "from-indigo-500 to-violet-600" },
  { id: 6, title: "Bags", icon: "Backpack", color: "from-orange-500 to-red-500" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Oversized Utility Jacket",
    brand: "Srijan Atelier",
    price: 3899,
    originalPrice: 5999,
    rating: 4.7,
    primaryImage:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop",
    alternateImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Monochrome Tailored Set",
    brand: "Noir Line",
    price: 4599,
    originalPrice: 7499,
    rating: 4.8,
    primaryImage:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1200&auto=format&fit=crop",
    alternateImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Aurora Knit Co-ord",
    brand: "Urban Blend",
    price: 2799,
    originalPrice: 3999,
    rating: 4.5,
    primaryImage:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1200&auto=format&fit=crop",
    alternateImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Edge Runner Sneakers",
    brand: "Srijan Move",
    price: 5199,
    originalPrice: 7999,
    rating: 4.9,
    primaryImage:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
    alternateImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: 5,
    name: "Slate Cargo Trousers",
    brand: "Transit Co.",
    price: 2299,
    originalPrice: 3299,
    rating: 4.4,
    primaryImage:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop",
    alternateImage:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Minimal Luxe Handbag",
    brand: "Srijan Aura",
    price: 3499,
    originalPrice: 4999,
    rating: 4.6,
    primaryImage:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
    alternateImage:
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1200&auto=format&fit=crop",
    badge: "Best Seller",
  },
];

export const heroTiles = [
  {
    title: "Street-Luxe Drops",
    subtitle: "Monsoon 26 Collection",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-12 lg:col-span-7 row-span-2",
  },
  {
    title: "Tailored Movement",
    subtitle: "Workwear Reimagined",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    title: "Weekend Edit",
    subtitle: "Relaxed silhouettes",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
];
