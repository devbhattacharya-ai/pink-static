"use client";

import { useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    id: "01",
    eyebrow: "Drop 01",
    pitch: "Oversized t-shirts and shirts for Gen Z.",
    support: "Bold design. Premium comfort. A different state of mind.",
  },
  {
    id: "02",
    eyebrow: "Drop 01",
    pitch: "Loud backs. Soft hands. Built to stand out.",
    support: "Campaign-led pieces for nights that refuse to blend in.",
  },
  {
    id: "03",
    eyebrow: "Drop 01",
    pitch: "Shirts that carry the static.",
    support: "Relaxed cuts, sharp graphics, concept-only pricing.",
  },
] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  return (
    <section className="hero" aria-labelledby="hero-pitch">
      <div className="hero-backdrop" aria-hidden="true">
        PINK STATIC
      </div>

      <div className="hero-visual">
        <Image
          src="/demo-pink-static.jpg"
          alt="Campaign model in an oversized acid-wash tee with a neon pink star graphic"
          width={1200}
          height={750}
          priority
          className="hero-photo"
        />
      </div>

      <div className="hero-copy">
        <p className="hero-eyebrow">{slide.eyebrow}</p>
        <h1 id="hero-pitch">{slide.pitch}</h1>
        <p className="hero-support">{slide.support}</p>
        <a href="#shop" className="btn-primary">
          Shop collection <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero-thumbs" aria-label="Hero previews">
        {["Star graphic", "Full oversized fit", "Signal shirt"].map((label, i) => (
          <button
            key={label}
            type="button"
            className={`hero-thumb${i === index ? " active" : ""}`}
            aria-label={`Show slide ${String(i + 1).padStart(2, "0")}: ${label}`}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            <span className="hero-thumb-mark" aria-hidden="true">
              {i === 0 ? "★" : i === 1 ? "◆" : "▣"}
            </span>
            <span className="sr-only">{label}</span>
          </button>
        ))}
      </div>

      <div className="hero-pager" role="group" aria-label="Hero slides">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`hero-page${i === index ? " active" : ""}`}
            aria-label={`Slide ${s.id}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => setIndex(i)}
          >
            {s.id}
          </button>
        ))}
      </div>
    </section>
  );
}
