



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [deliveryDate, setDeliveryDate] = useState("");

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const discount = subtotal > 100 ? 15 : 0;
  const total = subtotal + shipping - discount;

  // Delivery date
  useEffect(() => {
    const today = new Date();
    const addBusinessDays = (date, days) => {
      let result = new Date(date);
      let added = 0;
      while (added < days) {
        result.setDate(result.getDate() + 1);
        if (result.getDay() !== 0 && result.getDay() !== 6) {
          added++;
        }
      }
      return result;
    };
    const startDate = addBusinessDays(today, 5);
    const endDate = addBusinessDays(today, 7);
    const options = { weekday: "long", month: "long", day: "numeric" };
    setDeliveryDate(
      `${startDate.toLocaleDateString(undefined, options)} – ${endDate.toLocaleDateString(
        undefined,
        options
      )}`
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/order-confirmation");
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h1>Checkout</h1>
        <p>
          Your cart is empty. <Link to="/shop">Go shopping →</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-content">
        {/* Left: Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Billing Details</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Zip Code</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input type="text" required />
            </div>
          </div>

          <h2>Payment Method</h2>
          <div className="form-group">
            <label>
              <input type="radio" name="payment" defaultChecked /> Credit Card
            </label>
            <div className="card-details">
              <input type="text" placeholder="Card Number"  />
              <input type="text" placeholder="MM/YY"  />
              <input type="text" placeholder="CVV"  />
            </div>
          </div>
          <div className="form-group">
            <label>
              <input type="radio" name="payment" /> PayPal
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="radio" name="payment" /> Cash on Delivery
            </label>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order →
          </button>
        </form>

        {/* Right: Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span>−${discount.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <p className="delivery-date">
            Estimated Delivery: <span>{deliveryDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
