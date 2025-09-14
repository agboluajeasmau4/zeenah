// import React from "react";
// import "./FeaturedProducts.css";

// const products = [
 
//   { id: 14, name: "Oversized Hoodie – Black & Beige", description:"A cozy two-tone black and beige hoodie designed for everyday casual wear.", price: 9500, category: "Men", size: ["M","L","XL"], colors:["Black","Beige"], img:"images/Two-Tone Black & Beige Hoodie – Unisex Casual Wear.png", rating:4.6 },

//   { id: 15, name: "Striped Hoodie – Green & White", description:"A stylish green and white striped hoodie perfect for layering and comfort.", price: 9500, category: "Men", size: ["M","L","XL"], colors:["Green","White"], img:"images/Green & White Striped Hoodie – Relaxed Fit.png", rating:4.5 },

//   { id: 21, name: "Hoodie Bundle – 3PCS (Navy, Camel, Black)", description:"A 3PCS hoodie bundle in navy, camel, and black for versatile wear.", price: 30000, category: "Men", size: ["M","L","XL"], colors:["Navy Blue","Camel","Black"], img:"images/3PCS Hoodie Bundle (Navy, Camel, Black) – Everyday Casual Pack.png", rating:4.9 },

// ];

// const FeaturedProducts = () => {
//   return (
//     <section className="featured-products">
//       <h2>Featured Products</h2>
//       <div className="products-grid">
//         {products.map((p, idx) => (
//           <div className="product-card" key={idx}>
//             <img src={p.img} alt={p.name} />
//             <h3>{p.name}</h3>
//             <p>{p.price}</p>
//             <button>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;









import React, { useState, useEffect } from "react";
import "./FeaturedProducts.css";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import QuickViewModal from "../components/QuickViewModal";

const products = [
  {
    id: 14,
    name: "Oversized Hoodie – Black & Beige",
    description: "A cozy two-tone black and beige hoodie designed for everyday casual wear.",
    price: 15000,
    category: "Men",
    size: ["M","L","XL"],
    colors:["Black","Beige"],
    img:"images/two-tone-black-beige-hoodie.png",
    rating:4.6
  },
  {
    id: 15,
    name: "Striped Hoodie – Green & White",
    description:"A stylish green and white striped hoodie perfect for layering and comfort.",
    price: 15000,
    category: "Men",
    size: ["M","L","XL"],
    colors:["Green","White"],
    img:"images/green-white-striped-hoodie.png",
    rating:4.5
  },
  {
    id: 21,
    name: "Hoodie Bundle – 3PCS (Navy, Camel, Black)",
    description:"A 3PCS hoodie bundle in navy, camel, and black for versatile wear.",
    price: 45000,
    category: "Men",
    size: ["M","L","XL"],
    colors:["Navy Blue","Camel","Black"],
    img:"images/hoodie-bundle-3pcs-navy-camel-black.png",
    rating:4.9
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  // ✅ Wishlist persistence
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // ✅ Quick view modal
  const [quickProduct, setQuickProduct] = useState(null);

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onQuickView={setQuickProduct} // opens modal
            onToggleWishlist={toggleWishlist}
            isWishlisted={wishlist.includes(p.id)}
          />
        ))}
      </div>

      {/* ✅ Quick view modal */}
      <QuickViewModal
        product={quickProduct}
        onClose={() => setQuickProduct(null)}
      />
    </section>
  );
};

export default FeaturedProducts;
