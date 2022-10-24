import React, { useState } from "react";
import IMG1 from "../../assets/BAILEYS IRISH CREAM DELIGHT 75CL.png";
import IMG2 from "../../assets/B & G CUVEE SPECIALE RED (FRANCE).png";
import IMG3 from "../../assets/Bombay Sapphire 75cl (x12).png";
import IMG4 from "../../assets/CAMUS VSOP 70CL.png";
import IMG5 from "../../assets/CHIVITA APPLLE JUICE 100CL.png";
import IMG6 from "../../assets/REDBULL COFFE CANNED DRINK 250ML.png";
import IMG7 from "../../assets/LIPTON ICE TEA LEMON 450ML.png";
import IMG8 from "../../assets/NESTLE PURE LIFE REGULAR WATER 600ML.png";
import "./flashSale.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "BAILEY IRISH CREAM DELIGHT 75cl",
    oldPrice: "N80000",
    newPrice: "N50000",
  },
  {
    id: 2,
    image: IMG2,
    title: "B & G CUVEE SPECIALE RED (FRANCE)",
    oldPrice: "N80000",
    newPrice: "N50000",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bombay Sapphire 75cl (x12)",
    oldPrice: "N80000",
    newPrice: "N50000",
  },
  {
    id: 4,
    image: IMG4,
    title: "CAMUS VSOP 70CL",
    oldPrice: "N80000",
    newPrice: "N50000",
  },

  {
    id: 5,
    image: IMG5,
    title: "CHIVITA APPLLE JUICE 100CL",
    oldPrice: "N80000",
    newPrice: "N50000",
  },

  {
    id: 6,
    image: IMG6,
    title: "REDBULL COFFE CANNED DRINK 250ML",
    oldPrice: "N80000",
    newPrice: "N50000",
  },

  {
    id: 7,
    image: IMG7,
    title: "LIPTON ICE TEA LEMON 450ML",
    oldPrice: "N80000",
    newPrice: "N50000",
  },

  {
    id: 8,
    image: IMG8,
    title: "NESTLE PURE LIFE REGULAR WATER 600ML",
    oldPrice: "N80000",
    newPrice: "N50000",
  },
];
const FlashSale = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (id, image, title, oldPrice, newPrice) => {
    setCart([...cart, id, image, title, oldPrice, newPrice]);
    console.log(cart);
  };

  return (
    <section className="container flash-sale-section">
      <div className="  flash-sale">
        <h2>Flash Sale</h2>
        <h3>12hrs:20mins:24secs</h3>
      </div>

      <div className="flash-sale-cards">
        {data.map(({ id, image, title, oldPrice, newPrice }) => {
          return (
            <article key={id} className="item-details">
              <div className="item-image">
                <img
                  src={image}
                  alt={title}
                  data={data}
                  handleClick={handleClick}
                />
              </div>

              <h3>{title}</h3>
              <div className="item-prices">
                <span>{oldPrice}</span>
                <h4>{newPrice}</h4>
              </div>
              <div className="item-cta">
                <button
                  className="add-cart"
                  onClick={() =>
                    handleClick(id, image, title, oldPrice, newPrice)
                  }
                >
                  Add to cart
                </button>
                <button className="buy-now">buy Now</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FlashSale;
