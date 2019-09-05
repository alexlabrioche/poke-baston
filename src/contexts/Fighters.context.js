import React, { createContext, useEffect, useReducer } from 'react';
import FightersReducer from '../reducers/Fighters.reducer';

export const FightersCtx = createContext();

export function FightersProvider({ children }) {
  const [fighters, dispatchFighters] = useReducer(FightersReducer, []);
  useEffect(() => {}, [fighters]);
  return (
    <FightersCtx.Provider value={{ fighters, dispatchFighters }}>{children}</FightersCtx.Provider>
  );
}
