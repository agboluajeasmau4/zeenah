
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [deliveryDate, setDeliveryDate] = useState("");

  // ✅ Safe calculations
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );
  const shipping = subtotal > 0 ? 10 : 0; // flat rate
  const discount = subtotal > 100 ? 15 : 0; // example discount
  const total = subtotal + shipping - discount;

  // Auto-calculate delivery date (5–7 working days)
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

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>
          Your cart is empty. <Link to="/shop">Continue Shopping →</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <Link to="/shop" className="continue-link">
          Continue Shopping
        </Link>
      </div>

      <div className="cart-content">
        {/* Left: Cart Items */}
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="cart-product">
                    <img src={item.img} alt={item.name} className="cart-img" />
                    <div className="cart-details">
                      <p className="product-name">{item.name}</p>
                      <p className="product-meta">
                        Item #: {item.sku || "000000"} <br />
                        Color: {item.colors || "N/A"} <br />
                        Size: {item.size || "One Size"}
                      </p>
                      <button className="edit-btn">Edit</button>
                    </div>
                  </td>
                  <td>${(item.price || 0).toFixed(2)}</td>
                  <td>
                    <div className="qty-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 0) + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: Sidebar Summary */}
        <div className="cart-summary-box">
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
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}

