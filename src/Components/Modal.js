import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
//style
import {
  Main_Container,
  ModalBackground,
  Auth_box,
  closeBtn,
} from "./styles/StyledModal";

//redux Action
import {
  hideModal,
  flipCard,
  flipLoginCard,
  flipRegisterCard,
} from "../_actions/modalAndFlips_action";
//component
import Login from "./UserForm/Login";
import Register from "./UserForm/Register";
import Profile from "./UserForm/Profile";
import { useSpring } from "react-spring";

export default function Modal() {
  const dispatch = useDispatch();
  const { isModal, isCardFlips, isLoginCard, isRegisterCard } = useSelector(
    (state) => state.modalAndFlips_Reducer
  );
  const flipsAnime = useSpring({
    transform: `perspective(400px) rotateX(${isCardFlips ? 180 : 0}deg )`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const { isLoggedIn } = useSelector((state) => state.auth_Reducer);
  const loginBtn = useRef(null);
  const regiBtn = useRef(null);

  const onHideModal = () => {
    dispatch(hideModal());
  };

  //플립옵션

  const changeLoginFlip = () => {
    dispatch(flipLoginCard());
  };

  const changeRegisterFlip = () => {
    dispatch(flipRegisterCard());
  };

  //모달 옵션
  const ModalkeyPress = (e) => {
    if (e.keyCode === 27 && isModal) {
      return onHideModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", ModalkeyPress);
    return () => document.removeEventListener("keydown", ModalkeyPress);
  }, [ModalkeyPress]);

  if (!isModal) {
    return null;
  }

  console.log(isLoggedIn);
  return (
    <ModalBackground>
      <Main_Container>
        {isLoggedIn ? (
          <div>
            <Profile />
          </div>
        ) : (
          <Auth_box>
            <Login
              flipsAnime={flipsAnime}
              flipsRedux={changeLoginFlip}
              flips={isLoginCard}
            />
            <Register
              flipsAnime={flipsAnime}
              flips={isRegisterCard}
              flipsRedux={changeRegisterFlip}
            />
          </Auth_box>
        )}
      </Main_Container>
    </ModalBackground>
  );
}
