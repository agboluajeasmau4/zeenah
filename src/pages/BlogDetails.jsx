import React from "react";
import { useParams, Link } from "react-router-dom";
import "../components/Blog.css";
import { HashLink } from "react-router-hash-link";

const articles = [
  {
    id: 1,
    title: "Top 5 Fashion Trends in 2025",
    img: "/images/golden-evening-dress.jpg",
    date: "Feb 15, 2025",
    author: "Admin",
    content: `
      Fashion in 2025 is bold, sustainable, and tech-driven. 
      From AI-designed clothing to eco-friendly fabrics, here are the top 5 trends 
      that are shaping the industry. Expect oversized tailoring, digital wearables, 
      and a return to vintage classics.
    `,
  },
  {
    id: 2,
    title: "How to Style Black & Gold Outfits",
    img: "/images/elegant-product4.jpg",
    date: "Jan 30, 2025",
    author: "Admin",
    content: `
      Black & gold has always been the color of luxury. 
      Pairing them together can transform your look instantly. 
      Here's how to style black & gold outfits for casual evenings, 
      parties, and formal occasions.
    `,
  },
  {
    id: 3,
    title: "Sustainable Fashion: Why It Matters",
    img: "/images/hero.jpg",
    date: "Jan 20, 2025",
    author: "Admin",
    content: `
      The fashion industry is one of the largest polluters. 
      Sustainable fashion isn't just a trend — it's the future. 
      Learn why eco-friendly fabrics, recycling, and conscious shopping 
      are becoming essential in 2025.
    `,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h2>Article not found</h2>;
  }

  // Related posts (filter out the current one)
  const related = articles.filter((a) => a.id !== article.id);

  return (
    <div className="blog-details-page">
      <div className="blog-main">
        <img src={article.img} alt={article.title} className="blog-hero-img" />
        <h1 className="blog-title">{article.title}</h1>
        <p className="blog-meta">
          {article.date} • By {article.author}
        </p>
        <p className="blog-content">{article.content}</p>

        {/* <Link to="/blog" className="back-btn">← Back to Blog</Link> */}
        <HashLink smooth to="/#blog">← Back to Blog</HashLink>
      </div>

      <aside className="blog-sidebar">
        <h3>Related Posts</h3>
        {related.map((r) => (
          <div key={r.id} className="related-post">
            <img src={r.img} alt={r.title} />
            <Link to={`/blog/${r.id}`}>{r.title}</Link>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default BlogDetails;
