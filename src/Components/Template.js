import Hero from './Hero';
import Nav from './Nav';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
import React from 'react'


// This file has the header, footer and nav components
// outlet here allows dynamic rendering of components mentioned in the react routes in app.js
function Template() {
  return (
    <>
    
      
      <Nav />
      <Hero />
      <Outlet/>

  
    </>
    
  )
}

export default Template