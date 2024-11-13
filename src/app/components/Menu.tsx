import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useAppContext } from "../context/AppContext"; // Import the context
import styles from "../styles/index.module.scss";

interface TitleProps {
  title: string[];
}

const Menu: React.FC<TitleProps> = ({ title }) => {
  const { cartItems } = useAppContext(); // Get cartItems from context
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Cycle through words every 2.5 seconds
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % title.length);
    }, 2500);

    return () => clearInterval(wordInterval);
  }, [title.length]);

  // Animation variants for the sliding carousel effect
  const wordAnimation = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  // Animation for menu visibility (enter and exit)
  const menuAnimation = {
    hidden: { opacity: 0, y: "-100%" }, // Hidden state (above the screen)
    visible: { opacity: 1, y: "0%" }, // Visible state (normal position)
    exit: { opacity: 0, y: "100%" }, // Exit state (below the screen)
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0, y: "-100%" },
          visible: { opacity: 1, y: "0%" },
          exit: { opacity: 0, y: "100%" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Title Section */}
        <h1 className={styles.titulo}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWordIndex}
              className={styles.word}
              variants={wordAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {title[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Menu and Cart Section */}
        <motion.section
          className={styles.clothes}
          variants={menuAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link href="/cart">
            <div className={styles.cartIconContainer}>
              <FiShoppingCart className={styles.carIcon} />
              {cartItems.length > 0 && (
                <span className={styles.cartCount}>{cartItems.length}</span>
              )}
            </div>
          </Link>
          <input type="text" placeholder="Search..." />
          <button onClick={toggleMenu} className={styles.menuToggle}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.section>

        {/* Menu Links Section */}
        <motion.nav className={styles.menuCategories}>
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
        </motion.nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
