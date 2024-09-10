import getMovieDetails from '@/utils/get-movie-details';
import MovieDetails from '@/components/MovieDetails';
import { MovieDetail } from '@/types/MovieData';

type MoviePageProps = {
  params: {
    id: string;
  };
};

/** Render static Movie details page */
export default async function MoviePage({ params }: MoviePageProps) {
  const movie: MovieDetail = await getMovieDetails(params.id);
  return <MovieDetails movie={movie} />;
}
