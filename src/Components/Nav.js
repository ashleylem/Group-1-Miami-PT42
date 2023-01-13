import React from 'react'
import './Nav.css'
import logoLight from '../Images/logoLight.png'  
import user from '../Images/user.png'
import cart from '../Images/cart.png'
function Nav() {
  return (
    <>
    <div class ="nav">
            <img src={logoLight} class="brand-logo" alt=""/>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product"/>
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src={user}/></a>
                <a href="public/js/cart.html"><img src={cart}/></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
         </ul>
    </>
  )
}

export default Nav