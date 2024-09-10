import getMovieDetails from '@/utils/get-movie-details';
import MovieDetails from '@/components/MovieDetails';
import { MovieDetail } from '@/types/MovieData';

export default async function MovieDetailDialog({ params }: { params: { id: string } }) {
  const movie: MovieDetail = await getMovieDetails(params.id);
  return <MovieDetails movie={movie} />;
}
