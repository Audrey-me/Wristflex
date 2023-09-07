import { useCartStore } from "../../store";
import { Link } from "react-router-dom";

function Cart() {
  const { products, removeFromCart, clearCart, productIds } = useCartStore();

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    products.forEach((product) => {
      subtotal += product.prodPrice * product.quantity;
    });
    return subtotal;
  };

  return (
    <div
      className="w-[350px] px-3 py-2"
      style={{ maxHeight: "600px", overflowY: "scroll" }}
    >
      {products.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
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
                <div>
                  <button onClick={() => handleRemoveFromCart(product)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr className="w-full mt-2" />
      <div className="flex justify-between mt-2">
        <p className="text-[18px] font-bold">Total</p>
        <p className="text-[18px] font-bold">${calculateSubtotal()}.00</p>
      </div>

      <div className="flex gap-2 justify-center mt-2">
        <button
          onClick={handleClearCart}
          className="px-6 py-2 bg-[#a67a68] text-[15px] uppercase rounded-full text-white font-semibold"
        >
          Clear Cart
        </button>
        {products.length > 0 && (
          <Link to={`/checkout/${productIds}`}>
            <button className="px-6 py-2 bg-black text-[15px] uppercase rounded-full text-white font-semibold">
              Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Cart;
