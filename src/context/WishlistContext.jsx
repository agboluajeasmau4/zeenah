// import React, { createContext, useContext, useState } from "react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]); // ✅ now stores full product objects

//   // Check if product is already wishlisted
//   const isWishlisted = (id) => wishlist.some((item) => item.id === id);

//   // Toggle add/remove
//   const toggleWishlist = (product) => {
//     setWishlist((prev) => {
//       if (isWishlisted(product.id)) {
//         // remove if already there
//         return prev.filter((item) => item.id !== product.id);
//       } else {
//         // add full product
//         return [...prev, product];
//       }
//     });
//   };

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, toggleWishlist, isWishlisted }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);
// src/context/WishlistContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // ✅ Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Check if product is already wishlisted
  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  // Toggle add/remove
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (isWishlisted(product.id)) {
        // remove if already there
        return prev.filter((item) => item.id !== product.id);
      } else {
        // add full product
        return [...prev, product];
      }
    });
  };

  // ✅ Future: sync wishlist with backend when logged in
  const syncWishlistWithUser = (userId) => {
    console.log("Syncing wishlist for user:", userId, wishlist);
    // 👉 Replace with Firebase/DB call later
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted, syncWishlistWithUser }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
