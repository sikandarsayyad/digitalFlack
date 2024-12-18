import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo&name.png";
import backgroundImage from "../images/background.png";
import "./Login.css";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
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
              placeholder="Name"
              autoFocus
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
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
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an Account?
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
