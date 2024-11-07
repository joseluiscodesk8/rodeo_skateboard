'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  stateValue: string;
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [stateValue, setStateValue] = useState("initial value");

  return (
    <AppContext.Provider value={{ stateValue, setStateValue }}>
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
