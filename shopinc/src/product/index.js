import React from "react";
import "./product.scss";
import ShoppingCart from "../assets/icons/shopping-cart.svg";

const Product = ({ product }) => {
  const { name, price, img } = product;
  return (
    <div className="product">
      <h3>{name}</h3>
      <img src={img} alt="cloth img" />
      <span>{price}</span>
      <button className="add-to-cart-btn">
        <span className="addCart">
          <img src={ShoppingCart} className="img-cart" alt="cart" />
          Add Item
        </span>
      </button>
    </div>
  );
};

export default Product;
