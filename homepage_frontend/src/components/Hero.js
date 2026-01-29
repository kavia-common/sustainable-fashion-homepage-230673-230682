import React from "react";

// PUBLIC_INTERFACE
export default function Hero() {
  /** Top hero banner highlighting promotion and key value props. */
  return (
    <section className="heroWrap" aria-label="Promotions">
      <div className="container hero">
        <div>
          <span className="heroBadge">
            <span aria-hidden="true">●</span> Up to 40% off eco‑basics this week
          </span>

          <h1 className="heroTitle">
            Sustainable staples for a <em>sharper</em> everyday wardrobe.
          </h1>

          <p className="heroText">
            Corporate-ready essentials crafted with recycled fibers, low-impact dyes, and transparent
            sourcing—built to last, designed to move.
          </p>

          <div className="heroActions">
            <a className="btn" href="#categories">
              Shop the collection
            </a>
            <a className="btn btnSecondary" href="#sustainability">
              Our sustainability promise
            </a>
          </div>
        </div>

        <aside className="heroCard" aria-label="Highlights">
          <h2 className="sectionTitle" style={{ fontSize: "var(--text-xl)" }}>
            Today’s highlights
          </h2>
          <p className="sectionSubtitle" style={{ marginTop: "var(--space-2)" }}>
            Curated for comfort, durability, and a cleaner footprint.
          </p>

          <div className="heroStats" role="list">
            <div className="stat" role="listitem">
              <div className="statLabel">Materials</div>
              <div className="statValue">Organic & recycled</div>
            </div>
            <div className="stat" role="listitem">
              <div className="statLabel">Shipping</div>
              <div className="statValue">Carbon‑smart options</div>
            </div>
            <div className="stat" role="listitem">
              <div className="statLabel">Quality</div>
              <div className="statValue">Made for repeat wear</div>
            </div>
            <div className="stat" role="listitem">
              <div className="statLabel">Savings</div>
              <div className="statValue">Member perks</div>
            </div>
          </div>
        </aside>
      </div>

      <div className="container">
        <div className="trustBar" role="list" aria-label="Brand assurances">
          <div className="trustItem" role="listitem">
            <div className="trustTitle">Certified fibers</div>
            <div className="trustText">Organic cotton, recycled blends, and verified sourcing.</div>
          </div>
          <div className="trustItem" role="listitem">
            <div className="trustTitle">Transparent pricing</div>
            <div className="trustText">Material + labor breakdowns included on every drop.</div>
          </div>
          <div className="trustItem" role="listitem">
            <div className="trustTitle">Low-impact packaging</div>
            <div className="trustText">Minimal, recyclable, and designed for re-use.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
