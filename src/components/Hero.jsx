


import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Elevate Your Style</h1>
        <p>Discover the latest trends in fashion</p>

        {/* ✅ Wrap button inside Link */}
        <Link to="/shop">
          <button className="cta-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
