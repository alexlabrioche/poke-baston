import React, { createContext, useEffect, useReducer } from 'react';
import { LOCAL_STORAGE_KEY } from '../helpers/config';
import useLocalStorage from '../hooks/uselocalStorage';
import favoriteReducer from '../reducers/Favorite.reducer';

export const FavoritesCtx = createContext();

// export const DispatchFavoritesCtx = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, dispatchFavs] = useLocalStorage(LOCAL_STORAGE_KEY, [], favoriteReducer);
  // console.info('favoritesContext', favorites);
  useEffect(() => {}, [favorites]);
  return (
    <FavoritesCtx.Provider value={{ favorites, dispatchFavs }}>{children}</FavoritesCtx.Provider>
  );
}
