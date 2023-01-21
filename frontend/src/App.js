import React from "react";
import Home from "./components/views/Home/Home";
import { Routes, Route } from "react-router-dom";
import Collection from "./components/views/molecules/Collections";
import Collections from "./components/views/Atoms/Collections";
import ProductScreen from "./components/views/Atoms/ProductScreen";
import Login from "./components/views/Registration/Login";
import Register from "./components/views/Registration/Register"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route exact path="/collection" element={<Collections />} />
        <Route exact path="/collections" element={<Collection />} />
        <Route exact path="/registration/login" element={<Login/>} />
        <Route exact path="/registration/signup" element={<Register />} />
        <Route exact path="/product/:id" element={<ProductScreen />} />
        {/* <Route exact path ="Demo" element ={<Demo/>}/> */}
      </Routes>
    </>
  );
}

export default App;
