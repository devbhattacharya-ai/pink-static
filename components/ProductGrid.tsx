"use client";

import { PRODUCTS, type Product } from "@/lib/products";
import { useBag } from "./BagProvider";

function Card({ product }: { product: Product }) {
  const { add } = useBag();
  return (
    <article className="product-card">
      <div
        className="product-art"
        style={{ background: product.color, color: product.accent }}
        aria-hidden="true"
      >
        <span className="product-star">★</span>
        <span className="product-cat-tag">
          {product.category === "oversized" ? "Oversized" : "Shirt"}
        </span>
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.blurb}</p>
        <div className="product-row">
          <span className="product-price">{product.price}</span>
          <button
            type="button"
            className="btn-add"
            onClick={() => add(product)}
            aria-label={`Add ${product.name} to demo bag`}
          >
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
}

export function ShopGrid() {
  return (
    <div className="product-grid">
      {PRODUCTS.map((p) => (
        <Card key={p.id} product={p} />
      ))}
    </div>
  );
}

export function CategoryGrid({
  category,
}: {
  category: Product["category"];
}) {
  const items = PRODUCTS.filter((p) => p.category === category);
  return (
    <div className="product-grid">
      {items.map((p) => (
        <Card key={p.id} product={p} />
      ))}
    </div>
  );
}
