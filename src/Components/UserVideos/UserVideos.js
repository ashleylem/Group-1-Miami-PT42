import React, { useState, useContext, useEffect, useRef } from "react";
import { Context } from "../../Store/appContext";
import "./UserVideos.css";

export const UserVideos = () => {
//   const [userVideos, setUserVideos] = useState();
//   const [productInfo, setProductInfo]=useState
     const [data, setData]=useState()
  const { actions } = useContext(Context);

  const apiImgUrl =
    "https://ashleylem.pythonanywhere.com/videos/";
const productImgUrl= "https://ashleylem.pythonanywhere.com/product/images/";

    async function settingVideo() {
      const newInfo = await actions.get_user_videoInfo();
      const itemDetails = await Promise.all(newInfo.map(async (item) => {
        const detailResponse = await actions.get_product_info(item.product_id);
        return detailResponse;
      }));
      return newInfo.map((item, index) => ({
        ...item,
        product: itemDetails[index]
      }));
    }

    useEffect(()=>{
        async function settingInfo(){
            settingVideo()
            .then(data => setData(data))
      .catch(error => console.log(error));
        }
        settingInfo()
    })
    
  
console.log(data)
  // src={"https://" + item.picture}


  return (
    <>
      <div className="container-videos">
        {data?.map((item, index) => {
          let imgUrl= item?.product.filename
          let array = imgUrl.split(",")
          return (
            <>
              <div className="review-container">
                <div className="review-content-container">
                  
                    <video autoPlay
                    //   className="videoDisplay"
                      type="video/mp4"
                      src={apiImgUrl + item.filename}
                      controls
                    />
                 
                  <div className="review-header">
                    <h5 className="review-title">{item?.name}</h5>
                    <div className="review-body">
                    <img className="review-product-picture" src={productImgUrl + array[0]} />
                    <p>Product Name: {item?.product.name}</p>
                    <p>Sold by: {item?.product.seller_name}</p>
                      <p className="card-text">Your Review Description: {item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
