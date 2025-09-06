



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // ✅ import cart context
// import "./Navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { cart } = useCart(); // ✅ access cart state

//   // Calculate total items in cart (summing qty)
//   const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">Zeenah Clothique</div>

//       {/* Links */}
//       <ul className={`nav-links ${open ? "open" : ""}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/shop">Shop</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/blog">Blog</Link></li>
//       </ul>

//       {/* Icons */}
//       <div className="nav-icons">
//         <span className="search">🔍</span>
//         <Link to="/cart" className="cart">
//           🛒<span className="cart-count">{cartCount}</span>
//         </Link>
//       </div>

//       {/* Hamburger */}
//       <div className="menu-toggle" onClick={() => setOpen(!open)}>
//         ☰
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">Zeenah Clothique</div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <div className="nav-icons">
        <span className="search">🔍</span>
        <Link to="/cart" className="cart">
          🛒 <span className="cart-count">{cartCount}</span>
        </Link>
      </div>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>☰</div>
    </nav>
  );
};

export default Navbar;
