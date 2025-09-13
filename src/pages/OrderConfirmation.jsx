import React from "react";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css"; // Assuming you have a CSS file for styling

export default function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <h1>🎉 Thank you for your order!</h1>
      <p>We’ll send you a confirmation email shortly.</p>
      <Link to="/shop">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
