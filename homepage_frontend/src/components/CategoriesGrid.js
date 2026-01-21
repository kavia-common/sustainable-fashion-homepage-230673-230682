import React, { useMemo } from "react";
import CategoryCard from "./CategoryCard";

// PUBLIC_INTERFACE
export default function CategoriesGrid() {
  /** Product category section. Data is local for now (no backend calls). */
  const categories = useMemo(
    () => [
      {
        title: "Women",
        description: "Polished silhouettes and comfortable layers made with certified fibers.",
        href: "#categories",
        iconVariant: "women",
      },
      {
        title: "Men",
        description: "Tailored essentials with durable construction and refined details.",
        href: "#categories",
        iconVariant: "men",
      },
      {
        title: "Kids",
        description: "Soft, resilient basics designed for movement and easy care.",
        href: "#categories",
        iconVariant: "kids",
      },
      {
        title: "Accessories",
        description: "Bags and add-ons built from recycled materials and smart design.",
        href: "#categories",
        iconVariant: "accessories",
      },
    ],
    []
  );

  return (
    <section id="categories" className="section" aria-label="Shop categories">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <h2 className="sectionTitle">Shop by category</h2>
            <p className="sectionSubtitle">
              Everything you need for a classic, professional wardrobe—made responsibly.
            </p>
          </div>
          <a className="btn btnSecondary" href="#contact">
            Need help choosing?
          </a>
        </div>

        <div className="grid4">
          {categories.map((c) => (
            <CategoryCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
