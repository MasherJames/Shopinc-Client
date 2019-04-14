import React, { useContext } from "react";
import { AppContext } from "../context";
import "./cart.scss";

const CartItem = ({ item }) => {
  const { name, price, img, count } = item;
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="cart-item">
      <div className="cart-text">
        <h3 className="item-name">{name}</h3>
        <span>
          {price} x {count}
        </span>
        <div>Total price is :{price * count}</div>
        <button
          className="btn-remove"
          onClick={removeFromCart.bind(this, name)}
          type="submit"
        >
          Remove
        </button>
      </div>
      <img className="cart-img" src={img} alt="cloth img" />
    </div>
  );
};

const Cart = () => {
  const { cart } = useContext(AppContext);
  return (
    <div className="cart-container">
      <div className="cart-items-container">
        <h3 className="cartHeading">Shopping Cart</h3>
        <div className="cart-items">
          {cart &&
            cart.map((item, index) => <CartItem key={index} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
