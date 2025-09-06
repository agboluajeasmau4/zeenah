// import React from "react";

// export default function FilterDrawer({
//   filters,
//   setFilters,
//   categories,
//   sizes,
//   colors,
//   onClose
// }) {
//   const handleCheckbox = (key, value) => {
//     const set = new Set(filters[key]);
//     if (set.has(value)) set.delete(value); else set.add(value);
//     setFilters(prev => ({ ...prev, [key]: Array.from(set) }));
//   };

//   return (
//     <aside className="filter-drawer-desktop">
//       <div className="filter-section">
//         <h4>Category</h4>
//         {categories.map(c => (
//           <label key={c}><input
//             type="checkbox"
//             checked={filters.category.includes(c)}
//             onChange={()=>handleCheckbox("category", c)}
//           /> {c}</label>
//         ))}
//       </div>

//       <div className="filter-section">
//         <h4>Size</h4>
//         {sizes.map(s=>(
//           <label key={s}><input type="checkbox"
//             checked={filters.size.includes(s)}
//             onChange={()=>handleCheckbox("size", s)}
//           /> {s}</label>
//         ))}
//       </div>

//       <div className="filter-section">
//         <h4>Color</h4>
//         {colors.map(c=>(
//           <label key={c}><input type="checkbox"
//             checked={filters.color.includes(c)}
//             onChange={()=>handleCheckbox("color", c)}
//           /> {c}</label>
//         ))}
//       </div>

//       <div className="filter-section">
//         <h4>Price max</h4>
//         <input type="range" min="0" max="300" value={filters.maxPrice}
//           onChange={(e)=>setFilters(prev=>({...prev, maxPrice: Number(e.target.value)}))} />
//         <div>${filters.maxPrice}</div>
//       </div>

//       <div className="filter-actions">
//         <button className="apply-btn" onClick={onClose}>Apply</button>
//         <button className="reset-btn" onClick={() => setFilters({ category:[], size:[], color:[], maxPrice:300 })}>Reset</button>
//       </div>
//     </aside>
//   );
// }







import React from "react";

export default function FilterDrawer({
  filters,
  setFilters,
  categories,
  sizes,
  colors,
  onClose,
  isMobile = false // pass true for mobile
}) {
  const handleCheckbox = (key, value) => {
    const set = new Set(filters[key]);
    if (set.has(value)) set.delete(value); else set.add(value);
    setFilters(prev => ({ ...prev, [key]: Array.from(set) }));
  };

  const wrapperClass = isMobile ? "mobile-filter" : "filter-drawer-desktop";

  return (
    <aside className={wrapperClass}>
      <div className="filter-section">
        <h4>Category</h4>
        {categories.map(c => (
          <label key={c}>
            <input
              type="checkbox"
              checked={filters.category.includes(c)}
              onChange={() => handleCheckbox("category", c)}
            /> {c}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Size</h4>
        {sizes.map(s => (
          <label key={s}>
            <input
              type="checkbox"
              checked={filters.size.includes(s)}
              onChange={() => handleCheckbox("size", s)}
            /> {s}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Color</h4>
        {colors.map(c => (
          <label key={c}>
            <input
              type="checkbox"
              checked={filters.color.includes(c)}
              onChange={() => handleCheckbox("color", c)}
            /> {c}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Price max</h4>
        <input
          type="range"
          min="0"
          max="300"
          value={filters.maxPrice}
          onChange={e => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
        />
        <div>${filters.maxPrice}</div>
      </div>

      <div className="filter-actions">
        <button className="apply-btn" onClick={onClose}>Apply</button>
        <button className="reset-btn" onClick={() => setFilters({ category: [], size: [], color: [], maxPrice: 300 })}>Reset</button>
      </div>
    </aside>
  );
}








