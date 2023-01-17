import Hero from './Hero';
import Nav from './Nav';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';


import React from 'react'

function Home() {
  return (
    <>
    
      
      <Nav />
      <Hero />
      <Outlet/>
      <Footer />

  
    </>
    
  )
}

export default Home