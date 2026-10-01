"use client";

import { useEffect, useState } from "react";
import { useBag } from "./BagProvider";

const NAV = [
  { href: "#top", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#oversized", label: "Oversized T-Shirts" },
  { href: "#shirts", label: "Shirts" },
  { href: "#lookbook", label: "Lookbook" },
] as const;

export default function Header() {
  const { count, open, setOpen } = useBag();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          Pink Static
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-links">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-utils">
          <button
            type="button"
            className="icon-btn"
            aria-label="Search (concept — not connected)"
            title="Search (concept demo)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button
            type="button"
            className="icon-btn"
            aria-label="Account (concept — not connected)"
            title="Account (concept demo)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" />
            </svg>
          </button>
          <button
            type="button"
            className="icon-btn bag-btn"
            aria-label={`Open demo bag${count ? `, ${count} items` : ", empty"}`}
            aria-controls="bag-panel"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V7a3 3 0 0 1 6 0v1" />
            </svg>
            <span className="bag-badge" aria-hidden="true">
              {count}
            </span>
          </button>
          <a href="#shop" className="btn-shop-now nav-desktop">
            Shop now <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile${menuOpen ? " open" : ""}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className="nav-links">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#shop" className="btn-shop-now" onClick={closeMenu}>
            Shop now <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
