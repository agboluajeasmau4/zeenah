
import React, { useMemo, useState, useEffect } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import QuickViewModal from "../components/QuickViewModal";
import Layout from "../components/Layout";

export default function Shop() {
  // UI state
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevance");
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    maxPrice: 300,
  });
  const [page, setPage] = useState(1);
  const perPage = 8;

  // Dropdown state
  const [filterOpen, setFilterOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState(null);

  // Wishlist in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(
    () => localStorage.setItem("wishlist", JSON.stringify(wishlist)),
    [wishlist]
  );

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Derived lists for filter options
  const categories = useMemo(
    () => Array.from(new Set(productsData.map((p) => p.category))),
    []
  );
  const sizes = useMemo(
    () => Array.from(new Set(productsData.flatMap((p) => p.size))),
    []
  );
  const colors = useMemo(
    () => Array.from(new Set(productsData.flatMap((p) => p.colors))),
    []
  );

  // Filtering + searching + sorting
  const filtered = useMemo(() => {
    let arr = productsData.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (filters.category.length && !filters.category.includes(p.category))
        return false;
      if (filters.size.length && !(p.size || []).some((s) => filters.size.includes(s)))
        return false;
      if (filters.color.length && !(p.colors || []).some((c) => filters.color.includes(c)))
        return false;
      if (p.price > filters.maxPrice) return false;
      return true;
    });

    if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
    if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);

    return arr;
  }, [search, filters, sort]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <Layout>
      <div className="shop-header">
        <div className="breadcrumb">Home / Shop</div>
        <h1>Shop</h1>
      </div>

      {/* === Controls: Search, Sort, Filter === */}
      <div className="shop-controls">
        <SearchBar value={search} onChange={setSearch} />
        <div className="controls-right">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            <option value="relevance">Relevance</option>
            <option value="price-asc">Price — Low to High</option>
            <option value="price-desc">Price — High to Low</option>
            <option value="rating">Top rated</option>
          </select>

          <button
            className="filter-btn"
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            🛠 Filters
          </button>

          {/* Dropdown filter */}
          <div className={`filter-dropdown ${filterOpen ? "open" : ""}`}>
            <div className="filter-section">
              <h4>Category</h4>
              {categories.map((c) => (
                <label key={c}>
                  <input
                    type="checkbox"
                    checked={filters.category.includes(c)}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        category: e.target.checked
                          ? [...prev.category, c]
                          : prev.category.filter((x) => x !== c),
                      }))
                    }
                  />{" "}
                  {c}
                </label>
              ))}
            </div>

            <div className="filter-section">
              <h4>Size</h4>
              {sizes.map((s) => (
                <label key={s}>
                  <input
                    type="checkbox"
                    checked={filters.size.includes(s)}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        size: e.target.checked
                          ? [...prev.size, s]
                          : prev.size.filter((x) => x !== s),
                      }))
                    }
                  />{" "}
                  {s}
                </label>
              ))}
            </div>

            <div className="filter-section">
              <h4>Color</h4>
              {colors.map((c) => (
                <label key={c}>
                  <input
                    type="checkbox"
                    checked={filters.color.includes(c)}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        color: e.target.checked
                          ? [...prev.color, c]
                          : prev.color.filter((x) => x !== c),
                      }))
                    }
                  />{" "}
                  {c}
                </label>
              ))}
            </div>

            <div className="filter-section">
              <h4>Price max</h4>
              <input
                type="range"
                min="0"
                max="300"
                step="10"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    maxPrice: Number(e.target.value),
                  }))
                }
              />
              <div>${filters.maxPrice}</div>
            </div>

            <div className="filter-actions">
              <button
                className="apply-btn"
                onClick={() => setFilterOpen(false)}
              >
                Apply
              </button>
              <button
                className="reset-btn"
                onClick={() =>
                  setFilters({ category: [], size: [], color: [], maxPrice: 300 })
                }
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Products === */}
      <section className="product-section">
        <div className="product-grid">
          {visible.length ? (
            visible.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={setQuickProduct}
                onToggleWishlist={toggleWishlist}
                isWishlisted={wishlist.includes(p.id)}
              />
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPage={(p) => {
            if (p >= 1 && p <= totalPages) setPage(p);
          }}
        />
      </section>

      {/* Quickview modal */}
      <QuickViewModal
        product={quickProduct}
        onClose={() => setQuickProduct(null)}
      />
    </Layout>
  );
}
