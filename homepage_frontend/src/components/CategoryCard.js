import React from "react";

function CategoryIcon({ variant }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" };

  if (variant === "women") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path {...common} d="M22 18c0 6 5 10 10 10s10-4 10-10" />
        <path {...common} d="M26 28 18 50h28l-8-22" />
        <path {...common} d="M24 50v8m16-8v8" />
      </svg>
    );
  }
  if (variant === "men") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path {...common} d="M20 16h24l-4 10v28H24V26z" />
        <path {...common} d="M26 26h12" />
        <path {...common} d="M28 16v10m8-10v10" />
      </svg>
    );
  }
  if (variant === "kids") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path {...common} d="M24 20c0 5 4 9 8 9s8-4 8-9" />
        <path {...common} d="M18 46c4-9 8-14 14-14s10 5 14 14" />
        <path {...common} d="M22 46v12m20-12v12" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path {...common} d="M18 28h28v24H18z" />
      <path {...common} d="M22 28c0-8 4-14 10-14s10 6 10 14" />
      <path {...common} d="M26 40h12" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export default function CategoryCard({ title, description, href, iconVariant }) {
  /** A single category tile. */
  return (
    <a className="card" href={href} aria-label={`Shop ${title}`}>
      <div className="categoryMedia">
        <CategoryIcon variant={iconVariant} />
      </div>
      <div className="categoryBody">
        <div className="categoryTitleRow">
          <h3 className="categoryTitle">{title}</h3>
          <span aria-hidden="true" style={{ color: "var(--color-primary)", opacity: 0.7, fontWeight: 700 }}>
            →
          </span>
        </div>
        <p className="categoryHint">{description}</p>
        <span className="categoryLink">
          Explore <span aria-hidden="true">›</span>
        </span>
      </div>
    </a>
  );
}
