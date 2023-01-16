import React from 'react'
import './Hero.css'
import arrow from '../Images/arrow.png'
import greenDress from '../Images/greenDress1.webp'
import product1 from '../Images/product1.png'
import card3 from '../Images/card3.png'
import card4 from '../Images/card4.png'
import card5 from '../Images/card5.png'
import card6 from '../Images/card6.png'
import card7 from '../Images/card7.png'
import card8 from '../Images/card8.png'

function Bestsellers() {
  return (
    <>
    <section class="product">
        <h2 class="product-category">Best Sellers</h2>  
        <button class="pre-btn"><img src={arrow} alt=""/></button>
        <button class="nxt-btn"><img src={arrow} alt=""/></button>

        <div class="product-container">

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <a href="public/js/product2.html"><img src={greenDress} class="product-thumb" alt=""/></a>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <a href="public/js/product.html"><img src={product1} class="product-thumb" alt=""/></a>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <a href="public/js/contact.html"><img src={card3} class="product-thumb" alt=""/></a>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">test-brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <a href="public/js/contact.html"><img src={card4} class="product-thumb" alt=""/></a>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <a href="public/js/contact.html"><img src={card5} class="product-thumb" alt=""/></a>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={card6} class="product-thumb" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={card7} class="product-thumb" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={card8} class="product-thumb" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des"> this design uses sustainable bamboo cotton</p>
                    <span class="price">$40</span><span class="actual-price">$80</span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Bestsellers