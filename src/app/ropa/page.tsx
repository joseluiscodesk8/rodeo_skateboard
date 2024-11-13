'use client'

import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicClothes = dynamic(() => import('../components/ClothesList'));
const DynamicFooter = dynamic(() => import('../components/Footer'));

const Ropa: NextPage = () => {
    return <>
        <DynamicClothes />
        <DynamicFooter />
    </>
}

export default Ropa;