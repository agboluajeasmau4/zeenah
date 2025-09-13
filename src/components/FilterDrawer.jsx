// // import React from "react";

// // export default function FilterDrawer({
// //   filters,
// //   setFilters,
// //   categories,
// //   sizes,
// //   colors,
// //   onClose
// // }) {
// //   const handleCheckbox = (key, value) => {
// //     const set = new Set(filters[key]);
// //     if (set.has(value)) set.delete(value); else set.add(value);
// //     setFilters(prev => ({ ...prev, [key]: Array.from(set) }));
// //   };

// //   return (
// //     <aside className="filter-drawer-desktop">
// //       <div className="filter-section">
// //         <h4>Category</h4>
// //         {categories.map(c => (
// //           <label key={c}><input
// //             type="checkbox"
// //             checked={filters.category.includes(c)}
// //             onChange={()=>handleCheckbox("category", c)}
// //           /> {c}</label>
// //         ))}
// //       </div>

// //       <div className="filter-section">
// //         <h4>Size</h4>
// //         {sizes.map(s=>(
// //           <label key={s}><input type="checkbox"
// //             checked={filters.size.includes(s)}
// //             onChange={()=>handleCheckbox("size", s)}
// //           /> {s}</label>
// //         ))}
// //       </div>

// //       <div className="filter-section">
// //         <h4>Color</h4>
// //         {colors.map(c=>(
// //           <label key={c}><input type="checkbox"
// //             checked={filters.color.includes(c)}
// //             onChange={()=>handleCheckbox("color", c)}
// //           /> {c}</label>
// //         ))}
// //       </div>

// //       <div className="filter-section">
// //         <h4>Price max</h4>
// //         <input type="range" min="0" max="300" value={filters.maxPrice}
// //           onChange={(e)=>setFilters(prev=>({...prev, maxPrice: Number(e.target.value)}))} />
// //         <div>${filters.maxPrice}</div>
// //       </div>

// //       <div className="filter-actions">
// //         <button className="apply-btn" onClick={onClose}>Apply</button>
// //         <button className="reset-btn" onClick={() => setFilters({ category:[], size:[], color:[], maxPrice:300 })}>Reset</button>
// //       </div>
// //     </aside>
// //   );
// // }







// import React from "react";

// export default function FilterDrawer({
//   filters,
//   setFilters,
//   categories,
//   sizes,
//   colors,
//   onClose,
//   isMobile = false // pass true for mobile
// }) {
//   const handleCheckbox = (key, value) => {
//     const set = new Set(filters[key]);
//     if (set.has(value)) set.delete(value); else set.add(value);
//     setFilters(prev => ({ ...prev, [key]: Array.from(set) }));
//   };

//   const wrapperClass = isMobile ? "mobile-filter" : "filter-drawer-desktop";

//   return (
//     <aside className={wrapperClass}>
//       <div className="filter-section">
//         <h4>Category</h4>
//         {categories.map(c => (
//           <label key={c}>
//             <input
//               type="checkbox"
//               checked={filters.category.includes(c)}
//               onChange={() => handleCheckbox("category", c)}
//             /> {c}
//           </label>
//         ))}
//       </div>

//       <div className="filter-section">
//         <h4>Size</h4>
//         {sizes.map(s => (
//           <label key={s}>
//             <input
//               type="checkbox"
//               checked={filters.size.includes(s)}
//               onChange={() => handleCheckbox("size", s)}
//             /> {s}
//           </label>
//         ))}
//       </div>

//       <div className="filter-section">
//         <h4>Color</h4>
//         {colors.map(c => (
//           <label key={c}>
//             <input
//               type="checkbox"
//               checked={filters.color.includes(c)}
//               onChange={() => handleCheckbox("color", c)}
//             /> {c}
//           </label>
//         ))}
//       </div>

//       <div className="filter-section">
//         <h4>Price max</h4>
//         <input
//           type="range"
//           min="0"
//           max="300"
//           value={filters.maxPrice}
//           onChange={e => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
//         />
//         <div>${filters.maxPrice}</div>
//       </div>

      

//       <div className="filter-actions">
//         <button className="apply-btn" onClick={onClose}>Apply</button>
//         <button className="reset-btn" onClick={() => setFilters({ category: [], size: [], color: [], maxPrice: 300 })}>Reset</button>
//       </div>
//     </aside>
//   );
// }








import React, { useState } from "react";
import products from "../data/products"; // adjust import
import ProductCard from "../components/ProductCard";
import FilterDrawer from "../components/FilterDrawer";
import "./ShopPage.css";

export default function ShopPage() {
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    maxPrice: 200000, // ✅ default max ₦200k
  });

  const categories = [...new Set(products.map(p => p.category))];
  const sizes = [...new Set(products.flatMap(p => p.size || []))];
  const colors = [...new Set(products.flatMap(p => p.colors || []))];

  // ✅ Filtering logic
  const filteredProducts = products.filter(p => {
    // Category filter
    if (filters.category.length && !filters.category.includes(p.category)) return false;

    // Size filter
    if (filters.size.length) {
      const hasSize = (p.size || []).some(s => filters.size.includes(s));
      if (!hasSize) return false;
    }

    // Color filter
    if (filters.color.length) {
      const hasColor = (p.colors || []).some(c => filters.color.includes(c));
      if (!hasColor) return false;
    }

    // ✅ Price filter (in ₦)
    if (filters.maxPrice && p.price > filters.maxPrice) return false;

    return true;
  });

  return (
    <div className="shop-page">
      <aside className="filter-sidebar">
        <FilterDrawer
          filters={filters}
          setFilters={setFilters}
          categories={categories}
          sizes={sizes}
          colors={colors}
          onClose={() => {}}
        />
      </aside>

      <main className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div className="grid">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
