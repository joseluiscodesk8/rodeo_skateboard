import dynamic from "next/dynamic";

const DynamicClothes = dynamic(() => import('../components/ClothesList'));

const Ropa: React.FC = () => {
    return <DynamicClothes />
}

export default Ropa;