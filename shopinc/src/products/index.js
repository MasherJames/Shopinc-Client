import React, { useEffect, useContext, useReducer } from "react";
import Product from "../product";
import ProductReducer from "../reducers/productReducers";
import { AppContext } from "../context";
import ShoppingCart from "../assets/icons/shopping-cart.svg";
import Search from "../assets/icons/search.svg";
import "./products.scss";

const initialState = {
  products: []
};

const Products = () => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { products } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    dispatch({ type: "GET_PRODUCTS", products });
  };

  return (
    <div className="main-container">
      <div className="search-cont">
        <h2 className="heading">Shopinc</h2>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            name=""
            id=""
            placeholder="search..."
          />
          <div className="btn-search">
            <img src={Search} className="img-search" alt="search" />
          </div>
        </form>
        <div className="cart">
          <img src={ShoppingCart} className="img-cart" alt="cart" />
          <div className="cart-count">{9}</div>
        </div>
      </div>
      <div className="product-cont">
        <div className="info-filters">hhh</div>
        <div className="all-products">
          {state.products &&
            state.products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
