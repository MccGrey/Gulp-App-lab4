import React from "react";
import IMG1 from "../../assets/BAILEYS IRISH CREAM DELIGHT 75CL.png";
import IMG2 from "../../assets/B & G CUVEE SPECIALE RED (FRANCE).png";
import IMG3 from "../../assets/Bombay Sapphire 75cl (x12).png";
import IMG4 from "../../assets/CAMUS VSOP 70CL.png";
import IMG5 from "../../assets/CHIVITA APPLLE JUICE 100CL.png";
import IMG6 from "../../assets/REDBULL COFFE CANNED DRINK 250ML.png";
import IMG7 from "../../assets/LIPTON ICE TEA LEMON 450ML.png";
import IMG8 from "../../assets/NESTLE PURE LIFE REGULAR WATER 600ML.png";
import "./flashSale.css";
import { Link } from "react-router-dom";

// add to cart functionality needed here for the add to cart button.

// code below for add to cart
// import React,{useState} from "react";
// import Footer from "../footer/Footer";
// import "./flashSale.css";
// import { addToCart } from "../../services/addToCart";

// const AddToCart = () => {
//   const [user, setUser] = useState({
//     productId: "6360ebe7c8ef955961ca54a5"
//   })

//   const handleChange = (e)=> {
//     const {name, value} = e.target;
//     setUser((prev) => ({...prev, [name]:value}))
//   }

//   const addToCartUser = () => {
//     const payload = {
//       productId: "6360ebe7c8ef955961ca54a5"
//     }
//     addToCart(payload)
//   }

// This is for add to cart service.
// import axios from 'axios';
// const baseURL = 'https://test-applet-5.herokuapp.com/api/v1/'

// export const addToCart = async(payload) => {

//   const response = await axios.patch(`${baseURL}carts/cart/add`, payload);
//

// export const AddToCart = () => {
//   const [cart, setCart] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function updateCart() {
//     axios
//       .put(`${baseURL}/1`, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   try {
//       console.log(response)
//       return response.data
//   } catch (error) {
//       return error
//   }
// }

// the dummy data here is supposed to come from the backend database using fetch or axios

const data = [
  {
    id: 1,
    image: IMG1,
    title: "BAILEY IRISH CREAM DELIGHT",
    oldPrice: "₦80000",
    newPrice: "₦2384",
    detail: "/product",
  },
  {
    id: 2,
    image: IMG2,
    title: "B & G CUVEE SPECIALE RED",
    oldPrice: "₦9000",
    newPrice: "₦4860",
    detail: "/product2",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bombay Sapphire 75cl (x12)",
    oldPrice: "₦99200",
    newPrice: "₦89112",
    detail: "/product3",
  },
  {
    id: 4,
    image: IMG4,
    title: "CAMUS VSOP 70CL",
    oldPrice: "₦70000",
    newPrice: "₦25265",
    detail: "/product4",
  },

  {
    id: 5,
    image: IMG5,
    title: "CHIVITA APPLLE JUICE 100CL",
    oldPrice: "₦900",
    newPrice: "₦700",
    detail: "/product5",
  },

  {
    id: 6,
    image: IMG6,
    title: "REDBULL COFFE CANNED DRINK",
    oldPrice: "₦1000",
    newPrice: "₦899",
    detail: "/product6",
  },

  {
    id: 7,
    image: IMG7,
    title: "LIPTON ICE TEA LEMON 450ML",
    oldPrice: "₦3000",
    newPrice: "₦149",
    detail: "/product7",
  },

  {
    id: 8,
    image: IMG8,
    title: "NESTLE PURE LIFE REGULAR",
    oldPrice: "₦500",
    newPrice: "₦200",
    detail: "/product8",
  },
];
const FlashSale = () => {
  return (
    <section className="container flash-sale-section">
      <div className="flash-timer">
        <div className="  flash-sale">
          <h2>Flash Sale</h2>
          <h3>12hrs:20mins:24secs</h3>
        </div>
      </div>
      <div className="flash-sale-cards">
        {data.map(({ id, image, title, oldPrice, newPrice, detail }) => {
          return (
            <article key={id} className="item-details">
              <div className="item-image">
                <img src={image} alt={title} data={data} />
              </div>

              <h3>{title}</h3>
              <div className="item-prices">
                <span>{oldPrice}</span>
                <h4>{newPrice}</h4>
              </div>
              <div className="item-cta">
                <button className="add-cart">Add to cart</button>

                <Link to={detail} className="buy-now-link">
                  <button className="buy-now">buy Now</button>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FlashSale;
