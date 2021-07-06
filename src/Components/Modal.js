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
import { StyledNavigation } from "./styles/StyledNavigation";
import { logout } from "../_actions/auth_action";

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
      <div>모달</div>
      <div>모달</div>
    </div>
  );
}
