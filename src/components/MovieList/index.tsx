import Image from 'next/image';
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

const renderMovieList = (movies: MovieData[], posterWidth: string) => {
  return movies.map(movie => (
    <Image
      className={styles['movie-poster']}
      key={movie.imdbID}
      src={movie.Poster}
      alt={movie.Title}
      width={posterWidthMap[posterWidth]}
      height={352}
    />
  ));
};

/** Render List of Movie Posters; pagination optional */
export default function MovieList({
  movies,
  posterWidth = 'large',
  pagination = false,
}: MovieListProps) {
  if (!movies) return null;
  return (
    <div className={styles['movie-list-container']}>
      {renderMovieList(movies, posterWidth)}
      {pagination ? <div>pagination</div> : null}
    </div>
  );
}
