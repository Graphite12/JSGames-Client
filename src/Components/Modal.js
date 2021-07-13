import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
//style
import { StyledNavigation } from "./styles/StyledNavigationBar";
import { logout } from "../_actions/auth_action";
import Login from "./UserForm/Login";
import Register from "./UserForm/Register";

//component
export default function Modal(props) {
  const { isOpen } = props;

  return (
    <div>
      <button
        onClick={() => {
          isOpen(false);
        }}
      >
        x
      </button>
      <Login />
      <Register />
    </div>
  );
}
