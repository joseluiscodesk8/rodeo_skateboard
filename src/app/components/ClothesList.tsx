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
    <div className={styles.clothesList}>
      {clothes.map((item, index) => (
        <div key={index} className={styles.clothingItem}>
          <img src={item.image} alt={item.brand} />
          <h3>{item.brand}</h3>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Stock: {item.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ClothesList;