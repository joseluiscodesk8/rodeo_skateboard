"use client";

import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../components/Menu"));
const DynamicClothes = dynamic(() => import("../components/ClothesList"));
const DynamicFooter = dynamic(() => import("../components/Footer"));

const Ropa: NextPage = () => {
  return (
    <>
      <DynamicHeader title={["CAMISETAS", "SKATE OR DIE"]} />
      <DynamicClothes />
      <DynamicFooter />
    </>
  );
};

export default Ropa;