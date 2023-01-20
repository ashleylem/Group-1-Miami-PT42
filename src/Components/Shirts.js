import React from 'react'
import './Hero/Hero.css'
import arrow from '../Images/arrow.png'
import shirt1 from '../Images/shirt1.webp' 
import shirt2 from '../Images/shirt2.jpg'
import shirt3 from '../Images/shirt3.png'
import shirt4 from '../Images/shirt4.jpg'
import shirt5 from '../Images/shirt5.jpg'
import shirt6 from '../Images/shirt6.webp'
import shirt7 from '../Images/shirt7.jpg'
import shirt8 from '../Images/shirt8.webp'

function Shirts() {
  return (
    <>
    <section className="product">
            <h2 className="product-category">shirts</h2>
            <button className="pre-btn"><img src={arrow} alt=""/></button>
            <button className="nxt-btn"><img src={arrow} alt=""/></button>
            <div className="product-container">
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt1} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
    
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt2} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
    
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt3} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
    
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt4} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
    
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt5} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
    
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt6} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
    
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt7} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
    
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shirt8} className="product-thumb" alt=""/>
                        <button className="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">brand</h2>
                        <p className="product-short-des"> this design uses sustainable bamboo cotton</p>
                        <span className="price">$40</span><span className="actual-price">$80</span>
                    </div>
                </div>
            </div>
    </section>

    </>
  )
}

export default Shirts