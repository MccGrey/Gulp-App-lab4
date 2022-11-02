import React from "react";
import "./topCategory.css";
import CAT1 from "../../assets/cognac 1.png";
import CAT2 from "../../assets/gin 1.png";
import CAT3 from "../../assets/iced tea 1.png";
import CAT4 from "../../assets/juice 1.png";
import CAT5 from "../../assets/whiskey 1.png";
import CAT6 from "../../assets/wine 1.png";

const TopCategory = () => {
  const data = [
    {
      id: 1,
      image: CAT1,
      title: "Cognac",
    },
    {
      id: 2,
      image: CAT2,
      title: "Gin",
    },
    {
      id: 3,
      image: CAT3,
      title: "Iced tea",
    },
    {
      id: 4,
      image: CAT4,
      title: "Juice",
    },
    {
      id: 5,
      image: CAT5,
      title: "Whiskey",
    },
    {
      id: 6,
      image: CAT6,
      title: "Wine",
    },
  ];
  return (
    <section className="container top-category">
      <div className="top-category-heading">
        <h3>Explore Popular Categories</h3>
        <div className="bar"></div>
      </div>
      <div className="top-category-cards">
        {data.map(({ id, image, title }) => {
          return (
            <article key={id} className="top-category-details">
              <div className="top-category-image">
                <img src={image} alt={title} data={data} />
                <h3>{title}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TopCategory;
