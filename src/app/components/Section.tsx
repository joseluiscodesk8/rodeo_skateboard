import styles from "../styles/index.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Section: React.FC = () => {
  // Define a simple click animation
  const clickAnimation = {
    rotateX: 520,
    transition: { duration: 0.5 },
  };

  // Animaciones de entrada y salida
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 }, // Empieza fuera de la vista (con opacidad 0)
    animate: { opacity: 1, y: 0 },   // Se anima hacia su posición final
    exit: { opacity: 0, y: -50 },    // Sale desvaneciéndose y moviéndose hacia arriba
    transition: { duration: 1 },    // Duración de las animaciones
  };

  return (
    <div className={styles.street}>
      {/* Animación de entrada y salida para cada sección */}
      <motion.div 
        whileTap={clickAnimation}
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        exit={sectionAnimation.exit}
        transition={sectionAnimation.transition}
      >
        <Link href="/ropa">
          <motion.h2 whileHover={{ scale: 1.1 }}>Ropa</motion.h2>
        </Link>
      </motion.div>
      
      <motion.div 
        whileTap={clickAnimation}
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        exit={sectionAnimation.exit}
        transition={sectionAnimation.transition}
      >
        <Link href="/tablas">
          <motion.h2 whileHover={{ scale: 1.1 }}>Tablas</motion.h2>
        </Link>
      </motion.div>
      
      <motion.div 
        whileTap={clickAnimation}
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        exit={sectionAnimation.exit}
        transition={sectionAnimation.transition}
      >
        <Link href="/zapatos">
          <motion.h2 whileHover={{ scale: 1.1 }}>Zapatos</motion.h2>
        </Link>
      </motion.div>
      
      <motion.div 
        whileTap={clickAnimation}
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        exit={sectionAnimation.exit}
        transition={sectionAnimation.transition}
      >
        <Link href="/accesorios">
          <motion.h2 whileHover={{ scale: 1.1 }}>Accesorios</motion.h2>
        </Link>
      </motion.div>
    </div>
  );
};

export default Section;
