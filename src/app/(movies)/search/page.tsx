import MovieList from '@/components/MovieList';
import Pagination from '@/components/Pagination';
import { MovieDataSearchResult } from '@/types/MovieData';
import getMovies from '@/utils/get-movies';

type Props = {
  searchParams: {
    s: string;
    page?: string;
  };
};

const ERROR_TEXT = 'Could not find Movie. Please try again.';

export default async function SearchPage({ searchParams }: Props) {
  const movieResult: MovieDataSearchResult = await getMovies(searchParams);

  return (
    <div>
      {!movieResult || movieResult.Error ? (
        ERROR_TEXT
      ) : (
        <>
          Search Results for "{searchParams.s}"
          <MovieList movies={movieResult.Search} />
          <Pagination totalResults={Number(movieResult?.totalResults)} />
        </>
      )}
    </div>
  );
}
