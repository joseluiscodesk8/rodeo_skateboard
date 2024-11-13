import Image from "next/image";
import styles from "../styles/index.module.scss";
import { motion } from "framer-motion";

const Begon: React.FC = () => {
  // Animación de entrada y salida
  const articleAnimation = {
    initial: { opacity: 0, y: 50 },  // Empieza invisible y se mueve hacia abajo
    animate: { opacity: 1, y: 0 },   // Se anima a opacidad 1 y a su posición original
    exit: { opacity: 0, y: -50 },    // Se desvanece y se mueve hacia arriba al salir
    transition: { duration: 0.5 },    // Duración de la animación
  };

  return (
    <motion.article
      className={styles.begon}
      initial={articleAnimation.initial}
      animate={articleAnimation.animate}
      exit={articleAnimation.exit}
      transition={articleAnimation.transition}
    >
      <Image
        src={"https://i.ibb.co/FbPVBNz/1000118515.png"}
        width={250}
        height={250}
        alt="rodeo logo"
      />
      <h2>PATINANDO SIN RODEOS</h2>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
    </motion.article>
  );
};

export default Begon;
