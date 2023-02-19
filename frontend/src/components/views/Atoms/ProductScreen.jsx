import { Allproducts } from "../../../data";

import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../partials/Navbar1";

const ProductScreen = () => {
  const { id } = useParams();
  const product = Allproducts.find((p) => p._id === id);
  return (
    <div className="container">
      <Navbar />
      <div className="flex mt-10 gap-4">
        <div>
          <img src={product.image.type} alt="" className="w-[35rem] border " />
        </div>
        <div>
          <h1 className="text-[25px]">{product.title}</h1>
          <div className="flex items-center ">
            <p className="line-through text-[20px] text-accent font-semibold">
              {product.oldprice}
            </p>
            <p className="text-[25px] text-black font-semibold">
              {product.price}
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-[18px] text-accent font-semibold ">Size</h1>
            <div className="flex mt-2 items-center gap-2">
              <p className="border-[1px] border-black  px-3 py-2 text-[17px] text-black ">
                S
              </p>
              <p className="border-[1px] border-black  px-3 py-2 text-[17px] text-black ">
                M
              </p>
              <p className="border-[1px] border-black  px-3 py-2 text-[17px] text-black ">
                L
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-accent font-bold">Quantity</h1>

            <div className="flex items-center gap-8 divide-x border rounded-full px-2 w-[50%] py-[0.4rem]">
              <button className="text-[28px]">-</button>
              <div className="text-center">
                <input type="number" className="w-[80%]" />
              </div>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
