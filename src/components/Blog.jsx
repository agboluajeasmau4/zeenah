// import React from "react";
// import "./Blog.css";

// const articles = [
//   {
//     title: "Top 5 Fashion Trends in 2025",
//     img: "/images/golden-evening-dress.jpg",
//     link: "#",
//   },
//   {
//     title: "How to Style Black & Gold Outfits",
//     img: "/images/elegant-product4.jpg",
//     link: "#",
//   },
//   {
//     title: "Sustainable Fashion: Why It Matters",
//     img: "/images/hero.jpg",
//     link: "#",
//   },
// ];

// const Blog = () => {
//   return (
//     <section className="blog">
//       <h2>From Our Blog</h2>
//       <div className="blog-grid">
//         {articles.map((a, idx) => (
//           <div className="blog-card" key={idx}>
//             <img src={a.img} alt={a.title} />
//             <h3>{a.title}</h3>
//             <a href={a.link}>Read More →</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Blog;










import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const articles = [
  { id: 1, title: "Top 5 Fashion Trends in 2025", img: "/images/golden-evening-dress.jpg" },
  { id: 2, title: "How to Style Black & Gold Outfits", img: "/images/elegant-product4.jpg" },
  { id: 3, title: "Sustainable Fashion: Why It Matters", img: "/images/hero.jpg" },
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
