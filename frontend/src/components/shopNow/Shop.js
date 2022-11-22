import React from "react";
import "./shop.css";
import Search from "../searchbar/Search";
import Footer from "../footer/Footer";
import SHOP1 from "../../assets/HENNESSY VSOP 75CL.png";
import SHOP2 from "../../assets/REDBULL COFFE CANNED DRINK 250ML.png";
import SHOP3 from "../../assets/BAILEYS IRISH CREAM DELIGHT 75CL.png";
import SHOP4 from "../../assets/LIPTON ICE TEA LEMON 450ML.png";
import SHOP5 from "../../assets/B & G CUVEE SPECIALE RED (FRANCE).png";
import SHOP6 from "../../assets/NESTLE PURE LIFE REGULAR WATER 600ML.png";
import SHOP7 from "../../assets/Bombay Sapphire 75cl (x12).png";
import SHOP8 from "../../assets/GLENFIDDICH 18YEARS.png";

const Shop = () => {
  const data = [
    {
      id: 1,
      image: SHOP1,
      title: "HENNESSY VSOP 75CL",
      price: "₦39416",
    },

    {
      id: 2,
      image: SHOP2,
      title: "MALTA GUINESS 330ML",
      price: "₦899",
    },

    {
      id: 3,
      image: SHOP3,
      title: "DOMAINE PRE CLOS D’ANJOU",
      price: "₦4400",
    },

    {
      id: 4,
      image: SHOP4,
      title: "LIPTON ICE TEA LEMON 450ML",
      price: "₦200",
    },

    {
      id: 4,
      image: SHOP5,
      title: "B & G CUVEE SPECIALE RED (FRANCE)",
      price: "₦200",
    },

    {
      id: 4,
      image: SHOP6,
      title: "NESTLE PURE LIFE REGULAR WATER 600ML",
      price: "₦200",
    },
    {
      id: 4,
      image: SHOP7,
      title: "Bombay Sapphire 75cl (x12)",
      price: "₦200",
    },

    {
      id: 4,
      image: SHOP8,
      title: "GLENFIDDICH 18YEARS",
      price: "N50000",
    },
  ];

  return (
    <>
      <Search />

      <section className="top-selling shop">
        <div className="heading">
          <h3>Best Selling</h3>
          <div className="bar"></div>
        </div>

        <div className="top-selling-cards shop-cards">
          {data.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data} />
                </div>

                <h3>{title}</h3>
                <div className="top-selling-prices">
                  <h4>{price}</h4>
                </div>
                <div className="top-selling-cta">
                  <button className="add-cart">Add to cart</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="top-selling alcoholic">
        <div className="heading">
          <h3>Acoholic Drinks</h3>
          <div className="bar"></div>
        </div>

        <div className="top-selling-cards alcoholic-cards">
          {data.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data} />
                </div>

                <h3>{title}</h3>
                <div className="top-selling-prices">
                  <h4>{price}</h4>
                </div>
                <div className="top-selling-cta">
                  <button className="add-cart">Add to cart</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="top-selling non-alcoholic">
        <div className="heading">
          <h3>Non Acoholic Drinks</h3>
          <div className="bar"></div>
        </div>

        <div className="top-selling-cards non-alcoholic-cards">
          {data.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data} />
                </div>

                <h3>{title}</h3>
                <div className="top-selling-prices">
                  <h4>{price}</h4>
                </div>
                <div className="top-selling-cta">
                  <button className="add-cart">Add to cart</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
