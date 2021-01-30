import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import LandingScreen from "./screens/LandingScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingScreen} exact />
        <Route path="/shop" component={LoginScreen} exact />
        <Route path="/book" component={LoginScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={LoginScreen} exact />
        <Route path="/order/:id" component={OrderScreen} exact />
        <Route path="/shipping" component={LoginScreen} exact />
        <Route path="/payment" component={LoginScreen} exact />
        <Route path="/placeorder" component={LoginScreen} exact />
        <Route path="/profile" component={ProfileScreen} exact />
        <Route path="/product/:id" component={ProductScreen} exact />
        <Route path="/cart/:id?" component={CartScreen} exact />
        <Route path="/admin/userlist" component={UserListScreen} exact />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} exact />
        <Route path="/admin/orderlist" component={OrderListScreen} exact />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </Router>
  );
};

export default App;

/*
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BookScreen from "./screens/BookScreen";
import ShopScreen from "./screens/ShopScreen";
*/
