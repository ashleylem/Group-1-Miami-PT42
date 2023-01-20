import React from 'react'
import './Hero/Hero.css'

import arrow from '../Images/arrow.png'
import shoe1 from '../Images/shoe1.jpg'
import shoe2 from '../Images/shoe2.jpg'
import shoe3 from '../Images/shoe3.jpg'
import shoe4 from '../Images/shoe4.jpg'
import shoe5 from '../Images/shoe5.jpeg'
import shoe6 from '../Images/shoe6.jpg'
import shoe7 from '../Images/shoe7.webp'
import shoe8 from '../Images/shoe8.webp'



function Shoes() {
  return (
    <>
    <section className="product">
            <h2 className="product-category">shoes</h2>
            <button className="pre-btn"><img src={arrow} alt=""/></button>
            <button className="nxt-btn"><img src={arrow} alt=""/></button>
            <div className="product-container">
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={shoe1} className="product-thumb" alt=""/>
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
                        <img src={shoe2} className="product-thumb" alt=""/>
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
                        <img src={shoe3} className="product-thumb" alt=""/>
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
                        <img src={shoe4} className="product-thumb" alt=""/>
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
                        <img src={shoe5} className="product-thumb" alt=""/>
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
                        <img src={shoe6} className="product-thumb" alt=""/>
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
                        <img src={shoe7} className="product-thumb" alt=""/>
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
                        <img src={shoe8} className="product-thumb" alt=""/>
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

export default Shoes