import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import UserStatusReducer from "./UserStatusReducer";
import ModalReducer from "./ModalReducer";
const rootReducer = combineReducers({
  UserStatusReducer,
  errorReducer,
  ModalReducer,
});

export default rootReducer;
