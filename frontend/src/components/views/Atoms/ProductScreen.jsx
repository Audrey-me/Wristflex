import { Allproducts } from "../../../data";
import { useEffect, useState } from "react";
import axios from "axios";
import Icon1 from "../../partials/images/icon1.webp";
import Icon2 from "../../partials/images/icon2.webp";
import Icon3 from "../../partials/images/icon3.webp";
import Icon4 from "../../partials/images/icon4.webp";
import { useParams } from "react-router-dom";
import Navbar from "../../partials/Navbar";
import { AiFillStar } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import Freedelivery from "../../partials/images/freedelivery.png";
import Bigsavings from "../../partials/images/bigsavings.png";
import Customersupport from "../../partials/images/customersupport.png";
import Giftvoucher from "../../partials/images/giftvoucher.png";
import Reviewsection from "./Reviews/Reviewsection";
import { relatedproducts } from "../../../data";
import { Link } from "react-router-dom";
import Footer from "../../partials/Footer";
import { useCartStore} from "../../../store";
import { toast } from "react-toastify";

const ProductScreen = ({ products}) => {
  const [count, setCount] = useState(0);
  const [selectedButton, setSelectedButton] = useState("");
  const [selected, setSelected] = useState("followers");
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  const {removeFromCart  } = useCartStore();
  const cartCount = useCartStore((state) => state.cartCount);
  // const [quantity, setQuantity] = useState(InitialQuantity );
  // const { updateQuantity } = useCartStore();
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  


  const decrementQuantity = (product) => {
    removeFromCart(product);
  };

  const showReviews = () => {
    setReviewsVisible(true);
    setDescriptionVisible(false);
    setSelected("reviews");
  };

  const showDescription = (e) => {
    setDescriptionVisible(true);
    setReviewsVisible(false);
    setSelected("description");
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const { id } = useParams();
  const product = products && products.find((p) => p._id === id);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="lg:container md:px-4">
        <div className="flex md:flex-row flex-col lg:mt-[4rem] xl:mt-10 lg:px-0 px-[0.9rem] mt-[6rem] gap-4">
          <div>
            <img
              src={product.prodImage}
              alt="images"
              className="w-[35rem] border "
            />
          </div>

          {/* second flex */}

          <div>
            <h1 className="text-[25px]">{product.prodName}</h1>
            <div className="flex mt-2 mb-2 items-center gap-2 ">
              <div className="flex text-[#fec42d]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>

              <div className="flex gap-1 items-center">
                <a href="#g">
                  <p className="text-[15px] font-medium">Write Review</p>
                </a>
                <a href="#g">
                  <span>
                    <GoPencil size={15} />
                  </span>
                </a>
              </div>
            </div>
            <div className="flex items-center ">
              <p className="line-through text-[20px] text-accent font-semibold">
                {product.oldprice}
              </p>
              <p className="text-[25px] text-black font-semibold">
                ${product.prodPrice}.00
              </p>
            </div>
            <div className="mt-4">
              <h1 className="text-[14px] text-[#666] font-bold ">Size</h1>
              <div className="flex mt-2 items-center gap-2">
                <button
                  onClick={() => handleButtonClick("Button 1")}
                  className={`text-black border-[0.1rem]   px-3 py-2 text-[17px] text-blackbutton  font-bold transition-all duration-500 
                   ${
                     selectedButton === "Button 1"
                       ? "text-white border-[0.1rem]   px-3 py-2 text-[17px] text-blackbutton bg-black"
                       : "text-black border-[0.1rem]   px-3 py-2 text-[17px]"
                   }`}
                >
                  S
                </button>
                <button
                  onClick={() => handleButtonClick("Button 2")}
                  className={`text-black border-[0.1rem]   px-3 py-2 text-[17px] text-blackbutton  font-bold transition-all duration-500 
                   ${
                     selectedButton === "Button 2"
                       ? "text-white border-[0.1rem]   px-3 py-2 text-[17px] text-blackbutton bg-black"
                       : "text-black border-[0.1rem]   px-3 py-2 text-[17px]"
                   }`}
                >
                  M
                </button>
                <button
                  onClick={() => handleButtonClick("Button 3")}
                  className={`text-black border-[0.1rem]   px-3 py-2 text-[17px] text-blackbutton  font-bold transition-all duration-500 
                    ${
                      selectedButton === "Button 3"
                        ? "text-white border-[0.1rem]   px-3 py-2 text-[17px] text-blackbutton bg-black"
                        : "text-black border-[0.1rem]   px-3 py-2 text-[17px]"
                    }`}
                >
                  L
                </button>
              </div>
            </div>

            {/* // quantity */}
            <div className=" mt-4">
              <h1 className="text-[14px] text-[#666] font-bold">Quantity</h1>
              <div className="flex mt-2 justify-around px-2 w-[10rem]  border rounded-[30px] border-solid items-center">
                <button
                  className=" text-[22px] font-thin text-black"
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
                <span className="border-r h-[50px]"></span>
                <input
                  className=" appearance-none font-[400] text-[18px]  border-1 focus:outline-none rounded-lg w-[2rem] text-center"
                  type="number"
                  value={isNaN(cartCount) ? 0 : cartCount}
                  readOnly
                />
                <span className="border-r h-[50px]"></span>
                <button
                  className="text-[22px] font-thin text-black"
                  onClick={() => decrementQuantity(product)}
                >
                  -
                </button>
              </div>
            </div>

            {/* // add to cart and pay now */}

            <div className="flex mt-6 text-center gap-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-[#a67a68] text-white md:text-[16px] text-[14px] font-bold py-3 md:px-4 px-10  rounded-[30px]  md:w-48  lg:w-64"
              >
                ADD TO CART
              </button>
              <button className="bg-black  text-white md:text-[16px] text-[14px] font-bold py-3 md:px-4 px-10 rounded-[30px]  md:w-48 lg:w-64">
                BUY IT NOW
              </button>
            </div>
            {/* // free delivery */}

            <div className="grid grid-cols-1 gap-[30px] p-[20px] gap-x-5 border mt-10 border-solid rounded-md md:grid-cols-1 lg:grid-cols-2 lg:gap-y-[30px] md:gap-[30px]">
              <div className="flex leading-[22px] items-center gap-3">
                <div>
                  <img src={Freedelivery} alt="" />
                </div>

                <div>
                  <h1 className="text-[16px] font-semibold">Free delivery</h1>
                  <p>Loreum ispoum dummy</p>
                </div>
              </div>

              <div className="flex  leading-[22px] items-center gap-3">
                <div>
                  <img src={Bigsavings} alt="" />
                </div>

                <div>
                  <h1 className="text-[16px] font-semibold">Big Savings</h1>
                  <p>Loreum ispoum dummy</p>
                </div>
              </div>

              <div className="flex leading-[22px] items-center gap-3">
                <div>
                  <img src={Customersupport} alt="" />
                </div>

                <div>
                  <h1 className="text-[16px] font-semibold">
                    Customer Support
                  </h1>
                  <p>Loreum ispoum dummy</p>
                </div>
              </div>

              <div className="flex leading-[22px] items-center gap-3">
                <div>
                  <img src={Giftvoucher} alt="" />
                </div>

                <div>
                  <h1 className="text-[16px] font-semibold">Gift Voucher</h1>
                  <p>Loreum ispoum dummy</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4 mb-4 w-[400px]">
              <div>
                <img src={Icon1} className="w-[200px]" alt="note" />
              </div>
              <div>
                <img src={Icon2} className="w-[200px]" alt="note" />
              </div>
              <div>
                <img src={Icon3} className="w-[200px]" alt="note" />
              </div>
              <div>
                <img src={Icon4} className="w-[200px]" alt="note" />
              </div>
            </div>
          </div>
        </div>

        {/* description, revies and shippingreturns */}

        <div className="border mt-12 mb-8 border-solid">
          <ul className="text-center flex justify-center gap-8">
            <li
              onClick={showDescription}
              className={` bg-black text-white text-uppercase font-semibold px-4 py-2 ${
                selected === "description"
                  ? "text-white bg-black transition delay-150 duration-300 ease-in-out"
                  : "hover:bg-gray-400 group-hover:text-white"
              }`}
            >
              Description
            </li>
            <li
              onClick={showReviews}
              className={` bg-[#f5f5f5] text-black  text-uppercase font-semibold px-4 py-2 ${
                selected === "reviews"
                  ? "text-white bg-black  transition delay-150 duration-300 ease-in-out"
                  : "hover:bg-gray-400 group-hover:text-white"
              }`}
            >
              Reviews
            </li>
          </ul>
          {descriptionVisible && (
            <div className="p-[15px] text-[14px]">
              <p>
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit. Accessorize with a
                straw hat and you're ready for summer!
              </p>
              <h1 className="mt-4 font-semibold text-[16px]">
                Sample Unordered List
              </h1>
              <ul className="list-disc mt-4 leading-[30px] px-4">
                <li>Comodous in tempor ullamcorper miaculis</li>
                <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                <li>Divamus sit amet purus justo.</li>
                <li>
                  Proin molestie egestas orci ac suscipit risus posuere loremou.
                </li>
              </ul>

              <h1 className="mt-4 font-semibold text-[16px]">
                Sample Ordered List
              </h1>
              <ul className="list-decimal mt-4 leading-[30px] px-4">
                <li>Comodous in tempor ullamcorper miaculis</li>
                <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                <li>Divamus sit amet purus justo.</li>
                <li>
                  Proin molestie egestas orci ac suscipit risus posuere loremou.
                </li>
              </ul>

              <h1 className="mt-4 font-semibold text-[16px]">
                Sample Paragraph Text
              </h1>
              <p className="mt-2 mb-8">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit. Accessorize with a
                straw hat and you're ready for summer!Faded short sleeves
                t-shirt with high neckline. Soft and stretchy material for a
                comfortable fit. Accessorize with a straw hat and you're ready
                for summe!
              </p>
            </div>
          )}

          {reviewsVisible && (
            <div className="p-[15px]">
              <Reviewsection />
            </div>
          )}
        </div>

        <div className="text-center mb-8">
          <h1 className="lg:text-[40px] mt-6 md:text-[32px] font-semibold text-[30px]">
            Related Products .
          </h1>
          <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] ">
            {relatedproducts.map((relatedProduct, index) => {
              return (
                <div key={index} className="w-full max-w-[290px] text-center">
                  <div className="mb-2 relative className='border hover:border-accent rounded-[18px] w-full max-w-[285px] max-h-[292px] flex items-center justify-center  transition">
                    <div className="parent  hidden md:block">
                      <a href={`/product/${product._id}`}>
                        <img
                          src={relatedProduct.image.type}
                          className="mt-4 md:md-0"
                          alt="images"
                        />
                      </a>
                      <Link to="/collections">
                        <button className="px-8  py-2 bg-[#a67a68] text-[15px] uppercase rounded-full text-white font-semibold  related-product">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                    {/* // mobile design */}
                    <div className=" md:hidden block">
                      <a href={`/product/${product._id}`}>
                        <img
                          src={relatedProduct.image.type}
                          className="mt-4 md:md-0"
                          alt="images"
                        />
                      </a>
                      <Link to="/collections">
                        <button className="px-3 py-2   md:hidden block  bg-[#a67a68] text-[12px] uppercase rounded-full text-white font-semibold top-[17.5rem]  related-product">
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
                      {/* <Rating value={product.rating} /> */}
                    </div>
                  </div>
                  <div className="md:text-[16px] text-[14px] font-[600]">
                    <a href={`/product/${product._id}`}>
                      <h1>{relatedProduct.title}</h1>
                    </a>
                  </div>
                  <div className="flex gap-x-1 md:mb-0 mb-14 justify-center font-[600] text-[14px] md:text-[16px]">
                    <div className="line-through text-accent">
                      {relatedProduct.oldprice}
                    </div>
                    <div>{relatedProduct.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductScreen;
