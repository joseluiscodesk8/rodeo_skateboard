'use client'

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicLogo = dynamic(() => import('../components/Logo'));
const DynamicHeader = dynamic(() => import('../components/Menu'));
const DynamicSlider = dynamic(() => import('../components/Slider'));
const DynamicSection = dynamic(() => import('../components/Section'));
const DynamicBegon = dynamic(() => import('../components/Begon'));
const DynamicFooter = dynamic(() => import('../components/Footer'));

export default function Home() {
  const [isLogoAnimationComplete, setIsLogoAnimationComplete] = useState(false);

  useEffect(() => {
    const lastAnimationTime = localStorage.getItem("lastAnimationTime");
    const currentTime = new Date().getTime();

    // Check if the animation has already been shown in the past 24 hours
    if (lastAnimationTime && currentTime - parseInt(lastAnimationTime) < 24 * 60 * 60 * 1000) {
      setIsLogoAnimationComplete(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsLogoAnimationComplete(true);
      localStorage.setItem("lastAnimationTime", new Date().getTime().toString());
    }, 2000); 
  };

  return (
    <>
      {isLogoAnimationComplete ? (
          <div>
            <DynamicHeader title={["SOMOS", "ENFERMOS", "DESQUISIADOS", "PARANOICOS", "X EL SK8"]} />
            <DynamicSlider />
            <DynamicSection /> 
            <DynamicBegon />
            <DynamicFooter />
          </div>
      ) : (
          <DynamicLogo onAnimationComplete={handleAnimationComplete} />
      )}
    </>
  );
}
