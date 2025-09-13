import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import "./WishlistPage.css";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { cart, addToCart } = useCart();

  if (wishlist.length === 0) {
    return <p className="wishlist-empty">Your wishlist is empty ♥</p>;
  }

  // Helper: check if product already exists in cart
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      <ul className="wishlist-list">
        {wishlist.map((product) => (
          <li key={product.id} className="wishlist-item">
            <img src={product.img} alt={product.name} className="wishlist-img" />

            <div className="wishlist-details">
              <h3>{product.name}</h3>
              <p>₦{product.price.toLocaleString()}</p>
            </div>

            <div className="wishlist-actions">
              {/* 🛒 If product is in cart, show ✅ instead */}
              {isInCart(product.id) ? (
                <span className="wishlist-btn in-cart" title="Already in cart">
                  ✅
                </span>
              ) : (
                <button
                  className="wishlist-btn add-cart"
                  onClick={() => addToCart(product)}
                  title="Add to cart"
                >
                  🛒
                </button>
              )}

              <button
                className="wishlist-btn remove"
                onClick={() => toggleWishlist(product)}
                title="Remove from wishlist"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
