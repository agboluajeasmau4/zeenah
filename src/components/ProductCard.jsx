// import React from "react";

// export default function ProductCard({ product, onQuickView, onToggleWishlist, isWishlisted }) {
//   return (
//     <article className="product-card" aria-label={product.name}>
//       <div className="product-media" onClick={() => onQuickView(product)}>
//         <img className="product-img" src={product.img} alt={product.name} />
//       </div>

//       <div className="product-info">
//         <h3 className="product-name">{product.name}</h3>
//         <div className="product-meta">
//           <span className="product-price">${product.price.toFixed(2)}</span>
//           <span className="product-rating">⭐ {product.rating}</span>
//         </div>

//         <div className="product-actions">
//           <button className="add-to-cart">Add to cart</button>
//           <button
//             className={`wish-btn ${isWishlisted ? "active" : ""}`}
//             onClick={() => onToggleWishlist(product.id)}
//             aria-pressed={isWishlisted}
//             title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//           >
//             {isWishlisted ? "♥" : "♡"}
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }
import React from "react";
import { useCart } from "../context/CartContext"; // ✅ import cart context

export default function ProductCard({
  product,
  onQuickView,
  onToggleWishlist,
  isWishlisted,
}) {
  const { addToCart } = useCart(); // ✅ get addToCart function

  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-media" onClick={() => onQuickView(product)}>
        <img className="product-img" src={product.img} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>

        <div className="product-actions">
          {/* ✅ Now this actually adds to cart */}
          {/* <button
            className="add-to-cart"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button> */}
           <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart 🛒
      </button>

          <button
            className={`wish-btn ${isWishlisted ? "active" : ""}`}
            onClick={() => onToggleWishlist(product.id)}
            aria-pressed={isWishlisted}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}
