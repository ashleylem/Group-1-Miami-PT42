import Hero from './Hero/Hero';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import {Outlet} from 'react-router-dom';
import React from 'react'


// This file has the header, footer and nav components
// outlet here allows dynamic rendering of components mentioned in the react routes in app.js
function Template() {
  return (
    <>
    
      
      <Nav />
      <Outlet/>
      <Footer/>

  
    </>
    
  )
}

export default Template