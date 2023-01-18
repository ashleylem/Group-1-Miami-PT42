import React from 'react'
import './Nav.css'
import logoLight from '../Images/logoLight.png'  
import user from '../Images/user.png'
import cart from '../Images/cart.png'
import {Link} from 'react-router-dom';

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
                <a href="Login"><img src={user}/></a>
                <a href="public/js/cart.html"><img src={cart}/></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><Link to="/landing" class="link">home</Link></li>
            <li class="link-item"><Link to="/women" class="link">women</Link></li>
            <li class="link-item"><Link to="/men" class="link">men</Link></li>
            <li class="link-item"><Link to="/kids" class="link">kids</Link></li>
            <li class="link-item"><Link to="/accessories" class="link">accessories</Link></li>
         </ul>

         {/* added react router based links here */}
    </>
  )
}

export default Nav