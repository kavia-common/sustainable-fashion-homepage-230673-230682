import React from "react";

function Stars({ rating }) {
  const full = Math.max(0, Math.min(5, rating));
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
export default function ReviewCard({ name, role, rating, quote }) {
  /** Single review tile used in the reviews grid. */
  return (
    <article className="card" style={{ padding: "var(--space-5)" }} aria-label={`Review by ${name}`}>
      <div className="reviewTop">
        <div style={{ fontWeight: 700, color: "rgba(30,58,138,.92)" }}>{name}</div>
        <Stars rating={rating} />
      </div>

      <p className="reviewText">“{quote}”</p>

      <div className="reviewName">{name}</div>
      <div className="reviewMeta">{role}</div>
    </article>
  );
}
