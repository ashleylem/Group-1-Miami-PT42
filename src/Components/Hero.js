import React from 'react'
import './Hero.css'
import logoDark from '../Images/logoDark.png'  

function Hero() {
  return (
    <>
    <header className="hero-section">
        <div className="content" >
            <img src={logoDark} className="logo" alt=""/>
            <p className="sub-heading">4Geeks House of Fashion</p>
        </div>
    </header>
    </>
  )
}

export default Hero

