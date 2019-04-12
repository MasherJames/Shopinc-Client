import React, { useContext } from "react";
import { AppContext } from "../context";
import "./product.scss";
import ShoppingCart from "../assets/icons/shopping-cart.svg";

const Product = ({ product }) => {
  const { addProductToCart } = useContext(AppContext);

  const { name, price, img } = product;
  return (
    <div className="product">
      <h3>{name}</h3>
      <img src={img} alt="cloth img" />
      <span>{price}</span>
      <button
        className="add-to-cart-btn"
        onClick={addProductToCart.bind(this, product)}
      >
        <span className="addCart">
          <img src={ShoppingCart} className="img-cart" alt="cart" />
          Add To Cart
        </span>
      </button>
    </div>
  );
};

export default Product;
