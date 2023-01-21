import React from 'react'
import '../Hero/Hero.css'
import womenCollection from '../../Images/women-collection.png'
import menCollection from '../../Images/men-collection.png'
import accessoriesCollection from '../../Images/accessories-collection.png'
/**
 * This function displays Square cards for product segments right below the Bestsellers section.
 * It displays static image cards for 3 products segments
 * @param {} none No input parameters 
 * @returns {HTML} HTML for best sellers
 */
function Collections() {
  return (
    <>
     <section class="collection-container">
        <a href="#" class="collection" onclick="trackClick3()">
            <img src={womenCollection} alt=""/>
            <p class="collection-title">for<br/>women</p>

            
        </a>

        <a href="#" class="collection" onclick="trackClick2()">
            <img src={menCollection} alt=""/>
            <p class="collection-title">for<br/>men</p>

            
        </a>

        <a href="#" class="collection" onclick="trackClick1()">
            <img src={accessoriesCollection} alt=""/>
            <p class="collection-title">accessories</p>

            
        </a>
    </section>
    </>
  )
}

export default Collections