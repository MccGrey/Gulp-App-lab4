import React from "react";
import Brand from "../components/brands/Brand";
import FlashSale from "../components/flashSale/FlashSale";
import Search from "../components/searchbar/Search";
import TopSelling from "../components/topSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <Search />
      <FlashSale />
      <Brand />
      <TopSelling />
    </div>
  );
};

export default Home;
