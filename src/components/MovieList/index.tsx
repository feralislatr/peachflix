import Image from 'next/image';
import Link from 'next/link';
import { MovieData } from '@/types/MovieData';
import styles from './styles.module.css';

type MovieListProps = {
  movies: MovieData[];
  posterWidth?: 'small' | 'large';
  pagination?: boolean;
};

const posterWidthMap: Record<string, number> = {
  small: 166,
  large: 235,
};

const renderMoviePoster = (movie: MovieData, posterWidth: string) => {
  if (URL.canParse(movie.Poster)) {
    return (
      <Image
        className={styles['movie-poster']}
        key={`movie-poster-${movie.imdbID}`}
        src={movie.Poster}
        alt={movie.Title}
        height={352}
        width={posterWidthMap[posterWidth]}
      />
    );
  }
  return (
    <div
      key={`movie-poster-${movie.imdbID}`}
      style={{ height: 352, width: posterWidthMap[posterWidth] }}
    >
      {movie.Title}
    </div>
  );
};

const renderMovieList = (movies: MovieData[], posterWidth: string) => {
  return movies.map(movie => (
    <Link key={`movie-link-${movie.imdbID}`} href={`/movie/${movie.imdbID}`}>
      {renderMoviePoster(movie, posterWidth)}
    </Link>
  ));
};

/** Render List of Movie Posters */
export default function MovieList({ movies, posterWidth = 'large' }: MovieListProps) {
  if (!movies) return null;

  return (
    <div className={styles['movie-list-container']}>{renderMovieList(movies, posterWidth)}</div>
  );
}
