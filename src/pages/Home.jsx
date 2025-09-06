import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import Promotions from "../components/Promotions";
import FeaturedProducts from "../components/FeaturedProducts";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <Promotions />
      <FeaturedProducts />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
