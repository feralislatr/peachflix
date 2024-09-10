'use client';
import { MovieDetail } from '@/types/MovieData';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type MovieDetailsProps = {
  movie: MovieDetail;
};

/** Render inner Movie Card content */
const renderCardContent = ({
  Title,
  Plot,
  Runtime,
  Rated,
  imdbRating,
  imdbID,
  Actors,
  Genre,
}: MovieDetail) => {
  const totalMinutes = Number(Runtime.split(' ')[0]);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = hours > 0 ? (totalMinutes - hours * 60) % 60 : totalMinutes % 60;
  const runtime = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  const rating = Number.isInteger(Number(imdbRating))
    ? `${Number(imdbRating) * 10}  %`
    : 'No Rating';

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
        <button className={styles.favorite}>★ Add to favorites</button>
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
};

/** Render Movie Details Modal for parallel route */
export default function MovieDetails({ movie }: MovieDetailsProps) {
  const { Poster } = movie;
  const router = useRouter();

  /** Return to previous page onkeypress Esc */
  const handleBack = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    e.currentTarget.close();
    router.back();
  };

  /** Return to previous page when backdrop is clicked */
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == document.querySelector('#backdrop')) {
      document.querySelector('dialog')?.close();
      router.back();
    }
  };

  return (
    <div id="backdrop" className={styles.backdrop} onClick={e => handleBackdropClick(e)}>
      <dialog open className={styles.dialog} onKeyDown={e => e.key === 'Escape' && handleBack(e)}>
        <div className={styles['movie-details']}>
          <div className={styles['movie-card']} style={{ backgroundImage: `url(${Poster})` }}>
            {renderCardContent(movie)}
          </div>
        </div>
      </dialog>
    </div>
  );
}
