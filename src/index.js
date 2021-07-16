import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./_reducers/index";
import Routing from "./Pages/Routing";
import axios from "axios";

axios.defaults.withCredentials = true;
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
