export type Product = {
  id: string;
  name: string;
  price: string;
  category: "oversized" | "shirts";
  color: string;
  accent: string;
  blurb: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "static-star-tee",
    name: "Static Star Tee",
    price: "₹1,899",
    category: "oversized",
    color: "#1a1a1a",
    accent: "#ff4da6",
    blurb: "Acid-wash oversized tee with neon star back print.",
  },
  {
    id: "pulse-oversized",
    name: "Pulse Oversized",
    price: "₹1,799",
    category: "oversized",
    color: "#111111",
    accent: "#ff6bb5",
    blurb: "Heavyweight cotton, dropped shoulder, loud pink pulse mark.",
  },
  {
    id: "noise-unit-tee",
    name: "Noise Unit Tee",
    price: "₹1,699",
    category: "oversized",
    color: "#222222",
    accent: "#ff2d95",
    blurb: "Boxy fit with static-noise graphic on chest.",
  },
  {
    id: "void-wash-tee",
    name: "Void Wash Tee",
    price: "₹1,999",
    category: "oversized",
    color: "#0d0d0d",
    accent: "#ff80c0",
    blurb: "Faded black wash, oversized sleeves, soft hand-feel.",
  },
  {
    id: "signal-shirt",
    name: "Signal Shirt",
    price: "₹2,299",
    category: "shirts",
    color: "#f2f2f2",
    accent: "#111111",
    blurb: "Relaxed camp shirt with black signal print.",
  },
  {
    id: "gridlock-shirt",
    name: "Gridlock Shirt",
    price: "₹2,399",
    category: "shirts",
    color: "#e8e8e8",
    accent: "#ff4da6",
    blurb: "Lightweight overshirt, pink grid embroidery.",
  },
  {
    id: "afterglow-shirt",
    name: "Afterglow Shirt",
    price: "₹2,199",
    category: "shirts",
    color: "#d9d9d9",
    accent: "#ff2d95",
    blurb: "Soft twill, loose cuff, night-market energy.",
  },
  {
    id: "static-camp",
    name: "Static Camp",
    price: "₹2,499",
    category: "shirts",
    color: "#fafafa",
    accent: "#1a1a1a",
    blurb: "Short-sleeve camp collar with contrast stitch.",
  },
];

export const LOOKBOOK = [
  { id: "signal-loss", label: "Signal Loss", src: "/editorial-signal-loss.webp", tone: "#1a1a1a" },
  { id: "pink-noise", label: "Pink Noise", src: "/editorial-pink-noise.webp", tone: "#2a1520" },
  { id: "static-bloom", label: "Static Bloom", src: "/editorial-static-bloom.webp", tone: "#241018" },
  { id: "no-reception", label: "No Reception", src: "/editorial-no-reception.webp", tone: "#121212" },
  { id: "afterimage", label: "Afterimage", src: "/editorial-afterimage.webp", tone: "#1c1018" },
  { id: "system-error", label: "System Error", src: "/editorial-system-error.webp", tone: "#101010" },
] as const;
