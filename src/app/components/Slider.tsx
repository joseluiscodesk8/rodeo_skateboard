import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
        <SwiperSlide>
          <Image src={"/photo1.avif"} width={450} height={450} alt="sk8" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/photo2.avif"} width={450} height={450} alt="sk8" loading="lazy" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </main>
  );
};

export default Slider;
