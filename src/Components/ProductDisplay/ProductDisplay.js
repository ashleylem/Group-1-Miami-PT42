import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../../Store/appContext";

import '/workspace/Group-1-Miami-PT42/src/Components/ProductDisplay/ProductDisplay.css'
import wishlist from "../../Images/wishlist-icon.png";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";


export const ProductDisplay = () => {
  const { store, actions } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [sort, setSort] = useState('freshness');
  const [color, setColor]=useState()
  const [productType, setProductType]=useState()
  const [size, setSize]=useState()
  const localStorageKey = "info_key";
  const {id}=useParams()

  useEffect(() => {
    const sort_items = {
      method: 'GET',
      url: 'https://asos2.p.rapidapi.com/products/v2/list',
      params: {
        store: 'US',
        offset: '0',
        categoryId: id,
        limit: '48',
        country: 'US',
        sort: sort,
        base_colour: color,
        attribute_1047: productType,
        currency: 'USD',
        sizeSchema: 'US',
        size: size,
        lang: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': 'e4d507f755msh79162ed1d20a69dp126773jsnce4d274e856c',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    }
    axios.request(sort_items).then(function (response) {
      setInfo(response.data)
    })
}, [sort, color, productType, size]);
console.log(info)
  // useEffect(()=>{
  //   localStorage.setItem(localStorageKey, JSON.stringify(info));
  //   }
  // ,[info])
 


  return (
    <div>
      <h1>Women's {info?.categoryName}</h1>
    <div className="women-container d-flex flex-row container-fluid">
      <div className="col-3 position-relative filters-column ">
        <div className="filters-container p-2 mt-4 me-4">
       <form >
        <label>
          Sort by:
          <select className="form-select" value={sort} onChange={(e)=>{
            setSort(e.target.value)
            
            }}>
            <option value="freshness">Newest (Default)</option>
            <option value="priceasc">Price Min</option>
            <option value="pricedesc">Price Max</option>
            
          </select>
        </label>
       
      </form>
      <label>Filter By:</label>
      <form >
        <label>
          Color:
          <select className="form-select" value={color} onChange={(e)=>{
            setColor(e.target.value)
            }}>
              {info?.facets?.map((item, index)=>{
                if (item.name== 'Color'){return(item.facetValues.map((a, index)=>{
                return(<option value={a.id}>{a.name} </option>)}))}
              })}
          </select>
        </label>
        <label>
          Product Type:
          <select className="form-select" value={productType} onChange={(e)=>{
            setProductType(e.target.value)
            }}>
              {info?.facets?.map((item, index)=>{
                if (item.name== 'Product Type'){return(item.facetValues.map((a, index)=>{
                return(<option value={a.id}>{a.name} </option>)}))}
              })}
          </select>
        </label>
        <label>
          Size:
          <select className="form-select" value={size} onChange={(e)=>{
            setSize(e.target.value)
            }}>
              {info?.facets?.map((item, index)=>{
                if (item.name== 'Size'){return(item.facetValues.map((a, index)=>{
                return(<option value={a.id}>{a.name} </option>)}))}
              })}
          </select>
        </label>
       
       
      </form></div></div>
      <div className="products row">
        {info?.products?.map((item, index) => {
          return (
            <div className="card col-3 m-2" key={index}>
              <img
                src={"https://" + item.imageUrl}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="row row-contents">
                  <p className="card-text col">{item.price.current.text}</p>
                  <button className=" btn col">
                    <FontAwesomeIcon
                      className="cart-icon"
                      icon={faShoppingCart}
                    />
                    <p>Add to Cart</p>
                  </button>
                </div>

                <div className="card-footer row">
                  <button
                    onClick={() => {
                      // let newWishlist= [...wishlist]
                      // if (newWishlist.includes(item.id)){
                      //   return "Already added"
                      // }
                      // else
                      let newItem = {
                        userId: localStorage.getItem("user-id"),
                        id: item.id,
                        name: item.name,
                        price: item.price.current.defaultValue,
                        description: item.name,
                        picture: item.imageUrl,
                      };
                      actions.add_to_wishlist(newItem);

                      if (store.isAuthenticated == true) {
                        alert("Sucessfully added!");
                      } else {
                        alert("Please Login");
                      }
                    }}
                    className=" col ps-0 btn button-container"
                  >
                    <FontAwesomeIcon
                      className="wishlistbtn ps-0"
                      icon={faBookmark}
                    />
                    <p className="wishlist-text">Add to wishlist</p>
                  </button>
                  <Link
                    className="detailButton col btn"
                    to={"/details/" + item.id}
                  >
                    More details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div></div>
  );
};
