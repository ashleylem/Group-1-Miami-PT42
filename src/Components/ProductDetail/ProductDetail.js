import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { get_product_details } from "../../asosApi";
import "/workspace/Group-1-Miami-PT42/src/Components/ProductDetail/ProductDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../../Store/appContext";
export const ProductDetail = () => {
  const { id } = useParams();
  const{actions, store}=useParams(Context)
  const [info, setInfo] = useState();

  useEffect(() => {
    async function settingInfo() {
      let products = await get_product_details(id);
      setInfo(products);
    }
    settingInfo();
  }, []);

  return (
    <div className="container d-flex flex-row">
      <div
        id="carouselExampleCaptions"
        className="carousel col-4 carousel-dark slide"
      >
        <div className="carousel-indicators">
          {info?.media?.images?.map((item, index) => {
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
          {info?.media?.images?.map((item, index) => {
            if (index == 0) {
              return (
                <div className="carousel-item object-fit-fill active">
                  <img
                    src={"https://" + item?.url}
                    className="carousel-img"
                    alt="..."
                  />
                </div>
              );
            } else {
              return (
                <div className="carousel-item object-fit-fill">
                  <img
                    src={"https://" + item?.url}
                    className="carousel-img"
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
      <div id='detail-card' className="col-4 card">
        <div className="card-body">
          <h1 className="card-title mb-2 fs-4">{info?.name}</h1>
          <h5>{info?.price?.current?.text}</h5>
          <h5>COLOR: {info?.variants[0]?.colour}</h5>
          <select class="form-select mb-3 w-50" aria-label="Default select example">
            <option selected>Select a Size</option>
            {info?.variants?.map((item, index) => {
              return <option value={index}>{item.displaySizeText}</option>;
            })}
          </select>
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Description
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body description" dangerouslySetInnerHTML={{ __html: info?.description }}>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Material
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p dangerouslySetInnerHTML={{ __html: info?.info?.aboutMe }}></p> 
                  <p dangerouslySetInnerHTML={{ __html: info?.info?.careInfo }}></p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Sizing Information
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body" dangerouslySetInnerHTML={{ __html: info?.info?.sizeAndFit }}>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="button-container row">
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
                        price: item.price.current.value,
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
                    className=" col btn "
                  >
                    <FontAwesomeIcon
                      className="wishlist-i"
                      icon={faBookmark}
                    />
                    <p className="wishlist-text">Add to wishlist</p>
                  </button>
                  <button className=" btn col">
                    <FontAwesomeIcon
                      className="cart-i"
                      icon={faShoppingCart}
                    />
                    <p>Add to Cart</p>
                  </button>
                  </div>
        </div>
      </div>
    </div>
  );
};
