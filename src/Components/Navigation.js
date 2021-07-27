import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
//style
import {
  Navbar,
  LogoBox,
  NavbarContainer,
  RouteLink,
  MenuIcon,
  SignForm,
  RouteUL,
  RouteLi,
  ButtonContainer,
  Button,
} from "./styles/StyledNavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../_actions/auth_action";

//redux Action
import { showModal } from "../_actions/modal_action";

//component
import Modal from "./Modal";

export default function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [click, setClick] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { isLoggedIn } = useSelector((state) => state.auth_Reducer);
  const { isModal } = useSelector((state) => state.modal_Reducer);
  const navlink = ["HOME", "GAMES", "CONTACTUS"];

  const onLogout = () => {
    dispatch(logout());
  };

  const onOpenModal = () => {
    dispatch(showModal());
  };

  const openMenu = () => setClick(!click);
  const closeMenu = () => setClick(false);

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
      <NavbarContainer>
        <LogoBox>GAME Storage</LogoBox>

        <RouteUL onClick={openMenu} click={click}>
          {navlink.map((item, idx) => {
            return (
              <RouteLi key={idx} onClick={closeMenu}>
                <RouteLink to={item === "HOME" ? "/" : item}>{item}</RouteLink>
              </RouteLi>
            );
          })}
          {isLoggedIn ? (
            <ButtonContainer>
              <button>프로필</button>
              <button onClick={onLogout}>로그아웃</button>
            </ButtonContainer>
          ) : (
            <ButtonContainer>
              <Button onClick={onOpenModal}>Join Us</Button>
            </ButtonContainer>
          )}
        </RouteUL>

        <MenuIcon onClick={openMenu}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </MenuIcon>
        <Modal />
      </NavbarContainer>
    </Navbar>
  );
}
