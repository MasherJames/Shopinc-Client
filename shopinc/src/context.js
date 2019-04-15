import React, { createContext, useReducer } from "react";
import AddToCartReducer from "./reducers/productCartReducers";
import Shoe from "./assets/img/shoe1.png";
import Jacket1 from "./assets/img/jacket1.png";
import Jacket2 from "./assets/img/jacket2.png";
import Jacket3 from "./assets/img/jacket3.png";
import Jacket4 from "./assets/img/jacket4.png";
import Hat1 from "./assets/img/hat1.png";
import Shirt1 from "./assets/img/shirt1.png";
import Shirt2 from "./assets/img/shirt2.png";
import Sweater1 from "./assets/img/sweater1.png";
import Sweater2 from "./assets/img/sweater2.png";
import Sweater4 from "./assets/img/sweater4.png";
import Sweater5 from "./assets/img/sweater5.png";

export const AppContext = createContext();

export const AppState = props => {
  const initialState = {
    cart: [],
    cartTotal: 0
  };
  const [state, dispatch] = useReducer(AddToCartReducer, initialState);

  const addProductToCart = item => {
    dispatch({ type: "ADD_ITEM_TO_CART", item });
  };

  const removeFromCart = name => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", name });
  };
  const products = [
    {
      name: "Khaki Suede Polish Work Boots",
      price: 149.99,
      category: "women",
      sale: true,
      article: "shoe",
      img: Shoe
    },
    {
      name: "Camo Fang Backpack Jungle",
      price: 39.99,
      category: "women",
      sale: false,
      article: "jacket",
      img: Jacket1
    },
    {
      name: "Parka and Quilted Liner Jacket",
      price: 49.99,
      category: "men",
      sale: true,
      article: "jacket",
      img: Jacket2
    },
    {
      name: "Cotton Black Cap",
      price: 12.99,
      category: "men",
      sale: true,
      article: "hats",
      img: Hat1
    },
    {
      name: "Knit Sweater with Zips",
      price: 29.99,
      category: "women",
      sale: false,
      article: "sweater",
      img: Sweater1
    },
    {
      name: "Long Linen-blend Shirt",
      price: 18.99,
      category: "men",
      sale: false,
      article: "shirt",
      img: Shirt1
    },
    {
      name: "Knit Orange Sweater",
      price: 28.99,
      category: "men",
      sale: false,
      article: "sweater",
      img: Sweater2
    },
    {
      name: "Cotton Band-collar Blouse",
      price: 49.99,
      category: "men",
      sale: false,
      article: "shirt",
      img: Shirt2
    },
    {
      name: "Camo Fang Backpack Jungle",
      price: 59.99,
      category: "women",
      sale: true,
      article: "jacket",
      img: Jacket3
    },
    {
      name: "Golden Pilot Jacket",
      price: 129.99,
      category: "women",
      sale: false,
      article: "jacket",
      img: Jacket4
    },
    {
      name: "Spotted Patterned Sweater",
      price: 80.99,
      category: "women",
      sale: false,
      article: "jacket",
      img: Sweater4
    },
    {
      name: "Double Knit Sweater",
      price: 59.99,
      category: "men",
      sale: true,
      article: "jacket",
      img: Sweater5
    }
  ];
  return (
    <AppContext.Provider
      value={{
        products,
        cart: state.cart,
        cartTotal: state.cartTotal,
        addProductToCart: addProductToCart,
        removeFromCart
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
