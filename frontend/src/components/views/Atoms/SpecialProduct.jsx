import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { specialproducts } from '../../../data';

const SpecialProduct = () => {
  return (
    <div className="lg:w-[17.5rem] border-separate mt-4 border-spacing-4 border">
      <div className="bg-accent/20">
        <tr>
          <th className="font-[100] text-[16px]">Special Products</th>
        </tr>
      </div>
      <div className="mx-auto">
        {specialproducts.map((items, index) => {
          return (
            <div className="flex mx-2 gap-4 mt-4" key={index}>
              <div className="w-20 mb-2">
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
                <div className="flex text-[#fec42d]">
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
  )
}

export default SpecialProduct