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
    
        <select
          onChange={handleFirstSelect}
          className="form-select mt-3 mb-2"
          name="category_name"
          id="category_name"
        >
        <option>Choose Product Category</option>
          <option value="Women">Women's Clothing</option>
          <option value="Men">Men's Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Shoes">Shoes</option>
          <option value="Home-Products">Home Products</option>
          <option value="Other">Other</option>
        </select>
      

      {selectedOption === "Women" && (
       
          <select
            className="form-select mt-3 mb-2"
            name="subcategory_name"
            id="subcategory_name"
          >
          <option>Choose Sub-Category</option>
            <option value="Tops">Tops</option>
            <option value="Dresses">Dresses</option>
            <option value="Bottoms">Bottoms</option>
          </select>
      
      )}
      {selectedOption === "Men" && (
        
          <select
            className="form-select mt-3 mb-2"
            name="subcategory_name"
            id="subcategory_name"
          >
          <option>Choose Sub-Category</option>

            <option value="Tops">Tops</option>
            <option value="Jackets">Jackets</option>
            <option value="Bottoms">Bottoms</option>
          </select>
      
      )}
      {selectedOption === "Accessories" && (
        
          <select
            className="form-select mt-3 mb-2"
            name="subcategory_name"
            id="subcategory_name"
          >
          <option>Choose Sub-Category</option>

            <option value="Jewelry">Jewelry</option>
            <option value="Bags">Bags</option>
            <option value="Sunglasses">Sunglasses</option>
          </select>
       
      )}
      {selectedOption === "Home-Products" && (
        
          <select
            className="form-select mt-3 mb-2"
            name="subcategory_name"
            id="subcategory_name"
          >
          <option>Choose Sub-Category</option>

            <option value="Furniture">Furniture</option>
            <option value="Home-Decor">Home Decor</option>
            <option value="Kitchen">Kitchen</option>
          </select>
     
      )}

      <label className="form-label mt-3 mb-2" >
        {" "}
        Name Your Product</label >
        <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          required
        />{" "}
      
      <label className="form-label mt-3 mb-2" >
        Price:</label >
        <input
          className="form-control"
          id="price"
          name="price"
          type="text"
          placeholder="Choose a price"
          required
        />
      
      {(selectedOption === "Women" || selectedOption === "Men") && (
        <>
        <label className="form-label mt-3 mb-2" >
          Add Sizes</label >
          <input className="form-control" type="text" name="sizes" id="sizes" placeholder="Add sizes separated by a coma"/>
        </>
      )}
      <label className="form-label mt-3 mb-2" >
        Upload pictures of your product</label >
        <input
          className="form-control product-files"
          id="file"
          name="file"
          type="file"
          required
          multiple
        />
      
      <label className="form-label mt-3 mb-2" >
        Add a product description</label >
        <textarea
          className="form-control"
          id="description"
          name="description"
          type="text"
          required
          rows={5}
        />
      
      <label className="form-label mt-3 mb-2" >
        Add extra details about your product</label >
        <textarea
          className="form-control"
          id="product_details"
          name="product_details"
          type="text"
          placeholder="This can be things like what material was used, how to care for it, or anything extra you may want to add"
          rows={3}
        />
      
      <label className="form-label mt-3 mb-2" >
        Add Shipping Information</label >
        <textarea
          className="form-control"
          id="shipping"
          name="shipping"
          type="text"
          placeholder="Let your costumers know how your shipping process works and what to expect"
          required
          rows={3}
        />
      
      <input type="submit" value="Submit" />
      <div>
      <p>Upload progress: {progress}%</p>
      <progress value={progress} max="100"></progress>
    </div>
    </form>
  );
};
