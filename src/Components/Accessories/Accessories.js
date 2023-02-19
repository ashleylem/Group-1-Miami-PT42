import React, {useState, useEffect, useContext, useRef} from "react";
import { Context } from "../../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '/workspace/Group-1-Miami-PT42/src/Components/Accessories/Accessories.css'
import "@fontsource/open-sans"

export const Accessories=()=>{
const {actions}=useContext(Context)
const [accessoryInfo, setAccessoryInfo]=useState()
const apiImgUrl =
"https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us87.gitpod.io/product/images/";


useEffect(()=>{
    async function settingAccessories(){
        let newAccessories= await actions.get_accessories()
        setAccessoryInfo(newAccessories)
    }
    settingAccessories()
})

    return(
        <div className="accessories-container">
        <h1>Accessories</h1>
        
        <div className="products">
        {accessoryInfo?.map((item, index) => {
            let imgUrl= item.filename
            let array = imgUrl.split(",")
          return (
            <div className="accessories-display card col-3 m-3" key={index}>
              <img
                src={apiImgUrl + array[0]}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title product-name">{item.name}</h4>
                <h6 className="seller-name">{"Sold by: "+item.seller_name}</h6>
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
                      };
                      actions.add_to_cart(newItem);

                      
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
                      let newItem = {
                        userId: localStorage.getItem("user-id"),
                        id: item.id,
                        name: item.name,
                        price: item.price.current.defaultValue,
                        description: item.name,
                        picture: item.imageUrl,
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
      </div></div>
    )
}