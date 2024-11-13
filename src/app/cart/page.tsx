'use client'

import { NextPage } from 'next';
import dynamic from 'next/dynamic';


const DynamicHeader = dynamic(() => import('../components/Title'));
const DynamicShopping = dynamic(() => import('../components/CartShopping'));

const Cart: NextPage = () => {
    return (
        <>
        <DynamicHeader title={["cart"]}/>
        <DynamicShopping />
        </>
    )
};

export default Cart;
