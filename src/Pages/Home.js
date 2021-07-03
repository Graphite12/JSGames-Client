import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "../_actions/auth_action";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/").then((res) => console.log(res));
  }, []);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>홈페이지</h1>
    </div>
  );
}
