import { combineReducers } from "redux";
import AccessTokenReducer from "./AccessTokenReducer";
import UserStatusReducer from "./UserStatusReducer";

const rootReducer = combineReducers({ UserStatusReducer, AccessTokenReducer });

export default rootReducer;
