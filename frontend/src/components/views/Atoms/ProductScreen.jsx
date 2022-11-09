import {Allproducts} from "../../../data";

import React from "react";
import {  useParams } from 'react-router-dom';


const ProductScreen = () => {
    const { id } = useParams();
    const product = Allproducts.find((p) => p._id === (id));
    return <div className="container mt-10">
      <div className="flex gap-4">
        <div>
          <img src={product.image.type} alt="" className="w-[35rem] border " />
        </div>
        <div>
          <h1 className="text-[25px]">{product.title}</h1>
          <div className="flex gap-2 items-center ">
            <p className="line-through text-[20px] text-accent font-semibold text-">{product.oldprice}</p>
            <p className="text-[25px] text-black font-semibold">{ product.price}</p>
          </div>
        </div>
      </div>
  </div>;
};

export default ProductScreen;
