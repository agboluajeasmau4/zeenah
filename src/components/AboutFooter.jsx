// // src/components/AboutFooter.jsx
// import React from "react";
// import "./AboutFooter.css";

// const AboutFooter = () => {
//   return (
//     <footer className="about-footer">
//       <p>&copy; {new Date().getFullYear()} [Your Brand Name]. All rights reserved.</p>
//       <div className="footer-links">
//         <a href="/shop">Shop</a>
//         <a href="/about">About</a>
//         <a href="/contact">Contact</a>
//       </div>
//     </footer>
//   );
// };

// export default AboutFooter;
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <h4>Shop</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <p className="copy">© 2025 Zeenah Clothique. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
