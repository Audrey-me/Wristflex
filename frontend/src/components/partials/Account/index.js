import React, { useState } from "react";
import Navbar from "../Navbar";
import Order from "./Order";
import Profile from "./Profile";

const Account = () => {
  const [activeTab, setActiveTab] = useState("Orders");
  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <Navbar />
      <div className="flex text-[25px] font-bold gap-24 mt-28 mx-auto justify-center">
        <p
          onClick={() => toggleTab("Orders")}
          className={`${
            activeTab === "Orders"
              ? " border-b-2 border-[#a67a68]"
              : "text-gray-500"
          }   md:text-[25px]  `}
        >
          Orders
        </p>
        <p
          onClick={() => toggleTab("Profile")}
          className={`${
            activeTab === "Profile"
              ? " border-b-2 border-[#a67a68]"
              : "text-gray-500"
          }   md:text-[25px]  `}
        >
          Profile Settings
        </p>
      </div>
      <hr className="w-full border-[#a67a68]"/>
      <div>
        {activeTab === "Orders" ? (<Order />) : activeTab === "Profile" ? (<Profile/>) : null}
      </div>
    </div>
  );
};

export default Account;
