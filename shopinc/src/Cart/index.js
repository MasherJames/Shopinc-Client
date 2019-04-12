import React, { useContext } from "react";
import { AppContext } from "../context";
import "./cart.scss";

const Cart = () => {
  const { cart } = useContext(AppContext);
  return (
    <div className="cart-container">
      {cart && cart.map(item => console.log(item))}
    </div>
  );
};

export default Cart;
