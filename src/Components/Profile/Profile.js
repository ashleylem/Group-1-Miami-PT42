import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "/workspace/Group-1-Miami-PT42/src/Components/Profile/Profile.css";
export const Profile = () => {
  return (
    <div className="profile-container d-flex flex-row container-fluid">
      <div className="profile-header col-3">
        <h1>Profile</h1>
      </div>
      <div className="col-6">
        <div className="uploads">
          <h1>Your Reviews</h1>
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
