import React from "react";
import { useState, useEffect } from "react";
import { get_women_bestsellers } from "../asosApi";

export const Women = () => {
  const [info, setInfo] = useState([]);
 

  useEffect(() => {
    async function settingInfo() {
      let productInfo = await get_women_bestsellers();
      setInfo(productInfo);
      console.log(productInfo);
    }
    settingInfo();
  }, []);

  return (
    <div className="women-container container">
      <div className="products row">{info.map((item, index)=>{
            return(
        <div className="card" key={index} >
        <img src={"https://"+item.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {item.price.current.text}
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>)
        })}</div>
    </div>
  );
};
