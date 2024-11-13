import { useAppContext } from "../context/AppContext";
import Image from "next/image";

const CartShopping: React.FC = () => {
  const { cartItems } = useAppContext();

  console.log("Current items in cart:", cartItems);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <Image src={item.image} width={50} height={50} alt={item.brand} />
              <p>{item.brand}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartShopping;

