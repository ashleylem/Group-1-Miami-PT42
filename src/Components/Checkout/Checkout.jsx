import React from 'react'
import "./Checkout.css";
import {Link} from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../../Store/appContext';

/**
 * This function displays Square cards for product segments right below the Bestsellers section.
 * It displays static image cards for 3 products segments
 * @param {} none No input parameters 
 * @returns {HTML} HTML for best sellers
 */

function Checkout() {
  const {actions}=useContext(Context)
//   const [cart, setCart]=useState()

// useEffect(()=>{
// async function settingCart(){
//   let newCart= await actions.get_user_cart()
//   setCart(newCart)
// }
// settingCart()
// },[cart])


    return (
    <>
    <div className="align-center1">
  <div className="card1">
    <header>
    <h3 className="card-title1">Payment Details</h3>
    <img width="128" alt="Visa Inc. logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/128px-Visa_Inc._logo.svg.png" className="logo1"/>
    </header>
    
    <form action="" className="form1">
      <div className="card-number1">
      <label for="number">Card Number</label>
      <input id="number" type="text" size="40" placeholder="1234 1234 1234 1234" required/>
      </div>
      
      <div className="card-name">
      <label for="name">Name</label>
      <input id="name" type="text" size="40" required placeholder="Your Name"/>
      </div>
      
      <div className="input-row">
      <div className="select-date">
      <label for="date">Expiration</label>
      <select name="" id="date">
        <option value="00"></option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select name="" id="date">
        <option value="0000"></option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      </div>
      
      <div className="card-cvc">
      <label for="cvc">CVV</label>
      <input id="cvc" type="text" size="5" placeholder="123" required/>
      </div>
        
      <button 
      onClick={async()=>{
        let newCart= await actions.get_user_cart()
        console.log(newCart)
        newCart.map((item)=>{
        actions.add_to_purchases(item)
        console.log("added successfully")
        })
      
        actions.clear_cart() 
        console.log("clear")
      }}
      className="buy-button"> <Link to = "/fulfilment">Complete Purchase</Link></button>
      </div>
    </form>
    
  </div>
</div>
    </>
    )
}

export default Checkout