import React from 'react';
import { LanguageProvider } from '../../contexts/Language.context';
import { ThemeProvider } from '../../contexts/Theme.context';
import { FavoritesProvider } from '../../contexts/Favorites.context';
import AppComponent from './App.component';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <AppComponent />
        </FavoritesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
