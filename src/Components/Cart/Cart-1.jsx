import React from "react";
import "../Hero/Hero.css";
import "../Wishlist/Wishlist.css";
import greenDress from "../../Images/greenDress1.webp";
import shirt1 from "../../Images/shirt1.webp";
import Shoe from "../../Images/shoe7.webp";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../../Store/appContext";
import "./cart.css"
/**
 * This function displays Carts in a table.
 * @param {} none No input parameters 
 * @returns {HTML} HTML for best sellers
 */

function Cart1() {
    const { actions } = useContext(Context);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        async function settingCart() {
            let newCart = await actions.get_user_cart();
            setCart(newCart);
        }
        settingCart();
    }, []);

    return (
        <div className="heading-cart">
            <div className="basket">
                <div className="basket-module">
                    <label for="promo-code">Enter a promotional code</label>
                    <input id="promo-code" type="text" name="promo-code" maxlength="5" class="promo-code-field" />
                    <button className="promo-code-cta">Apply</button>
                </div>
                <div className="basket-labels">
                    <ul>
                        <li className="item item-heading">Item</li>
                        <li className="itemPrice">Price</li>
                        <li className="quantity">Quantity</li>
                        <li className="subtotal">Subtotal</li>
                    </ul>
                </div>
                {cart.map((item, index) => {
                    return (
                        <div className="basket-productCart">
                            <div className="item">
                                <div className="productCart-image">
                                    <img
                                        src={"https://" + item.picture}
                                        alt=""
                                        className="productCart-frame"
                                    />
                                </div>
                                <div className="productCart-details">
                                    <h1><strong><span class="item-quantity"></span> {item.name}</strong></h1>
                                    <p><strong>Desription</strong></p>
                                    <p>{item.description}</p>
                                    <p>Product Id: {item.product_id}</p>
                                </div>
                            </div>
                            <div className="itemPrice">{item.price}</div>
                            <div className="quantity">
                                <input type="number" value="1" min="1" class="quantity-field" />
                            </div>
                            <div className="subtotal"></div>
                            <div className="remove">
                                <button
                                    onClick={() => actions.delete_cart_item(item.product_id)}
                                    className="trash-icon">
                                    {/* <FontAwesomeIcon icon={faTrash} /> */}Remove
                                </button>
                            </div>
                        </div>)
                })}
                <aside>
                    <div className="summary">
                        <div className="cube">
                            <span className="side top">JUST BUY IT!!</span>
                            <span className="side front">Your Cart</span>
                        </div>
                        <div className="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
                        <div className="summary-subtotal">
                            <div className="subtotal-title">Subtotal</div>
                            <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                            <div className="summary-promo hide">
                                <div className="promo-title">Promotion</div>
                                <div className="promo-value final-value" id="basket-promo"></div>
                            </div>
                        </div>
                        <div className="summary-delivery">
                            <select name="delivery-collection" className="summary-delivery-selection">
                                <option value="0" selected="selected">Select InStore or Delivery</option>
                                <option value="collection">InStore</option>
                                <option value="first-class">1st Class(3 day Shipping)</option>
                                <option value="second-class">2nd Class(3-5 day Shipping)</option>
                                <option value="signed-for">Special Delivery</option>
                            </select>
                        </div>
                        <div className="summary-total">
                            <div className="total-title">Total</div>
                            <div className="total-value final-value" id="basket-total"></div>
                        </div>
                        <div className="summary-checkout">
                            <button className="checkout-button-cart"><Link to="/checkout">Go to Secure Checkout</Link></button>
                        </div>
                    </div>
                </aside>
            </div>
            </div>
            )
}

            export default Cart1