import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { useRef } from "react";
import { Context } from "../../Store/appContext";
import "/workspace/Group-1-Miami-PT42/src/Components/Profile/Profile.css";

export const Profile = () => {
  const [purchases, setPurchases] = useState();
  const [productId, setProductId] = useState();
  const { actions } = useContext(Context);

  useEffect(() => {
    async function settingPurchases() {
      let newPurchase = await actions.get_purchases();
      // console.log(newPurchase);
      setPurchases(newPurchase);
    }
    settingPurchases();
  }, []);

  const settingFormData = () => {
    const data = new FormData(formRef);
    data.append("user_id", localStorage.getItem("user-id"));
    data.append("product_id", productId);
  };
  useEffect(() => {
    actions.add_review(FormData);
  }, [settingFormData]);

  const formRef = useRef();
  return (
    <div className="profile-container d-flex flex-row container-fluid">
      <div className="profile-header col-3">
        <h1>Profile</h1>
      </div>
      <div className="col-6">
        <div className="uploads">
          <h1>Your Reviews</h1>
          <div className="upload-container">
            <h1>Upload a new review:</h1>
            <button
              className="btn modal-upload"
              data-bs-toggle="modal"
              data-bs-target="#uploadModal"
            >
              Upload
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
                    <form id="uploadVideo" ref={formRef}>
                      <label>
                        Choose item:
                        <select
                          className="form-select"
                          name="product_id"
                          value={productId}
                          onChange={(e) => {
                            setProductId(e.target.value);
                          }}
                        >
                          <option value={productId}>Select:</option>
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
                        id="video"
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
                      <button
                        onSubmit={settingFormData}
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="previews-container">
            <img
              className="btn modal-img-button p-0 rounded"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#reviewModal"
              src="https://images.asos-media.com/products/asos-design-bare-shoulder-prom-midi-dress-in-forest-green/23458757-4?$n_640w$&wid=513&fit=constrain"
              alt="..."
            />
          </div>
          <div
            className="modal fade"
            id="reviewModal"
            tabIndex="-1"
            aria-labelledby="reviewModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <img
                  src="..."
                  className="card-img-top product-img"
                  alt="product-img"
                />
                <div className="modal-header">
                  <h5 className="modal-title">Review for: </h5>
                  <div className="modal-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Wishlist">
          <h1>Wishlist</h1>
        </div>
      </div>
    </div>
  );
};
