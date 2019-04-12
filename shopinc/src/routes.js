import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./products";
import AddProduct from "./product/AddProduct";
import Nav from "./Nav";
import Footer from "./Footer";
import Cart from "./Cart";

export default () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/create" component={AddProduct} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
};
