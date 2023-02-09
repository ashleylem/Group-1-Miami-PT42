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
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
  const [videoUrl, setVideoUrl] = useState();
  const [userVideos, setUserVideos] = useState();
  const [videoId, setVideoId] = useState();
  const [userProducts, setUserProducts] = useState();
  const [userInfo, setUserInfo] = useState();
  const [productImg, setProductImg] = useState();
  const [pictureUpload, setPictureUpload] = useState();

  const { actions } = useContext(Context);

  useEffect(() => {
    async function settingUserInfo() {
      let newInfo = await actions.get_user_info();
      console.log(newInfo);
      setUserInfo(newInfo);
    }
    settingUserInfo();
  }, []);

  const profilePic =
    "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us86.gitpod.io/profile/picture/";
  const apiImgUrl =
    "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us86.gitpod.io/images/";
  useEffect(() => {
    async function settingProducts() {
      let newUserProducts = await actions.get_user_products();
      setUserProducts(newUserProducts);
    }
    settingProducts();
  }, []);

  console.log(userProducts);

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

  function submit() {
    profileRef.submit();
    alert("Data stored in database!");
  }

  const profileRef = useRef();
  const replacePic= useRef()

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    handleSubmitPic(e);
  };
  const handleFileChange2=(e)=>{
    setFile(e.target.files[0]);
    handleReplacePic(e);
  }

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

  return (
    <div className="profile-container d-flex flex-row container-fluid">
      <div className="col-lg-3 my-lg-0 my-md-1">
        <div className="profile-header">
          {userInfo?.map((item, index) => {
            return (
              <>
                <h1>{item.name}</h1>
                {item.profile_pic ? (
                  <>
                  <img
                    className="profile-pic-img"
                    src={profilePic + item?.filename}
                  />
                   <form
                      ref={replacePic}
                      onSubmit={(e) => {
                        handleReplacePic(e);
                      }}
                    >
                  <label className="edit-label">
                    <FontAwesomeIcon classname="editProfilePic" icon={faPen}/>
                    <input className="profile-pic-replace" type="file" name='file' onChange={handleFileChange2}/>
                  </label></form>
                  </>
                ) : (
                  <div className="pictureLabel">
                    <form
                      ref={profileRef}
                      onSubmit={(e) => {
                        handleSubmitPic(e);
                      }}
                    >
                      <label htmlFor="pictureTag">
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
          <div className="row">
            <div className="col-6 followers ">
              <FontAwesomeIcon className="user-icon-f" icon={faUser} />0
              Followers
            </div>
            <div className="col-6 following">
              <FontAwesomeIcon className="user-icon-f" icon={faUser} />0
              Following
            </div>
          </div>
          <div className="linksContainer">
            <div>
              <Link className="  profileLinks" to="/wishlist">
                Your Wishlist
              </Link>
            </div>
            <div>
              <Link className=" profileLinks" to="">
                Your Reviews
              </Link>
            </div>
            <div>
              <Link className="  profileLinks" to="">
                Your Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container col-lg-9 my-lg-0 my-1">
        <div className="uploads">
          <h1>Your Reviews</h1>
          <button
            className="btn modal-upload"
            data-bs-toggle="modal"
            data-bs-target="#uploadModal"
          >
            Upload New Review
          </button>

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
        
        <div className="user-products">
          <h1>Your Products</h1>
          <button
            className="btn modal-product"
            data-bs-toggle="modal"
            data-bs-target="#productModal"
          >
            Upload New Product
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
          <div className="previews-container">
            {userProducts?.map((item, index) => {
              return (
                <>
                  <img
                    className="btn modal-img-button p-0 rounded modalProductImg"
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
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
