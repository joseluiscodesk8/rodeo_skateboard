'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/index.module.scss";

interface LogoProps {
  onAnimationComplete: () => void;
}

const Logo: React.FC<LogoProps> = ({ onAnimationComplete }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const lastAnimationTime = localStorage.getItem("lastAnimationTime");
    const currentTime = new Date().getTime();

    if (!lastAnimationTime || currentTime - parseInt(lastAnimationTime) > 24 * 60 * 60 * 1000) {
      setShouldAnimate(true);
      localStorage.setItem("lastAnimationTime", currentTime.toString());
    } else {
      onAnimationComplete();
      setIsHidden(true);
    }
  }, [onAnimationComplete]);

  return (
    <div className={isHidden ? styles.hidden : styles.LogoContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={shouldAnimate ? { opacity: 1, scale: 1, rotate: 360 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setShouldAnimate(false);
            onAnimationComplete();
            setIsHidden(true);
          }, 1000);
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
