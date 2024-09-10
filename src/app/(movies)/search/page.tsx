import MovieList from '@/components/MovieList';
import Pagination from '@/components/Pagination';
import { MovieDataSearchResult } from '@/types/MovieData';
import getMovies from '@/utils/get-movies';

type SearchPageProps = {
  searchParams: {
    s: string;
    page?: string;
  };
};

const ERROR_TEXT = 'Could not find Movie. Please try again.';

/** Render search results page with pagination */
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const movieResult: MovieDataSearchResult = await getMovies(searchParams);

  return (
    <div>
      {!movieResult || movieResult.Error ? (
        ERROR_TEXT
      ) : (
        <>
          <h3>Search Results for "{searchParams.s}"</h3>
          <MovieList movies={movieResult.Search} />
          <Pagination totalResults={Number(movieResult?.totalResults)} />
        </>
      )}
    </div>
  );
}
