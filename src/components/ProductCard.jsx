


import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext"; // ✅ import wishlist

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist(); // ✅ hook

  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-media" onClick={() => onQuickView?.(product)}>
        <img className="product-img" src={product.img} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-meta">
          <span className="product-price">
            ₦{product.price.toLocaleString()}
          </span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>

        <div className="product-actions">
          {/* 🛒 Add to Cart */}
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart 🛒
          </button>

          {/* ❤️ Wishlist toggle */}
          {/* <button
            className={`wish-btn ${isWishlisted(product.id) ? "active" : ""}`}
            onClick={() => toggleWishlist(product.id)}
            aria-pressed={isWishlisted(product.id)}
            title={
              isWishlisted(product.id)
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
          >
            {isWishlisted(product.id) ? "♥" : "♡"}
          </button> */}

          <button
              className={`wish-btn ${isWishlisted(product.id) ? "active" : ""}`}
              onClick={() => toggleWishlist(product)} // ✅ pass product, not just id
              aria-pressed={isWishlisted(product.id)}
              title={
                isWishlisted(product.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              {isWishlisted(product.id) ? "♥" : "♡"}
            </button>

        </div>
      </div>
    </article>
  );
}
