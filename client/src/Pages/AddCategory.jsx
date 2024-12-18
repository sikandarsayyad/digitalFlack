import React, { useState } from "react";
import "./AddForm.css";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCategory() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addcategory", { name, description, status })
      .then((res) => {
        console.log(res);
        navigate("/category");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="addForm">
        <div className="producthead">
          <i className="fa-solid fa-arrow-left-long"></i>
          <h5>Add Category</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Category Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            list="status"
            name="status"
            placeholder="Status"
            onChange={(e) => setStatus(e.target.value)}
          />
          <datalist id="status">
            <option value="Active" />
            <option value="Inactive" />
          </datalist>

          <div className="buttonContainer">
            <button onClick={() => navigate("/category")}>Cancle</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCategory;
