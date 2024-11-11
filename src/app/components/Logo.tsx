'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/index.module.scss"; // Importa los estilos de Sass

interface LogoProps {
  onAnimationComplete: () => void; // Prop to notify when animation is complete
}

const Logo: React.FC<LogoProps> = ({ onAnimationComplete }) => {
  const [shouldAnimate, setShouldAnimate] = useState(true); // Mantener animado al cargar la página
  const [isHidden, setIsHidden] = useState(false); // Estado para controlar la visibilidad

  return (
    <div className={isHidden ? styles.hidden : styles.LogoContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }} // Posición inicial
        animate={shouldAnimate ? { opacity: 1, scale: 1, rotate: 360 } : {}} // Animación de entrada
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setShouldAnimate(false); // Detener la animación
            onAnimationComplete(); // Notificar al padre
            setIsHidden(true); // Ocultar después de la animación
          }, 1000); // Esperar 1 segundo antes de ocultar
        }}
      >
        <motion.picture
          initial={{ opacity: 1 }}
          animate={{ opacity: shouldAnimate ? 0 : 1 }}
          transition={{ delay: 3, duration: 1 }}
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
