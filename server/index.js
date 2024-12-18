const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const CategoryModel = require("./models/Category");
const ProductModel = require("./models/Product");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

mongoose.connect("mongodb://127.0.0.1:27017/Employee");

app.post("/addProduct", (req, res) => {
  ProductModel.create(req.body)
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.post("/addcategory", (req, res) => {
  CategoryModel.create(req.body)
    .then((categories) => res.json(categories))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  CategoryModel.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.get("/product", (req, res) => {
  ProductModel.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.delete("/deletecategory/:id", (req, res) => {
  const id = req.params.id;
  CategoryModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => console.log);
});
app.delete("/deleteProduct/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => console.log);
});

app.get("/getCat/:id", (req, res) => {
  const id = req.params.id;
  CategoryModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});
app.get("/getProd/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.put("/updateCat/:id", (req, res) => {
  const id = req.params.id;
  CategoryModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.put("/updateProd/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndUpdate(
    { _id: id },
    {
      category: req.body.category,
      name: req.body.name,
      packSize: req.body.packSize,
      MRP: req.body.MRP,
      status: req.body.status,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          const accessToken = jwt.sign(
            { email: email },
            "jwt-access-token-secret-key",
            { expiresIn: "1m" }
          );
          const refreshToken = jwt.sign(
            { email: email },
            "jwt-refresh-token-secret-key",
            { expiresIn: "5m" }
          );
          res.cookie("accessToken", accessToken, { maxAge: 60000 });
          res.cookie("refreshToken", refreshToken, {
            maxAge: 300000,
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          });

          res.json("Success");
        } else {
          res.json("Password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
