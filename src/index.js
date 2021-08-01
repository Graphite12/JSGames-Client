import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import GlobalStyles from "./globalStyles";
import rootReducer from "./_reducers/index";
import Routing from "./Pages/Routing";

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Routing />
  </Provider>,
  document.getElementById("root")
);
