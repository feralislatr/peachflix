import { useContext } from 'react';
import { FavoritesContext } from '@/providers/FavoritesProvider';

export default function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('Missing FavoritesProvider');
  }
  return context;
}
