import React from "react";
import DET6 from "../../assets/REDBULL COFFE CANNED DRINK 250ML.png";

const detail6 = () => {
  return (
    <>
      <section className="product-detail-section">
        <div className="cart-container detail-main-conatiner">
          <div className="cart-bar detail-line"></div>
          <h3 className="main-heading">Product Details</h3>
          <div className="details-container">
            <div className="detail-img">
              <img src={DET6} alt="REDBULL COFFE CANNED DRINK 250ML" />
            </div>
            <div className="detail-main-main">
              <div className="details-heading">
                <h3 className="title">REDBULL COFFE CANNED DRINK 250ML</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="amount">Amount</h3>
              </div>
              <div className="details-content">
                <div className="detail-package">
                  <small>single</small>
                  <h3>x12</h3>
                </div>
                <div className="detail-item-quantity">
                  <button>-</button>
                  <div className="count">5</div>
                  <button>+</button>
                </div>
                <div className="deatil-amount">N50000</div>
              </div>
              <div className="detailed-description">
                <h4>Description</h4>
                <p>
                  Hennessy V.S.O.P. is medium amber with fine aromas of sweet
                  fruit, honey, caramel, cloves, nuts and oaky notes. The palate
                  is round with smooth fruity flavours of orange peel, prune and
                  vanilla on a long lingering finish. Hennessy V.S.O.P. is a 4
                  year old cognac, aged in Limousin oak barrels. A world famous
                  cognac producer, Hennessy has a history dating back to 1765
                  when the company was established by Irishman Richard Hennessy.
                  In the beginning, it was an eaux-de-vie trading business, but
                  Hennessy was going to become the most successful cognac
                  exporter in the world.
                </p>
              </div>
            </div>
          </div>
          <button className="detail-addtocart">Add to cart</button>
        </div>
      </section>
    </>
  );
};

export default detail6;
