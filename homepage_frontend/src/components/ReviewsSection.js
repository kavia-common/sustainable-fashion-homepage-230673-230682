import React, { useMemo } from "react";
import ReviewCard from "./ReviewCard";

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

  return (
    <section id="reviews" className="section" aria-label="Customer reviews">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <h2 className="sectionTitle">Trusted by everyday professionals</h2>
            <p className="sectionSubtitle">
              Real feedback from customers who wear these pieces on repeat.
            </p>
          </div>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
            Average rating: <strong style={{ color: "var(--color-text)" }}>4.8</strong>
          </span>
        </div>

        <div className="grid3">
          {reviews.slice(0, 6).map((r) => (
            <ReviewCard key={`${r.name}-${r.role}`} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
