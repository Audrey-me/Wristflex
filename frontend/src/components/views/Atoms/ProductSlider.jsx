import { Autoplay, Pagination, Navigation } from "swiper";
import { products } from "../../../data";
import { Link } from "react-router-dom";
import "./Collection.css";
// import { AiFillStar } from "react-icons/ai";
import Rating from "./Rating";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../slider.css";
import "../../../index.css";
import "../../../slider.css";

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      modules={[Autoplay,Navigation, Pagination]}  autoplay={true}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      grabCursor={true}
      className="productSlider min-h-[1100px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] mt-10">
              {page.productList.map((product, index) => {
                return (
                  <div key={index} className="w-full max-w-[290px] text-center">
                    <div className="mb-2 relative className='border hover:border-accent rounded-[18px] w-full max-w-[285px] max-h-[292px] flex items-center justify-center  transition">
                      <div className="parent  hidden md:block">
                        <a href={`/product/${product._id}`}>
                          <img
                            src={product.image.type}
                            className="mt-4 md:md-0"
                            alt="images"
                          />
                        </a>
                        <Link to="/collections">
                          <button className="px-8  py-2 bg-[#a67a68] text-[15px] uppercase rounded-full text-white font-semibold  child-product">
                            Add to cart
                          </button>
                        </Link>
                      </div>
                      {/* // mobile design */}
                      <div className=" md:hidden block">
                        <a href={`/product/${product._id}`}>
                          <img
                            src={product.image.type}
                            className="mt-4 md:md-0"
                            alt="images"
                          />
                        </a>
                        <Link to="/collections">
                          <button className="px-3 py-2   md:hidden block  bg-[#a67a68] text-[12px] uppercase rounded-full text-white font-semibold top-[15rem]  child-product">
                            Add to cart
                          </button>
                        </Link>
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
                      <a href={`/product/${product._id}`}>
                        <h1>{product.title}</h1>
                      </a>
                    </div>
                    <div className="flex gap-x-1 md:mb-0 mb-14 justify-center font-[600] text-[14px] md:text-[16px]">
                      <div className="line-through text-accent">
                        {product.oldprice}
                      </div>
                      <div>{product.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
