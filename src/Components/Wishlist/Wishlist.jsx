import React from "react";
import "../Hero/Hero.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Wishlist.css";
import greenDress from "../../Images/greenDress1.webp";
import shirt1 from "../../Images/shirt1.webp";
import Shoe from "../../Images/shoe7.webp";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../Store/appContext";
/**
 * This function displays Wishlists in a table.
 * @param {} none No input parameters
 * @returns {HTML} HTML for best sellers
 */

function Wishlist() {
  const { actions } = useContext(Context);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function settingWishlist() {
      let newWishlist = await actions.get_user_wishlist();
      setWishlist(newWishlist);
    }
    settingWishlist();
  }, []);

  return (
    <div className="cart-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-heading mb-10">
              <h1>My wishlist</h1>
            </div>
            <div className="table-wishlist">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <thead>
                  <tr>
                    <th width="45%">Product Name</th>
                    <th width="15%">Unit Price</th>
                    <th width="15%">Stock Status</th>
                    <th width="15%"></th>
                    <th width="10%"></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item, index) => {
                   return( 
                      <tr>
                        <td width="45%">
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src={"https://" + item.picture}
                                alt=""
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">{item.name}</div>
                          </div>
                        </td>
                        <td width="15%" className="price">{"$"+item.price}</td>
                        <td width="15%"><span className="in-stock-box">In Stock</span></td>
                        <td width="15%">
                          <button className="round-black-btn small-btn">Add to Cart</button>
                        </td>
                        <td width="10%" className="text-center">
                          <button
                            onClick={() => actions.delete_item(item.product_id)}
                            className="trash-icon">
                          {/* <FontAwesomeIcon icon={faTrash} /> */}
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
