import React from 'react'
import logoLight from '../Images/logoLight.png' 
import './Footer.css'

function Footer() {
  return (
    <>
    <div class="footer-content">
            <img src={logoLight} class="logo" alt=""/>
            <div class="footer-ul-container">
                <ul class ="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-links">t-shirts</a></li>
                    <li><a href="#" class="footer-links">sweatshirts</a></li>
                    <li><a href="#" class="footer-links">shirts</a></li>
                    <li><a href="#" class="footer-links">jeans</a></li>
                    <li><a href="#" class="footer-links">shoes</a></li>
                    <li><a href="#" class="footer-links">casuals</a></li>
                    <li><a href="#" class="footer-links">formals</a></li>
                    <li><a href="#" class="footer-links">sports</a></li>
                    <li><a href="#" class="footer-links">watch</a></li>
                </ul>
                <ul class ="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-links">t-shirts</a></li>
                    <li><a href="#" class="footer-links">sweatshirts</a></li>
                    <li><a href="#" class="footer-links">shirts</a></li>
                    <li><a href="#" class="footer-links">jeans</a></li>
                    <li><a href="#" class="footer-links">shoes</a></li>
                    <li><a href="#" class="footer-links">casuals</a></li>
                    <li><a href="#" class="footer-links">formals</a></li>
                    <li><a href="#" class="footer-links">sports</a></li>
                    <li><a href="#" class="footer-links">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Know more about our mission and vision</p>
        <p class="info">support emails - help@aandm.com</p>
        <p class="info">telephone - 1800 555 555 </p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">The most enviromentally conscious online retail store</p>
    </>
  )
}

export default Footer