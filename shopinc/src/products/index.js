import React, { useEffect, useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
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
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { products, cartTotal } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    dispatch({ type: "GET_PRODUCTS", products });
  };

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const productss = state.products.filter(
    product => product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  return (
    <div className="main-container">
      <div className="search-cont">
        <h2 className="heading">Shopinc</h2>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
            placeholder="search..."
          />
          <div className="btn-search">
            <img src={Search} className="img-search" alt="search" />
          </div>
        </form>
        <Link to="/cart" className="cart">
          <img src={ShoppingCart} className="img-cart" alt="cart" />
          <div className="cart-count">{cartTotal}</div>
        </Link>
      </div>
      <div className="product-cont">
        <div className="info-filters">
          <div className="priceRange">
            <label htmlFor="pricerange">
              Highest Price:
              <span className="highest">30</span>
            </label>
            <input type="range" className="slider" id="" min="0" max="200" />
            <span className="min">0</span>
            <span className="max">200</span>
          </div>
        </div>
        <div className="all-products">
          {productss &&
            productss.map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
