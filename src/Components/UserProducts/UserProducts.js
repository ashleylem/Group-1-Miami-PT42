import React, { useState, useContext, useEffect, useRef } from "react";
import { Context } from "../../Store/appContext";
import { ProductUpload } from "../ProductUploads/ProductUploads";
import "./UserProducts.css";
export const UserProducts = () => {
  const [userProducts, setUserProducts] = useState();
  const [userInfo, setUserInfo] = useState();
  const { actions } = useContext(Context);

  const apiImgUrl =
    "https://ashleylem.pythonanywhere.com/images/";

  useEffect(() => {
    async function settingUserInfo() {
      let newInfo = await actions.get_user_info();
      console.log(newInfo);
      setUserInfo(newInfo);
    }
    settingUserInfo();
  }, []);

  useEffect(() => {
    async function settingProducts() {
      let newUserProducts = await actions.get_user_products();
      setUserProducts(newUserProducts);
    }
    settingProducts();
  }, []);

  return (
    <>
      <div className="productHeader">
        <h1>Your Products</h1>
        <button
          className="btn modal-product productUploadBtn"
          data-bs-toggle="modal"
          data-bs-target="#productModal"
        >
          List New Product
        </button>

        <div
          className="modal fade"
          id="productModal"
          tabIndex="-1"
          aria-labelledby="productModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title">Upload a New Product</h5>
                <ProductUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productContainer">
        {userProducts?.map((item, index) => {
          return (
            <>
            <div>
              <h4>{item?.name}</h4>
              <img
                className="btn product-img-button p-0 rounded"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={"#modal" + item?.id}
                src={apiImgUrl + item?.image_paths[0]}
                alt="..."
              />

              <div
                className="modal fade"
                id={"modal" + item?.id}
                tabIndex="-1"
                aria-labelledby="productModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                  <div className="modal-content product-modal flex-row">
                    <div
                      id={"carousel" + item?.id}
                      className="product-carousel carousel col-6 carousel-dark slide"
                    >
                      <div className="carousel-indicators">
                        {item?.image_paths?.map((image, index) => {
                          if (index == 0) {
                            return (
                              <button
                                type="button"
                                data-bs-target={"#carousel" + item?.id}
                                data-bs-slide-to={index}
                                className="active"
                                aria-current="true"
                                aria-label={"Slide" + index}
                              ></button>
                            );
                          } else {
                            return (
                              <button
                                type="button"
                                data-bs-target={"#carousel" + item?.id}
                                data-bs-slide-to={index}
                                aria-label={"Slide" + index}
                              ></button>
                            );
                          }
                        })}
                      </div>
                      <div className="carousel-inner">
                        {item?.image_paths?.map((image, index) => {
                          if (index == 0) {
                            console.log(image);
                            return (
                              <div className=" carousel-item  active">
                                <img
                                  src={apiImgUrl + image}
                                  className="carousel-product-img "
                                  alt="..."
                                />
                              </div>
                            );
                          } else {
                            return (
                              <div className=" carousel-item ">
                                <img
                                  src={apiImgUrl + image}
                                  className="carousel-product-img"
                                  alt="..."
                                />
                              </div>
                            );
                          }
                        })}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={"#carousel" + item?.id}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={"#carousel" + item?.id}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h5 className="modal-title">{item?.name}</h5>
                      <div className="content">
                        <h6 className=" card-text">Category:</h6>
                        <p className=" card-text"> {item?.category}</p>

                        <h6 className="card-text">SubCategory:</h6>
                        <p className="card-text"> {item?.subcategory}</p>

                        <h6 className=" card-text">Sizes:</h6>
                        <p className="card-text"> {item?.sizes}</p>

                        <h6 className="card-text">Description:</h6>
                        <p className="card-text"> {item?.description}</p>

                        <h6 className="card-text">Details:</h6>
                        <p className="card-text"> {item?.details}</p>

                        <h6 className="card-text">Shipping Information:</h6>
                        <p className="card-text"> {item?.shipping}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
            </>
          );
        })}
      </div>
    </>
  );
};
