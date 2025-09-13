// // src/context/CartContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // ✅ Load cart from localStorage on first render
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(savedCart);
//   }, []);

//   // ✅ Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Add item
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   // Remove item
//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Update qty
//   const updateQuantity = (id, qty) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook
// export const useCart = () => useContext(CartContext);


// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // ✅ Initialize directly from localStorage (no empty reset issue)
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update qty
  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  // Clear cart (you control when to call this)
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
