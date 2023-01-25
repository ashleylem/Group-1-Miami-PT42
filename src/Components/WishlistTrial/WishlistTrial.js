import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../Store/appContext";
import { get_women_bestsellers } from "../../asosApi";

export const Wishlist = () => {
  const { actions } = useContext(Context);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function settingWishlist() {
      let newWishlist = await actions.get_user_wishlist();
      setWishlist(newWishlist);
    }
    settingWishlist();
  }, []);

  return (
    <div className="wishlist-container">
      <div className="items row">
        {wishlist.map((item, index) => {
          return (
            <div className="card col-3 m-2" key={index}>
              <img
                src={"https://" + item?.picture}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item?.name}</h5>
                <p className="card-text">{item?.price?.current?.text}</p>

                <button className="btn btn-secondary">Add to Cart</button>
                <button
                  className="btn btn-primary"
                  onClick={() => actions.delete_item(item.product_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
