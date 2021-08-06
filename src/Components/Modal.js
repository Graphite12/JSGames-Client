import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
//style
import {
  Main_Container,
  ModalBackground,
  Auth_box,
  closeBtn,
} from "./styles/StyledModal";

//redux Action
import { hideModal } from "../_actions/modal_action";
//component
import Login from "./UserForm/Login";
import Register from "./UserForm/Register";

export default function Modal() {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.modal_Reducer);
  const loginBtn = useRef(null);
  const regiBtn = useRef(null);

  const onHideModal = () => {
    dispatch(hideModal());
  };

  if (!isModal) {
    return null;
  }

  return (
    <ModalBackground>
      <Main_Container>
        <Auth_box>
          <Login panelA={loginBtn} />
          <Register panelB={regiBtn} />
        </Auth_box>
      </Main_Container>
    </ModalBackground>
  );
}
