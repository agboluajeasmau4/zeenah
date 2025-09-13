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
          <p><strong>Email:</strong>zeenahclothique@gmail.com</p>
          <p><strong>Phone:</strong> +234 813 458 0704</p>

          <p><strong>Address:</strong> 15, Sule Alaso Ijanikin, Lagos.</p>
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
{/* 
      <section className="contact-map">
        <iframe
          title="Zeenah Clothique Location"
          src=""
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section> */}
      <section className="contact-map">
  <div className="map-container">
    <iframe
      title="Zeenah Clothique Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2188351930895!2d3.11779020739771!3d6.493953423485409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b82232af5d351%3A0xb074d5d5a0f3430e!2s15%20Sule%20Alaso%20St%2C%20Ojo%2C%20Lagos%20102101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1757748182548!5m2!1sen!2sng"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>


      <Footer />
    </>
  );
};

export default Contact;
