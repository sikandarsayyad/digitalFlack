const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  // img: {
  //   data: Buffer,
  //   contentType: String,
  // },
  category: String,
  name: String,
  packSize: String,
  MRP: String,
  status: String,
});

const ProductModel = mongoose.model("products", EmployeeSchema);

module.exports = ProductModel;
