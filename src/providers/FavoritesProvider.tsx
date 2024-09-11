'use client';
import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';

type FavoritesContextProps = {
  favoriteList: string[];
  setFavorite: (key: string) => void;
  isFavorite: (key: string) => boolean;
  getFavoriteList: () => string[];
  clearFavorites: () => void;
};

export const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  // load favorites from session storage
  const [favoriteList, setFavoriteList] = useState<string[]>(() => {
    if (typeof sessionStorage === 'undefined') return [];
    const storedFavorites = sessionStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // update session storage whenever the favoriteList changes
  useEffect(() => {
    sessionStorage.setItem('favorites', JSON.stringify(favoriteList));
  }, [favoriteList]);

  const setFavorite = (key: string) => {
    setFavoriteList(prevFavorites => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(key)) {
        updatedFavorites.delete(key);
      } else {
        updatedFavorites.add(key);
      }
      return Array.from(updatedFavorites);
    });
  };

  const isFavorite = (key: string) => {
    return favoriteList.includes(key);
  };

  const getFavoriteList = () => {
    return favoriteList;
  };

  const clearFavorites = () => {
    setFavoriteList([]);
    sessionStorage.clear();
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteList, setFavorite, isFavorite, getFavoriteList, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
