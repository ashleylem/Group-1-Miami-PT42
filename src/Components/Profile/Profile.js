import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { useRef } from "react";
import { Context } from "../../Store/appContext";
import "../../Components/Profile/Profile.css";

export const Profile = () => {
  const [purchases, setPurchases] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [userVideos, setUserVideos] = useState();
  const [videoId, setVideoId] = useState();
  const [userProducts, setUserProducts] = useState();
  const [productImg, setProductImg] = useState();
  const { actions } = useContext(Context);

  const userId = localStorage.getItem("user-id");

  const apiImgUrl= 'https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/images/'
  useEffect(() => {
    async function settingProducts() {
      let newUserProducts = await actions.get_user_products();
      setUserProducts(newUserProducts);
    }
    settingProducts();
  }, []);
  console.log(userProducts)

  useEffect(() => {
    async function settingPurchases() {
      let newPurchase = await actions.get_purchases();
      // console.log(newPurchase);
      setPurchases(newPurchase);
    }
    settingPurchases();
  }, []);

  // actions.get_user_video()
  useEffect(() => {
    async function settingVideo() {
      const newInfo = await actions.get_user_videoInfo();
      setUserVideos(newInfo);
    }
    settingVideo();
  }, []);

  useEffect(() => {
    async function settingUrl() {
      const url = await actions.get_user_video(videoId);
      setVideoUrl(url);
    }
    settingUrl();
  }, [videoId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(formRef.current);
    data.append("userId", localStorage.getItem("user-id"));
    purchases.map((item) => {
      if (item.product_id == data.get("product_id")) {
        return data.append("picture", item.picture);
      }
    });
    console.log(data.get("picture"));
    actions.add_review(data);
  };
  const formRef = useRef();
  const productForm = useRef();

  const handleProductSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(productForm.current);
    data.append("userId", localStorage.getItem("user-id"));
    actions.add_product(data);
  };

  return (
    <div className="profile-container d-flex flex-row container-fluid">
      <div className="profile-header col-3">
        <h1>Profile</h1>
      </div>
      <div className="content-container">
        <div className="uploads">
          <h1>Your Reviews</h1>
          <div className="upload-container">
            <button
              className="btn modal-upload"
              data-bs-toggle="modal"
              data-bs-target="#uploadModal"
            >
              Upload New Review
            </button>
          </div>
          <div
            className="modal fade"
            id="uploadModal"
            tabIndex="-1"
            aria-labelledby="uploadModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Upload a New Review</h5>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit} ref={formRef}>
                      <label>
                        Choose item:
                        <select
                          className="form-select"
                          name="product_id"
                          id="product_id"
                        >
                          {purchases?.map((item, index) => {
                            return (
                              <option value={item.product_id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </label>
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name your review"
                        required
                      />
                      <input
                        className="form-control"
                        id="file"
                        name="file"
                        type="file"
                        placeholder="Upload file"
                        required
                      />
                      <input
                        className="form-control"
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Add a description"
                        required
                      />
                      <input type="submit" value="Submit" />
                      Submit
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="previews-container">
            {userVideos?.map((item, index) => {
              return (
                <>
                  <div className="previewImg">
                    <img
                      className="btn modal-img-button p-0 rounded"
                      onClick={() => {
                        setVideoId(item?.video_id);
                        console.log(videoId);
                      }}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={"#" + item?.name}
                      src={"https://" + item.picture}
                      alt="..."
                    />
                  </div>
                  <div
                    className="modal fade"
                    id={item?.name}
                    tabIndex="-1"
                    aria-labelledby="reviewModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                      <div className="modal-content">
                        {videoUrl ? (
                          <video
                            className="videoDisplay"
                            type="video/mp4"
                            src={videoUrl}
                            controls
                          />
                        ) : (
                          <p>Loading video...</p>
                        )}
                        <div className="modal-header">
                          <h5 className="modal-title">
                            Review for:{item?.name}{" "}
                          </h5>
                          <div className="modal-body">
                            <p className="card-text">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="Wishlist">
          <h1>Wishlist</h1>
        </div>
        <div className="Your Products">
          <h1>Your Products</h1>
          <button
            className="btn modal-product"
            data-bs-toggle="modal"
            data-bs-target="#productModal"
          >
            Upload New Review
          </button>
        </div>
        <div
          className="modal fade"
          id="productModal"
          tabIndex="-1"
          aria-labelledby="productModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Upload a New Product</h5>
                <div className="modal-body">
                  <form onSubmit={handleProductSubmit} ref={productForm}>
                  <label>
                  Choose Category:
                  <select
                    className="form-select"
                    name="category_id"
                    id="category_id"
                  >
                   <option value={100}>Clothing</option>
                   <option value={101}>Accessories</option>
                   <option value={102}>Shoes</option>
                   <option value={103}>Home Products</option>
                   <option value={104}>Other</option>
                  </select>
                </label>
                <label>
                Choose Sub-Category:
                <select
                  className="form-select"
                  name="subcategory_id"
                  id="subcategory_id"
                >
                 <option value={1001}>Women</option>
                 <option value={1002}>Men</option>
                 <option value={1011}>Jewelry</option>
                </select>
              </label>
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name your product"
                      required
                    />
                    <input
                      className="form-control"
                      id="price"
                      name="price"
                      type="text"
                      placeholder="Choose a price"
                      required
                    />
                    <input
                      className="form-control product-files"
                      id="file"
                      name="file"
                      type="file"
                      placeholder="Upload file"
                      required
                      multiple
                    />
                    <input
                      className="form-control"
                      id="description"
                      name="description"
                      type="text"
                      placeholder="Add a description"
                      required
                    />
                    <input type="submit" value="Submit" />
                    Submit
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="previews-container">
          {userProducts?.map((item, index) => {
            return (
              <>
                <div className="previewImg">
                  <img
                    className="btn modal-img-button p-0 rounded"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={"#" + item?.name}
                    src={apiImgUrl+ item?.image_paths[0]}
                    alt="..."
                  />
                </div>
                <div
                  className="modal fade"
                  id={item?.name}
                  tabIndex="-1"
                  aria-labelledby="productModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content flex-row">
                      <div
                        id="carouselExampleCaptions"
                        className="carousel carousel-dark slide"
                      >
                        <div className="carousel-indicators">
                          {item?.image_paths?.map((image, index) => {
                            if (index == 0) {
                              return (
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleCaptions"
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
                                  data-bs-target="#carouselExampleCaptions"
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
                              console.log(image)
                              return (
                                <div className="carousel-item object-fit-fill active">
                                  <img
                                    src={apiImgUrl+image}
                                    className="carousel-product-img"
                                    alt="..."
                                  />
                                </div>
                              );
                            } else {
                              return (
                                <div className="carousel-item object-fit-fill">
                                  <img
                                    src={apiImgUrl+image}
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
                          data-bs-target="#carouselExampleCaptions"
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
                          data-bs-target="#carouselExampleCaptions"
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
                        <h5 className="modal-title">
                          Product:{item?.name}
                        </h5>
                        <div>
                          <p className="card-text">{item?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
