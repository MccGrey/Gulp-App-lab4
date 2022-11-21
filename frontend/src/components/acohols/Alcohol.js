import React, { useEffect, useState } from "react";
import axios from "axios";
import "./alcohol.css";
import GIN1 from "../../assets/Bombay Sapphire 75cl (x12).png";
import GIN2 from "../../assets/GORDONS LONDON DRY GIN 75CL.png";
import CREAM1 from "../../assets/GORDONS LONDON DRY GIN 75CL.png";
import CREAM2 from "../../assets/GORDONS LONDON DRY GIN 75CL.png";
import CREAM3 from "../../assets/BAILEYS IRISH CREAM DELIGHT 75CL.png";
import CREAM4 from "../../assets/BAILEYS IRISH CREAM DELIGHT 75CL.png";
import WHISKEY1 from "../../assets/JACK DANIELS NO 7.png";
import WHISKEY2 from "../../assets/GLENFIDDICH 18YEARS.png";
import WHISKEY3 from "../../assets/JACK DANIELS NO 7.png";
import COGNAC1 from "../../assets/HENNESSY VSOP 75CL.png";
import COGNAC2 from "../../assets/BAILEYS IRISH CREAM DELIGHT 75CL.png";
import COGNAC3 from "../../assets/HENNESSY VSOP 75CL.png";
import COGNAC4 from "../../assets/CAMUS VSOP 70CL.png";
import READWINE1 from "../../assets/B & G CUVEE SPECIALE RED (FRANCE).png";
import READWINE2 from "../../assets/B & G CUVEE SPECIALE RED (FRANCE).png";
import READWINE3 from "../../assets/B & G CUVEE SPECIALE RED (FRANCE).png";
import READWINE4 from "../../assets/B & G CUVEE SPECIALE RED (FRANCE).png";
import WHITEWINE1 from "../../assets/ANTARES CHARDONNAY 75CL(CHILE).png";
import WHITEWINE2 from "../../assets/ANTARES CHARDONNAY 75CL(CHILE).png";
import WHITEWINE3 from "../../assets/ANTARES CHARDONNAY 75CL(CHILE).png";
import ROSE1 from "../../assets/DOMAINE PRE CLOS D’ANJOU ROSE (FRANCE).png";
import ROSE2 from "../../assets/DOMAINE PRE CLOS D’ANJOU ROSE (FRANCE).png";
import ROSE3 from "../../assets/DOMAINE PRE CLOS D’ANJOU ROSE (FRANCE).png";
import ROSE4 from "../../assets/DOMAINE PRE CLOS D’ANJOU ROSE (FRANCE).png";
import Button from "../../components/buttons/Button";
import Footer from "../footer/Footer";





