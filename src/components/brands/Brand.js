import React from "react";
import "./brand.css";
import BRAND1 from "../../assets/Glenfiddich-Logo 2.png";
import BRAND2 from "../../assets/Coca-Cola_logo 2.png";
import BRAND3 from "../../assets/Guinness-Logo 2.png";
import BRAND4 from "../../assets/Nestle-Logo 2.png";
import BRAND5 from "../../assets/Jack-Daniels-Logo 14.png";
import BRAND6 from "../../assets/Vector.png";
import BRAND7 from "../../assets/gulp pepsi 1.png";
import BRAND8 from "../../assets/gulp monster ene 1.png";
import BRAND9 from "../../assets/gulp maltina 1.png";
import BRAND10 from "../../assets/gulp goldberg 1.png";
import BRAND11 from "../../assets/gulp Martini-Logo-1925 1.png";
import BRAND12 from "../../assets/gulp boulevard 1.png";
import BRAND13 from "../../assets/gulp malta 1.png";
import BRAND14 from "../../assets/gulp desperados 1.png";
import BRAND15 from "../../assets/Jack-Daniels-Logo 11.png";
import BRAND16 from "../../assets/Jack-Daniels-Logo 12.png";
import BRAND17 from "../../assets/Jack-Daniels-Logo 13.png";
import BRAND18 from "../../assets/Hennessy-Logo 2.png";

const Brand = () => {
  return (
    <section className=" brand-container">
      <h3>Brands we sell</h3>
      <div className="brand">
        <img src={BRAND1} alt="GLENFIDDICH"></img>
        <img src={BRAND2} alt="cococola"></img>
        <img src={BRAND3} alt="Guiness"></img>
        <img src={BRAND4} alt="GLENFIDDICH"></img>
        <img src={BRAND5} alt="GLENFIDDICH"></img>
        <img src={BRAND6} alt="GLENFIDDICH"></img>
        <img src={BRAND7} alt="GLENFIDDICH"></img>
        <img src={BRAND8} alt="GLENFIDDICH"></img>
        <img src={BRAND9} alt="GLENFIDDICH"></img>
        <img src={BRAND10} alt="GLENFIDDICH"></img>
        <img src={BRAND11} alt="GLENFIDDICH"></img>
        <img src={BRAND12} alt="GLENFIDDICH"></img>
        <img src={BRAND13} alt="GLENFIDDICH"></img>
        <img src={BRAND14} alt="GLENFIDDICH"></img>
        <img src={BRAND15} alt="GLENFIDDICH"></img>
        <img src={BRAND16} alt="GLENFIDDICH"></img>
        <img src={BRAND17} alt="GLENFIDDICH"></img>
        <img src={BRAND18} alt="GLENFIDDICH"></img>
      </div>
    </section>
  );
};

export default Brand;
