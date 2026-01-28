import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoriesGrid from "./components/CategoriesGrid";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";

// PUBLIC_INTERFACE
function App() {
  /** Application root that composes the complete homepage (no backend calls). */
  return (
    <div className="appRoot" id="top">
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <CategoriesGrid />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
