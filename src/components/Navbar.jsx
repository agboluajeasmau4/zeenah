
// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="images/logo.png" alt="Brand Logo" />
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links desktop">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Actions */}
      <div className="nav-actions">
        <Link to="/wishlist" className="icon-btn">
          ♥
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </Link>

        <Link to="/cart" className="icon-btn">
          🛒
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>

        {/* Hamburger */}
        <button className="menu-toggle" onClick={() => setOpen(true)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setOpen(false)}>Shop</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
