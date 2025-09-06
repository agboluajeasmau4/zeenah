import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    // Replace with your Formspree endpoint
    const response = await fetch("https://formspree.io/f/xwpnqzqv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Message sent successfully!");
      e.target.reset(); // clear form
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch with us today.</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Our Information</h2>
          <p><strong>Email:</strong> support@zeenahclothique.com</p>
          <p><strong>Phone:</strong> +234 800 123 4567</p>
          <p><strong>Address:</strong> 123 Fashion Street, Lagos, Nigeria</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </section>

      <section className="contact-map">
        <iframe
          title="Zeenah Clothique Location"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
