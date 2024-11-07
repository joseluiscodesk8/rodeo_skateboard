import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/index.module.scss";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <h1 className={styles.titulo}>{title}</h1>
      <div className={styles.clothes}>
        <FaSearch />
        <input type="text" placeholder="Search..." />
        <button onClick={toggleMenu} className={styles.menuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

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
