import { useCartStore } from "../../store";

function Cart() {
  const { products } = useCartStore();

  return (
    <div>
      <h2>Cart Items:</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.prodName}</p>
          <p>- Quantity: {product.quantity}</p>
          <img alt={product.prodName} src={product.prodImage}/>
        </div>
      ))}
    </div>
  );
}
export default Cart

