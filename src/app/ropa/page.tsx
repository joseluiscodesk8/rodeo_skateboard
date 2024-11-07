'use client'

import dynamic from "next/dynamic";

const DynamicClothes = dynamic(() => import('../components/ClothesList'));
const DynamicFooter = dynamic(() => import('../components/Footer'));

const Ropa: React.FC = () => {
    return <>
        <DynamicClothes />
        <DynamicFooter />
    </>
}

export default Ropa;