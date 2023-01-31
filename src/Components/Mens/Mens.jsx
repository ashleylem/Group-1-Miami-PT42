import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { get_women_categories } from "../../asosApi";

export const Men=()=>{
const [categories, setCategories]=useState([])
useEffect(()=>{
    async function settingCategory(){
        let newcategories= await get_women_categories()
        setCategories(newcategories)
    }
    settingCategory()
})

    return(
        
        <div className="category-container" >
            {categories.map((item, index)=>{
                return(
                    <div className="category-link">
                    <Link to={'/display/'+item.link.categoryId}> {item.content.title}</Link>
                    </div>)
            })}
             
            </div>
    )
}