'use client';
import React, { createContext, useContext } from 'react';

interface LandingContextType {
  isLockedMode: boolean;
}

const LandingContext = createContext<LandingContextType>({ isLockedMode: false });

export const useLandingContext = () => useContext(LandingContext);

export const LandingProvider = ({ children, isLockedMode = false }: { children: React.ReactNode, isLockedMode?: boolean }) => {
  return (
    <LandingContext.Provider value={{ isLockedMode }}>
      {children}
    </LandingContext.Provider>
  );
};
