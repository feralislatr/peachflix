import MovieList from '@/components/MovieList';
import { MovieDataSearchResult } from '@/types/MovieData';
import getMovies from '@/utils/get-movies';

type Props = {
  searchParams: {
    s: string;
    page?: string;
  };
};

export default async function SearchPage({ searchParams }: Props) {
  const movies: MovieDataSearchResult = await getMovies(searchParams);
  return (
    <div>
      Search Results for {searchParams.s}
      <MovieList movies={movies.Search} />
    </div>
  );
}
