'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/index.module.scss"; // Importa los estilos de Sass

interface LogoProps {
  onAnimationComplete: () => void; // Prop to notify when animation is complete
}

const Logo: React.FC<LogoProps> = ({ onAnimationComplete }) => {
  const [shouldAnimate, setShouldAnimate] = useState(true); // Se mantiene animado al cargar la página

  return (
    <div className={styles.logoContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }} // Posición inicial (pequeño y sin opacidad)
        animate={shouldAnimate ? { opacity: 1, scale: 1, rotate: 360 } : {}} // Animación de entrada girando y escalando
        transition={{ duration: 2, ease: "easeInOut" }} // Duración de la animación de giro y escala
        onAnimationComplete={() => {
          setTimeout(() => {
            setShouldAnimate(false); // Desaparecer después de detenerse
            onAnimationComplete(); // Notify parent that animation is complete
          }, 1000); // Esperar 1 segundo antes de desaparecer
        }}
      >
        <motion.picture
          initial={{ opacity: 1 }} // Mantener visible después de la animación
          animate={{ opacity: shouldAnimate ? 0 : 1 }} // Desvanecerse al terminar
          transition={{ delay: 3, duration: 1 }} // Desaparecer después de 3 segundos
        >
          <Image
            src={"https://i.ibb.co/FbPVBNz/1000118515.png"}
            width={450}
            height={450}
            alt="rodeo logo"
          />
        </motion.picture>
      </motion.div>
    </div>
  );
};

export default Logo;
