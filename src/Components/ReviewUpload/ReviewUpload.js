import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { Context } from "../../Store/appContext";

/**
 * This function displays the form for users to upload new reviews for their purchases. 
 * @param {} none No input parameters 
 * @returns {HTML} HTML for review form
 */

export const ReviewUpload=()=>{
  const [progress, setProgress] = useState(0);
  const [purchases, setPurchases] = useState();
  const formRef = useRef();
  const {actions}=useContext(Context)

  useEffect(() => {
    async function settingPurchases() {
      let newPurchase = await actions.get_purchases();
      // console.log(newPurchase);
      setPurchases(newPurchase);
    }
    settingPurchases();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(formRef.current);
    data.append("userId", localStorage.getItem("user-id"));
    purchases.map((item) => {
      if (item.product_id == data.get("product_id")) {
        return data.append("picture", item.picture);
      }
    });

    const xhr = new XMLHttpRequest();

    xhr.open(
      "POST",
      "https://ashleylem.pythonanywhere.com/uploads/videos"
    );
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    });
    xhr.addEventListener("load", () => {
      window.location.reload();
    });
    xhr.send(data);
  };
  
    return(
      
      <form
        className="uploadForm"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        
          <select
            className="form-select "
            name="product_id"
            id="product_id"
          >
          <option>Choose Item</option>
            {purchases?.map((item, index) => {
              return (
                <option value={item.product_id}>{item.name}</option>
              );
            })}
          </select>
       
        <label className="form-label mt-3 mb-2">
          {" "}
          Name your Review</label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            required
          />
        
        <label class="form-label mt-3 mb-2">
          {" "}
          Upload your review</label>
          <input
            className="form-control"
            id="file"
            name="file"
            type="file"
            required
          />
        
        <label className="form-label mt-3 mb-2">
          {" "}
          Add a description for your review</label >
          <textarea
            className="form-control description-input"
            id="description"
            name="description"
            type="textarea"
            rows={5}
            required
          />
        
        <input
          className="reviewSubmit mt-3"
          type="submit"
          value="Submit"
        />
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
        {console.log(progress)}
      </form>)
}