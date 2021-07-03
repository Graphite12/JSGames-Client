import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./_reducers/index";
import Routing from "./Pages/Routing";
import axios from "axios";

axios.defaults.baseURL = "https://localhost:5000/"; //쿠키 전송을 위해선 같은도메인
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송하기위해

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
