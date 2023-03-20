import React from "react";
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
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route exact path="/about" index element={<About />} />
        <Route exact path="/collection" element={<Collections />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/collections" element={<Collection />} />
        <Route exact path="/registration/login" element={<Login/>} />
        <Route exact path="/registration/register" element={<Register />} />
        <Route exact path="/registration/reset_password" element={<PasswordReset/>} />
        <Route exact path="/product/:id" element={<ProductScreen />} />
        <Route exact path="/confirm/:confirmationCode" element={<Welcome/>} />
      </Routes>
    </>
  );
}

export default App;
