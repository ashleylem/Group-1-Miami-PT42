import React, { useContext } from "react";
import "./Nav.css";
import logoLight from "../../Images/logoLight.png";
import user from "../../Images/user.png";
import cart from "../../Images/cart.png";
import wishlist from "../../Images/wishlist-icon.png";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/fontawesome-free-regular";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import { get_women_categories } from "../../asosApi";
import { get_men_categories } from "../../asosApi";
import { useState, useEffect } from "react";
import { Context } from "../../Store/appContext";
function Nav() {
  const [womenCategories, setWomenCategories] = useState([]);
  const [menCategories, setMenCategories] = useState([]);
  const { store } = useContext(Context);
  useEffect(() => {
    async function settingCategory() {
      let newcategories = await get_women_categories();
      setWomenCategories(newcategories);
    }
    settingCategory();
  }, []);
  useEffect(() => {
    async function settingCategory() {
      let newcategories = await get_men_categories();
      setMenCategories(newcategories);
    }
    settingCategory();
  }, []);

  const handleLogin = () => {
    if (store.isAuthenticated == true) {
      return "/profile";
    } else {
      return "/signin";
    }
  };
  return (
    <>
      <div className="nav">
        <Link to="/landing"><img src={logo} className="brand-logo" alt="" /></Link>
        
        <div className="nav-items">
          <div className="search">
            <input
              type="text"
              className="search-box"
              placeholder="search brand, product, ect."
            />
            <button className="search-btn">Search</button>
          </div>
          {store.isAuthenticated == true ? (
            <Link to="/profile ">
              <FontAwesomeIcon className="login" icon={faUserCircle} />
            </Link>
          ) : (
            <Link to="/signin">
              <FontAwesomeIcon className="login" icon={faUserCircle} />
            </Link>
          )}
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
          <button
              class="btn"
              type="button"
              aria-expanded="false"
            >
              Home
            </button>
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
             
                  <li>
                    <Link
                      class="dropdown-item col"
                      to={"/products/Women/Dresses"}
                    >
                      Dresses
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item col"
                      to={"/products/Women/Tops"}
                    >
                      Tops
                    </Link>
                  </li>
                  <li>
                  <Link
                    class="dropdown-item col"
                    to={"/products/Women/Bottoms"}
                  >
                    Bottoms
                  </Link>
                </li>
            </ul>
          </div>
        </li>
        <li className="link-item">
          <div class="dropdown">
            <button
              class="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Men
            </button>
            <ul class="row dropdown-menu">
            <li>
            <Link
              class="dropdown-item col"
              to={"/products/Men/Jackets"}
            >
              Jackets
            </Link>
          </li>
          <li>
            <Link
              class="dropdown-item col"
              to={"/products/Men/Tops"}
            >
              Tops
            </Link>
          </li>
          <li>
          <Link
            class="dropdown-item col"
            to={"/products/Men/Bottoms"}
          >
            Bottoms
          </Link>
        </li>
            </ul>
          </div>
        </li>
        <li className="link-item">
          <div class="dropdown">
            <button
              class="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </button>
            <ul class="row dropdown-menu">
             
                  <li>
                    <Link
                      class="dropdown-item col"
                      to={"/products/Home-Products/Furniture"}
                    >
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item col"
                      to={"/products/Home-Products/Home-Decor"}
                    >
                      Home Decor
                    </Link>
                  </li>
                  <li>
                  <Link
                    class="dropdown-item col"
                    to={"/products/Home-Products/Kitchen"}
                  >
                    Kitchen
                  </Link>
                </li>
            </ul>
          </div>
        </li>
        <li className="link-item">
          <div class="dropdown">
            <button
              class="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Accessories
            </button>
            <ul class="row dropdown-menu">
             
                  <li>
                    <Link
                      class="dropdown-item col"
                      to={"/products/Accessories/Jewelry"}
                    >
                      Jewelry
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item col"
                      to={"/products/Accessories/Bags"}
                    >
                      Bags
                    </Link>
                  </li>
                  <li>
                  <Link
                    class="dropdown-item col"
                    to={"/products/Accessories/Sunglasses"}
                  >
                    Sunglasses
                  </Link>
                </li>
            </ul>
          </div>
        </li>
        <li class="link-item">
          <Link to="/video" class="link">
          <button
              class="btn"
              type="button"
              aria-expanded="false"
            >
              Video
            </button>
          </Link>{" "}
        </li>
      </ul>

      {/* added react router based links here */}
    </>
  );
}

export default Nav;