const AlcoholShop = (props) => {
  const [wineRose, setWineRose] = useState([]);
  const [wineWhite, setWineWhite] = useState([]);
  const [wineRed, setWineRed] = useState([]);
  const [cognac, setCognac] = useState([]);
  const [whiskey, setWhiskey] = useState([]);
  const [cream, setCream] = useState([]);
  const [gin, setGin] = useState([]);

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
        if (subcategory === "Wine-Rose") {
          setWineRose(response?.data?.productListing);
          //  console.log(response.data);
        }
        if (subcategory === "Wine-White") {
          setWineWhite(response?.data?.productListing);
        }
        if (subcategory === "Wine-Red") {
          setWineRed(response?.data?.productListing);
        }
        if (subcategory === "Cognac") {
          setCognac(response?.data?.productListing);
        }
        if (subcategory === "Whiskey") {
          setWhiskey(response?.data?.productListing);
        }
        if (subcategory === "Cream") {
          setCream(response?.data?.productListing);
        }
        if (subcategory === "Gin") {
          setGin(response?.data?.productListing);
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getCategoryProduct("Alcoholic", "Wine-Rose");
    getCategoryProduct("Alcoholic", "Wine-White");
    getCategoryProduct("Alcoholic", "Wine-Red");
    getCategoryProduct("Alcoholic", "Cognac");
    getCategoryProduct("Alcoholic", "Whiskey");
    getCategoryProduct("Alcoholic", "Cream");
    getCategoryProduct("Alcoholic", "Gin");
  }, []);

  const data1 = wineWhite;
  const data2 = wineRed;

  const data3 = cognac;

  const data4 = whiskey;

  const data5 = cream;

  const data6 = gin;
  const { onAdd } = props;
    return (
    <div className="alcohol-container-main">
      <Button />
      <section className="top-selling gin" id="wine-rose">
        <div className="heading">
          <h3>WINEROSE</h3>   
        </div>

        <div className="top-selling-cards gin-cards">
          {wineRose?.map(({ id, images, productName, price }) => {
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

      <section className="top-selling cream" id="wine-white">
        <div className="heading">
          <h3>WINE WHITE</h3>
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

      <section className="top-selling whiskey" id="wine-red">
        <div className="heading">
          <h3>WINE RED</h3>
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

      <section className="top-selling cognac container" id="cognac">
        <div className="heading">
          <h3>COGNAC</h3>
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

      <section className="top-selling red-wine" id="whiskey">
        <div className="heading">
          <h3>WHISKEY</h3>
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

      <section className="top-selling white-wine" id="cream">
        <div className="heading">
          <h3>CREAM</h3>
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

      <section className="top-selling rose" id="gin">
        <div className="heading">
          <h3>GIN</h3>
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
      <Footer />
    </div>
  );
};

export default AlcoholShop;








































// const Alcohol = () => {
//   const data = [
//     {
//       id: 1,
//       image: GIN1,
//       title: "Bombay Sapphire 75cl (x12)",
//       price: "N50000",
//     },

//     {
//       id: 2,
//       image: GIN2,
//       title: "GORDONS LONDON DRY GIN",
//       price: "N50000",
//     },
//   ];

//   const data1 = [
//     {
//       id: 3,
//       image: CREAM1,
//       title: "DOMAINE PRE CLOS D’ANJOU",
//       price: "N50000",
//     },

//     {
//       id: 4,
//       image: CREAM2,
//       title: "COCA COLA 50cl (PET)x12",
//       price: "N50000",
//     },

//     {
//       id: 5,
//       image: CREAM3,
//       title: "BAILEYS IRISH CREAM DELIGHT 75CL",
//       price: "N50000",
//     },

//     {
//       id: 6,
//       image: CREAM4,
//       title: "BAILEYS IRISH CREAM DELIGHT 75CL",
//       price: "N50000",
//     },
//   ];

//   const data2 = [
//     {
//       id: 9,
//       image: WHISKEY1,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 10,
//       image: WHISKEY2,
//       title: "GLENFIDDICH 18YEARS",
//       price: "N50000",
//     },

//     {
//       id: 11,
//       image: WHISKEY3,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },
//   ];

//   const data3 = [
//     {
//       id: 12,
//       image: COGNAC1,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 13,
//       image: COGNAC2,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 14,
//       image: COGNAC3,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 15,
//       image: COGNAC4,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },
//   ];

//   const data4 = [
//     {
//       id: 16,
//       image: READWINE1,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 17,
//       image: READWINE2,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 18,
//       image: READWINE3,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 19,
//       image: READWINE4,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },
//   ];

//   const data5 = [
//     {
//       id: 20,
//       image: WHITEWINE1,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 21,
//       image: WHITEWINE2,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 22,
//       image: WHITEWINE3,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },
//   ];

//   const data6 = [
//     {
//       id: 22,
//       image: ROSE1,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 22,
//       image: ROSE2,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 22,
//       image: ROSE3,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },

//     {
//       id: 22,
//       image: ROSE4,
//       title: "JACK DANIELS NO 7",
//       price: "N50000",
//     },
//   ];

//   return (
//     <div className="alcohol-container-main">
//       <Button />
//       <section className="top-selling gin" id="gin">
//         <div className="heading">
//           <h3>GIN</h3>
//         </div>

//         <div className="top-selling-cards gin-cards">
//           {data.map(({ id, image, title, price }) => {
//             return (
//               <article key={id} className="top-selling-details">
//                 <div className="top-selling-image">
//                   <img src={image} alt={title} data={data} />
//                 </div>

//                 <h3>{title}</h3>
//                 <div className="top-selling-prices">
//                   <h4>{price}</h4>
//                 </div>
//                 <div className="top-selling-cta">
//                   <button className="add-cart">Add to cart</button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <section className="top-selling cream" id="cream">
//         <div className="heading">
//           <h3>Cream</h3>
//         </div>

//         <div className="top-selling-cards cream-cards">
//           {data1.map(({ id, image, title, price }) => {
//             return (
//               <article key={id} className="top-selling-details">
//                 <div className="top-selling-image">
//                   <img src={image} alt={title} data={data1} />
//                 </div>

//                 <h3>{title}</h3>
//                 <div className="top-selling-prices">
//                   <h4>{price}</h4>
//                 </div>
//                 <div className="top-selling-cta">
//                   <button className="add-cart">Add to cart</button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <section className="top-selling whiskey" id="whiskey">
//         <div className="heading">
//           <h3>Whiskey</h3>
//         </div>

//         <div className="top-selling-cards whiskey-cards">
//           {data2.map(({ id, image, title, price }) => {
//             return (
//               <article key={id} className="top-selling-details">
//                 <div className="top-selling-image">
//                   <img src={image} alt={title} data={data2} />
//                 </div>

//                 <h3>{title}</h3>
//                 <div className="top-selling-prices">
//                   <h4>{price}</h4>
//                 </div>
//                 <div className="top-selling-cta">
//                   <button className="add-cart">Add to cart</button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <section className="top-selling cognac container" id="cognac">
//         <div className="heading">
//           <h3>Cognac</h3>
//         </div>

//         <div className="top-selling-cards cognac-cards">
//           {data3.map(({ id, image, title, price }) => {
//             return (
//               <article key={id} className="top-selling-details ">
//                 <div className="top-selling-image">
//                   <img src={image} alt={title} data={data3} />
//                 </div>

//                 <h3>{title}</h3>
//                 <div className="top-selling-prices">
//                   <h4>{price}</h4>
//                 </div>
//                 <div className="top-selling-cta">
//                   <button className="add-cart">Add to cart</button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <section className="top-selling red-wine" id="red-wine">
//         <div className="heading">
//           <h3>Red Wine</h3>
//         </div>

//         <div className="top-selling-cards red-wine-cards">
//           {data4.map(({ id, image, title, price }) => {
//             return (
//               <article key={id} className="top-selling-details">
//                 <div className="top-selling-image">
//                   <img src={image} alt={title} data={data4} />
//                 </div>

//                 <h3>{title}</h3>
//                 <div className="top-selling-prices">
//                   <h4>{price}</h4>
//                 </div>
//                 <div className="top-selling-cta">
//                   <button className="add-cart">Add to cart</button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <section className="top-selling white-wine" id="white-wine">
//         <div className="heading">
//           <h3>White Wine</h3>
//         </div>

//         <div className="top-selling-cards white-wine-cards">
//           {data5.map(({ id, image, title, price }) => {
//             return (
//               <article key={id} className="top-selling-details">
//                 <div className="top-selling-image">
//                   <img src={image} alt={title} data={data5} />
//                 </div>

//                 <h3>{title}</h3>
//                 <div className="top-selling-prices">
//                   <h4>{price}</h4>
//                 </div>
//                 <div className="top-selling-cta">
//                   <button className="add-cart">Add to cart</button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <section className="top-selling rose" id="rose">
//         <div className="heading">
//           <h3>Rose</h3>
//         </div>

//         <div className="top-selling-cards rose-cards">
//           {data6.map(({ id, image, title, price }) => {
//             return (
//               <article key={id} className="top-selling-details">
//                 <div className="top-selling-image">
//                   <img src={image} alt={title} data={data6} />
//                 </div>

//                 <h3>{title}</h3>
//                 <div className="top-selling-prices">
//                   <h4>{price}</h4>
//                 </div>
//                 <div className="top-selling-cta">
//                   <button className="add-cart">Add to cart</button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Alcohol;
