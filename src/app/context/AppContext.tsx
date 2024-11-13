'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ClothingItem {
  image: string;
  brand: string;
  price: number;
  stock: number;
}


type AppContextType = {
  cartItems: ClothingItem[];
  addItemToCart: (item: ClothingItem) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ClothingItem[]>([]);

  const addItemToCart = (item: ClothingItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <AppContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};