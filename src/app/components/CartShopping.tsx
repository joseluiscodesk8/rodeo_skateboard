import { useAppContext } from "../context/AppContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Framer Motion

const CartShopping: React.FC = () => {
  const { cartItems, removeItemFromCart } = useAppContext();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          <AnimatePresence> {/* Envolvemos la lista con AnimatePresence */}
            {cartItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }} // Inicialmente opaco
                animate={{ opacity: 1 }}  // Se vuelve completamente visible
                exit={{ opacity: 0 }}     // Desaparece con opacidad 0
                transition={{ duration: 0.5 }} // Duración de la animación
                style={{ zIndex: -10 }}
              >
                <Image src={item.image} width={50} height={50} alt={item.brand} />
                <p>{item.brand}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button onClick={() => removeItemFromCart(index)}>Remove</button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default CartShopping;
