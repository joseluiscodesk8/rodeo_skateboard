'use client'

import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicLogo = dynamic(() => import('../components/Logo'));
const DynamicHeader = dynamic(() => import('../components/Header'));
const DynamicSlider = dynamic(() => import('../components/Slider'));
const DynamicSection = dynamic(() => import('../components/Section'));
const DynamicBegon = dynamic(() => import('../components/Begon'));
const DynamicFooter = dynamic(() => import('../components/Footer'));

export default function Home() {
  const [isLogoAnimationComplete, setIsLogoAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsLogoAnimationComplete(true);
    }, 2000); 
  };

  return (
    <>
      {isLogoAnimationComplete && (
          <div>
            <DynamicHeader />
            <DynamicSlider />
            <DynamicSection />
            <DynamicBegon />
            <DynamicFooter />
          </div>
      )}
      <DynamicLogo onAnimationComplete={handleAnimationComplete} />
    </>
  );
}
