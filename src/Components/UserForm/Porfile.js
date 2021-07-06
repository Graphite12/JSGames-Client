import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../_actions/auth_action";

require("dotenv").config();

export default function Profile(props) {
  const { user: currentUser } = useSelector((state) => state.UserStatusReducer);

  // if (!currentUser) {
  //   return <Redirect to="/auth/login" />;
  // }

  const key = process.env.JWT_SECRET;
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, []);

  const onlogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      <h1>프로필</h1>
      <h2>{currentUser}</h2>
      <div>
        <p>{currentUser}</p>
      </div>
    </div>
  );
}
