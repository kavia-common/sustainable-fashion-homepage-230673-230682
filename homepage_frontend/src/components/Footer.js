import React, { useState } from "react";

function SocialIcon({ label, children }) {
  return (
    <a className="socialIcon" href="#footer" aria-label={label} title={label}>
      {children}
    </a>
  );
}

function Icon({ pathD }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d={pathD} />
    </svg>
  );
}

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with info, links, social placeholders, and newsletter signup. */
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // No backend in this project; simulate a successful signup.
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <footer className="footer" id="footer" aria-label="Footer">
      <div className="container">
        <div className="footerInner">
          <div id="about">
            <h3 className="footerTitle">Sustainably</h3>
            <p className="footerText">
              Corporate essentials made with recycled and organic materials. Designed for longevity,
              produced with transparency.
            </p>

            <div className="socialRow" aria-label="Social links">
              <SocialIcon label="LinkedIn (placeholder)">
                <Icon pathD="M6 9h3v10H6V9zm1.5-4C8.3 5 9 5.7 9 6.5S8.3 8 7.5 8 6 7.3 6 6.5 6.7 5 7.5 5zM11 9h3v1.4c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1V19h-3v-4.6c0-1.1 0-2.5-1.6-2.5-1.6 0-1.8 1.2-1.8 2.4V19h-3V9z" />
              </SocialIcon>
              <SocialIcon label="Instagram (placeholder)">
                <Icon pathD="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm4.2-3.1a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
              </SocialIcon>
              <SocialIcon label="X / Twitter (placeholder)">
                <Icon pathD="M18.9 2H22l-6.8 7.8L22.7 22h-6.1l-4.8-6.3L6.3 22H3.2l7.3-8.3L2 2h6.2l4.3 5.7L18.9 2zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20z" />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="footerTitle">Store</h3>
            <div className="footerLinks" id="contact">
              <a href="#categories">Shop all</a>
              <a href="#reviews">Customer reviews</a>
              <a href="#sustainability">Sustainability</a>
              <a href="#footer">Support (placeholder)</a>
            </div>
          </div>

          <div>
            <h3 className="footerTitle">Company</h3>
            <div className="footerLinks">
              <a href="#about">About us</a>
              <a href="#footer">Careers (placeholder)</a>
              <a href="#footer">Press (placeholder)</a>
              <a href="#footer">Terms & privacy (placeholder)</a>
            </div>
          </div>

          <div id="sustainability">
            <h3 className="footerTitle">Newsletter</h3>
            <p className="footerText">
              Get updates on new drops, limited promotions, and sustainability reports.
            </p>

            <form className="newsletterForm" onSubmit={onSubmit}>
              <label className="srOnly" htmlFor="newsletterEmail">
                Email address
              </label>
              <input
                id="newsletterEmail"
                type="email"
                value={email}
                placeholder="you@company.com"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <button type="submit" className="btn" style={{ background: "var(--color-secondary)", color: "#111827" }}>
                Sign up
              </button>
            </form>

            {status === "success" ? (
              <p className="footerText" style={{ marginTop: "var(--space-3)", color: "rgba(245,158,11,.95)" }}>
                Thanks! You’re on the list.
              </p>
            ) : (
              <p className="footerText" style={{ marginTop: "var(--space-3)" }}>
                We’ll never share your email. Unsubscribe anytime.
              </p>
            )}
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Sustainably. All rights reserved.</span>
          <span>Made with responsible materials and classic design principles.</span>
        </div>
      </div>
    </footer>
  );
}
