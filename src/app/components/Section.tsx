import styles from "../styles/index.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Section: React.FC = () => {
  // Define a simple click animation
  const clickAnimation = {
    rotateX: 520,
    transition: { duration: 0.5 },
  };

  return (
    <div className={styles.street}>
      <motion.div whileTap={clickAnimation}>
        <Link href="/ropa">
          <motion.h2 whileHover={{ scale: 1.1 }}>Ropa</motion.h2>
        </Link>
      </motion.div>
      
      <motion.div whileTap={clickAnimation}>
        <Link href="/tablas">
          <motion.h2 whileHover={{ scale: 1.1 }}>Tablas</motion.h2>
        </Link>
      </motion.div>
      
      <motion.div whileTap={clickAnimation}>
        <Link href="/zapatos">
          <motion.h2 whileHover={{ scale: 1.1 }}>Zapatos</motion.h2>
        </Link>
      </motion.div>
      
      <motion.div whileTap={clickAnimation}>
        <Link href="/accesorios">
          <motion.h2 whileHover={{ scale: 1.1 }}>Accesorios</motion.h2>
        </Link>
      </motion.div>
    </div>
  );
};

export default Section;