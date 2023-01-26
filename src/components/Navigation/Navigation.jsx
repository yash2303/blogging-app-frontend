import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Logout/LogoutButton";
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <LogoutButton />
    </div>
  );
};

export default Navigation;
