import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Register from "../Components/userForm/Register";
import Login from "../Components/userForm/Login";
//style
import { StyledMainPage } from "./styles/StyledMainPage";
import Profile from "../Components/userForm/Porfile";
import NotFound from "./NotFound";
import Home from "./Home";
import { logout } from "../_actions/auth_action";

export default function Routing() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.UserStatusReducer);
  const isLogin = currentUser.isLogin;

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledMainPage>
      <Router>
        {isLogin ? (
          <div>
            <NavLink to={"/profile"}>프로필</NavLink>
            <button onClick={onLogout}>로그아웃</button>
          </div>
        ) : (
          <div>
            <NavLink to={"/auth/login"}>로그인</NavLink>
            <NavLink to={"/auth/register"}>회원가입</NavLink>
          </div>
        )}
        <Switch>
          <Route component={Login} exact path="/auth/login" />
          <Route component={Register} exact path="/auth/register" />
          <Route component={Profile} exact path="/profile" />
          <Route component={Home} exact path="/" />
          <Route component={NotFound} path="/NotFound" />
          <Route component={Profile} path="/profile" />
          <Route component={Profile} path="/profile" />
        </Switch>
      </Router>
    </StyledMainPage>
  );
}
