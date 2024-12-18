import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import "./Home.css";
import Logo from "../images/logo.png";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home">
        <div>
          <img src={Logo} alt="logo" />
          <h5>
            digital<span>FlaKe</span>
          </h5>
          <p>Welcome to DigitalFlack Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
