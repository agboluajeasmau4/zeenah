

const products = [
  // ================= HIJABS =================
  {
    id: 2,
    name: "Everyday Jersey Hijab – Nude",
    description:
      "A versatile nude jersey hijab made for everyday modesty and style. Its soft, wrinkle-resistant fabric makes it easy to style and pair with any outfit.",
    price: 5000,
    category: "Women",
    size: ["S", "M", "L"],
    colors: ["Nude"],
    img: "images/everyday-jersey-hijab-nude.jpg",
    rating: 5.0,
  },

  // ================= ABAYAS & JILBABS =================
  {
    id: 6,
    name: "Classic Black Abaya – Embroidered",
    description:
      "Timeless elegance meets comfort in this embroidered abaya. Made with lightweight Nida fabric and delicate embroidery, it’s perfect for daily wear, prayers, or events.",
    price: 50000,
    category: "Women",
    size: ["S", "M", "L"],
    colors: ["Black"],
    img: "images/classic-black-abaya.png",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Open Abaya – Grey Nida",
    description:
      "A versatile open abaya in soft grey Nida fabric. Can be styled with inner dresses or trousers for a chic, modest look.",
    price: 35000,
    category: "Women",
    size: ["M", "L"],
    colors: ["Grey"],
    img: "images/open-abaya-grey-nida.jpg",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Abaya with Hijab – Sky Blue",
    description:
      "A modest sky blue abaya with matching hijab for elegance and grace.",
    price: 25000,
    category: "Women",
    size: ["S", "M", "L"],
    colors: ["Sky Blue"],
    img: "images/abaya-with-hijab-sky-blue.jpg",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Full Jilbab – Navy Blue",
    description: "A simple navy blue jilbab offering full coverage and comfort.",
    price: 26000,
    category: "Women",
    size: ["M", "L"],
    colors: ["Navy Blue"],
    img: "images/navy-blue-jilbab-full.png",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Double-Layered Jilbab – Brown",
    description:
      "A brown double-layered jilbab set crafted for modest style.",
    price: 26000,
    category: "Women",
    size: ["M", "L"],
    colors: ["Brown"],
    img: "images/brown-double-layered-jilbab.png",
    rating: 4.8,
  },

  // ================= HOODIES =================
  {
    id: 12,
    name: "Oversized Hoodie – Black Cotton",
    description:
      "Stay modest yet stylish with this oversized black hoodie. Made from premium cotton, it’s perfect for layering with skirts or wide-leg pants.",
    price: 10500,
    category: "Women",
    size: ["M", "L"],
    colors: ["Black"],
    img: "images/oversized-hoodie-black-cotton.jpg",
    rating: 4.7,
  },
  {
    id: 13,
    name: "Oversized Hoodie – Beige Cotton",
    description:
      "A chic oversized beige hoodie that balances comfort and style. Ideal for casual streetwear looks with modest layering.",
    price: 12000,
    category: "Men",
    size: ["M", "L", "XL"],
    colors: ["Beige"],
    img: "images/oversized-hoodie-beige-cotton.jpg",
    rating: 4.1,
  },
  {
    id: 14,
    name: "Oversized Hoodie – Black & Beige",
    description:
      "A cozy two-tone black and beige hoodie designed for everyday casual wear.",
    price: 15000,
    category: "Men",
    size: ["M", "L", "XL"],
    colors: ["Black", "Beige"],
    img: "images/two-tone-black-beige-hoodie.png",
    rating: 4.6,
  },
  {
    id: 15,
    name: "Striped Hoodie – Green & White",
    description:
      "A stylish green and white striped hoodie perfect for layering and comfort.",
    price: 15000,
    category: "Men",
    size: ["M", "L", "XL"],
    colors: ["Green", "White"],
    img: "images/green-white-striped-hoodie.png",
    rating: 4.5,
  },
  {
    id: 16,
    name: "Colorblock Hoodie – Dark Green",
    description:
      "A dark green colorblock hoodie made for streetwear lovers.",
    price: 15500,
    category: "Men",
    size: ["M", "L", "XL"],
    colors: ["Dark Green"],
    img: "images/dark-green-colorblock-hoodie.png",
    rating: 4.4,
  },
  {
    id: 17,
    name: "Cotton Hoodie – Pink (3PCS Pack)",
    description:
      "A soft pink cotton hoodie (3PCS pack) for chic and comfy outfits.",
    price: 35000,
    category: "Women",
    size: ["S", "M", "L"],
    colors: ["Pink"],
    img: "images/pink-cotton-hoodie-3pcs.png",
    rating: 4.8,
  },
  {
    id: 18,
    name: "Classic Hoodie – Navy Blue",
    description: "A navy blue plain hoodie that pairs easily with any look.",
    price: 11000,
    category: "Men",
    size: ["M", "L"],
    colors: ["Navy Blue"],
    img: "images/navy-blue-hoodie-classic.png",
    rating: 4.3,
  },
  {
    id: 19,
    name: "Lightweight Hoodie – Royal Blue",
    description: "A lightweight royal blue hoodie for everyday wear.",
    price: 11000,
    category: "Men",
    size: ["M", "L", "XL"],
    colors: ["Royal Blue"],
    img: "images/royal-blue-hoodie.png",
    rating: 4.4,
  },
  {
    id: 20,
    name: "Pullover Hoodie – Red",
    description: "A vibrant red pullover hoodie for casual comfort and style.",
    price: 11000,
    category: "Men",
    size: ["M", "L", "XL"],
    colors: ["Red"],
    img: "images/red-pullover-hoodie.png",
    rating: 4.5,
  },
  {
    id: 21,
    name: "Hoodie Bundle – 3PCS (Navy, Camel, Black)",
    description:
      "A 3PCS hoodie bundle in navy, camel, and black for versatile wear.",
    price: 45000,
    category: "Men",
    size: ["M", "L", "XL"],
    colors: ["Navy Blue", "Camel", "Black"],
    img: "images/hoodie-bundle-3pcs-navy-camel-black.png",
    rating: 4.9,
  },

  // ================= OTHER CLOTHING =================
  {
    id: 23,
    name: "Modest Co-ord Set – Cream Beige",
    description:
      "A stylish co-ord set featuring a loose-fit top and wide-leg trousers. Crafted in soft, breathable fabric for a modest yet modern streetwear look.",
    price: 25500,
    category: "Women",
    size: ["8", "9", "10"],
    colors: ["Cream Beige"],
    img: "images/modest-coord-set-cream-beige.png",
    rating: 4.3,
  },
];

export default products;
