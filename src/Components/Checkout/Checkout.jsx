import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../Store/appContext";

/**
 * This function displays Square cards for product segments right below the Bestsellers section.
 * It displays static image cards for 3 products segments
 * @param {} none No input parameters
 * @returns {HTML} HTML for best sellers
 */

function Checkout() {
  const { actions } = useContext(Context);
    const [cart, setCart]=useState()
  const [name, setName] = useState();
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [addressInfo, setAddressInfo]=useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const [buyerInfo, setBuyerInfo]=useState({
    first_name: '',
    last_name:'',
    email:'',
  })
  const handleChange = (property) => (event) => {
    const value = event.target.value;
    setAddressInfo((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };
  const handleBuyer = (property) => (event) => {
    const value = event.target.value;
    setBuyerInfo((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };
// const handlesubmit=()=>{
// const data= new FormData()
// data.append("buyer_name", buyerInfo[first_name]+" "+ buyerInfo[last_name])
// data.append("buyer_shipping", addressInfo[address]+ ", " +addressInfo[city] + ", " + addressInfo[state] + ", " + addressInfo[zip] )
// data.append("fullfillment_status", false)

// cart.map((item)=>{
//   actions.add_to_purchases(item)

// })

// actions.clear_cart()


// }

  useEffect(()=>{
  async function settingCart(){
    let newCart= await actions.get_user_cart()
    setCart(newCart)
  }
  settingCart()
  })


  return (
    <div className="checkout-container container-fluid">
      <div className="py-5">
        <div className="checkout-container2 mx-auto shadow rounded">
          <div className=" d-flex w-auto p-1 px-3 py-3 ">
            <div className="flex-fill col p-2">
              <h1>Checkout</h1>
              <div >
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-4">Shipping Info</h3>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-floating">
                        <input
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                          onChange={handleBuyer('first_name')}
                          
                        />
                        <label floating for="form3Example1m">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-floating">
                        <input
                          type="text"
                          id="form3Example1n"
                          class="form-control form-control-lg"
                          onChange={handleBuyer('last_name')}
                        
                        />
                        <label floatingfor="form3Example1n">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      id="form3Example8"
                      name="address"
                      value={addressInfo.address}
                      class="form-control form-control-lg"
                      onChange={handleChange('address')}
                    />
                    <label floating for="form3Example8">
                      Address
                    </label>
                  </div>

                  <div class="row">
                    <div class="col-md-6 form-floating mb-4">
                    
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control"
                      onChange={handleChange('city')}
                    
                    />
                    <label for="form3Example3">
                    City
                    </label>
                 
                    </div>
                    <div class="col-md-6 form-floating mb-4">
                    
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control"
                      onChange={handleChange('state')}
                    
                    />
                    <label for="form3Example3">
                    State
                    </label>
                    </div>
                  </div>

                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control form-control-lg"
                      onChange={handleChange('zip')}
                    
                    />
                    <label for="form3Example3">
                      Zip
                    </label>
                  </div>

                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control form-control-lg"
                      onChange={handleBuyer('email')}
                    
                    />
                    <label for="form3Example2">
                      Email
                    </label>
                  </div>

                  
                </div>
              </div>
            </div>
            <div className=" d-flex align-items-center  col p-2  ">
              <div className="card-info overflow-visible p-3 rounded">
                <span className=" d-block card-details pb-3">Card Details</span>
                <span className="card-type ">Card Type</span>

                <div className="overflow-visible d-flex justify-content-between align-items-center mt-2">
                  <div className="rounded small-card py-1 px-2 position-relative ">
                    <span className="fst-italic text-decoration-underline fs-2 font-medium visa-text underline">
                      VISA
                    </span>

                    <div className="d-flex small-card-text justify-content-between align-items-center pt-2 ">
                      <span className="fs-6  font-medium">****</span>
                      <span className="fs-6">****</span>
                      <span className="fs-6  ">****</span>
                      <span className="fs-6  ">****</span>
                    </div>

                    <div className="d-flex small-card-text justify-content-between align-items-center mt-1">
                      <span className="fs-6   text-gray-200">{name}</span>
                      <span className="fs-6  text-gray-200">
                        {month + "/" + year}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center  align-items-center flex-column">
                    <img
                      src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                      width="40"
                      className="relative right-5"
                    />
                    <span className="fs-6 mastercard-text display-relative ">
                      mastercard.
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-center flex-column pt-3">
                  <label className="fs-6 card-label">Name on Card</label>
                  <input
                    type="text"
                    value={name}
                    className="card-input w-100 fs-5  py-2"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex justify-center flex-col pt-3">
                  <label className="fs-6 card-label ">Card Number</label>
                  <input
                    type="text"
                    className="card-input w-100 fs-5  py-2"
                    placeholder="****     ****      ****      ****"
                  />
                </div>

                <div className="row gap-2 pt-2 mb-3">
                  <div className="col ">
                    <label className="fs-6 card-label">Expiration Date</label>
                    <div className="d-flex gap-2">
                      <input
                        type="text"
                        className="card-input col w-100 fs-5  py-2"
                        placeholder="mm"
                        onChange={(e) => setMonth(e.target.value)}
                      />
                      <input
                        type="text"
                        className="card-input col w-100 fs-5  py-2"
                        placeholder="yy"
                        onChange={(e) => setYear(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <label className="fs-6 card-label">CVV</label>
                    <input
                      type="text"
                      className="card-input col w-100 fs-5  py-2"
                      placeholder="XXX"
                    />
                  </div>
                </div>

                <button className="checkout-button w-100 rounded  hover:bg-blue-600">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
