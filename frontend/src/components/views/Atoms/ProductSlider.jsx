import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { products } from "../../../data";
import { Link } from "react-router-dom";
import "./Collection.css";
// import { AiFillStar } from "react-icons/ai";
import Rating from "./Rating";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import  {useCartStore}  from "../../../store";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../slider.css";
import "../../../index.css";
import "../../../slider.css";

const ProductSlider = () => {
  // const { pages } = products;
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
        setProds(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      grabCursor={true}
      className="productSlider min-h-[1700px]"
    >
      
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] mt-10">
          {prods.map((product, index) => {
            return (
              <div
                key={index}
                className="w-full parent max-w-[290px] text-center"
              >
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

                  <div className="flex absolute  bottom-1 lg:right-[56px] right-[22px] justify-center items-center cursor-pointer">
                    {/* <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar /> */}
                    <Rating value={product.rating} />
                  </div>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
