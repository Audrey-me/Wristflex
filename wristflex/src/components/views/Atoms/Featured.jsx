import React from "react";


const Featured = () => {
  return (
    <div>
      <div className="bg-accent/20 py-4 flex mt-8  justify-between items-center">
        <div>
          <a
            href="google.com"
            className="lg:hidden py-2 px-6 text-white  bg-secondary rounded-full"
          >
            Filter Products
          </a>
          <h1 className="mx-[0rem] md:mx-[2rem]  hidden text-center text-[14px] lg:flex w-56">
            Showing 20 of 20 Products
          </h1>
        </div>
        <div className="items-center hidden lg:flex ">
          <h1 className="w-20 pl-4 text-[15px]">Sort By</h1>
          <select
            placeholder="Featured"
            className="pr-[12rem] text-[15px] text-accent/60 mr-4 bg-white/50 border border-solid border-accent pl-[1rem] py-2 rounded-full"
          >
            <option className="text-black">Price High to Low</option>
            <option className="text-black">Price Low to High</option>
            <option className="text-black">Date Old to New</option>
            <option className="text-black">Date New to Old</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Featured;
