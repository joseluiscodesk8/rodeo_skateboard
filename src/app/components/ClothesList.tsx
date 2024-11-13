import Image from "next/image";
import Title from "./Title";
import clothesData from "../data/clothes.json";
import styles from "../styles/index.module.scss";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

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
      <Title title={["CAMISETAS", "SKATE OR DIE"]} />
      <main className={styles.clothesList}>
        {clothes.map((item, index) => (
          <div key={index} className={styles.clothingItem}>
            <Image src={item.image} width={250} height={250} alt={item.brand} priority />
            <h3>{item.brand}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Stock: {item.stock}</p>
            {/* Button changes text if item has been added */}
            <button onClick={() => handleAddToCart(item, index)} disabled={addedItems.has(index)}>
              {addedItems.has(index) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </main>
    </>
  );
};

export default ClothesList;