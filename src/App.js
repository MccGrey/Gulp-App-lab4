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
