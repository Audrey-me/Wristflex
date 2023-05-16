import { useCartStore } from "../../store";

function Cart() {
  const {products, removeFromCart, clearCart,  } = useCartStore();

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
    <div>
      <h2>Cart Items:</h2>
      {products.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>

          {products.map((product) => (
            <div key={product._id}>
              <p>{product.prodName}</p>
              <p>Quantity: {product.quantity}</p>
              <img alt={product.prodName} src={product.prodImage}/>
              <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
            </div>
          ))}
        </ul>
      )}
      <p>Total: ${calculateSubtotal()}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}
export default Cart

