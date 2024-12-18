import React from "react";
import "./Table.css";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import categoryImg from "../images/category.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Category(Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) =>
        setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    if (value) {
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(value)
      );
      setData(filtered);
    } else {
      window.location.reload();
    }
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deletecategory/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="tableData">
        <div>
          <div className="searchbar">
            <div className="d-flex">
              <img src={categoryImg} alt="product" />
              <h5>Category</h5>
            </div>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleFilter}
            />
            <NavLink to="/addcategory">
              <button>Add New</button>
            </NavLink>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((category) => {
              return (
                <tr>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>{category.status}</td>
                  <td className="d-flex">
                    <Link to={`/updatecat/${category._id}`}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </Link>
                    <div
                      className="delete-btn"
                      onClick={(e) => handleDelete(category._id)}
                    >
                      <i class="fa-regular fa-trash-can"></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
