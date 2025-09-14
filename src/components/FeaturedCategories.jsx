import React from "react";
import "./FeaturedCategories.css";

const categories = [
  { title: "Men's Collection", img: "images/two-tone-black-beige-hoodie.png" },
  { title: "Women's Collection", img: "images/abaya-with-hijab-sky-blue.jpg" },
  { title: "Accessories", img: "images/accessories.jpg" },
  { title: "Kids", img:"images/open-abaya-grey-nida.jpg" },
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
