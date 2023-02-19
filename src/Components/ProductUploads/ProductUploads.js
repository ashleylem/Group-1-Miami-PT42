import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { Context } from "../../Store/appContext";

/**
 * This function displays the form for users to upload new products to list for sale. 
 * @param {} none No input parameters 
 * @returns {HTML} HTML for product listing form
 */

export const ProductUpload = () => {
  const [progress, setProgress] = useState(0);
  const productForm = useRef();
  const { actions } = useContext(Context);
  const [selectedOption, setSelectedOption] = useState("");

  const handleFirstSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleProductSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(productForm.current);
    formData.append("userId", localStorage.getItem("user-id"));
    actions.add_product(formData);
  };

  return (
    <form
      className="productForm"
      onSubmit={handleProductSubmit}
      ref={productForm}
    >
      <label>
        Choose Category:
        <select
          onChange={handleFirstSelect}
          className="form-select"
          name="category_name"
          id="category_name"
        >
          <option value="Women">Women's Clothing</option>
          <option value="Men">Men's Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Shoes">Shoes</option>
          <option value="Home-Products">Home Products</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {selectedOption === "Women" && (
        <label>
          Choose Sub-Category:
          <select
            className="form-select"
            name="subcategory_name"
            id="subcategory_name"
          >
            <option value="Tops">Tops</option>
            <option value="Dresses">Dresses</option>
            <option value="Bottoms">Bottoms</option>
          </select>
        </label>
      )}
      {selectedOption === "Men" && (
        <label>
          Choose Sub-Category:
          <select
            className="form-select"
            name="subcategory_name"
            id="subcategory_name"
          >
            <option value="Tops">Tops</option>
            <option value="Jackets">Jackets</option>
            <option value="Bottoms">Bottoms</option>
          </select>
        </label>
      )}
      {selectedOption === "Accessories" && (
        <label>
          Choose Sub-Category:
          <select
            className="form-select"
            name="subcategory_name"
            id="subcategory_name"
          >
            <option value="Jewelry">Jewelry</option>
            <option value="Bags">Bags</option>
            <option value="Sunglasses">Sunglasses</option>
          </select>
        </label>
      )}
      {selectedOption === "Home-Products" && (
        <label>
          Choose Sub-Category:
          <select
            className="form-select"
            name="subcategory_name"
            id="subcategory_name"
          >
            <option value="Furniture">Furniture</option>
            <option value="Home-Decor">Home Decor</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </label>
      )}

      <label>
        {" "}
        Name Your Product
        <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          required
        />{" "}
      </label>
      <label>
        Price:
        <input
          className="form-control"
          id="price"
          name="price"
          type="text"
          placeholder="Choose a price"
          required
        />
      </label>
      {(selectedOption === "Women" || selectedOption === "Men") && (
        <label>
          Add Sizes
          <input className="form-control" type="text" name="sizes" id="sizes" placeholder="Add sizes separated by a coma"/>
        </label>
      )}
      <label>
        Upload pictures of your product
        <input
          className="form-control product-files"
          id="file"
          name="file"
          type="file"
          required
          multiple
        />
      </label>
      <label>
        Add a product description
        <textarea
          className="form-control"
          id="description"
          name="description"
          type="text"
          required
          rows={5}
        />
      </label>
      <label>
        Add extra details about your product
        <textarea
          className="form-control"
          id="product_details"
          name="product_details"
          type="text"
          placeholder="This can be things like what material was used, how to care for it, or anything extra you may want to add"
          rows={3}
        />
      </label>
      <label>
        Add Shipping Information
        <textarea
          className="form-control"
          id="shipping"
          name="shipping"
          type="text"
          placeholder="Let your costumers know how your shipping process works and what to expect"
          required
          rows={3}
        />
      </label>
      <input type="submit" value="Submit" />
      <div>
      <p>Upload progress: {progress}%</p>
      <progress value={progress} max="100"></progress>
    </div>
    </form>
  );
};
