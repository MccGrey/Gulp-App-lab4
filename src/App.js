import React from "react";
import Navbar from "./components/navbar/Navbar";
import AlcoholicDrinks from "./pages/AlcoholicDrinks";
import NonAlcoholicDrinks from "./pages/NonAlcoholicDrinks";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "../src/components/shopNow/Shop";
import Alcohol from "./components/acohols/Alcohol";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Signup from "./components/signup/Signup";
import Checkout from "./components/checkout/Chekout";
import Details from "./components/details/Details";
import Detail2 from "./components/detail2/Detail2";
import Detail3 from "./components/detail3/Detail3";
import Detail4 from "./components/detail4/Detail4";
import Detail5 from "./components/detail5/Detail5";
import Detail6 from "./components/detail6/Detail6";
import Detail7 from "./components/detail7/Detail7";
import Detail8 from "./components/detail8/Detail8";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legality" element={<Alcohol />} />
          <Route path="/alcoholicDrinks" element={<AlcoholicDrinks />} />
          <Route path="/nonAlcoholicDrinks" element={<NonAlcoholicDrinks />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Details />} />
          <Route path="/product2" element={<Detail2 />} />
          <Route path="/product3" element={<Detail3 />} />
          <Route path="/product4" element={<Detail4 />} />
          <Route path="/product5" element={<Detail5 />} />
          <Route path="/product6" element={<Detail6 />} />
          <Route path="/product7" element={<Detail7 />} />
          <Route path="/product8" element={<Detail8 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
