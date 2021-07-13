import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import UserStatusReducer from "./UserStatusReducer";

const rootReducer = combineReducers({ UserStatusReducer, errorReducer });

export default rootReducer;
