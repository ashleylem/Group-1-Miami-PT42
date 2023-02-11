import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { Context } from "../../Store/appContext";

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
      "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us86.gitpod.io/uploads/videos"
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
  
    return(<form
        className="uploadForm"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label>
          Choose item:
          <select
            className="form-select"
            name="product_id"
            id="product_id"
          >
            {purchases?.map((item, index) => {
              return (
                <option value={item.product_id}>{item.name}</option>
              );
            })}
          </select>
        </label>
        <label>
          {" "}
          Name your Review
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            required
          />
        </label>
        <label>
          {" "}
          Upload your review
          <input
            className="form-control"
            id="file"
            name="file"
            type="file"
            required
          />
        </label>
        <label>
          {" "}
          Add a description for your review
          <textarea
            className="form-control description-input"
            id="description"
            name="description"
            type="textarea"
            rows={5}
            required
          />
        </label>
        <input
          className="reviewSubmit"
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