import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Framer Motion

import styles from "../styles/index.module.scss";

const Slider: React.FC = () => {
  return (
    <main className={styles.Main}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // Use 1 for full-slide autoplay
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <AnimatePresence> {/* Envolvemos el Swiper con AnimatePresence */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0 }} // Inicialmente está oculto
              animate={{ opacity: 1 }}  // Se muestra con opacidad 1
              exit={{ opacity: 0 }}     // Cuando se va, desaparece con opacidad 0
              transition={{ duration: 1 }} // Duración de la transición
            >
              <Image src={"/photo1.avif"} width={450} height={450} alt="sk8" priority />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={"/photo2.avif"} width={450} height={450} alt="sk8" priority />
            </motion.div>
          </SwiperSlide>
          {/* Agrega más slides según sea necesario */}
        </AnimatePresence>
      </Swiper>
    </main>
  );
};

export default Slider;