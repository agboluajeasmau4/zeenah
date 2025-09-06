// // src/components/AboutNavbar.jsx
// import React from "react";
// import "./AboutNavbar.css";

// const AboutNavbar = () => {
//   return (
//     <nav className="about-navbar">
//       <div className="logo">[Your Brand]</div>
//       <ul className="nav-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="/shop">Shop</a></li>
//         <li><a href="/about" className="active">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default AboutNavbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutNavbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Zeenah Clothique</div>

      {/* Links */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <span className="search">🔍</span>
        <span className="cart">🛒<span className="cart-count">0</span></span>
      </div>

      {/* Hamburger */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
