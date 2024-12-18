import React, { useEffect } from "react";
import "./AddForm.css";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Category from "./Category";

function AddProduct() {
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [packSize, setPackSize] = useState();
  const [MRP, setMRP] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    axios
      .post("http://localhost:3001/addProduct", {
        name,
        packSize,
        category,
        MRP,
        status,
      })
      .then((res) => {
        console.log(res);
        navigate("/product");
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
          <h5>Add Product</h5>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
           
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pack Size"
              onChange={(e) => setPackSize(e.target.value)}
            />

            <input
              list="Category"
              name="Category"
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />

            <datalist id="Category">
              {data.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </datalist>
            <br />
            <input
              type="number"
              placeholder="MRP"
              onChange={(e) => setMRP(e.target.value)}
            />
            <input
              list="status"
              placeholder="Status"
              id="file-input"
              onChange={(e) => setStatus(e.target.value)}
            />
            <datalist id="status">
              <option value="Active" />
              <option value="Inactive" />
            </datalist>
          </div>
          <div className="buttonContainer">
            <button onClick={() => navigate("/product")}> Cancle</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
