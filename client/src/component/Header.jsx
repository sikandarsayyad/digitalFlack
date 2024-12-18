import React from "react";
import Logo from "../images/logo2.png";
import "./Header.css";
import LoginLogo from "../images/loginlogo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={Logo} alt="logo" className="header--img" />
      <h2 className="header--title">
        Digital<span>Flake</span>
      </h2>

      <img
        src={LoginLogo}
        alt="login"
        className="loginlogo"
        title="Logout"
        onClick={() => navigate("/login")}
      />
    </header>
  );
}
