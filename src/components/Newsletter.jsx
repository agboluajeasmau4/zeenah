// import React, { useState } from "react";
// import "./Newsletter.css";

// const Newsletter = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("🎉 Subscription successful!");
//       } else {
//         setMessage(`⚠️ ${data.error}`);
//       }
//     } catch (err) {
//       setMessage("❌ Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section className="newsletter">
//       <h2>Get 10% Off Your First Order</h2>
//       <p>Join our newsletter for exclusive updates & offers</p>
//       <form className="newsletter-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Subscribe</button>
//       </form>
//       {message && <p className="newsletter-message">{message}</p>}
//     </section>
//   );
// };

// export default Newsletter;


import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mzzawkvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage("🎉 Subscription successful!");
        setEmail(""); // clear the input field
      } else {
        const data = await response.json();
        // Formspree may return error messages in `data.errors` or `data.error`
        if (data.errors) {
          setMessage(data.errors.map(err => err.message).join(", "));
        } else if (data.error) {
          setMessage(data.error);
        } else {
          setMessage("⚠️ Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      console.error("Error sending to Formspree:", err);
      setMessage("❌ Network error. Please try again.");
    }
  };

  return (
    <section className="newsletter">
      <h2>Get 10% Off Your First Order</h2>
      <p>Join our newsletter for exclusive updates & offers</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="newsletter-message">{message}</p>}
    </section>
  );
};

export default Newsletter;
