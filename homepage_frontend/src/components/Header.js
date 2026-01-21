import React, { useMemo, useState } from "react";

/**
 * Simple inline icon for the brand mark.
 */
function LeafMarkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.4 3.6c-5.7.2-10.3 2-13.6 5.2C3.5 12.2 2.9 16.6 3 20.9c0 .6.5 1.1 1.1 1.1 4.3.1 8.7-.5 12.1-3.8 3.2-3.3 5-8 5.2-13.6 0-.6-.4-1.1-1-1zM6.6 18.4c.2-3.1 1.3-6 3.3-8 2.1-2.1 5-3.1 8.2-3.3-.2 3.2-1.2 6.2-3.3 8.2-2 2-4.9 3.1-8.2 3.1z"
      />
      <path
        fill="currentColor"
        d="M7 17c-.4 0-.7-.3-.7-.7 0-4.7 3.7-8.3 8.3-8.3.4 0 .7.3.7.7s-.3.7-.7.7c-3.9 0-6.9 3.1-6.9 6.9 0 .4-.3.7-.7.7z"
      />
    </svg>
  );
}

// PUBLIC_INTERFACE
export default function Header() {
  /** Sticky header with responsive nav; uses anchor links to page sections. */
  const navItems = useMemo(
    () => [
      { label: "Shop", href: "#categories" },
      { label: "About", href: "#about" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="headerInner">
          <a className="brand" href="#top" aria-label="Sustainably homepage">
            <span className="brandMark" aria-hidden="true">
              <LeafMarkIcon />
            </span>
            <span className="brandText">
              <span className="brandName">Sustainably</span>
              <span className="brandTagline">Corporate essentials, responsibly made</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="headerCtas" aria-label="Header actions">
            <a className="btn btnSecondary" href="#reviews">
              Reviews
            </a>
            <a className="btn" href="#categories">
              Shop now
            </a>
          </div>

          <button
            type="button"
            className="mobileNavToggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobileMenu ${mobileOpen ? "mobileMenuOpen" : ""}`} aria-label="Mobile menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn" href="#categories" onClick={() => setMobileOpen(false)}>
            Shop now
          </a>
        </div>
      </div>
    </header>
  );
}
