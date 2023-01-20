import React from "react";
import "./Hero.css";
import arrow from "../Images/arrow.png";
import greenDress from "../Images/greenDress1.webp";
import product1 from "../Images/product1.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import card6 from "../Images/card6.png";
import card7 from "../Images/card7.png";
import card8 from "../Images/card8.png";
import { useRef } from "react";

function Bestsellers() {
  let scrl = useRef(null);

//   const scrollNext = () => {
//     return ref==preBtn
//       ? (preBtn.current.scrollLeft += 200)
//       : ref==nextBtn
//       ? (nextBtn.current.scrolLeft -= 200)
//       : null;
//   };
const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };

  return (
    <>
      <section className="product">
        <h2 className="product-category">Best Sellers</h2>
        <button  className="pre-btn" onClick={()=>{slide(-200)}}>
          <img src={arrow} alt="" />
        </button>
        <button  className="nxt-btn" onClick={()=>{slide(+200)}}>
          <img src={arrow} alt="" />
        </button>
        
        <div ref={scrl} className="product-container">
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <a href="public/js/product2.html">
                <img src={greenDress} className="product-thumb" alt="" />
              </a>
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">Summer Green Dress</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <a href="public/js/product.html">
                <img src={product1} className="product-thumb" alt="" />
              </a>
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">Basic Tee</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <a href="public/js/contact.html">
                <img src={card3} className="product-thumb" alt="" />
              </a>
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">Lounge track</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <a href="public/js/contact.html">
                <img src={card4} className="product-thumb" alt="" />
              </a>
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">Pink Cocktail dress</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <a href="public/js/contact.html">
                <img src={card5} className="product-thumb" alt="" />
              </a>
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">black casual shirt</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={card6} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">black formal shirt</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={card7} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">black suit shirt</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={card8} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h6 className="product-brand">blue formal shirt</h6>
              <p className="product-short-des">
                {" "}
                this design uses sustainable bamboo cotton
              </p>
              <span className="price">$40</span>
              <span className="actual-price">$80</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bestsellers;
