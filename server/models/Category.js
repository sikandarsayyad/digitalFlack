const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String
})

const CategoryModel = mongoose.model("categories", EmployeeSchema)

module.exports = CategoryModel;