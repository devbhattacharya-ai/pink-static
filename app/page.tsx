import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BagPanel from "@/components/BagPanel";
import { ShopGrid, CategoryGrid } from "@/components/ProductGrid";
import EditorialTiles from "@/components/EditorialTiles";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div id="top">
        <Header />
        <BagPanel />

        <main id="main" tabIndex={-1}>
          <Hero />

          <section id="shop" className="section" aria-labelledby="shop-title">
            <div className="section-inner">
              <p className="section-label">Shop</p>
              <h2 id="shop-title">The collection</h2>
              <p className="section-lead">
                Eight concept pieces — oversized tees and shirts. Add anything to
                the demo bag; checkout stays blocked.
              </p>
              <ShopGrid />
            </div>
          </section>

          <section
            id="oversized"
            className="section section-alt"
            aria-labelledby="oversized-title"
          >
            <div className="section-inner">
              <p className="section-label">Oversized T-Shirts</p>
              <h2 id="oversized-title">Built loud. Worn soft.</h2>
              <p className="section-lead">
                Dropped shoulders, heavy cotton, neon backs — for Gen Z that
                wants the room to notice.
              </p>
              <CategoryGrid category="oversized" />
            </div>
          </section>

          <section id="shirts" className="section" aria-labelledby="shirts-title">
            <div className="section-inner">
              <p className="section-label">Shirts</p>
              <h2 id="shirts-title">Camp collars. Clean signal.</h2>
              <p className="section-lead">
                Relaxed shirts that carry the same static energy without the
                full tee shout.
              </p>
              <CategoryGrid category="shirts" />
            </div>
          </section>

          <section
            id="lookbook"
            className="section section-alt"
            aria-labelledby="lookbook-title"
          >
            <div className="section-inner">
              <p className="section-label">Lookbook</p>
              <h2 id="lookbook-title">Campaign frames</h2>
              <p className="section-lead">
                Still frames from the Drop 01 shoot — concept imagery only.
              </p>
              <EditorialTiles />
            </div>
          </section>

          <section
            id="bag"
            className="section concept-band"
            aria-labelledby="concept-title"
          >
            <div className="section-inner concept-inner">
              <p className="section-label">Concept demo</p>
              <h2 id="concept-title">Self-initiated storefront concept</h2>
              <p>
                Pink Static is a campaign-led streetwear demo — not a live client
                store. The shopping bag lets you try the flow;{" "}
                <strong>no payment is collected</strong>, and nothing ships.
              </p>
              <a href="#shop" className="btn-primary">
                Shop collection <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-brand">Pink Static</p>
            <p className="footer-note">
              Concept demo · English only · Demo bag only — no payment
            </p>
            <nav aria-label="Footer">
              <ul className="footer-links">
                <li>
                  <a href="#shop">Shop</a>
                </li>
                <li>
                  <a href="#oversized">Oversized</a>
                </li>
                <li>
                  <a href="#shirts">Shirts</a>
                </li>
                <li>
                  <a href="#lookbook">Lookbook</a>
                </li>
                <li>
                  <a href="#bag">Concept</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
