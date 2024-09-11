import Image from 'next/image';
import Link from 'next/link';
import { MovieData } from '@/types/MovieData';
import styles from './styles.module.css';

type MovieListProps = {
  movies: MovieData[];
  posterSize?: 'small' | 'large';
  pagination?: boolean;
};

const posterSizeMap: Record<string, number[]> = {
  small: [166, 248],
  large: [235, 352],
};

const renderMoviePoster = (movie: MovieData, posterSize: string) => {
  if (URL.canParse(movie.Poster)) {
    return (
      <Image
        className={styles['movie-poster']}
        key={`movie-poster-${movie.imdbID}`}
        src={movie.Poster}
        alt={movie.Title}
        height={posterSizeMap[posterSize][1]}
        width={posterSizeMap[posterSize][0]}
        priority
      />
    );
  }
  return (
    <div
      key={`movie-poster-${movie.imdbID}`}
      className={styles['movie-placeholder']}
      style={{ height: 352, width: posterSizeMap[posterSize][0] }}
    >
      <h4>{movie.Title}</h4>
    </div>
  );
};

const renderMovieList = (movies: MovieData[], posterSize: string) => {
  return movies.map(movie => (
    <Link key={`movie-link-${movie.imdbID}`} href={`/movie/${movie.imdbID}`}>
      {renderMoviePoster(movie, posterSize)}
    </Link>
  ));
};

/** Render List of Movie Posters */
export default function MovieList({ movies, posterSize = 'large' }: MovieListProps) {
  if (!movies) return null;

  return (
    <div className={styles['movie-list-container']}>{renderMovieList(movies, posterSize)}</div>
  );
}
