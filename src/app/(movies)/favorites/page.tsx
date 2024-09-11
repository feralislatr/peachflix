'use client';
import { useEffect, useState } from 'react';
import MovieList from '@/components/MovieList';
import useFavorites from '@/hooks/use-favorites';
import { MovieData } from '@/types/MovieData';
import getMovieDetails from '@/utils/get-movie-details';

/** Render favorites page */
export default function FavoritesPage() {
  // load favorites & retrieve details from API
  const { getFavoriteList } = useFavorites();
  const movieIdList = getFavoriteList();
  const [movieList, setMovieList] = useState<MovieData[]>([]);
  useEffect(() => {
    Promise.all(movieIdList.map(id => getMovieDetails(id))).then(res => setMovieList(res));
  }, [movieIdList]);

  return (
    <>
      <h3>Favorites</h3>
      {movieList.length === 0 || movieIdList.length === 0 ? (
        <p>No favorites added</p>
      ) : (
        <MovieList movies={movieList} posterSize="small" />
      )}
    </>
  );
}
