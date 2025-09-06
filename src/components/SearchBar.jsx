import React from "react";

export default function SearchBar({ value, onChange, placeholder = "Search products..." }) {
  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input
        className="shop-search"
        type="text"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
