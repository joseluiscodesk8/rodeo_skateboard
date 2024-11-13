'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ClothingItem {
  image: string;
  brand: string;
  price: number;
  stock: number;
}

interface AppContextType {
  cartItems: ClothingItem[];
  addItemToCart: (item: ClothingItem) => void;
  removeItemFromCart: (index: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ClothingItem[]>([]);

  // Cargar cartItems desde localStorage al cargar la aplicación
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Sincronizar el cartItems en localStorage cada vez que se actualice
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); // Si el carrito está vacío, eliminamos la clave
    }
  }, [cartItems]);

  const addItemToCart = (item: ClothingItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <AppContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
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
