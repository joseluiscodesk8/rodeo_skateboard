import Image from "next/image";

import Title from "./Title";
import clothesData from "../data/clothes.json"; 
import styles from "../styles/index.module.scss"; 

interface ClothingItem {
  image: string;
  brand: string;
  price: number;
  stock: number;
}

const ClothesList: React.FC = () => {
  const clothes: ClothingItem[] = clothesData.clothes;

  return (
    <>
    <Title title="CAMISETAS"/>
      <main className={styles.clothesList}>
      {clothes.map((item, index) => (
        <div key={index} className={styles.clothingItem}>
          <Image src={item.image} width={250} height={250} alt={item.brand} priority />
          <h3>{item.brand}</h3>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Stock: {item.stock}</p>
        </div>
      ))}
    </main>
    </>
  );
};

export default ClothesList;