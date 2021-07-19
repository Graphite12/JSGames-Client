import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
//style
import {
  Main_Container,
  ModalBackground,
  Auth_box,
  Sub_AuthContaiiner,
  Sub_ImgContainer,
  Image_Text,
  Image_Btn,
  Right_Side,
} from "./styles/StyledModal";

//redux Action
import { hideModal } from "../_actions/modal_action";
//component
import { logout } from "../_actions/auth_action";
import Login from "./UserForm/Login";
import Register from "./UserForm/Register";

export default function Modal() {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.modal_Reducer);
  const mainRef = useRef();
  const authRef = useRef();

  const [isActive, setIsActive] = useState(true);
  const [arrow, setArrow] = useState("right");
  useEffect(() => {}, []);

  const changeAuth = () => {
    if (isActive) {
      setArrow("right");
    } else {
      setArrow("left");
    }
    setIsActive(!isActive);
  };

  const onHideModal = () => {
    dispatch(hideModal());
  };

  if (!isModal) {
    return null;
  }

  const switchToSignup = isActive ? "Register" : "Login";

  const switchToSignin = isActive ? "Login" : "Register";

  return (
    <ModalBackground>
      <Main_Container ref={mainRef}>
        <Auth_box>
          {!isActive && <Login authRef={authRef} />}
          {isActive && <Register authRef={authRef} />}
        </Auth_box>
      </Main_Container>
      <RightSide
        onSwitch={isActive ? setArrow("right") : setArrow("left")}
        switchSignIn={switchToSignin}
        switchRegister={switchToSignup}
        onClick={changeAuth}
      />
    </ModalBackground>
  );
}

function RightSide(props) {
  return (
    <Right_Side
      className={`right-side ${props.onSwitch}`}
      ref={props.mainRef}
      onClick={props.changeAuth}
    >
      <div className="inner-container">
        <div className="text">{props.switchRegister}</div>
      </div>
    </Right_Side>
  );
}
