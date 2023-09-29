import React,{useState, useEffect} from "react";
import Home from "./components/views/Home/Home";
import { Routes, Route } from "react-router-dom";
import Collection from "./components/views/molecules/Collections";
import Collections from "./components/views/Atoms/Collections";
import ProductScreen from "./components/views/Atoms/ProductScreen";
import Login from "./components/views/Authentication/Login";
import Register from "./components/views/Authentication/Register";
import PasswordReset from "./components/views/Authentication/PasswordReset";
import About from "./components/views/About";
import ContactUs from "./components/views/ContactUs";
import Welcome from "./components/views/Authentication/Welcome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/partials/Cart";
import AddProducts from "./components/views/molecules/AddProducts";
import Checkouts from "./components/partials/Checkouts";
import Account from "./components/partials/Account";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/wristflex/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route exact path="/about" index element={<About />} />
        <Route exact path="/collection" element={<Collections />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/collections" element={<Collection  />} />
         <Route exact path="/account" element={<Account  />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/addproducts" element={<AddProducts />} />
        <Route exact path="/registration/login" element={<Login/>} />
        <Route exact path="/registration/register" element={<Register />} />
        <Route exact path="/registration/reset_password" element={<PasswordReset/>} />
        <Route exact path="/product/:id" element={<ProductScreen products={products} />} />
        <Route path="/checkout/:productIds" element={<Checkouts/>} />
        <Route exact path="/confirm/:confirmationCode" element={<Welcome/>} />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
