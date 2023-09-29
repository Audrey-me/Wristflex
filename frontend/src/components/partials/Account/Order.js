import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-[15rem]">
        <h1 className="md:text-[18px] font-semibold">No Orders Yet</h1>
        <Link to="/collections">
          <button className="mx-auto px-12 py-2 bg-[#a67a68] text-[15px] text-white mt-4 uppercase">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
