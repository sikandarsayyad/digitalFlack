import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import backgroundImage from "../images/background.png";
import Logo from "../images/Logo&name.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        {
          console.log(result);
          if (result.data === "Success") {
            navigate("/home");
          } else if (result.data === "No record existed") {
            window.alert("You have not registered, please register first");
            navigate("/login");
          } else if (result.data === "Password is incorrect") {
            window.alert("Password is incorrect");
            navigate("/login");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="main--container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="signimForm">
        <div className="title">
          <div className="Home">
            <img src={Logo} alt="logo" />
            <h3>Welcome to DigitalFlake Admin</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Email"
              autoFocus
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <h4>Forgot Password?</h4>
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an Account?
            <span>
              <Link to="/signup">Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
