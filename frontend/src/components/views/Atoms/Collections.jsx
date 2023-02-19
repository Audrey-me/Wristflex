import React from "react";
import { Link } from "react-router-dom";
import { Allproducts } from "../../../data";
import "./Collection.css";
import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar1";

const Collections = () => {
  return (
    <>
      <div className="container mx-auto text-center">
        <Navbar/>
        <h1 className="text-[30px] font-semibold mt-10 ">Collections</h1>
        <div className="lg:grid grid-cols-2 text-center hidden gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] mt-10">
          {Allproducts.map((items, index) => {
            return (
              <div key={index}>
                <div className="parent">
                  <Link to="/collections">
                    <img src={items.image.type} alt="" />
                  </Link>
                  <Link to="/collections">
                    <button className="px-12 py-2 bg-[#a67a68] text-[15px] uppercase rounded-full text-white  child">
                      Shop the Collection
                    </button>
                  </Link>
                  <h1 className="font-semibold mt-4 heading">{items.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collections;
