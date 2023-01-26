import React from "react";
import "./Nav.css";
import logoLight from "../../Images/logoLight.png";
import user from "../../Images/user.png";
import cart from "../../Images/cart.png";
import wishlist from "../../Images/wishlist-icon.png";
import logo from "/workspace/Group-1-Miami-PT42/src/Images/logo.png";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/fontawesome-free-regular";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import { get_women_categories } from "../../asosApi";
import { useState, useEffect } from "react";
function Nav() {
  const [womenCategories, setWomenCategories] = useState([]);
  useEffect(() => {
    async function settingCategory() {
      let newcategories = await get_women_categories();
      setWomenCategories(newcategories);
    }
    settingCategory();
  },[]);
  return (
    <>
      <div className="nav">
        <Link to="landing"><img src={logo} className="brand-logo" alt="" /></Link>
        
        <div className="nav-items">
          <div className="search">
            <input
              type="text"
              className="search-box"
              placeholder="search brand, product"
            />
            <button className="search-btn">Search</button>
          </div>

          <Link to="/login">
            <FontAwesomeIcon className="login" icon={faUserCircle} />
          </Link>
          <Link to="/Cart">
            <FontAwesomeIcon className="cart" icon={faCartShopping} />
          </Link>
          <Link to="/Wishlist">
            <FontAwesomeIcon className="bookmark" icon={faBookmark} />
          </Link>
        </div>
      </div>
      <ul className="links-container">
        <li className="link-item">
          <Link to="/landing" className="link">
            home
          </Link>
        </li>
        <li className="link-item">
          <div class="dropdown">
            <button
              class="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Women
            </button>
            <ul class="row dropdown-menu">
              {womenCategories.map((item, index) => {
                return (
                  <li>
                    <Link
                      class="dropdown-item col"
                      to={"/display/" + item.link.categoryId}
                    >
                      {item.content.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
        <li className="link-item">
          <Link to="/men" className="link">
            men
          </Link>
        </li>
        <li className="link-item">
          <Link to="/kids" className="link">
            kids
          </Link>
        </li>
        <li className="link-item">
          <Link to="/accessories" className="link">
            accessories
          </Link>
        </li>
            <li class="link-item"><Link to="/video" class="link">Video Review</Link> </li>
      </ul>

      {/* added react router based links here */}
    </>
  );
}

export default Nav;
