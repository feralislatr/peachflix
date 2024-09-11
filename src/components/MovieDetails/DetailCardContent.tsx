'use client';
import Link from 'next/link';
import { MovieDetail } from '@/types/MovieData';
import styles from './styles.module.css';
import useFavorites from '@/hooks/use-favorites';

type DetailCardContentProps = {
  movie: MovieDetail;
};

/** Render inner Movie Detail Card content */
export default function DetailCardContent({ movie }: DetailCardContentProps) {
  const { Title, Plot, Runtime, Rated, imdbRating, imdbID, Actors, Genre } = movie;

  /* update favorite status */
  const { isFavorite, setFavorite } = useFavorites();
  const isFavoriteMovie = isFavorite(imdbID);
  const favClassName = isFavoriteMovie ? styles['remove-favorite'] : styles['add-favorite'];

  /* handle runtime and rating display */
  const totalMinutes = Number(Runtime.split(' ')[0]);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = hours > 0 ? (totalMinutes - hours * 60) % 60 : totalMinutes % 60;
  const runtime = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  const rating =
    typeof Number(imdbRating) === 'number' ? `🍅 ${Number(imdbRating) * 10}%` : 'No Rating';

  return (
    <div className={styles['card-content']}>
      <h1>{Title}</h1>
      <p>{Plot}</p>
      <div className={styles.stats}>
        <div>{rating}</div>
        <div>|</div>
        <div>{runtime}</div>
        <div className={styles.rated}>{Rated}</div>
      </div>
      <div className={styles['button-group']}>
        <Link href={`https://www.imdb.com/title/${imdbID}`}>
          <button className={styles.watch}>Start watching</button>
        </Link>
        <button className={favClassName} onClick={() => setFavorite(imdbID)}>
          {isFavoriteMovie ? '★ Remove from favorites' : '★ Add to favorites'}
        </button>
      </div>
      <p>
        <span className={styles['semi-bold']}>Cast:</span> {Actors}{' '}
        <Link href={`https://www.imdb.com/title/${imdbID}/fullcredits`}>
          <u>See entire cast</u>
        </Link>
        <br />
        <span className={styles['semi-bold']}>Genre:</span> {Genre}
      </p>
    </div>
  );
}
