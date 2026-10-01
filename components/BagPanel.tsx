"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useBag } from "./BagProvider";

export default function BagPanel() {
  const { lines, open, setOpen, remove, setQty, clear, count } = useBag();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  useEffect(() => {
    if (!open) {
      setCheckoutMsg(false);
      return;
    }
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, setOpen]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const root = panelRef.current;
    function trap(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    root.addEventListener("keydown", trap);
    return () => root.removeEventListener("keydown", trap);
  }, [open, lines, checkoutMsg]);

  if (!open) return null;

  return (
    <div className="bag-overlay" role="presentation">
      <button
        type="button"
        className="bag-backdrop"
        aria-label="Close demo bag"
        onClick={() => setOpen(false)}
      />
      <div
        ref={panelRef}
        id="bag-panel"
        className="bag-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="bag-panel-head">
          <h2 id={titleId}>Demo bag</h2>
          <p className="bag-panel-sub">
            {count === 0
              ? "Empty — add a concept piece from the collection."
              : `${count} item${count === 1 ? "" : "s"} · concept only`}
          </p>
          <button
            ref={closeRef}
            type="button"
            className="bag-close"
            aria-label="Close demo bag"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="bag-panel-body">
          {lines.length === 0 ? (
            <p className="bag-empty">
              Your demo bag is empty. Browse the collection and tap{" "}
              <strong>Add to bag</strong>.
            </p>
          ) : (
            <ul className="bag-lines">
              {lines.map((line) => (
                <li key={line.product.id} className="bag-line">
                  <div
                    className="bag-swatch"
                    style={{
                      background: line.product.color,
                      color: line.product.accent,
                    }}
                    aria-hidden="true"
                  >
                    ★
                  </div>
                  <div className="bag-line-meta">
                    <p className="bag-line-name">{line.product.name}</p>
                    <p className="bag-line-price">{line.product.price}</p>
                    <div className="bag-qty">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${line.product.name}`}
                        onClick={() => setQty(line.product.id, line.qty - 1)}
                      >
                        −
                      </button>
                      <span aria-live="polite">{line.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${line.product.name}`}
                        onClick={() => setQty(line.product.id, line.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bag-remove"
                    aria-label={`Remove ${line.product.name} from bag`}
                    onClick={() => remove(line.product.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bag-panel-foot">
          {checkoutMsg ? (
            <p className="bag-blocked" role="status" aria-live="polite">
              Concept demo — no payment
            </p>
          ) : null}
          <button
            type="button"
            className="btn-checkout"
            disabled={lines.length === 0}
            onClick={() => setCheckoutMsg(true)}
          >
            Checkout
          </button>
          {lines.length > 0 ? (
            <button type="button" className="btn-clear-bag" onClick={clear}>
              Clear bag
            </button>
          ) : null}
          <p className="bag-footnote">
            Demo shopping bag only. No payment is collected.
          </p>
        </div>
      </div>
    </div>
  );
}
