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

import Home from "../Pages/Home";
import Register from "./UserForm/Register";
import Login from "./UserForm/Login";
import Modal from "./Modal";

export default function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.UserStatusReducer);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledNavigation>
      <li></li>
      {isLoggedIn ? (
        <div>
          <button onClick={onLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Join Us
          </button>
          {modalOpen && <Modal isOpen={setModalOpen} />}
        </div>
      )}
    </StyledNavigation>
  );
}
