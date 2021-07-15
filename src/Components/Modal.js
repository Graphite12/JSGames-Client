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
import { AuthWrapper, ModalBackground, Modals } from "./styles/StyledModal";

//redux Action
import { hideModal } from "../_actions/modal_action";
//component
import { logout } from "../_actions/auth_action";
import Login from "./UserForm/Login";
import Register from "./UserForm/Register";
import { PanelContainer } from "./UserForm/styles/StyledAuthForm";
import Panels from "./UserForm/Panel";

function ModalContainer({}) {}

export default function Modal() {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.ModalReducer);

  const onHideModal = () => {
    dispatch(hideModal());
  };

  if (!isModal) {
    return null;
  }

  return (
    <>
      <ModalBackground>
        <Modals>
          <button
            onClick={() => {
              onHideModal();
            }}
          >
            x
          </button>
          <AuthWrapper></AuthWrapper>
          <Panels />
        </Modals>
      </ModalBackground>
    </>
  );
}
