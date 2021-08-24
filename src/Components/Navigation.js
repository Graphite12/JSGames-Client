import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
//style
import {
  Navbar,
  LogoBox,
  Burger,
  MenuLinks,
  MenuLi,
  RouteLink,
  BurgerIcon,
  SignForm,
  ButtonContainer,
  AuthButton,
} from "./styles/StyledNavigationBar";

import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../_actions/auth_action";

//redux Action
import { showModal } from "../_actions/modalAndFlips_action";

//component
import Modal from "./Modal";

export default function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [click, setClick] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { isLoggedIn } = useSelector((state) => state.auth_Reducer);
  const { isModal } = useSelector((state) => state.modalAndFlips_Reducer);
  const navlink = ["ABOUT", "GAMES", "CONTACTUS"];

  const onLogouts = () => {
    dispatch(logout());
  };

  const onOpenModal = () => {
    dispatch(showModal());
  };

  const openMenu = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Navbar>
      <LogoBox onClick={() => history.push("/")}>JSG</LogoBox>
      <MenuLinks onClick={openMenu} click={click}>
        {navlink.map((item, idx) => {
          return (
            <MenuLi key={idx} onClick={closeMenu}>
              <RouteLink to={item.toLowerCase()}>{item}</RouteLink>
            </MenuLi>
          );
        })}
        {isLoggedIn ? (
          <ButtonContainer>
            <AuthButton onClick={onOpenModal}>환영합니다.</AuthButton>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <AuthButton onClick={onOpenModal}>Join Us</AuthButton>
          </ButtonContainer>
        )}
      </MenuLinks>
      <BurgerIcon>
        <Burger onClick={openMenu}>
          {click ? <FIcon icon={faTimes} /> : <FIcon icon={faBars} />}
        </Burger>
      </BurgerIcon>

      <Modal />
    </Navbar>
  );
}

/**더미
 * 
  // const changeNavbarColor = () => {
  //   const scrollY = window.scrollY;
  //   console.log(scrollY);
  //   if (scrollY >= 80) {
  //     setNavbarColor(true);
  //   } else {
  //     setNavbarColor(false);
  //   }
  // };

  // useEffect(() => {
  //   changeNavbarColor();
  //   window.addEventListener("scroll", changeNavbarColor);
  // }, []);
 */
