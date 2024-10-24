import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/index.module.scss";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Frases para el ciclo de animación del h1
  const textArray = [
    "SOMOS",
    "ENFERMOS",
    "DESQUISIADOS",
    "PARANOICOS",
    "X EL SK8",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval); 
  }, [textArray.length]);

  return (
    <>
      <motion.h1 className={styles.title}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTextIndex} 
            initial={{ x: "100%", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: "-100%", opacity: 0 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }} 
          >
            {textArray[currentTextIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      <header className={styles.header}>
        <picture>
          <Image
            src="https://i.ibb.co/FbPVBNz/1000118515.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </picture>

        <input type="text" placeholder="Filtrar... sk8 street" />

        <div onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </header>

      <motion.nav
        className={styles.menu}
        initial={{ top: "80px", height: 0 }}
        animate={{
          top: menuOpen ? "0px" : "80px",
          height: menuOpen ? "100vh" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul>
          <li>
            <Link href="#home">Inicio</Link>
          </li>
          <li>
            <Link href="#about">Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="#services">Servicios</Link>
          </li>
          <li>
            <Link href="#contact">Contacto</Link>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Header;