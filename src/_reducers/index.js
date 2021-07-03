import { combineReducers } from "redux";
import UserStatusReducer from "./UserStatusReducer";

const rootReducer = combineReducers({ UserStatusReducer });

export default rootReducer;
