import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function UpdateCat() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getCat/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setDescription(result.data.description);
        setStatus(result.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateCat/" + id, {
        name,
        description,
        status,
      })
      .then((result) => {
        navigate("/category");
        console.log(result);
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
          <h5>Update Category</h5>
        </div>
        <form onSubmit={Update}>
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            list="status"
            name="status"
            placeholder="Status"
            value={status}
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
