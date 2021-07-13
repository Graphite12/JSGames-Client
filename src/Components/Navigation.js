import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
//style
import {
  StyledNavbar,
  LogoBox,
  NavbarContainer,
  RouteLink,
  SignForm,
  RouteUL,
  RouteLi,
} from "./styles/StyledNavigationBar";
import "./styles/NavigationBar.css";
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
  const [navbarColor, setNavbarColor] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.UserStatusReducer);
  const navlink = ["HOME", "GAME", "RANKING", "CONTACTUS"];
  const onLogout = () => {
    dispatch(logout());
  };

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
    if (innerWidth <= 1000) {
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
        <LogoBox>브랜드 ㅋㅋ</LogoBox>
        <RouteUL>
          {navlink.map((item, idx) => {
            return (
              <RouteLi key={idx}>
                <RouteLink to={item === "HOME" ? "/" : item}>{item}</RouteLink>
              </RouteLi>
            );
          })}
        </RouteUL>
        {isLoggedIn ? (
          <div>
            {" "}
            <div>
              <button>프로필</button>
            </div>
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
      </NavbarContainer>
    </StyledNavbar>
  );
}
