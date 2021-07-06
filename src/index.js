import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./_reducers/index";
import Home from "./Pages/Home";
import Profile from "./Components/UserForm/Porfile";
import NotFound from "./Pages/NotFound";
import Login from "./Components/UserForm/Login";
import Register from "./Components/UserForm/Register";
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Profile} path="/auth/profile" />
          <Route component={NotFound} path="/NotFound" />
          <Route component={Login} exact path="/auth/login" />
          <Route component={Register} exact path="/auth/register" />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
