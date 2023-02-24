import React from 'react'
import './Hero.css'
import logoDark from '../../Images/logoDark.png'  

function Hero() {
  return (
    <>
    <header className="hero-section">
        <div className="content" >
            <img src={logoDark} className="logo" alt=""/>
            <p className="sub-heading">A New Way to Shop</p>
        </div>
    </header>
    </>
  )
}

export default Hero

