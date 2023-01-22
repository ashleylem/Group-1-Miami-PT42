import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { get_product_details } from "../../asosApi";

export const ProductDetail = () => {
  const {id}=useParams()
  const [info, setInfo] = useState();
  useEffect(() => {
    async function settingInfo() {
      let products = await get_product_details(id);
      console.log(products)
      setInfo(products);
    }
    settingInfo();
    
  }),[];
  console.log(info)
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
