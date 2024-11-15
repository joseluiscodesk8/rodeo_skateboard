import Image from "next/image";
import clothesData from "../data/clothes.json";
import styles from "../styles/index.module.scss";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { motion } from "framer-motion"; // Importamos Framer Motion

interface ClothingItem {
  image: string;
  brand: string;
  price: number;
  stock: number;
}

const ClothesList: React.FC = () => {
  const { addItemToCart } = useAppContext();
  const clothes: ClothingItem[] = clothesData.clothes;
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set()); // Track added items by index

  const handleAddToCart = (item: ClothingItem, index: number) => {
    if (!addedItems.has(index)) {
      addItemToCart(item);
      setAddedItems(new Set(addedItems).add(index)); // Update the set to include the added item
      console.log(`Added ${item.brand} to cart.`);
    }
  };

  return (
    <>
      <main className={styles.clothesList}>
        {clothes.map((item, index) => (
          <motion.div
            key={index}
            className={styles.clothingItem}
            initial={{ opacity: 0 }} // Inicia con opacidad 0
            animate={{ opacity: 1 }} // Animación hacia opacidad 1
            exit={{ opacity: 0 }}    // Se desvanece hacia opacidad 0 al eliminar
            transition={{ duration: 0.5 }} // Duración de la animación
          >
            <Image src={item.image} width={250} height={250} alt={item.brand} priority />
            <h3>{item.brand}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Stock: {item.stock}</p>
            {/* Button changes text if item has been added */}
            <button onClick={() => handleAddToCart(item, index)} disabled={addedItems.has(index)}>
              {addedItems.has(index) ? "Added to Cart" : "Add to Cart"}
            </button>
          </motion.div>
        ))}
      </main>
    </>
  );
};

export default ClothesList;