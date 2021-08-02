import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import auth_Reducer from "./auth_Reducer";
import modal_Reducer from "./modal_Reducer";
import tabs_Reducer from "./tabs_Reducer";

const rootReducer = combineReducers({
  auth_Reducer,
  errorReducer,
  modal_Reducer,
  tabs_Reducer,
});

export default rootReducer;
