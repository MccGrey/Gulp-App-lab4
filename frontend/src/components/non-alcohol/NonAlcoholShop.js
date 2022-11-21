import React, { useEffect, useState } from "react";
import axios from "axios";
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
import "./nonAlcoholShop.css";

const NonAlcoholShop = (props) => {
  const [juice, setJuice] = useState([]);
  const [softDrinks, setSoftDrinks] = useState([]);
  const [water, setWater] = useState([]);
  const [energyDrinks, setEnergyDrinks] = useState([]);
  const [malt, setMalt] = useState([]);
  const [iceTea, setIceTea] = useState([]);
  const [nonAlcoholicWine, setNonAlcoholicWine] = useState([]);

  // console.log([juice])
  const getCategoryProduct = async (category, subcategory) => {
    var config = {
      method: "get",
      url: `https://test-applet-5.herokuapp.com/api/v1/products/product?category=${category}&subCategory=${subcategory}`,
      headers: {
        Accept: "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(subcategory);
        if (subcategory === "Juice") {
          setJuice(response?.data?.productListing);
          //  console.log(response.data);
        }
        if (subcategory === "Soft Drink") {
          setSoftDrinks(response?.data?.productListing);
        }
        if (subcategory === "Water") {
          setWater(response?.data?.productListing);
        }
        if (subcategory === "Energy Drink") {
          setEnergyDrinks(response?.data?.productListing);
        }
        if (subcategory === "Malt") {
          setMalt(response?.data?.productListing);
        }
        if (subcategory === "Iced tea") {
          setIceTea(response?.data?.productListing);
        }
        if (subcategory === "Non-Alcoholic Wine") {
          setNonAlcoholicWine(response?.data?.productListing);
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getCategoryProduct("Non-Alcoholic", "Juice");
    getCategoryProduct("Non-Alcoholic", "Soft Drink");
    getCategoryProduct("Non-Alcoholic", "Water");
    getCategoryProduct("Non-Alcoholic", "Energy Drink");
    getCategoryProduct("Non-Alcoholic", "Malt");
    getCategoryProduct("Non-Alcoholic", "Iced tea");
    getCategoryProduct("Non-Alcoholic", "Non-Alcoholic Wine");
  }, []);

  const data1 = softDrinks;
  const data2 = water;

  const data3 = energyDrinks;

  const data4 = malt;

  const data5 = iceTea;

  const data6 = nonAlcoholicWine;
  const { onAdd } = props;
  return (
    <div className="main">
      <section className="top-selling gin" id="juice">
        <div className="heading">
          <h3>JUICE</h3>
        </div>

        <div className="top-selling-cards gin-cards">
          {juice?.map(({ id, images, productName, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={images} alt={productName} />
                </div>

                <h3>{productName}</h3>
                <div className="top-selling-prices">
                  <h4>{price}</h4>
                </div>
                <div className="top-selling-cta">
                  <button className="add-cart" onClick={onAdd}>
                    Add to cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="top-selling cream" id="soft-drinks">
        <div className="heading">
          <h3>SOFT DRINKS</h3>
        </div>

        <div className="top-selling-cards cream-cards">
          {data1.map(({ id, images, productName, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={images} alt={productName} data={data1} />
                </div>

                <h3>{productName}</h3>
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

      <section className="top-selling whiskey" id="water">
        <div className="heading">
          <h3>WATER</h3>
        </div>

        <div className="top-selling-cards whiskey-cards">
          {data2.map(({ id, images, productName, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={images} alt={productName} data={data2} />
                </div>

                <h3>{productName}</h3>
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

      <section className="top-selling cognac container" id="energy">
        <div className="heading">
          <h3>ENERGY</h3>
        </div>

        <div className="top-selling-cards cognac-cards">
          {data3.map(({ id, images, productName, price }) => {
            return (
              <article key={id} className="top-selling-details ">
                <div className="top-selling-image">
                  <img src={images} alt={productName} data={data3} />
                </div>

                <h3>{productName}</h3>
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

      <section className="top-selling red-wine" id="malt">
        <div className="heading">
          <h3>MALT</h3>
        </div>

        <div className="top-selling-cards red-wine-cards">
          {data4.map(({ id, images, productName, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={images} alt={productName} />
                </div>

                <h3>{productName}</h3>
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

      <section className="top-selling white-wine" id="iced-tea">
        <div className="heading">
          <h3>ICED TEA</h3>
        </div>

        <div className="top-selling-cards white-wine-cards">
          {data5.map(({ id, images, productName, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={images} alt={productName} data={data5} />
                </div>

                <h3>{productName}</h3>
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

      <section className="top-selling rose" id="non-alc-wine">
        <div className="heading">
          <h3>NON ALCOHOLIC WINE</h3>
        </div>

        <div className="top-selling-cards rose-cards">
          {data6.map(({ id, images, productName, price }) => {
            return (
              <article key={id} className="top-selling-details">
                <div className="top-selling-image">
                  <img src={images} alt={productName} data={data6} />
                </div>

                <h3>{productName}</h3>
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
    </div>
  );
};

export default NonAlcoholShop;
