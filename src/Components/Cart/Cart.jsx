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

function Cart() {
	const { actions } = useContext(Context);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		async function settingCart() {
			let newCart = await actions.get_user_cart();
			setCart(newCart);
		}
		settingCart();
	}, []);
  console.log(cart)
	return (
		<div class="basket">
			<div className="heading-cart">
				<div className="cube">
					<span class="side top">JUST BUY IT!!</span>
					<span class="side front">Your Cart</span>
				</div>
			</div>
			
			<div class="basket-labels">
				<ul>
					<li class="item item-heading">Item</li>
					<li class="price">Price</li>
					<li class="quantity">Quantity</li>
					<li class="subtotal">Subtotal</li>
				</ul>
			</div>
			
			{cart.map((item, index) => {
				return (
					<div class="basket-product">
						<div class="item">
							<div class="product-image">
								<img
									src={"https://" + item.picture}
									alt=""
									className="product-frame"
								/>
							</div>
							<div class="product-details">
								<h1><strong><span class="item-quantity"></span> {item.name}</strong> Lace Sleeve Cuff Dress</h1>
								<p><strong>Desription</strong></p>
								<p>Product Code - 232321939</p>
							</div>
						</div>
						<div className="price">{"$" + item.price}</div>
						<div class="quantity">
							<input type="number" value="1" min="" class="quantity-field" />
						</div>
						<div class="subtotal"></div>
						<div class="remove">
							<button
								onClick={() => actions.delete_cart_item(item.product_id)}
								className="trash-icon">
								{/* <FontAwesomeIcon icon={faTrash} /> */}
							</button>
						</div>
						
					</div>

				);
			}
			)
		}
		<div class="basket-module">
				<label for="promo-code">Enter a promotional code</label>
				<input id="promo-code" type="text" name="promo-code" maxlength="5" class="promo-code-field" />
				<button class="promo-code-cta">Apply</button>
			</div>
			<button className="checkout-button-cart"><Link to="/checkout">Checkout</Link></button>
		</div>
	)
}
export default Cart