import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function UpdateProd() {
  const { id } = useParams();
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [packSize, setPackSize] = useState();
  const [MRP, setMRP] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getProd/" + id)
      .then((result) => {
        console.log(result);
        setCategory(result.data.category);
        setName(result.data.name);
        setPackSize(result.data.packSize);
        setMRP(result.data.MRP);
        setStatus(result.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateProd/" + id, {
        category,
        name,
        packSize,
        MRP,
        status,
      })
      .then((result) => {
        navigate("/product");
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
          <h5>Update Product</h5>
        </div>

        <form onSubmit={Update}>
          <div>
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pack Size"
              value={packSize}
              onChange={(e) => setPackSize(e.target.value)}
            />
            <input
              list="Category"
              name="Category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <datalist id="Category">
              {/* <option value="Milk" />
              <option value="Fruits" /> */}
            </datalist>
            <br />
            <input
              type="number"
              placeholder="MRP"
              value={MRP}
              onChange={(e) => setMRP(e.target.value)}
            />
            <input
              list="status"
              placeholder="Status"
              id="file-input"
              value={status}
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
