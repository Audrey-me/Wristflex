import { Pagination, Navigation } from "swiper";
import { products } from "../../../data";
import { AiFillStar } from "react-icons/ai";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../index.css";
import '../../../slider.css'

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      grabCursor={true}
      className="productSlider min-h-[900px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] mt-10">
              {page.productList.map((product, index) => {
                const { image, title, price, oldprice } = product;
                return (
                  <div key={index} className='w-full max-w-[290px] text-center'>
                    <div className="mb-2 relative className='border hover:border-accent rounded-[18px] w-full max-w-[285px] max-h-[292px] flex items-center justify-center  transition">
                      <img src={image.type} alt="images" />
                      <div className="flex absolute text-[#fec42d] bottom-1 lg:right-[56px] right-[22px] justify-center items-center cursor-pointer">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                    <div className="text-[13px] font-[600]">
                      <h1>{title}</h1>
                    </div>
                    <div className="flex gap-x-1 justify-center font-[600] text-[12.5px]">
                      <div className="line-through text-accent">{oldprice}</div>
                      <div>{price}</div>
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
