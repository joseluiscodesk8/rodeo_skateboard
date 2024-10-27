import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import styles from "../styles/index.module.scss";

const Slider: React.FC = () => {
  return (
    <main className={styles.Main}>
        <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 
      }}
      loop={true} 
      modules={[EffectCoverflow, Autoplay]}
    >
      <SwiperSlide>
        <Image src={"/photo1.avif"} width={450} height={450} alt="sk8" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/photo2.avif"} width={450} height={450} alt="sk8" loading="lazy" />
      </SwiperSlide>
      
    </Swiper>
    </main>
  );
};

export default Slider;

