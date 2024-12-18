import React from "react";
import "./Navbar.css";
import Home from "../images/home.png";
import Category from "../images/category.png";
import Product from "../images/product.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/home" className="nav-item">
            <img src={Home} alt="home" className="navImage" />
            <p>Home</p>
            <i className="fa-solid fa-caret-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" className="nav-item">
            <img src={Category} alt="category" className="navImage" />
            <p>Category</p>
            <i className="fa-solid fa-caret-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className="nav-item">
            <img src={Product} alt="product" className="navImage" />
            <p>Product</p>
            <i className="fa-solid fa-caret-right"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
