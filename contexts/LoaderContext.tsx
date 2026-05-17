"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface LoaderContextType {
  done: boolean;
  markDone: () => void;
}

const LoaderContext = createContext<LoaderContextType>({ done: false, markDone: () => {} });

export const useLoader = () => useContext(LoaderContext);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const markDone = useCallback(() => setDone(true), []);
  return (
    <LoaderContext.Provider value={{ done, markDone }}>
      {children}
    </LoaderContext.Provider>
  );
}
