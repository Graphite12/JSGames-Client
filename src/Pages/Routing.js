import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//컴포넌트
import Home from "./Home";
// import Profile from "../Components/UserForm/Porfile";
import NotFound from "./NotFound";
import Login from "../Components/UserForm/Login";
import Register from "../Components/UserForm/Register";
import Navigation from "../Components/Navigation";
import ScrollToTop from "../Components/ScrollToTop";
import SectionC from "../Components/_HomeContent/SectionC";
import SectionD from "../Components/_HomeContent/SectionD";
import SectionE from "../Components/_HomeContent/SectionE";
import Games from "./Games";

//게임파일들
import tttGames from "../Components/Games/TicTacToe/TicTacToe";
import tetris from "../Components/Games/Tetris/Tetris";

export default function Routing() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Games} exact path="/games" />
        {/* <Route component={Profile} path="/auth/profile" /> */}
        <Route component={NotFound} path="/notFound" />
        <Route component={Login} exact path="/auth/login" />
        <Route component={Register} exact path="/auth/register" />
        <Route component={SectionC} path="/c" />
        <Route component={SectionD} path="/d" />
        <Route component={SectionE} path="/e" />
        <Route component={tttGames} path="/tictactoe" />
        <Route component={tetris} path="/tetris" />
      </Switch>
    </Router>
  );
}
