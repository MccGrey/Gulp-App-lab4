import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./cart.css";
import CART from "../../assets/HENNESSY VSOP 75CL.png";
import axios from "axios";

const Cart = (props) => {
  // get Cart Items
  const token = localStorage.getItem("token");
  const [cart, setCart] = useState(null);
  const getCartItems = () => {
    var config = {
      method: "get",
      url: "https://test-applet-5.herokuapp.com/api/v1/carts/cart",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios(config)
      .then(function (response) {
        setCart(response?.data?.cart);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const addToCart = async (productId) => {
    var data = JSON.stringify({
      productId: productId,
    });

    var config = {
      method: "patch",
      url: "https://test-applet-5.herokuapp.com/api/v1/carts/cart/add",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        getCartItems();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const removeFromCart = async (productId) => {
    var data = JSON.stringify({
      productId: productId,
    });

    var config = {
      method: "patch",
      url: "https://test-applet-5.herokuapp.com/api/v1/carts/cart/remove",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        getCartItems();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getCartItems();

    return;
  }, []);

  //fetching cartItems
  const { cartItems } = props;

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-bar"></div>
          <div className="navigator">
            <h3 className="cart-head">Cart</h3>
          </div>
        </div>

        <div className="cart-condition">
          {cart?.itemCount === 0 && <div>Cart is empty</div>}

          <div className="cart-content">
            <div className="cart-content-container">
              <h3 className="order">Your Order</h3>
              <div className="cart-title">
                <h3 className="product-title item-carts">Item</h3>
                <h3 className="price price-cart">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
            </div>

            {cart?.products?.map(
              ({ productID, product, quantity, subtotal}) => {
                return (
                  <div key={productID} className="cart-items">
                    <div className="cart-item">
                      <div className="cart-product">
                        <img src={product?.images} alt="" />
                        <h3 className="item-name item-name-carts">
                          {product?.productName}
                        </h3>
                      </div>
                      <div className="item-price item-price-cart">
                        {" "}
                        ₦{product?.price}
                      </div>
                      <div className="item-quantity item-quantity-carts">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            removeFromCart(productID);
                          }}
                        >
                          -
                        </button>
                        <div className="count">{quantity}</div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(productID);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="item-total"> ₦{subtotal}</div>
                    </div>
                  </div>
                );
              }
            )}
            <div className="summary summary-carts">
              <h3>SubTotal</h3>
              <h4> ₦ {cart?.totalPrice}</h4>
            </div>
            <div className="proceed-checkout-container">
              <Link to="/checkout">
                <button className="proceed-checkout">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Cart;
