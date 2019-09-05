import React, { createContext, useState } from 'react';

export const LanguageCtx = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('FR');
  const changeLanguage = (e) => setLanguage(e.target.value);
  return (
    <LanguageCtx.Provider value={{ language, changeLanguage }}>{children}</LanguageCtx.Provider>
  );
}
