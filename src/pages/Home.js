import React from "react";
import Brand from "../components/brands/Brand";
import FlashSale from "../components/flashSale/FlashSale";
import Search from "../components/searchbar/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <FlashSale />
      <Brand />
    </div>
  );
};

export default Home;
