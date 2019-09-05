import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';

export const ThemeCtx = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, toggleDark] = useToggle();
  return <ThemeCtx.Provider value={{ isDark, toggleDark }}>{children}</ThemeCtx.Provider>;
};
