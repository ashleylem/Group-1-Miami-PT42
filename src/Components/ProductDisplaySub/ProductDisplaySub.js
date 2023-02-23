import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../../Store/appContext";

import "../../Components/ProductDisplay/ProductDisplay.css";
import wishlist from "../../Images/wishlist-icon.png";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Accessories } from "../Accessories/Accessories";
import Cart from "../Cart/Cart";

export const SubCatDisplay = () => {
  const { store, actions } = useContext(Context);
  const [info, setInfo] = useState([]);
  
  const [productType, setProductType] = useState();

  const localStorageKey = "info_key";
  const productImgUrl =
  "https://ashleylem.pythonanywhere.com/product/images/";
  const { id, subcategory } = useParams();

  useEffect(() => {
    async function settingInfo(){
      const newInfo = await actions.get_subcategory_products(id, subcategory)
      setInfo(newInfo)
    }
    settingInfo()
  }, [subcategory]);
  console.log(info)

  // useEffect(()=>{
  //   localStorage.setItem(localStorageKey, JSON.stringify(info));
  //   }
  // ,[info])

  return (
    <div>
      <h1>{}</h1>
      <div className="women-container d-flex flex-row container-fluid">
        <div className="col-3 position-relative filters-column ">
          <div className="filters-container p-2 mt-4 me-4">
         { id=="Men" ?(<> <div className="category-links"><Link to={"/products/Men/Jackets"}>Jackets</Link>  </div>    
           <div className="category-links"><Link to={"/products/Men/Bottoms"}>Bottoms</Link> </div> 
           <div className="category-links"><Link to={"/products/Men/Tops"}>Tops</Link></div>  </> ) :
          id=="Women"? (<><div className="category-links"> <Link to={"/products/Women/Dresses"}>Dresses</Link>    </div>  
          <div className="category-links"> <Link to={"/products/Women/Bottoms"}>Bottoms</Link> </div>
          <div className="category-links"> <Link to={"/products/Women/Tops"}>Tops</Link></div> </> ):
        id=="Home-Products"?(<><div className="category-links"> <Link to={"/products/Home-Products/Furniture"}>Furniture</Link>      </div>
        <div className="category-links">  <Link to={"/products/Home-Products/Home-Decor"}>Home-Decor</Link> </div>
        <div className="category-links"> <Link to={"/products/Home-Products/Kitchen"}>Kitchen</Link></div> </> ):
      id=="Accessories"? (<><div className="category-links"> <Link to={"/products/Accessories/Jewelry"}>Jewelry</Link> </div>     
      <div className="category-links"> <Link to={"/products/Accessories/Bags"}>Bags</Link> </div>
      <div className="category-links"> <Link to={"/products/Accessories/Sunglasses"}>Sunglasses</Link> </div></> ): null }
          </div>
        </div>
        <div className="products  row">
          {info?.map((item, index) => {
            let imgUrl = item.filename;
                  let array = imgUrl.split(",");
            return (
              <div className="card col-3 m-2" key={index}>
                <img
                  src={productImgUrl + array[0]}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="row row-contents">
                    <p className="card-text col">{"$"+item.price}</p>
                    <button
                      onClick={() => {
                        let newItem = {
                          userId: localStorage.getItem("user-id"),
                          id: item.product_id,
                          name: item.name,
                          price: item.price,
                          description: item.description,
                          picture: item.filename,
                          seller_id: item.userId,
                        };
                        console.log(newItem)
                        actions.add_to_cart(newItem);
                        

                        if (store.isAuthenticated == true) {
                          alert("Sucessfully added!");
                        } else {
                          alert("Please Login");
                        }
                      }}
                      className=" btn col"
                    >
                      <FontAwesomeIcon
                        className="cart-icon"
                        icon={faShoppingCart}
                      />
                      <p>Add to Cart</p>
                    </button>
                  </div>

                  <div className="card-footer row">
                    <button
                      onClick={() => {
                        // let newWishlist= [...wishlist]
                        // if (newWishlist.includes(item.id)){
                        //   return "Already added"
                        // }
                        // else
                        let newItem = {
                          userId: localStorage.getItem("user-id"),
                          id: item.product_id,
                          name: item.name,
                          price: item.price,
                          description: item.description,
                          picture: item.filename,
                        };
                        actions.add_to_wishlist(newItem);

                        if (store.isAuthenticated == true) {
                          alert("Sucessfully added!");
                        } else {
                          alert("Please Login");
                        }
                      }}
                      className=" col ps-0 btn button-container"
                    >
                      <FontAwesomeIcon
                        className="wishlistbtn ps-0"
                        icon={faBookmark}
                      />
                      <p className="wishlist-text">Add to wishlist</p>
                    </button>
                    <Link
                      className="detailButton col btn"
                      to={"/details/" + item.product_id}
                    >
                      More details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
