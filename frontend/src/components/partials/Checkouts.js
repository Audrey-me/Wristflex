import React, { useState } from "react";
import { useCartStore } from "../../store";
import { PaystackButton } from "react-paystack";

const Checkouts = () => {
  const { products, clearCart } = useCartStore();

  const calculateSubtotal = () => {
    let subtotal = 0;
    products.forEach((product) => {
      subtotal += product.prodPrice * product.quantity;
    });
    return subtotal;
  };


  const publicKey = "pk_test_d11e76b053f30b9fd8206b849070248e6888b81c";
  const amount = calculateSubtotal() * 100;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
  };


  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: ({ reference }, product) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      clearCart();
      resetForm();
      window.location.href = "https://paystack.com";
      
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    
  };

  return (
    <div className="px-4">
      <div className="flex md:flex-row flex-col w-full justify-evenly">
        <div className="py-20">
          <h1 className="text-[25px] font-bold mb-4">
            Wristflex Checkout form
          </h1>
          <div className="leading-[3rem]">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                className="w-full focus:outline-none border border-solid px-2 py-1"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                className="w-full focus:outline-none border border-solid px-2 py-1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                className="w-full focus:outline-none border border-solid px-2 py-1"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton
              className="bg-[#a67a68] text-white md:text-[16px] text-[14px] font-bold py-2 md:px-4 px-10 mt-4  md:w-48  lg:w-64"
              {...componentProps}
            />
          </div>
        </div>
        <div className="md:border-l-2 md:border-secondary md:h-screen md:border-solid md:px-24">
          <div className="py-20">
            {products.map((product) => (
              <div key={product._id}>
                <div className="flex items-start justify-between  mb-2 ">
                  <div className="flex items-start gap-3">
                    <div>
                      <img
                        alt={product.prodName}
                        className="w-[80px] border border-solid h-[80px]"
                        src={product.prodImage}
                      />
                    </div>
                    <div>
                      <p>{product.prodName}</p>
                      <p>
                        {product.quantity} X ${product.prodPrice}.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-2">
              <p className="text-[18px] font-bold">Total</p>
              <p className="text-[18px] font-bold">${calculateSubtotal()}.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkouts;
