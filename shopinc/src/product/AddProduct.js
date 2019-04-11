import React, { useState } from "react";
import "./addProduts.scss";

const addProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleImageChange = e => {
    setImage(e.target.value);
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleSubmit = e => {
    console.log("Submitted !");
  };

  return (
    <div className="addProduct-container">
      <h3 className="addprod-heading">Add a New Product</h3>
      <form action="" className="newProdForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="inputfields"
          placeholder="Name"
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={handlePriceChange}
          className="inputfields"
          placeholder="Price"
        />
        <input
          type="file"
          name="image"
          value={image}
          onChange={handleImageChange}
          className="inputfields"
        />
        <input type="submit" className="inputfields" placeholder="Submit" />
      </form>
      <p />
    </div>
  );
};

export default addProduct;
