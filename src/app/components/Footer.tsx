import styles from "../styles/index.module.scss";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Importar Framer Motion

const Footer: React.FC = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }} // Inicia con opacidad 0
      animate={{ opacity: 1 }} // Se anima a opacidad 1
      exit={{ opacity: 0 }}    // Se desvanece a 0 cuando sale
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      {/* Mapa */}
      <motion.div
        className={styles.mapContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8080730922236!2d-75.5829927!3d6.2053149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46827857a032a7%3A0x53df4de7393e8582!2sRodeo%20Skateboard!5e0!3m2!1ses!2sco!4v1698533059462!5m2!1ses!2sco"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Información de ubicación */}
      <motion.div
        className={styles.locationInfo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <FaMapMarkerAlt className={styles.locationIcon} />
        <p>Calle 2 sur#50f-51</p>
      </motion.div>

      {/* Redes sociales */}
      <motion.div
        className={styles.socialMedia}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </motion.div>

      {/* Lista de marcas */}
      <motion.div
        className={styles.brands}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h4>Nuestras Marcas</h4>
        <ul>
          <li>Marca 1</li>
          <li>Marca 2</li>
          <li>Marca 3</li>
          <li>Marca 4</li>
          <li>Marca 5</li>
          <li>Marca 6</li>
          <li>Marca 7</li>
          <li>Marca 8</li>
          <li>Marca 9</li>
          <li>Marca 10</li>
        </ul>
      </motion.div>

      <motion.div
        className={styles.sk8}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        PATINANDO TODOS LOS MARDITOS DIAS
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
