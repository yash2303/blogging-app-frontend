import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/Logout";
import "./LogoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return <button onClick={handleLogout} className="logout-button">Logout</button>;
};

export default connect()(LogoutButton);
