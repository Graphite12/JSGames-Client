import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
//style
import {
  StyledNavbar,
  LogoBox,
  NavbarContainer,
  RouteLink,
  MobileIcon,
  SignForm,
  RouteUL,
  RouteLi,
  ButtonContainer,
  Button,
} from "./styles/StyledNavigationBar";
import "./styles/NavigationBar.css";
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
  const [navbarColor, setNavbarColor] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth_Reducer);
  const { isModal } = useSelector((state) => state.modal_Reducer);
  const navlink = ["HOME", "GAME", "RANKING", "CONTACTUS"];

  const onLogout = () => {
    dispatch(logout());
  };

  const onOpenModal = () => {
    dispatch(showModal());
  };

  const openMenu = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const changeNavbarColor = () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    if (scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  const showBurger = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 1080) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  useEffect(() => {
    showBurger();

    window.addEventListener("resize", showBurger);
  }, []);

  return (
    <StyledNavbar className={navbarColor ? "navbar colorChange" : "navbar"}>
      <NavbarContainer>
        <LogoBox>GAME Storage</LogoBox>
        <MobileIcon onClick={openMenu}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </MobileIcon>
        <RouteUL onClick={openMenu} click={click}>
          {navlink.map((item, idx) => {
            return (
              <RouteLi key={idx}>
                <RouteLink
                  to={item === "HOME" ? "/" : item}
                  onClick={closeMenu}
                >
                  {item}
                </RouteLink>
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
              <Button
                onClick={() => {
                  onOpenModal();
                }}
              >
                Join Us
              </Button>
            </ButtonContainer>
          )}
        </RouteUL>
        <Modal />
      </NavbarContainer>
    </StyledNavbar>
  );
}
