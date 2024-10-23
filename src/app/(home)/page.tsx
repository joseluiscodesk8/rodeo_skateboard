'use client'

import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicLogo = dynamic(() => import('../components/Logo'));

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
        <h1>SOMOS ENFERMOS, DESQUICIADOS, PARANOICOS X EL SK8</h1>
      )}
      <DynamicLogo onAnimationComplete={handleAnimationComplete} />
    </>
  );
}
