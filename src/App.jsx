

// // export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// import BlogDetails from "./pages/BlogDetails";

// // 🛒 new imports
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import OrderConfirmation from "./pages/OrderConfirmation";
// //new inport
// import WishlistPage from "./pages/WishlistPage";


// function App() {
//   return (
//     <Router basename="/zeenah">  {/* 👈 important for GitHub Pages */}
//       <Routes>
//         {/* Main Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
      

//         {/* Blog */}
//         <Route path="/blog/:id" element={<BlogDetails />} />

//         {/* Shop Flow */}
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/order-confirmation" element={<OrderConfirmation />} />
//         {/* Wishlist */}
//          <Route path="/wishlist" element={<WishlistPage />} /> {/* ✅ */}
     

//         {/* Fallback for unknown routes */}
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
   


import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Blog */}
      <Route path="/blog/:id" element={<BlogDetails />} />

      {/* Shop Flow */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />

      {/* Wishlist */}
      <Route path="/wishlist" element={<WishlistPage />} />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
