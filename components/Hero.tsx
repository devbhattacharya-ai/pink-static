"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const VIEWS = [
  {
    id: 0,
    label: "Front",
    src: "/landing-model.webp",
    alt: "Black oversized tee with a pink back graphic",
    transform: "none",
  },
  {
    id: 1,
    label: "Zoom",
    src: "/landing-model.webp",
    alt: "Close crop of oversized tee graphic",
    transform: "scale(1.18) translateY(3%)",
  },
  {
    id: 2,
    label: "Shirts",
    src: "/landing-shirts.webp",
    alt: "Rear view of a grey oversized graphic shirt",
    transform: "none",
  },
] as const;

export default function Hero() {
  const [view, setView] = useState(0);
  const current = VIEWS[view];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = document.querySelector<HTMLElement>(".editorial-hero");
    const wordmark = document.querySelector<HTMLElement>(".hero-wordmark");
    if (!hero || !wordmark) return;

    let frame = 0;
    let heroTop = 0;
    let heroTravel = 1;

    const measure = () => {
      heroTop = hero.offsetTop;
      const sticky = hero.querySelector<HTMLElement>(".hero-sticky");
      heroTravel = Math.max(1, hero.offsetHeight - (sticky?.offsetHeight ?? 0));
    };

    const tick = () => {
      frame = 0;
      document.body.classList.toggle("has-scrolled", window.scrollY > 40);
      const progress = reduced.matches
        ? 0
        : Math.max(
            0,
            Math.min(1, (window.scrollY - heroTop) / heroTravel)
          );
      wordmark.style.setProperty(
        "--wordmark-x",
        `${-progress * Math.min(window.innerWidth * 0.35, 480)}px`
      );
      hero.style.setProperty(
        "--campaign-copy-y",
        `${-progress * 14}px`
      );
      const model = hero.querySelector<HTMLElement>(".landing-model");
      if (model && !reduced.matches) {
        const depth = 1 + progress * 0.08;
        const base = current.transform === "none" ? "" : current.transform + " ";
        // depth scale composes; view transform applied via style on img
        model.style.setProperty("--model-depth", String(depth));
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    measure();
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      schedule();
    });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [current.transform]);

  return (
    <section
      className="hero editorial-hero"
      id="drop"
      aria-labelledby="landing-title"
    >
      <div className="hero-sticky">
        <p className="hero-wordmark" aria-hidden="true">
          PINK STATIC
        </p>
        <div className="landing-stage">
          <Image
            className="landing-model"
            src={current.src}
            alt={current.alt}
            width={2048}
            height={2560}
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
            style={{
              transform:
                current.transform === "none"
                  ? "scale(var(--model-depth, 1))"
                  : `${current.transform} scale(var(--model-depth, 1))`,
            }}
          />
        </div>
        <div className="landing-copy" style={{ translate: "0 var(--campaign-copy-y, 0px)" }}>
          <p className="hero-eyebrow">Drop 01</p>
          <h1 id="landing-title">A different state of mind.</h1>
          <p className="hero-support">
            Oversized t-shirts and shirts for Gen Z. Bold design. Premium
            comfort.
          </p>
          <div className="view-controls" role="group" aria-label="Campaign view">
            {VIEWS.map((v, i) => (
              <button
                key={v.id}
                type="button"
                data-view={i}
                className={i === view ? "active" : undefined}
                aria-pressed={i === view}
                onClick={() => setView(i)}
              >
                {v.label}
              </button>
            ))}
          </div>
          <a href="#shop" className="btn-primary">
            Shop collection <span aria-hidden="true">↗</span>
          </a>
          <p className="concept-chip">Self-initiated concept demo. No payment.</p>
        </div>
      </div>
    </section>
  );
}
