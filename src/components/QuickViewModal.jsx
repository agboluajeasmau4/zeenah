import React from "react";
// add add to cart function

export default function QuickViewModal({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="quickview-backdrop" onClick={onClose}>
      <div className="quickview-modal" onClick={(e)=>e.stopPropagation()}>
        <button className="close-quick" onClick={onClose}>✖</button>
        <img src={product.img} alt={product.name} className="quick-img" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {/* <p className="quick-price">${product.price.toFixed(2)}</p> */}
         <p className="quick-price"> ₦{product.price.toLocaleString()}</p>
      
        <p>Category: {product.category}</p>
        <p><h4>Colors:</h4>{product.colors}</p>
        <p>Rating: {product.rating} ⭐</p>
        {/* <button className="add-to-cart" >Add to cart</button> */}
        <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart 🛒
          </button>
      </div>
    </div>
  );
}
