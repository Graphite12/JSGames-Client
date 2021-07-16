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
import {
  Auth_Container,
  ModalBackground,
  Sub_AuthContaiiner,
  Sub_ImgContainer,
  Image_Text,
} from "./styles/StyledModal";

//redux Action
import { hideModal } from "../_actions/modal_action";
//component
import { logout } from "../_actions/auth_action";
import Login from "./UserForm/Login";
import Register from "./UserForm/Register";

function ModalContainer({}) {}

export default function Modal() {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.modal_Reducer);

  const [isActive, setIsActive] = useState("signin");

  const onHideModal = () => {
    dispatch(hideModal());
  };

  if (!isModal) {
    return null;
  }

  const switchToSignup = () => {};

  const switchToSignin = () => {};

  return (
    <ModalBackground>
      <Auth_Container>
        <Login />
        <Sub_AuthContaiiner>
          <Sub_ImgContainer>
            <Image_Text className="m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </Image_Text>
            <Image_Text className="m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </Image_Text>
            <div class="img__btn">
              <span class="m--up">Sign Up</span>
              <span class="m--in">Sign In</span>
            </div>
          </Sub_ImgContainer>
          <Register />
        </Sub_AuthContaiiner>
      </Auth_Container>

      {/* <button
          onClick={() => {
            onHideModal();
          }}
        >
          x
        </button> */}
    </ModalBackground>
  );
}
