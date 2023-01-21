import './App.css';
import React, {useState} from 'react'

import Bestsellers from './Components/Bestsellers/Bestsellers';
import Shirts from './Components/Shirts';
import Shoes from './Components/Shoes';
import Collections from './Components/Collections/Collections';
import Template from './Components/Template';
import {Women} from './Components/Women/Women';
import Wishlist from './Components/Wishlist/Wishlist';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Fulfilment from './Components/Fulfilment';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';


import injectContext from './Store/appContext';

import { Login } from './Components/Login-Register/Login';
import { Register } from './Components/Login-Register/Register';



function App() {
   const [currentForm, setCurrentForm] = useState ('login');

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

        <Route path ="/" element = {<Template />}>
            <Route path ="login" element={<><Login/></>} />
            <Route path ="register" element={<><Register /></>}/>
            <Route path ="landing" element = {<><Bestsellers /><Collections/><Shirts /><Shoes /></>}/>
            <Route path ="men" element = {<><Bestsellers /><Collections/><Shirts /><Shoes /></>}/> 
            <Route path ="women" element = {<><Women /></>}/>
            <Route path ="kids" element = {<><Shoes /></>}/>
            <Route path ="accessories" element = {<><Bestsellers /></>}/>
            <Route path ="wishlist" element = {<><Wishlist /></>}/>
            <Route path ="cart" element = {<Cart />}/>
            <Route path ="checkout" element = {<Checkout />}/>
            <Route path ="fulfilment" element = {<Fulfilment />}/>
            <Route path ="*" element = {<h1>Error</h1>}/><Route/>
          </Route>

        </Routes>
    </Router>
    </>
  );
  
}

export default injectContext(App);
