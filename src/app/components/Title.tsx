import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import styles from "../styles/index.module.scss";

interface TitleProps {
  title: string[];
}

const Title: React.FC<TitleProps> = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Cycle through words every 2.5 seconds
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % title.length);
    }, 2500); // Change the word every 2.5 seconds

    return () => clearInterval(wordInterval); // Clear interval on component unmount
  }, [title.length]);

  // Animation variants for the sliding carousel effect
  const wordAnimation = {
    hidden: { x: "100%", opacity: 0 }, // Word starts off-screen to the right
    visible: { x: 0, opacity: 1 }, // Word slides into the center
    exit: { x: "-100%", opacity: 0 }, // Word slides out to the left
  };

  return (
    <>
      <h1 className={styles.titulo}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex} // Ensure each word has a unique key
            className={styles.word}
            variants={wordAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
          >
            {title[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </h1>

      <section className={styles.clothes}>
        <Link href={"/cart"}>
          <FiShoppingCart className={styles.carIcon} />
        </Link>
        <input type="text" placeholder="Search..." />
        <button onClick={toggleMenu} className={styles.menuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </section>

      <nav className={styles.menuCategories}>
        <ul>
          <li className={`${styles.Li} ${menuOpen ? styles.menuOpen : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${styles.Li} ${menuOpen ? styles.menuOpen : ""}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${styles.Li} ${menuOpen ? styles.menuOpen : ""}`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`${styles.Li} ${menuOpen ? styles.menuOpen : ""}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Title;
