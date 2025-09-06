import React from "react";
import AboutNavbar from "../components/AboutNavbar";
import AboutHero from "../components/AboutHero";
import Newsletter from "../components/Newsletter";
import AboutFooter from "../components/AboutFooter";
import "./About.css";

const About = () => {
  return (
    <>
      <AboutNavbar />
      <AboutHero />

      <div className="about-container">
        {/* History / Brand Story */}
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in <strong>2015</strong>, [Your Brand Name] started as a
            small sewing studio with a passion for creating unique, tailored
            pieces. What began with custom orders for friends and family has
            grown into a global fashion brand, shipping handcrafted designs to
            customers worldwide.
          </p>
          <img
            src="/images/elegant-product4.jpg"
            alt="Sewing Studio"
            className="about-image"
          />
        </section>

        {/* Values */}
        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div>
              <h3>Quality</h3>
              <p>Every piece is handcrafted using premium fabrics.</p>
            </div>
            <div>
              <h3>Sustainability</h3>
              <p>Eco-friendly fabrics and ethical production processes.</p>
            </div>
            <div>
              <h3>Community</h3>
              <p>Clothing designed to inspire confidence and connection.</p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/elegant-product4.jpg" alt="Founder" />
              <h3>Jane Doe</h3>
              <p>Founder & Lead Designer</p>
            </div>
            <div className="team-member">
              <img src="/images/elegant-product5.jpg" alt="Manager" />
              <h3>John Smith</h3>
              <p>Operations Manager</p>
            </div>
            <div className="team-member">
              <img src="/images/elegant-product2.jpg" alt="Marketing" />
              <h3>Emily Rose</h3>
              <p>Marketing & Community</p>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="about-reviews">
          <h2>What Our Customers Say</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <p>
                “The craftsmanship is incredible. I feel confident and stylish
                every time I wear their clothes.”
              </p>
              <h4>- Sarah K.</h4>
            </div>
            <div className="review-card">
              <p>
                “Finally, a brand that combines sustainability with amazing
                style. Love every purchase!”
              </p>
              <h4>- David M.</h4>
            </div>
            <div className="review-card">
              <p>
                “From casual wear to special events, their designs are always my
                first choice.”
              </p>
              <h4>- Linda P.</h4>
            </div>
          </div>
        </section>
      </div>
      <Newsletter />
      <AboutFooter />
      
    </>
  );
};

export default About;
