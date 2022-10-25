import React from "react";
import Brand from "../components/brands/Brand";
import FlashSale from "../components/flashSale/FlashSale";
import Search from "../components/searchbar/Search";
import Testimonials from "../components/testimonials/Testimonials";
import TopCategory from "../components/topCategories/TopCategory";
import TopSelling from "../components/topSelling/TopSelling";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Search />
      <FlashSale />
      <Brand />
      <TopSelling />
      <TopCategory />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
