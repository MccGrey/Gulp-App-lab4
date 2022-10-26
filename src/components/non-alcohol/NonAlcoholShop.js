import React from "react";
import JUICE1 from "../../assets/CHIVITA APPLLE JUICE 100CL.png";
import JUICE2 from "../../assets/CHIVITA APPLLE JUICE 100CL.png";
import SOFT1 from "../../assets/COCA COLA 50cl (PET)x12.png";
import SOFT2 from "../../assets/COCA COLA 50cl (PET)x12.png";
import SOFT3 from "../../assets/COCA COLA 50cl (PET)x12.png";
import SOFT4 from "../../assets/COCA COLA 50cl (PET)x12.png";
import WATER1 from "../../assets/NESTLE PURE LIFE REGULAR WATER 600ML.png";
import WATER2 from "../../assets/NESTLE PURE LIFE REGULAR WATER 600ML.png";
import WATER3 from "../../assets/NESTLE PURE LIFE REGULAR WATER 600ML.png";
import ENERGY1 from "../../assets/REDBULL COFFE CANNED DRINK 250ML.png";
import ENERGY2 from "../../assets/POWER HORSE 250ML.png";
import ENERGY3 from "../../assets/REDBULL COFFE CANNED DRINK 250ML.png";
import ENERGY4 from "../../assets/POWER HORSE 250ML.png";
import MALT1 from "../../assets/AMSTEL MALT ULTRA NO ALCOHOL 330ML.png";
import MALT2 from "../../assets/MALTA GUINESS 330ML.png";
import MALT3 from "../../assets/AMSTEL MALT ULTRA NO ALCOHOL 330ML.png";
import MALT4 from "../../assets/MALTA GUINESS 330ML.png";
import ICETEA1 from "../../assets/LIPTON ICE TEA LEMON 450ML.png";
import ICETEA2 from "../../assets/LIPTON ICE TEA LEMON 450ML.png";
import ICETEA3 from "../../assets/LIPTON ICE TEA LEMON 450ML.png";
import NONALCWINE1 from "../../assets/EVA SPARKLING RED GRAPE DRINK 750ML.png";
import NONALCWINE2 from "../../assets/EVA SPARKLING RED GRAPE DRINK 750ML.png";
import NONALCWINE3 from "../../assets/EVA SPARKLING RED GRAPE DRINK 750ML.png";
import NONALCWINE4 from "../../assets/EVA SPARKLING RED GRAPE DRINK 750ML.png";

const NonAlcoholShop = () => {
  const data = [
    {
      id: 1,
      image: JUICE1,
      title: "Bombay Sapphire 75cl (x12)",
      price: "N50000",
    },

    {
      id: 2,
      image: JUICE2,
      title: "GORDONS LONDON DRY GIN 75CL",
      price: "N50000",
    },
  ];

  const data1 = [
    {
      id: 3,
      image: SOFT1,
      title: "DOMAINE PRE CLOS D’ANJOU ROSE (FRANCE)",
      price: "N50000",
    },

    {
      id: 4,
      image: SOFT2,
      title: "COCA COLA 50cl (PET)x12",
      price: "N50000",
    },

    {
      id: 5,
      image: SOFT3,
      title: "BAILEYS IRISH CREAM DELIGHT 75CL",
      price: "N50000",
    },

    {
      id: 6,
      image: SOFT4,
      title: "BAILEYS IRISH CREAM DELIGHT 75CL",
      price: "N50000",
    },
  ];

  const data2 = [
    {
      id: 9,
      image: WATER1,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 10,
      image: WATER2,
      title: "GLENFIDDICH 18YEARS",
      price: "N50000",
    },

    {
      id: 11,
      image: WATER3,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },
  ];

  const data3 = [
    {
      id: 12,
      image: ENERGY1,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 13,
      image: ENERGY2,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 14,
      image: ENERGY3,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 15,
      image: ENERGY4,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },
  ];

  const data4 = [
    {
      id: 16,
      image: MALT1,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 17,
      image: MALT2,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 18,
      image: MALT3,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 19,
      image: MALT4,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },
  ];

  const data5 = [
    {
      id: 20,
      image: ICETEA1,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 21,
      image: ICETEA2,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 22,
      image: ICETEA3,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },
  ];

  const data6 = [
    {
      id: 22,
      image: NONALCWINE1,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 22,
      image: NONALCWINE2,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 22,
      image: NONALCWINE3,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },

    {
      id: 22,
      image: NONALCWINE4,
      title: "JACK DANIELS NO 7",
      price: "N50000",
    },
  ];

  return (
    <>
      <section className="top-selling gin">
        <div className="heading">
          <h3>JUICE</h3>
        </div>

        <div className="top-selling-cards gin-cards">
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

      <section className="top-selling cream">
        <div className="heading">
          <h3>SOFT DRINKS</h3>
        </div>

        <div className="top-selling-cards cream-cards">
          {data1.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data1} />
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

      <section className="top-selling whiskey">
        <div className="heading">
          <h3>WATER</h3>
        </div>

        <div className="top-selling-cards whiskey-cards">
          {data2.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data2} />
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

      <section className="top-selling cognac container">
        <div className="heading">
          <h3>ENERGY</h3>
        </div>

        <div className="top-selling-cards cognac-cards">
          {data3.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details ">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data3} />
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

      <section className="top-selling red-wine">
        <div className="heading">
          <h3>MALT</h3>
        </div>

        <div className="top-selling-cards red-wine-cards">
          {data4.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data4} />
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

      <section className="top-selling white-wine">
        <div className="heading">
          <h3>ICED TEA</h3>
        </div>

        <div className="top-selling-cards white-wine-cards">
          {data5.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data5} />
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

      <section className="top-selling rose">
        <div className="heading">
          <h3>NON ALCOHOLIC WINE</h3>
        </div>

        <div className="top-selling-cards rose-cards">
          {data6.map(({ id, image, title, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={image} alt={title} data={data6} />
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
    </>
  );
};

export default NonAlcoholShop;
