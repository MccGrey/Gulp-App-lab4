import React from "react";
import Navbar from "./components/navbar/Navbar";
import AlcoholicDrinks from "./pages/AlcoholicDrinks";
import NonAlcoholicDrinks from "./pages/NonAlcoholicDrinks";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "../src/components/shopNow/Shop";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alcoholicDrinks" element={<AlcoholicDrinks />} />
          <Route path="/nonAlcoholicDrinks" element={<NonAlcoholicDrinks />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
