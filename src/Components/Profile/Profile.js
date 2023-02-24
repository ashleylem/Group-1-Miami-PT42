import React, { useState, useContext, useEffect, useRef } from "react";
import "@fontsource/abril-fatface";
import { Link } from "react-router-dom";
import { Context } from "../../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fontsource/playfair-display";
import { ProductUpload } from "../ProductUploads/ProductUploads";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "../../Components/Profile/Profile.css";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ReviewUpload } from "../ReviewUpload/ReviewUpload";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ReactJoyride from "react-joyride";
import VideoImageThumbnail from "react-video-thumbnail-image";

import VideoThumbnail from "../VideoThumbnail";

export const Profile = () => {
  const [userVideos, setUserVideos] = useState();
  const [userProducts, setUserProducts] = useState();
  const [userInfo, setUserInfo] = useState();
  const [salesInfo, setSalesInfo] = useState();
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { actions } = useContext(Context);

  const steps = [
    {
      target: ".profilePicLabel",
      content:
        "Add a profile picture! This picture will be displayed with all your product reviews and your product listings.",
      placement: "bottom",
    },
    {
      target: ".uploads",
      content:
        "Here you can add a review for any of your purchased items. These are displayed in our video review page so that other users can explore new products",
      placement: "bottom",
    },
    {
      target: ".user-products",
      content: "Here you can upload a new product lisiting.",
      placement: "top",
    },
  ];
  async function fetchData() {
    try {
      async function newUserInfo() {
        const userId = localStorage.getItem("user-id");
        const timestamp = new Date().getTime(); // get current timestamp
        const response = await fetch(
          `https://ashleylem.pythonanywhere.com/${userId}?timestamp=${timestamp}`, // add timestamp as query parameter
          {
            method: "GET",
          }
        );
        const data = await response.json();
        return data;
      }
      const getUserVideos = await actions.get_user_videoInfo();
      const getUserProducts = await actions.get_user_products();
      const getSalesInfo = await settingSales();
      const getUserInfo = await newUserInfo();

      setUserInfo(getUserInfo);
      setUserVideos(getUserVideos);
      setUserProducts(getUserProducts);
      setSalesInfo(getSalesInfo);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const shouldShowIntro = localStorage.getItem("showIntro") === "true";
    if (shouldShowIntro) {
      setIsIntroOpen(true);
      localStorage.setItem("showIntro", false);
    }
  }, []);

  async function settingSales() {
    const userId = localStorage.getItem("user-id");
    const newInfo = await actions.get_sales(userId);
    const itemDetails = await Promise.all(
      newInfo.map(async (item) => {
        const detailResponse = await actions.product_info(item.product_id);
        return detailResponse;
      })
    );
    return newInfo.map((item, index) => ({
      ...item,
      product: itemDetails[index],
    }));
  }

  const profilePic = "https://ashleylem.pythonanywhere.com/profile/picture/";
  const productImgUrl = "https://ashleylem.pythonanywhere.com/product/images/";
  const apiVideoUrl = "https://ashleylem.pythonanywhere.com/videos/";

  function submit() {
    profileRef.submit();
    alert("Data stored in database!");
  }

  const profileRef = useRef();
  const replacePic = useRef();

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    handleSubmitPic(e);
  };
  const handleFileChange2 = (e) => {
    setFile(e.target.files[0]);
    handleReplacePic(e);
  };

  const handleSubmitPic = (event) => {
    event.preventDefault();
    console.log("click");
    const data = new FormData(profileRef.current);
    console.log("form");

    actions.add_user_picture(data);
    console.log("added");
  };

  const handleReplacePic = (event) => {
    event.preventDefault();
    console.log("click");
    const data = new FormData(replacePic.current);
    console.log("form");

    actions.edit_user_picture(data);
    console.log("added");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container py-5 px-4">
      <ReactJoyride
        steps={steps}
        run={isIntroOpen}
        continuous={true}
        spotlightClicks={true}
        disableScrolling={true}
      />
      <div class="col-xl-8 col-md-8 col-sm-10 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 bg-dark all-profile-container">
            <div className="media align-items-end text-white profile-header">
              {userInfo?.map((item, index) => {
                return (
                  <>
                    <h1>{item.name}</h1>
                    {item.profile_pic ? (
                      <>
                        <img
                          className="profile-pic-img"
                          src={profilePic + item.filename}
                        />
                        <form
                          ref={replacePic}
                          onSubmit={(e) => {
                            handleReplacePic(e);
                          }}
                          className="mb-4"
                        >
                          <label className="edit-label">
                            <FontAwesomeIcon
                              classname="editProfilePic"
                              icon={faPen}
                            />
                            <input
                              className="profile-pic-replace"
                              type="file"
                              name="file"
                              onChange={handleFileChange2}
                            />
                          </label>
                        </form>
                      </>
                    ) : (
                      <div className="pictureLabel">
                        <form
                          ref={profileRef}
                          onSubmit={(e) => {
                            handleSubmitPic(e);
                          }}
                        >
                          <label className="profilePicLabel" htmlFor="pictureTag">
                            <FontAwesomeIcon
                              className="cameraIcon"
                              icon={faCamera}
                            />

                            <input
                              className="profile-pic-upload"
                              id="pictureTag"
                              name="file"
                              type="file"
                              onChange={handleFileChange}
                            />
                          </label>
                        </form>
                      </div>
                    )}
                  </>
                );
              })}

              <div className="row follows-row">
                <div className="col-6 followers ">
                  <FontAwesomeIcon className="user-icon-f" icon={faUser} />0
                  Followers
                </div>
                <div className="col-6 following">
                  <FontAwesomeIcon className="user-icon-f" icon={faUser} />0
                  Following
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div className="linksContainer rounded navbar shadow-sm  mt-3 ">
              <div className="container-fluid">
                <div className="nav-item">
                  <Link className="  profileLinks" to="/wishlist">
                    Your Wishlist
                  </Link>
                </div>
                <div className="nav-item">
                  <Link className=" profileLinks" to="/userVideos">
                    Your Reviews
                  </Link>
                </div>
                <div className="nav-item">
                  <Link className="  profileLinks" to="/products">
                    Your Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="content-container py-4 px-4">
            <div className="uploads">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h1>Your Reviews</h1>
                <button
                  className="btn modal-upload"
                  data-bs-toggle="modal"
                  data-bs-target="#uploadModal"
                >
                  Upload New Review
                </button>
                <Link className="btn all-products-link" to="/userVideos">
                  View all
                </Link>
                <div
                  className="modal fade"
                  id="uploadModal"
                  tabIndex="-1"
                  aria-labelledby="uploadModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h5 className="modal-title">Upload a New Review</h5>
                        <ReviewUpload />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {userVideos?.map((item, index) => {
                  let imgUrl = item.picture;
                  let array = imgUrl.split(",");
                  const isMP4 = item.filename.endsWith('.mp4');
                  return (

                    <>
                      <div
                        className="previewImg  col-lg-6 mb-2 pr-lg-1"
                        data-bs-toggle="modal"
                        data-bs-target={"#userReview" + index}
                      >
                        { isMP4? (<VideoImageThumbnail
                          videoUrl={apiVideoUrl + item.filename}
                          thumbnailHandler={(thumbnail) =>
                            console.log(thumbnail)
                          }
                          className="review-thumbnail "
                          alt="my test video"
                        />):
                        <div className="react-video-thumbnail-image">
                      <img className="review-thumbnail" src={productImgUrl + array[0]}>
                      </img></div>
                      }
                        <div className="d-flex">
                          <img
                            className="review-img pe-2 pt-2"
                            src={productImgUrl + array[0]}
                          ></img>
                          <div>
                            <h5 className="mt-4 fw-semibold">{item.name}</h5>
                            <p className="text-muted fs-6">
                              Certified Review{" "}
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="faCheckCircle"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="modal fade"
                        id={"userReview" + index}
                        tabIndex="-1"
                        aria-labelledby="reviewModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-lg modal-dialog-scrollable">
                          <div className="modal-content">
                          {isMP4 ? 
                            <video
                              className="videoDisplay"
                              type="video/mp4"
                              src={apiVideoUrl + item.filename}
                              controls
                            />:
                            <img src={apiVideoUrl+item.filename}></img>
                          
                          }

                            <div className="modal-header">
                              <h5 className="modal-title">
                               {item.name}{" "}
                              </h5>
                              </div><div>
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
            <div className="user-products">
              <div className=" d-flex align-items-center justify-content-between mb-3">
                <h1>Your Products</h1>
                <button
                  className="btn modal-product"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                >
                  Upload New Product
                </button>
                <Link className="btn all-products-link" to="/products">
                  View all
                </Link>
              </div>
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
              <div className="row">
                {userProducts?.map((item, index) => {
                  if (index <= 4) {
                    return (
                      <>
                        <div className="previews-container rounded col-lg-6 mb-2 pr-lg-1">
                          <img
                            className=" modal-img-button p-0 img-fluid rounded"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target={"#modal" + item.id}
                            src={productImgUrl + item.filename[0]}
                            alt="..."
                          />
                          <h5 className="mt-2">{item.name}</h5>
                          <p className="fw-bold fs-4">{"$" + item.price}</p>
                        </div>
                        <div
                          className="modal fade"
                          id={"modal" + item.id}
                          tabIndex="-1"
                          aria-labelledby="productModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-lg modal-dialog-scrollable">
                            <div className="modal-content product-modal flex-row">
                              <div
                                id={"carousel" + item.id}
                                className="product-carousel carousel col-6 carousel-dark slide"
                              >
                                <div className="carousel-indicators">
                                  {item.filename.map((image, index) => {
                                    if (index == 0) {
                                      return (
                                        <button
                                          type="button"
                                          data-bs-target={"#carousel" + item.id}
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
                                          data-bs-target={"#carousel" + item.id}
                                          data-bs-slide-to={index}
                                          aria-label={"Slide" + index}
                                        ></button>
                                      );
                                    }
                                  })}
                                </div>
                                <div className="carousel-inner">
                                  {item.filename.map((image, index) => {
                                    if (index == 0) {
                                      console.log(image);
                                      return (
                                        <div className=" carousel-item  active">
                                          <img
                                            src={productImgUrl + image}
                                            className="carousel-product-img "
                                            alt="..."
                                          />
                                        </div>
                                      );
                                    } else {
                                      return (
                                        <div className=" carousel-item ">
                                          <img
                                            src={productImgUrl + image}
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
                                  data-bs-target={"#carousel" + item.id}
                                  data-bs-slide="prev"
                                >
                                  <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                  ></span>
                                  <span className="visually-hidden">
                                    Previous
                                  </span>
                                </button>
                                <button
                                  className="carousel-control-next"
                                  type="button"
                                  data-bs-target={"#carousel" + item.id}
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
                                <h5 className="modal-title">{item.name}</h5>
                                <div className="content">
                                  <h6 className=" card-text">Category:</h6>
                                  <p className=" card-text"> {item.category}</p>

                                  <h6 className="card-text">SubCategory:</h6>
                                  <p className="card-text">
                                    {" "}
                                    {item.subcategory}
                                  </p>

                                  <h6 className=" card-text">Sizes:</h6>
                                  <p className="card-text"> {item.sizes}</p>

                                  <h6 className="card-text">Description:</h6>
                                  <p className="card-text">
                                    {" "}
                                    {item.description}
                                  </p>

                                  <h6 className="card-text">Details:</h6>
                                  <p className="card-text"> {item.details}</p>

                                  <h6 className="card-text">
                                    Shipping Information:
                                  </h6>
                                  <p className="card-text"> {item.shipping}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
            <div className="sales-container">
              <h1>Your Sales</h1>
              <div className="row">
                {salesInfo?.map((item) => {
                  let imgUrl = item.product.filename;
                  let imgArray = imgUrl.split(",");
                  return (
                    <div className="previews-container rounded col-lg-6 mb-2 pr-lg-1">
                      <img
                        className="modal-img-button  p-0 img-fluid rounded"
                        src={productImgUrl + imgArray[0]}
                        alt="..."
                      />
                      <h5 className="mt-2">{item.product.name}</h5>
                      <p className="">Buyer Name: {item.buyer_name}</p>
                      <p className="">
                        Buyer's Shipping Info: {item.buyer_shipping}
                      </p>
                      <p>
                        Has this item shipped?:{" "}
                        {item.fullfillment_status ? "Yes" : "No"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
