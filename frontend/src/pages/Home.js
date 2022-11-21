import React from "react";
import Brand from "../components/brands/Brand";
import FlashSale from "../components/flashSale/FlashSale";
import Search from "../components/searchbar/Search";
import Testimonials from "../components/testimonials/Testimonials";
import TopCategory from "../components/topCategories/TopCategory";
import TopSelling from "../components/topSelling/TopSelling";
import Footer from "../components/footer/Footer";
import SectionHero from "../components/section-hero/SectionHero";
import { login } from "../services/auth";

const Home = () => {
  const loginPayload = async (payload) => {
    await login(payload);
  };
  return (
    <div>
      <Search />
      <SectionHero />
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
