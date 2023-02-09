import './App.css';
import React, { useState } from 'react'
import "@fontsource/playfair-display"
import "@fontsource/abril-fatface"
import "@fontsource/open-sans"

import Bestsellers from './Components/Bestsellers/Bestsellers';
import Shirts from './Components/Shirts';
import Shoes from './Components/Shoes';
import Collections from './Components/Collections/Collections';
import Template from './Components/Template';
import { ProductDisplay } from './Components/ProductDisplay/ProductDisplay';
import Wishlist from './Components/Wishlist/Wishlist';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Fulfilment from './Components/Fulfilment';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import injectContext from './Store/appContext';
import { ProductDetail } from './Components/ProductDetail/ProductDetail';

// import { Login } from './Components/Login-Register/Login';
// import { Register } from './Components/Login-Register/Register';
import { Signin } from './Components/Login-Register/Signin';
import { Signup } from './Components/Login-Register/Signup'
import { Video } from './Components/VideoPage/video';
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import { get_product_details } from './asosApi';
import { sort_items } from './asosApi';
import { Women } from './Components/Womens/Womens';
import { Profile } from './Components/Profile/Profile';
import {Men} from './Components/Mens/Mens';



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      {/* <div>
      {currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
     </div> */}

      <Router>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="landing" element={<><Bestsellers /><Collections /><Shirts /><Shoes /></>} />
            <Route path="men" element={<><Men /></>} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<><Shoes /></>} />
            <Route path="accessories" element={<><Bestsellers /></>} />
            <Route path="wishlist" element={<><Wishlist /></>} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="video" element={<Video />} />
            <Route path="*" element={<h1>Error</h1>} /><Route />
            <Route path="fulfilment" element={<Fulfilment />} />
            <Route path="display/:id" element={<><ProductDisplay /></>} />
            <Route path="details/:id" element={<><ProductDetail /></>}></Route>
            <Route path='profile' element={<Profile/>}/>
            <Route path='signin' element={<Signin/>}/>
          </Route>
          <Route path ="/signin" element = {<><Nav/><Signin /></>}/>
          <Route path ="/signup" element = {<><Nav/><Signup /></>}/>

        </Routes>
      </Router>
    </>
  );

}

export default injectContext(App);
