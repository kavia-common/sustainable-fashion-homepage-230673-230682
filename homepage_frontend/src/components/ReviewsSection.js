import React, { useMemo } from "react";
import ReviewCard from "./ReviewCard";

function StarsInline({ rating }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  const stars = Array.from({ length: 5 }, (_, i) => i < full);

  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {stars.map((isFull, idx) => (
        <span key={idx} aria-hidden="true">
          {isFull ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

// PUBLIC_INTERFACE
export default function ReviewsSection() {
  /** Customer reviews in a responsive grid (simple, dependency-free). */
  const reviews = useMemo(
    () => [
      {
        name: "Amina R.",
        role: "Operations Manager",
        rating: 5,
        quote: "The fit is sharp, the fabric feels premium, and I love knowing it’s responsibly sourced.",
      },
      {
        name: "Jordan K.",
        role: "Consultant",
        rating: 5,
        quote: "The eco-basics bundle is a great value—perfect for travel and long client days.",
      },
      {
        name: "Priya S.",
        role: "Product Lead",
        rating: 4,
        quote: "Clean design, sturdy stitching, and the colors hold up beautifully after washing.",
      },
      {
        name: "Mateo G.",
        role: "Finance Analyst",
        rating: 5,
        quote: "Subtle, classic pieces that pair with everything. Shipping was fast and packaging minimal.",
      },
      {
        name: "Hannah L.",
        role: "Team Coordinator",
        rating: 4,
        quote: "Love the transparency on materials and the overall comfort. The blazer is a staple now.",
      },
      {
        name: "Chris N.",
        role: "Designer",
        rating: 5,
        quote: "The details are refined without being flashy—exactly the corporate-casual balance I wanted.",
      },
    ],
    []
  );

  const ratingAverage = 4.8;
  const ratingCount = 1264;

  return (
    <section id="reviews" className="section" aria-label="Customer reviews">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <h2 className="sectionTitle">Trusted by everyday professionals</h2>
            <p className="sectionSubtitle">
              Feedback from customers who want classic pieces that perform in real workdays—without the
              footprint.
            </p>
          </div>

          {/* Optional rating summary: kept static and lightweight. */}
          <div aria-label="Rating summary" style={{ textAlign: "right" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "flex-end" }}>
              <StarsInline rating={ratingAverage} />
              <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
                <strong style={{ color: "var(--color-text)" }}>{ratingAverage.toFixed(1)}</strong>/5
              </span>
            </div>
            <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", marginTop: 4 }}>
              Based on {ratingCount.toLocaleString()} reviews
            </div>
          </div>
        </div>

        <div className="grid3" role="list" aria-label="Customer review highlights">
          {reviews.slice(0, 6).map((r) => (
            <div key={`${r.name}-${r.role}`} role="listitem">
              <ReviewCard {...r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
