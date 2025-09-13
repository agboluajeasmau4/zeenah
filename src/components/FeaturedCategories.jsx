import React from "react";
import "./FeaturedCategories.css";

const categories = [
  { title: "Men's Collection", img: "images/Two-Tone Black & Beige Hoodie – Unisex Casual Wear.png" },
  { title: "Women's Collection", img: "images/Abaya-with-hijab-Sky-Blue.jpg" },
  { title: "Accessories", img: "images/accessories.jpg" },
  { title: "Kids", img: "/images/elegant-product3.jpg" },
];

const FeaturedCategories = () => {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div className="category-card" key={idx}>
            <img src={cat.img} alt={cat.title} />
            <div className="overlay">{cat.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
