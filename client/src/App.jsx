import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategory from "./Pages/AddCategory";
import AddProduct from "./Pages/AddProduct";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import UpdateCat from "./Pages/UpdateCat";
import UpdateProd from "./Pages/UpdateProd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/updatecat/:id" element={<UpdateCat />}></Route>
        <Route path="/updateprod/:id" element={<UpdateProd />}></Route>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
