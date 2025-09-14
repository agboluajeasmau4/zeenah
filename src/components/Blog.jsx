
import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const articles = [
  { id: 1, title: "Top 5 Fashion Trends in 2025", img: "images/open-abaya-grey-nida.jpg" },
  { id: 2, title: "How to Style Black & Gold Outfits", img: "images/classic-black-abaya.png" },
  { id: 3, title: "Sustainable Fashion: Why It Matters", img: "images/abaya-with-hijab-sky-blue.jpg" },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h2>From Our Blog</h2>
      <div className="blog-grid">
        {articles.map((a) => (
          <div className="blog-card" key={a.id}>
            <img src={a.img} alt={a.title} />
            <h3>{a.title}</h3>
            <Link to={`/blog/${a.id}`}>Read More →</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
