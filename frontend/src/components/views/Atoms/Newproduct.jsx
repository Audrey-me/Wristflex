import React from "react";
import { newproducts } from "../../../data";
import { AiFillStar } from "react-icons/ai";


const Newproduct = () => {
  return (
    <div className="lg:w-[17.5rem] border-separate mt-4 border-spacing-4 border">
      <div className="bg-accent/20">
        <tr>
          <th className="font-[600] text-[16px]">New Products</th>
        </tr>
      </div>
      <div className="mx-auto">
        {newproducts.map((items, index) => {
          return (
            <div className="flex mx-2 gap-4 mt-4" key={index}>
              <div className="w-20 mb-2 ">
                <img src={items.image.type} alt="" />
              </div>
              <div className="leading-7">
                <h1 className="text-[15px] font-semibold">{ items.title}</h1>
                <div className="flex gap-1  font-[600] text-[12.5px]">
                  <div className="line-through text-accent">
                    {items.oldprice}
                  </div>
                  <div>{items.price}</div>
                </div>
                <div className="flex text-gray-400">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newproduct;
