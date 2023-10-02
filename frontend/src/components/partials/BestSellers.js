import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import  {useCartStore}  from "../../store";


export default function BestSellers(){
    const [prods, setProds] = useState([]);
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success("Added to cart!");
      };

    useEffect(() => {
        const fetchProductList = async () => {
          try {
            const response = await axios.get(
              "http://localhost:5000/api/wristflex/products"
            );
            console.log(response.data.length)
            const limitedProps = response.data.slice(10,14)
            setProds(limitedProps);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchProductList();
      }, []);

return (
    <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] mt-10">
          {prods.map((product, index) => {
            return (
              <div key={index} className="w-full parent max-w-[290px] text-center">
                <div className="mb-2 relative className='border hover:border-accent rounded-[18px] w-full max-w-[285px] max-h-[292px] flex items-center justify-center  transition">
                  <div className="  hidden md:block">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.prodImage}
                        className="mt-4 md:md-0"
                        alt="images"
                      />
                    </Link>
                    <button onClick={() => handleAddToCart(product)} className="px-8  py-2 bg-[#a67a68] text-[15px] uppercase rounded-full text-white font-semibold  child-product">
                      Add to cart
                    </button>
                  </div>

                  {/* // mobile design */}
                  <div className=" md:hidden block">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.prodImage}
                        className="mt-4 md:md-0"
                        alt="images"
                      />
                    </Link>

                    <button onClick={() => handleAddToCart(product)} className="px-3 py-2   md:hidden block  bg-[#a67a68] text-[12px] uppercase rounded-full text-white font-semibold top-[15rem]  child-product">
                      Add to cart
                    </button>
                  </div>

                  {/* <div className="flex absolute  bottom-1 lg:right-[56px] right-[22px] justify-center items-center cursor-pointer">
                  </div> */}
                </div>

                <div className="md:text-[16px] text-[14px] font-[600]">
                  <Link to={`/product/${product._id}`}>
                    <h1>{product.prodName}</h1>
                  </Link>
                </div>
                <div className="flex gap-x-1 md:mb-0 mb-14 justify-center font-[600] text-[14px] md:text-[16px]">
                  <div className="line-through text-accent">
                    {product.oldprice}
                  </div>
                  <div>${product.prodPrice}.00</div>
                </div>
              </div>
            );
          })}
    </div>
)}
