import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import auth_Reducer from "./auth_Reducer";
import modalAndFlips_Reducer from "./modalAndFlips_Reducer";
import tabs_Reducer from "./tabs_Reducer";
import mailer_Reducer from "./mailer_Reducer";

const rootReducer = combineReducers({
  auth_Reducer,
  errorReducer,
  modalAndFlips_Reducer,
  tabs_Reducer,
  mailer_Reducer,
});

export default rootReducer;
