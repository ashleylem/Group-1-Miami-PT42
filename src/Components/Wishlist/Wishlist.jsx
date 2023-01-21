import React from "react";
import "../Hero/Hero.css";
import "./Wishlist.css";
import greenDress from "../../Images/greenDress1.webp";
import shirt1 from "../../Images/shirt1.webp";
import Shoe from "../../Images/shoe7.webp";
/**
 * This function displays Wishlists in a table.
 * @param {} none No input parameters 
 * @returns {HTML} HTML for best sellers
 */

function Wishlist() {
  

  return (
    <>
      <div className="cart-wrap">
		<div className="container">
	        <div className="row">
			    <div className="col-md-12">
			        <div className="main-heading mb-10"><h1>My wishlist</h1></div>
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
					        	<tr>
					        		<td width="45%">
					        			<div className="display-flex align-center">
		                                    <div className="img-product">
		                                        <img src= {greenDress} alt="" className="mCS_img_loaded" />
		                                    </div>
		                                    <div className="name-product">
		                                        Green Dress
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" className="price">$110.00</td>
					        		<td width="15%"><span className="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" className="text-center"><a href="#" className="trash-icon"><i className="far fa-trash-alt"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div className="display-flex align-center">
		                                    <div className="img-product">
		                                        <img src={shirt1} alt="" className="mCS_img_loaded" />
		                                    </div>
		                                    <div className="name-product">
		                                        Shirt
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" className="price">$110.00</td>
					        		<td width="15%"><span className="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" className="text-center"><a href="#" className="trash-icon"><i className="far fa-trash-alt"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div className="display-flex align-center">
		                                    <div className="img-product">
		                                        <img src={Shoe} alt="" className="mCS_img_loaded" />
		                                    </div>
		                                    <div className="name-product">
		                                        Shoe
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" className="price">$110.00</td>
					        		<td width="15%"><span className="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" className="text-center"><a href="#" className="trash-icon"><i className="far fa-trash-alt"></i></a></td>
					        	</tr>
				        	</tbody>
				        </table>
				    </div>
			    </div>
			</div>
		</div>
	</div>
	
    </>
  );
}

export default Wishlist;
