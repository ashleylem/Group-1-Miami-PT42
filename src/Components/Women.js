import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { get_women_bestsellers } from "../asosApi";
import { get_wishlist } from "../customApi";
import { Context } from "../Store/appContext";

export const Women = () => {
  const {store, actions}=useContext(Context)
  const [info, setInfo] = useState([]);
  const [wishlist, setWishlist]= useState([]);
 

  useEffect(() => {
    async function settingInfo() {
      let productInfo = await get_women_bestsellers();
      setInfo(productInfo);
      // console.log(productInfo);
    }
    settingInfo();
  }, []);

  useEffect( ()=>{
    async function settingWishlist(){
    let apiWishlist= await get_wishlist();
    setWishlist(apiWishlist);}
    settingWishlist()
  },[])
  
  // useEffect(()=>{
  //   let lastItem= wishlist[wishlist.length-1]
  //   add_to_wishlist(lastItem)
  // },[wishlist])

  return (
    <div className="women-container container">
      <div className="products row">{info.map((item, index)=>{
            return(
        <div className="card col-3 m-2" key={index} >
        <img src={"https://"+item.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {item.price.current.text}
          </p>

          <button onClick={()=>{
            // let newWishlist= [...wishlist]
            // if (newWishlist.includes(item.id)){
            //   return "Already added"
            // }
            // else
            let newItem= {
              userId: localStorage.getItem('user-id'),
              id: item.id,
              name: item.name,
              price: item.price.current.value,
              description:item.name,
              picture: item.imageUrl
            }
            actions.add_to_wishlist(newItem)
          }
         
          } className="btn btn-secondary">
            Add to wishlist
          </button>

          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>

        </div>
      </div>)
        })}</div>
    </div>
  );
};
