import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Profile from "../Components/UserForm/Porfile";
import NotFound from "./NotFound";
import Login from "../Components/UserForm/Login";
import Register from "../Components/UserForm/Register";
import Navigation from "../Components/Navigation";
import ScrollToTop from "../Components/ScrollToTop";

export default function Routing() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Profile} path="/auth/profile" />
        <Route component={NotFound} path="/NotFound" />
        <Route component={Login} exact path="/auth/login" />
        <Route component={Register} exact path="/auth/register" />
      </Switch>
    </Router>
  );
}
