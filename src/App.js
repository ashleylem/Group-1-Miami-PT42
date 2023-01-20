import './App.css';
import React, {useState} from 'react'
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Bestsellers from './Components/Bestsellers';
import Shirts from './Components/Shirts';
import Shoes from './Components/Shoes';
import Collections from './Components/Collections';
import Template from './Components/Template';
import { Women } from './Components/Women';
import { get_product_list, get_women_bestsellers } from './asosApi';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import { Login } from './Components/Login-Register/Login';
import { Register } from './Components/Login-Register/Register';
import { Mens} from './Components/Mens/Mens';

function App() {
   const [currentForm, setCurrentForm] = useState ('login');

   const toggleForm = (formName) => {
    setCurrentForm(formName);
   }
    
  return (
    <>
     <div>
      {currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
     </div>
    

    <Router>
        <Routes>
          <Route path ="/" element = {<><Template/><Footer/></>}/>
          <Route path ="/login" element={<><Nav/><Login/><Footer/></>} />
          <Route path = "/register" element={<><Nav/><Register/><Footer/></>}/>
          <Route path ="/landing" element = {<><Template/><Bestsellers /><Collections/><Shirts /><Shoes /><Footer/></>}/>
          <Route path ="/men" element = {<><Template/><Bestsellers /><Collections/><Shirts /><Shoes /><Footer/></>}/> 
          <Route path ="/women" element = {<><Template/><Women /><Footer/></>}/>
          <Route path ="/kids" element = {<><Template/><Shoes /><Footer/></>}/>
          <Route path ="/accessories" element = {<><Template/><Bestsellers /><Footer/></>}/>
          <Route path ="*" element = {<h1>Error</h1>}/><Route/>
        </Routes>
    </Router>
    </>
  );
  
}

export default App;
