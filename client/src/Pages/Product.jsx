import React from "react";
import "./Table.css";
import Header from "../component/Header";
import productImg from "../images/product.png";
import Navbar from "../component/Navbar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product(Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteProduct/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };


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

  return (
    <div>
      <Header />
      <Navbar />
      <div className="tableData">
        <div>
          <div className="searchbar">
            <div className="d-flex">
              <img src={productImg} alt="product" />
              <h5 className="P-2">Product</h5>
            </div>
            
            <input
              type="text"
              placeholder="Search..."
              onChange={handleFilter}
            />
            <NavLink to="/addproduct">
              <button>Add New</button>
            </NavLink>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pack Size</th>
              <th>Category</th>
              <th>MRP</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.packSize}</td>
                  <td>{product.category}</td>
                  <td>{product.MRP}</td>
                  <td>{product.status}</td>
                  <td className="d-flex">
                    <Link to={`/updateprod/${product._id}`}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </Link>
                    <div className="delete-btn" onClick={(e) => handleDelete(product._id)}>
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

export default Product;
