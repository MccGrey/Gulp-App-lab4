import React from "react";
import "./topSelling.css";
import TOP1 from "../../assets/HENNESSY VSOP 75CL.png";
import TOP2 from "../../assets/MALTA GUINESS 330ML.png";
import TOP3 from "../../assets/DOMAINE PRE CLOS D’ANJOU ROSE (FRANCE).png";
import TOP4 from "../../assets/COCA COLA 50cl (PET)x12.png";

const TopSelling = () => {
  const data = [
    {
      id: 1,
      image: TOP1,
      title: "HENNESSY VSOP 75CL",
      price: "N50000",
    },

    {
      id: 2,
      image: TOP2,
      title: "MALTA GUINESS 330ML",
      price: "N50000",
    },

    {
      id: 3,
      image: TOP3,
      title: "DOMAINE PRE CLOS D’ANJOU ROSE (FRANCE)",
      price: "N50000",
    },

    {
      id: 4,
      image: TOP4,
      title: "COCA COLA 50cl (PET)x12",
      price: "N50000",
    },
  ];

  return (
    <section className="top-selling">
      <div className="heading">
        <h3>Top Selling</h3>
        <div className="bar"></div>
      </div>

      <div className="top-selling-cards">
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
  );
};

export default TopSelling;
