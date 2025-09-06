import React from "react";
import "./FeaturedProducts.css";

const products = [
  { name: "Classic Black Suit", price: "$120", img: "/images/classic-black-suit.jpg" },
  { name: "Gold Evening Dress", price: "$180", img: "/images/golden-evening-dress.jpg" },
  { name: "Luxury Handbag", price: "$90", img: "/images/pink-handbags.jpg" },
  { name: "Stylish Sneakers", price: "$70", img: "/images/stylish-sneakers.png" },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((p, idx) => (
          <div className="product-card" key={idx}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
