import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
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
  const history = useHistory();
  const { isLoggedIn } = useSelector((state) => state.UserStatusReducer);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledMainPage>
      <Router>
        {isLoggedIn ? (
          <div>
            <NavLink to={"/auth/profile"}>프로필</NavLink>
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
          <Route component={Profile} exact path="/auth/profile" />
          <Route component={Home} exact path="/" />
          <Route component={NotFound} path="/NotFound" />
        </Switch>
      </Router>
    </StyledMainPage>
  );
}
